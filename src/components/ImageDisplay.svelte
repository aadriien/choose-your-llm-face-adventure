<script>
    export let imageUrl = "";
    export let alt = "Generated story image";
</script>


<main>
    <div class="image-container">
        {#if imageUrl}
            <img src={imageUrl} alt={alt} loading="lazy" style="max-width: 100%; height: auto; border-radius: 8px;" />
        {:else}
            <p>Loading image...</p>
        {/if}
    </div>
</main>


<style>
    .image-container {
        width: 100%;
        aspect-ratio: 4 / 3;
        border: 2px solid #666;
        border-radius: 8px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
