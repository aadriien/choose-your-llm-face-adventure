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
        max-height: 100%;
        object-fit: cover;
    }

    .image-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
</style>

