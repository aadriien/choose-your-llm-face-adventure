<script>
    import { onMount } from "svelte";
    import FaceDetection from "./FaceDetection.svelte";
    import LLMQuery, { fetchTextLLM, fetchImageLLM } from "./LLMQuery.svelte"; 
    import ImageDisplay from "./ImageDisplay.svelte";
    
    let userPrompt = `
        Start the choose your adventure story! 
        But keep it BRIEF (only 1-2 sentences). 
        Don't provide options yet; just set the scene. 
        Only return the story in your message.
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
        if (firstRun) {
            // Initial story setup, no emotion yet
            story = await fetchTextLLM(userPrompt);
            imageUrl = await fetchImageLLM(story);

            conversationHistory += story + "\n";

            firstRun = false;
            return;
        }

        const emotionSummary = await expressionHistory.collectExpressions(5000);
        const formatted = getLLMPrompt(emotionSummary);

        conversationHistory += `
            The user reacted to the previous scene with these expressions:
            \n${formatted}\n
            What happens next? Keep it BRIEF (only 1-2 sentences).
            Do not provide options. Do not mention the user. 
            Just continue the story. Keep it short and interesting.
        `;

        // Always maintain story context
        userPrompt = conversationHistory;

        story = await fetchTextLLM(userPrompt);
        imageUrl = await fetchImageLLM(story);

        conversationHistory += story + "\n";
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
    <!-- <LLMQuery prompt={userPrompt} /> -->

    <h3>Story Prompt:</h3>
    <p>{userPrompt}</p>

    <h2>Story Result:</h2>
    <p>{story}</p>
    
    <div class="face-row">
        <ImageDisplay {imageUrl} />
        <FaceDetection bind:detections bind:this={expressionHistory} />
    </div>
</main>


<style>
    .face-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        height: auto;
        gap: 1rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
</style>

