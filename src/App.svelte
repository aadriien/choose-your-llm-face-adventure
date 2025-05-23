<script>
    import FaceDetection from "./components/FaceDetection.svelte";

    let detections = {};

</script>


<main>
    <h1>Choose Your [LLM] Adventure.. Using Your Face!</h1>
    <p>The LLM will write the story. Then it's your job to react! </p>

    <FaceDetection bind:detections />

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


