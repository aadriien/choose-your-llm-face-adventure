<script>
    import { onMount } from "svelte";
    import FaceDetection from "./FaceDetection.svelte";
    import LLMQuery, { fetchTextLLM, fetchImageLLM } from "./LLMQuery.svelte"; 
    import ImageDisplay from "./ImageDisplay.svelte";

    export let storyConfig;
    
    let userPrompt = `
        Start the choose your adventure story! 
        But keep it BRIEF (only 1-2 sentences). 
        Don't provide options yet; just set the scene. 
        Only return the story in your message.
    `;

    let settingsPrompt = `
        Here are the settings we're using for this story:
        —> genre: ${storyConfig.genre} ..
        —> setting: ${storyConfig.setting} ..
        —> tone: ${storyConfig.tone} ..
        —> silliness (scale 1-100, where 100 is VERY silly): 
            ${storyConfig.sliders.silliness} ..
        —> creativity (scale 1-100, where 100 is VERY unique): 
            ${storyConfig.sliders.creativity} ..
        Use these to guide the vibe of the story! 
    `;

    let imageRealismPrompt = `
        When generating images, our image realism scale is as follows:
        1-100, where 1 is cartoon-style images, and 100 is more realistic.
        So if the number is below 50, create a CARTOON image, NOT a real one.

        Use this setting (and scale) to create a fun, unique image accordingly:
        —> image realism: ${storyConfig.sliders.image_realism}
    `;
    
    let story = "";
    let imageUrl = "";

    let conversationHistory = "";

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
            story = await fetchTextLLM(userPrompt + "\n" + settingsPrompt);
            imageUrl = await fetchImageLLM(
                story + "\n" + settingsPrompt + "\n" + imageRealismPrompt
            );

            // Always maintain story context for LLM
            conversationHistory += story + "\n\n";

            firstRun = false;
            return;
        }

        const emotionSummary = await expressionHistory.collectExpressions(5000);
        const formattedEmotions = getLLMPrompt(emotionSummary);

        userPrompt = `
            ${conversationHistory}
            The user reacted to the previous scene with these expressions:
            \n${formattedEmotions}\n
            ${instructions}
        `;

        story = await fetchTextLLM(userPrompt + "\n" + settingsPrompt);
        imageUrl = await fetchImageLLM(
            story + "\n" + settingsPrompt + "\n" + imageRealismPrompt
        );

        conversationHistory += story + "\n\n";
    }

    // When story changes (new text loaded), reset emotion history
    $: if (story) {
        expressionHistory?.startContinuousExpressionTracking();
    }

    onMount(() => {
        startNextStoryStep(); 

        // Every 10 seconds, continue story
        setInterval(() => {
            startNextStoryStep();
        }, 10000);
    });

</script>


<main>
    <div class="LLM-story-results">
        <div class="story-text">
            <h2>Story Result:</h2>
            <p>{story}</p>
        <!-- </div>

        <div class="story-prompt"> -->
            <h3>Story Prompt:</h3>
            <p>{userPrompt}</p>
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
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 2rem;
        margin-right: 2rem;
    }

    .LLM-story-results {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        height: auto;
        gap: 1rem;
        position: absolute;
        left: 0;
        margin-left: 1rem;
    }

    .story-prompt,
    .story-text {
        border: 2px solid #666;
        border-radius: 8px;
        object-fit: contain;
        text-align: center;
        width: 300px;
        height: 400px;
        overflow-y: scroll;
    }

    .story-image {
        width: 100vh;
    }

</style>

