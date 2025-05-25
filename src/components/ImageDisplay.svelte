<script>
    export let imageUrl = "";
    export let alt = "Generated story image";
</script>


<main>
    <div class="video-container">
        {#if imageUrl}
            <img src={imageUrl} alt={alt} loading="lazy" style="max-width: 100%; height: auto; border-radius: 8px;" />
        {:else}
            <p>Loading image...</p>
        {/if}
    </div>
</main>


<style>
    .video-container {
        width: 450px;
        min-height: 8rem;
        aspect-ratio: 4 / 3;
        border: 2px solid #666;
        border-radius: 8px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
