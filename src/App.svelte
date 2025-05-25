<script>
    import FaceDetection from "./components/FaceDetection.svelte";
    import AdventurePaths from "./components/AdventurePaths.svelte";
    import LLMQuery from "./components/LLMQuery.svelte";

    let detections = {};
    let userPrompt = "Start the choose your adventure story! But keep it brief. Don't provide options yet; just set the scene. Only return the story in your message.";

</script>


<main>
    <h1>Choose Your [LLM] Adventure.. Using Your Face!</h1>
    <p>The LLM will write the story. Then it's your job to react! </p>

    <!-- <LLMQuery prompt={userPrompt} /> -->
    <AdventurePaths />
    <br>
    <!-- <FaceDetection bind:detections /> -->

</main>


<style>
    main {
        text-align: center;
        font-family: system-ui, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

</style>


