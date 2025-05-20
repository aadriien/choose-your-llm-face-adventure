<script>
    import { onMount } from 'svelte';

    let videoElement;

    onMount(async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
        await videoElement.play();
    } catch (err) {
        alert('Could not access webcam: ' + err.message);
    }
    });

    let currentMonster = "/monster-test.png";
</script>

<main>
    <h1>👹 Monster Scare School 😈</h1>
    <p>Try to mimic this monster's face!</p>
    <img src={currentMonster} alt="Monster Face" width="300" />

    <h2>Your webcam</h2>
    <video bind:this={videoElement} autoplay playsinline width="300" />
</main>

<style>
    main {
        text-align: center;
        margin-top: 3rem;
        font-family: system-ui, sans-serif;
    }
    video {
        margin-top: 1rem;
        border: 2px solid #666;
        border-radius: 8px;
    }
</style>
