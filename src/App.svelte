<script>
    import { onMount } from "svelte";
    import * as faceapi from "face-api.js";

    let videoElement;
    let overlayCanvas;

    let detections = null;
    let scareSuccess = false;

    let monsterImage = null;
    let monsterExpressions = null;

    async function loadModels() {
        const MODEL_URL = "/models";

        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    }

    async function startVideo() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoElement.srcObject = stream;
            await videoElement.play();
        } catch (err) {
            alert("Could not access webcam: " + err.message);
        }
    }


    async function detectMonsterExpressions() {
        if (!currentMonster) return;

        // Create a fresh image element
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = currentMonster;

        // Wait for it to load
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });

        console.log("Monster image loaded for expression detection");

        const options = new faceapi.TinyFaceDetectorOptions();
        const detection = await faceapi
            .detectSingleFace(img, options)
            .withFaceExpressions();

        if (detection) {
            monsterExpressions = detection.expressions;
            console.log("Monster expressions loaded:", monsterExpressions);
        } else {
            console.warn("No face detected in monster image");
        }
    }


    function cosineSimilarity(a, b) {
        const keys = Object.keys(a);
        const dot = keys.reduce((sum, k) => sum + a[k] * b[k], 0);
        const magA = Math.sqrt(keys.reduce((sum, k) => sum + a[k] * a[k], 0));
        const magB = Math.sqrt(keys.reduce((sum, k) => sum + b[k] * b[k], 0));
        return dot / (magA * magB);
    }

    async function checkMimickedFace() {
        if (!videoElement) return;

        const options = new faceapi.TinyFaceDetectorOptions();
        const result = await faceapi.detectSingleFace(videoElement, options).withFaceExpressions();

        detections = result?.expressions || null;

        if (detections && monsterExpressions) {
            const userExpr = detections.expressions;
            const similarity = cosineSimilarity(userExpr, monsterExpressions);
            scareSuccess = similarity > 0.9;
            // console.log("Expression similarity:", similarity);
        }
    }


    async function drawLandmarks() {
        if (!videoElement || !overlayCanvas) return;

        const displaySize = {
            width: videoElement.videoWidth,
            height: videoElement.videoHeight
        };

        // Match canvas size to video size
        faceapi.matchDimensions(overlayCanvas, displaySize);

        const options = new faceapi.TinyFaceDetectorOptions();
        const detectionsWithLandmarks = await faceapi
            .detectAllFaces(videoElement, options)
            .withFaceLandmarks();

        const resizedResults = faceapi.resizeResults(detectionsWithLandmarks, displaySize);

        const context = overlayCanvas.getContext("2d");
        context.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

        faceapi.draw.drawDetections(overlayCanvas, resizedResults);
        faceapi.draw.drawFaceLandmarks(overlayCanvas, resizedResults);
    }

    onMount(async () => {
        await loadModels();
        await startVideo();
        await detectMonsterExpressions();

        videoElement.addEventListener("play", () => {
            overlayCanvas.width = videoElement.videoWidth;
            overlayCanvas.height = videoElement.videoHeight;
        });

        setInterval(() => {
            drawLandmarks(); 
            checkMimickedFace();
        }, 100);
    });

    // let currentMonster = "/monster-test.png";
    let currentMonster = "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg";
</script>

<main>
    <h1>👹 Monster Scare School 😈</h1>
    <p>Try to mimic this monster's face!</p>

    <div class="scare-row">
        <img bind:this={monsterImage} src={currentMonster} alt="Monster Face" />

        <div class="video-container">
            <!-- svelte-ignore a11y-media-has-caption -->
            <video bind:this={videoElement} autoplay playsinline></video>
            <canvas bind:this={overlayCanvas}></canvas>
        </div>
    
        <div class="expression-box">
            <h2>Detected expressions:</h2>
                {#if detections}
                    <ul>
                        {#each Object.entries(detections) as [expression, score]}
                        <li>{expression}: {score.toFixed(2)}</li>
                        {/each}
                    </ul>
                {/if}
        </div>
    </div>

    <h2 class:visible={scareSuccess} class:hidden={!scareSuccess}>
        🎉 You nailed the scare! 👻
    </h2>
    
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
    .scare-row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        width: 90%;
        max-width: 90%;
        padding: 0 2rem;
        box-sizing: border-box;
    }

    .scare-row > * {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img,
    .video-container,
    .expression-box {
        width: 430px;
        height: auto;
        min-height: 8rem;
        border: 2px solid #666;
        border-radius: 8px;
        object-fit: contain;
        text-align: center;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    h2.hidden {
        visibility: hidden;
        height: 1.5em;
        margin: 0;
    }
    h2.visible {
        color: green;
    }

    .video-container {
        position: relative;
    }

    .video-container video,
    .video-container canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

</style>


