<script>
    import { onMount, afterUpdate } from "svelte";
    import FaceDetection from "./FaceDetection.svelte";
    import LLMQuery, { fetchTextLLM, fetchImageLLM } from "./LLMQuery.svelte"; 
    import ImageDisplay from "./ImageDisplay.svelte";

    export let storyConfig;
    
    let userPrompt = `
        Start the choose your adventure story! 
        But keep it BRIEF (only 1 sentence). 
        Don't provide options yet; just set the scene. 
        Only return the story in your message.
    `;

    let settingsPrompt = `
        The story must match this creative configuration:
        - Genre: ${storyConfig.genre}
        - Setting: ${storyConfig.setting}
        - Tone: ${storyConfig.tone}
        - Silliness level: ${storyConfig.sliders.silliness}/100
        - Creativity level: ${storyConfig.sliders.creativity}/100 
            → match this with unpredictable and highly inventive ideas.
    `;

    if (storyConfig.sliders.creativity > 60) {
        settingsPrompt += `
            Use unusual metaphors, surreal events, and imaginative world-building.
            Break genre norms if it adds surprise.
        `;
    }

    let imageRealismPrompt = `
        Based on the story, generate an image that matches this style:
        - Style: 
            ${
                storyConfig.sliders.image_realism < 70 
                ? 
                "cartoon or animated illustration" 
                : 
                "realistic or photo-style"
            }
        - Do NOT generate photo-realistic output if style is cartoon.
        - Be visually imaginative, especially if cartoon-style is selected.
        - Do NOT generate anything creepy or scary.
    `;

    let lengthReminder = `
        ONLY RETURN ONE SINGLE, BRIEF SENTENCE. NO MORE.
        If your response includes more than one sentence, the story will be rejected. 
    `;

    let storyBox;
    let storyChunks = [];

    let fullStory = "";
    let typedStory = "";

    let typingInterval;
    const typingSpeed = 80;

    let imageUrl = "";

    let conversationHistory = "";
    let showHistory = false;

    let detections = {};
    let expressionHistory;

    let firstRun = true;

    function getLLMPrompt(averages) {
        const sorted = Object.entries(averages || {}).sort((a, b) => b[1] - a[1]);
        const top = sorted.slice(0, 3);

        return top.map(([emotion, value]) =>
            `- ${emotion}: ${(value * 100).toFixed(1)}%`
        ).join('\n');
    }

    async function startNextStoryStep() {
        const instructions = `
            What happens next? Keep it BRIEF (only 1-2 sentences).
            Do not provide options. Do not mention the user. 
            Just continue the story. Keep it short and interesting.
        `;

        if (firstRun) {
            // Initial story setup, no emotion yet
            fullStory = await fetchTextLLM(
                userPrompt + "\n" + settingsPrompt + "\n" + lengthReminder
            );
            imageUrl = await fetchImageLLM(
                fullStory + "\n" + settingsPrompt + "\n" + 
                imageRealismPrompt + "\n" + lengthReminder
            );

            // Always maintain story context for LLM
            conversationHistory += fullStory + "\n\n";

            firstRun = false;
            startTyping(fullStory);
            return;
        }

        const emotionSummary = await expressionHistory.collectExpressions(5000);
        const formattedEmotions = getLLMPrompt(emotionSummary);

        userPrompt = `
            ${conversationHistory}
            The user reacted to the previous scene with these expressions:
            \n${formattedEmotions}\n
            Use these emotions to shape how the story continues. 
            Reflect user's feelings by adapting tone, mood, and events accordingly. 
            Make the story respond emotionally to the user's expressions.
            ${instructions}
        `;

        fullStory = await fetchTextLLM(
            userPrompt + "\n" + settingsPrompt + "\n" + lengthReminder
        );
        imageUrl = await fetchImageLLM(
            fullStory + "\n" + settingsPrompt + "\n" + 
            imageRealismPrompt + "\n" + lengthReminder
        );

        conversationHistory += fullStory + "\n\n";
        startTyping(fullStory);
    }

    function startTyping(text) {
        typedStory = "";
        clearInterval(typingInterval);

        let index = 0;
        // Start collecting expressions WHILE typing
        expressionHistory?.startContinuousExpressionTracking(); 

        typingInterval = setInterval(() => {
            typedStory += text.charAt(index);
            index++;

            if (index >= text.length) {
                clearInterval(typingInterval);

                // Wait 5 seconds AFTER typing finishes to launch next steps
                setTimeout(async () => {
                    storyChunks = [...storyChunks, { text: typedStory, image: imageUrl }];
                    await expressionHistory?.startContinuousExpressionTracking();
                    await startNextStoryStep();
                }, 5000);
            }
        }, typingSpeed);
    }

    onMount(() => {
        startNextStoryStep(); 
    });

    // Scroll to bottom every time story updates
    afterUpdate(() => {
        if (storyBox) {
            storyBox.scrollTop = storyBox.scrollHeight;
        }
    });
</script>


<main>
    <div class="LLM-story-results">
        <div class="story-text">
            <!-- Latest story chunk -->
            <div class="story-latest">
                {#if firstRun}
                    <h2>A story begins..</h2>
                {:else}
                    <h2>And then..</h2>
                {/if}
                <p>{typedStory}</p>
            </div>

            <div class="story-history-toggle" on:click={() => showHistory = !showHistory}>
                <strong>{showHistory ? "Hide Story Log" : "Show Story Log"}</strong>
            
                {#if showHistory}
                    <div class="story-history-content" bind:this={storyBox}>
                        {#if storyChunks.length === 0}
                            <p><em>No story yet. Start the adventure!</em></p>
                        {:else}
                            <!-- Display all story chunks AND images -->
                            {#each storyChunks as chunk, index}
                                <div class="story-log-entry">
                                    <p><strong>Part {index + 1}:</strong> {chunk.text}</p>
                                    {#if chunk.image}
                                        <img src={chunk.image} alt={`Scene image ${index + 1}`} class="story-log-image" />
                                    {/if}
                                </div>
                            {/each}
                        {/if}
                    </div>
                {/if}
            </div>
        </div>  

        <div class="story-image">
            <ImageDisplay {imageUrl} />
        </div>
    </div>

    <div class="face-row">
        <FaceDetection bind:detections bind:this={expressionHistory} />
    </div>
</main>


<style>
    .face-row {
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 2rem;
        margin-right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        z-index: 1000;
    }

    .LLM-story-results {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: auto;
        gap: 1rem;
        position: absolute;
        top: 0; 
        left: 0;
        margin-top: 2rem;
        box-sizing: border-box;
        padding: 0 1rem;
    }

    .story-text {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        width: 300px;
        gap: 1rem;
        margin-bottom: 2rem;
        box-sizing: border-box;
    }

    .story-image {
        position: relative;
        flex-grow: 1;
        min-width: 600px;
        height: 650px;
        border: 2px solid #666;
        border-radius: 8px;
        overflow: hidden; 
    }

    .story-latest,
    .story-history {
        font-family: "Courier New", Courier, monospace;
        max-width: 300px;
        height: 400px;
        padding: 1.5rem;
        object-fit: contain;
        overflow-y: auto;
    }

    .story-latest h2 {
        font-size: 1.4rem;
        margin: 0;
    }

    .story-latest {
        font-size: 1.2rem;
        text-align: center;
        background-color: #fffbe6;
        border: 2px solid #aaa;
        border-radius: 8px;
    }

    .story-history {
        font-size: 1rem;
        background-color: #f0f0f0;
        border: 1px solid #888;
        border-radius: 8px;
    }

    .story-history-toggle {
        font-family: "Courier New", Courier, monospace;
        max-width: 300px;
        max-height: 150px;
        overflow-y: auto;
        padding: 1rem;
        background-color: #f5f5f5;
        border: 2px solid #888;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .story-history-toggle:hover {
        background-color: #eaeaea;
    }

    .story-history-content {
        font-size: 0.9rem;
        margin-top: 1rem;
    }

    .story-log-entry {
        margin-bottom: 1rem;
    }

    .story-log-image {
        width: 100%;
        max-width: 280px;
        border-radius: 6px;
        border: 1px solid #ccc;
    }

</style>

