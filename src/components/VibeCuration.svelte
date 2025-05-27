<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let genre;
    let setting;
    let tone;

    let silliness;
    let creativity;
    let image_realism;

    const genres = [
        "Action", "Adventure", "Drama",
        "Fable", "Fantasy", "Magical Realism", 
        "Mystery", "Sci-fi", "Suspense", 
        "Comedy", "Rom-com",  "Slice of Life",
    ];
    const settings = [
        "Futuristic Space Station", "Inside a Video Game",
        "Deep Ocean", "Tropical Wildnerness", 
        "Hidden Civilization", "Unexplored Castle",
        "Abandoned Gem Mine", "Old Haunted Manor", 
        "Magical School", "Talking Animal Village",
        "Miniature Universe", "Mythical Zoo",
        "Awkward Road Trip", "Dream Vacation", 
        "Dinosaurs on Earth", "Life Across Dimensions",
        "Superhero Dystopia", "Everything is a Cartoon",
        "Frogs in Swamps", "Secret Mushroom Society",
        "Alien Suburbia", "Monster Building Factory",
    ];
    const tones = [
        "Cheerful", "Comedic",
        "Whimsical", "Lighthearted", 
        "Cozy", "Fun",
        "Eccentric", "Wacky",
        "Dark", "Uneasy"
    ];


    function startStory() {
        const storyConfig = {
            genre,
            setting,
            tone,
            sliders: {
                silliness,
                creativity,
                image_realism,
            }
        };
        // Notify parent (main app) when choices selected & ready
        dispatch("start", storyConfig);
        console.log("Starting story with: ", storyConfig);
    }


</script>


<main>
    <h1>✨ Choose Your Story Vibe</h1>

    <section class="input-group">
        <label>Genre</label>
        <select bind:value={genre}>
            {#each genres as g}
                <option>{g}</option>
            {/each}
        </select>
    </section>

    <section class="input-group">
        <label>Setting</label>
        <select bind:value={setting}>
            {#each settings as s}
                <option>{s}</option>
            {/each}
        </select>
    </section>

    <section class="input-group">
        <label>Tone</label>
        <select bind:value={tone}>
            {#each tones as t}
                <option>{t}</option>
            {/each}
        </select>
    </section>

    <section class="input-group">
        <label>Silliness: {silliness}</label>
        <input type="range" min="0" max="100" bind:value={silliness} />
    </section>
    
    <section class="input-group">
        <label>Creativity: {creativity}</label>
        <input type="range" min="0" max="100" bind:value={creativity} />
    </section>
    
    <section class="input-group">
        <label>Image Realism: {image_realism}</label>
        <input type="range" min="0" max="100" bind:value={image_realism} />
    </section>
    
    <button on:click={startStory}>🚀 Start My Adventure</button>

</main>


<style>
    main {
        max-width: 600px;
        margin: 2rem auto;
        padding: 1rem;
        font-family: sans-serif;
        background: #fdfdfd;
        border: 1px solid #ccc;
        border-radius: 8px;
    }

    h1 {
        text-align: center;
        margin-bottom: 2rem;
    }

    .input-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.25rem;
    }

    select, input[type="range"] {
        width: 100%;
        padding: 0.4rem;
        margin-top: 0.2rem;
    }

    button {
        display: block;
        margin: 2rem auto 0;
        padding: 0.75rem 1.5rem;
        font-size: 1.1rem;
        background-color: #4c7ef3;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }

    button:hover {
        background-color: #365edc;
    }

</style>



