<script>
    export let imageUrl = "";
    export let alt = "Generated story image";
</script>


<main>
    <div class="image-container">
        {#if imageUrl}
            <img src={imageUrl} alt={alt} loading="lazy" />
        {:else}
            <p>Loading image...</p>
        {/if}
    </div>
</main>


<style>
    img {
        width: 100%; 
        height: auto; 
    }

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
