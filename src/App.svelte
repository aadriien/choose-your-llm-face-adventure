<script>
    import AdventurePaths from "./components/AdventurePaths.svelte";
    import VibeCuration from "./components/VibeCuration.svelte";

    let storyConfig = null;

    function handleStart(event) {
        // Store chosen configs & trigger story start
        storyConfig = event.detail;
    }

</script>


<main>
    {#if storyConfig === null}
        <VibeCuration on:start={handleStart} />
    {:else}
        <AdventurePaths {storyConfig} />
    {/if}

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


