<script>
    import { onMount } from "svelte";
    import * as faceapi from "face-api.js";

    export let detections;

    let expressionHistory = []; // Each entry is { timestamp, expressions } object
    let trackingInterval;

    let videoElement;
    let overlayCanvas;

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

    async function getExpressions() {
        if (!videoElement) return;

        const options = new faceapi.TinyFaceDetectorOptions();
        const result = await faceapi
            .detectSingleFace(videoElement, options)
            .withFaceExpressions();

        detections = result?.expressions || null;

        if (detections) {
            expressionHistory.push({
                timestamp: Date.now(),
                expressions: result.expressions
            });

            // Keep last 5 sec of emotions
            const cutoff = Date.now() - 5000; 
            expressionHistory = expressionHistory.filter(e => e.timestamp >= cutoff);
        }
    }

    function summarizeExpressions(history) {
        const totals = {
            neutral: 0,
            happy: 0,
            sad: 0,
            angry: 0,
            fearful: 0,
            disgusted: 0,
            surprised: 0
        };
        const count = history.length;

        for (const entry of history) {
            for (const [emotion, value] of Object.entries(entry.expressions)) {
                totals[emotion] += value;
            }
        }

        // Average out each expression over time
        const averages = {};
        for (const [emotion, total] of Object.entries(totals)) {
            averages[emotion] = total / count;
        }

        console.log("Emotion summary:", averages);
        return averages;
    }

    export async function collectExpressions(duration = 5000) {
        // Reset expressions to start fresh
        expressionHistory = [];  

        return new Promise((resolve) => {
            const interval = setInterval(() => {
                getExpressions();
            }, 500);

            setTimeout(() => {
                clearInterval(interval);
                const summary = summarizeExpressions(expressionHistory);
                resolve(summary);
            }, duration);
        });
    }

    export function startContinuousExpressionTracking() {
        if (trackingInterval) clearInterval(trackingInterval);

        trackingInterval = setInterval(() => {
            getExpressions();
        }, 500);
    }

    onMount(async () => {
        await loadModels();
        await startVideo();

        videoElement.addEventListener("play", () => {
            overlayCanvas.width = videoElement.videoWidth;
            overlayCanvas.height = videoElement.videoHeight;
        });

        setInterval(() => {
            drawLandmarks(); 
        }, 80);

        startContinuousExpressionTracking();
    });
</script>


<main>
    <div class="face-row">
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
</main>


<style>
    .face-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        height: auto;
        gap: 1rem;
    }

    .video-container,
    .expression-box {
        height: auto;
        min-height: 8rem;
        border: 2px solid #666;
        border-radius: 8px;
        object-fit: contain;
        text-align: center;
    }

    .video-container {
        position: relative;
        width: 450px;
        aspect-ratio: 4 / 3;
    }

    .expression-box {
        width: 300px;
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

    ul {
        list-style: none;
        padding: 0;
    }

</style>


