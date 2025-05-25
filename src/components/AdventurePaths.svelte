<script>
    import { onMount } from "svelte";
    import FaceDetection from "./FaceDetection.svelte";
    import LLMQuery from "./LLMQuery.svelte";
    import { fetchTextLLM } from "./LLMQuery.svelte"; 
    
    let userPrompt = "Start the choose your adventure story! But keep it brief. Don't provide options yet; just set the scene. Only return the story in your message.";
    let story = "";
    let detections = {};
    
    onMount(async () => {
        story = await fetchTextLLM(userPrompt);
    });
    
    $: if (story && detections) {
        // logic to decide if next prompt should be sent
        // e.g. if user shows "fear", then continue story
    }
</script>

<main>
    <LLMQuery prompt={userPrompt} />

    <!-- <h2>Story Result:</h2>
    <p>{story}</p> -->
    
    <FaceDetection bind:detections />
</main>


