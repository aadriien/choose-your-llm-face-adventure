<script>
    import { onMount } from "svelte";
    import FaceDetection from "./FaceDetection.svelte";
    import LLMQuery, { fetchTextLLM, fetchImageLLM } from "./LLMQuery.svelte"; 
    import ImageDisplay from "./ImageDisplay.svelte";
    
    let userPrompt = "Start the choose your adventure story! But keep it brief. Don't provide options yet; just set the scene. Only return the story in your message.";
    
    let story = "";
    let imageUrl = "";

    let detections = {};
    
    onMount(async () => {
        story = await fetchTextLLM(userPrompt);
        imageUrl = await fetchImageLLM(story);
    });
    
    $: if (story && detections) {
        // logic to decide if next prompt should be sent
        // e.g. if user shows "fear", then continue story
    }
</script>

<main>
    <!-- <LLMQuery prompt={userPrompt} /> -->

    <h3>Story Prompt:</h3>
    <p>{userPrompt}</p>

    <h2>Story Result:</h2>
    <p>{story}</p>
    
    <div class="face-row">
        <ImageDisplay {imageUrl} />
        <FaceDetection bind:detections />
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

