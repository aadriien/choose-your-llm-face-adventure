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
        "Cheese and Bread Land", "Cloud City",
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
    <h1>Curate Your Story</h1>

    <fieldset class="equalizer">
        <legend>Story Scene</legend>

        <section class="input-group">
            <label>Genre</label>
            <input
                type="text"
                placeholder="e.g. Sci-fi"
                bind:value={genre}
                list="genres-options"
                name="genre"
            />
            <datalist id="genres-options">
            {#each genres as g}
                <option value={g} />
            {/each}
            </datalist>
        </section>
        
        <section class="input-group">
            <label>Setting</label>
            <input
                type="text"
                placeholder="e.g. Hidden Civilization"
                bind:value={setting}
                list="settings-options"
                name="setting"
            />
            <datalist id="settings-options">
            {#each settings as s}
                <option value={s} />
            {/each}
            </datalist>
        </section>
    
        <section class="input-group">
            <label>Tone</label>
            <input
                type="text"
                placeholder="e.g. Whimsical"
                bind:value={tone}
                list="tones-options"
                name="tone"
            />
            <datalist id="tones-options">
            {#each tones as t}
                <option value={t} />
            {/each}
            </datalist>
        </section>
    </fieldset>
    
    <fieldset class="equalizer">
        <legend>Vibe Check</legend>

        <div class="slider-group">
            <label 
                orient="horizontal" 
                data-before="grounded fit" 
                data-after="weird fun"
            >Silliness</label>
            <input type="range" min="0" max="100" bind:value={silliness}/>
        </div>
        
        <div class="slider-group">
            <label 
                orient="horizontal" 
                data-before="classic feel" 
                data-after="very unique"
            >Creativity</label>
            <input type="range" min="0" max="100" bind:value={creativity} />
        </div>
        
        <div class="slider-group">
            <label 
                orient="horizontal" 
                data-before="cartoon style" 
                data-after="natural look"
            >Image Realism</label>
            <input type="range" min="0" max="100" bind:value={image_realism} />
        </div>
    </fieldset>
    
    
    <button on:click={startStory}>🚀 Start My Adventure!</button>
    
</main>


<style>
    @import url("https://fonts.googleapis.com/css?family=Lobster");
    
    
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
        display: flex;          
        align-items: center;   
        margin-bottom: 1rem;  
        gap: 0.5rem;           
        font-size: 1.7rem;
        line-height: 1.8;
        width: 100%;
    }

    .input-group label {
        flex-shrink: 0;        
        width: 4em;    
        color: #382193;
        text-shadow: 
            -0.06em 0.03em 0 #ACE;
    }

    input[list] {
        flex-grow: 1;     
        padding: 0.25em 0.5em;
        border: 2px solid #ACE;
        border-radius: 0.5rem;
        font-size: 1.2rem;
        line-height: 1.8;
        height: 1.8em;
        vertical-align: middle;
        box-sizing: border-box; 
    }

    input[list]:focus {
        border-color: #382193;
        outline: none;
    }
    
    label {
        display: block;
        font-weight: bold;
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
    
    
    
    /* 
        Styles used exclusively to handle sliding scales...
        Inspired by `https://codepen.io/long-lazuli/pen/JoLroV`
    */
    :root {
        --base-size: 2.5em; /* Adjust to scale size of whole equalizer */
        --slider-width: calc(var(--base-size) * 9.9);
        --slider-height: var(--base-size);
        --border-width: calc(var(--base-size) * 0.2);
        --border-radius: calc(var(--base-size) * 0.25);
        --thumb-size: calc(var(--base-size) * 0.9);
        --thumb-margin: calc(var(--base-size) * 0.05);
        --thumb-border-radius: calc(var(--base-size) * 0.1);
        --box-shadow-offset-unit: var(--base-size);
        --background-color: #181818;
        --border-color: #242424;
        --thumb-color: #6FC5F0;
        --shadow-colors: 
            #313131, #2F343F, #283F6B, 
            #214893, #1A52BC, #2769D3, 
            #3E87DC, #55A5E6, #6FC5F0;
    }
    html { font-size: 1em; }
    body {
        color: #BBB;
        background-color: #444;
        text-align: center;
    }
    fieldset {
        border: var(--border-color) solid var(--border-width);
        border-radius: calc(var(--base-size) * 0.5);
        display: inline-block;
        text-align: left;
        position: relative;
        transition: border-color 0.25s linear;
    }
    fieldset:hover {
        border-color: #BBB;
    }
    legend {
        font-size: calc(var(--base-size) * 1.8);
        font-family: "Lobster", sans-serif;
        padding-left: calc(var(--base-size) * 0.3);
        padding-right: calc(var(--base-size) * 0.2);
        color: #ACE;
        text-shadow: 
            -0.11em 0.03em 0 #214893,
            -0.22em 0.07em 0 #313131;
    }
    /* Slider itself */
    input[type="range"] {
        display: block;
        margin: 0; padding: 0;
        font-size: inherit;
        width: var(--slider-width);
        height: var(--slider-height);
        border-radius: var(--border-radius);
        border: var(--border-width) solid var(--border-color);
        background-color: var(--border-color);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        overflow: hidden;
        cursor: pointer;
        transition: box-shadow 0.2s linear;
        box-shadow: 0 0 0 0 transparent;
    }
    input[type="range"]:focus {
        box-shadow: 0 0 0 calc(var(--base-size) * 0.1) #AAAAAA;
    }
    input[type="range"]:hover {
        box-shadow: 0 0 0 calc(var(--base-size) * 0.15) var(--thumb-color);
    }
    /* Slider track */
    input[type="range"]::-webkit-slider-runnable-track,
    input[type="range"]::-moz-range-track,
    input[type="range"]::-ms-track {
        border: none;
        background: none;
        height: 100%;
        width: 100%;
    }
    /* Slider thumb */
    input[type="range"]::-webkit-slider-thumb {
        margin: var(--thumb-margin);
        padding: 0;
        height: var(--thumb-size);
        width: var(--thumb-size);
        border-radius: var(--thumb-border-radius);
        box-sizing: border-box;
        border: none;
        background-color: var(--thumb-color);
        box-shadow:
            calc(-10 * var(--box-shadow-offset-unit)) 0 0 0 #313131,
            calc(-9 * var(--box-shadow-offset-unit)) 0 0 0 #313131,
            calc(-8 * var(--box-shadow-offset-unit)) 0 0 0 #2F343F,
            calc(-7 * var(--box-shadow-offset-unit)) 0 0 0 #283F6B,
            calc(-6 * var(--box-shadow-offset-unit)) 0 0 0 #214893,
            calc(-5 * var(--box-shadow-offset-unit)) 0 0 0 #1A52BC,
            calc(-4 * var(--box-shadow-offset-unit)) 0 0 0 #2769D3,
            calc(-3 * var(--box-shadow-offset-unit)) 0 0 0 #3E87DC,
            calc(-2 * var(--box-shadow-offset-unit)) 0 0 0 #55A5E6,
            calc(-1 * var(--box-shadow-offset-unit)) 0 0 0 var(--thumb-color),
            
            calc(1 * var(--box-shadow-offset-unit)) 0 0 0 var(--background-color),
            calc(2 * var(--box-shadow-offset-unit)) 0 0 0 var(--background-color),
            calc(3 * var(--box-shadow-offset-unit)) 0 0 0 var(--background-color),
            calc(4 * var(--box-shadow-offset-unit)) 0 0 0 var(--background-color),
            calc(5 * var(--box-shadow-offset-unit)) 0 0 0 var(--background-color),
            calc(6 * var(--box-shadow-offset-unit)) 0 0 0 var(--background-color),
            calc(7 * var(--box-shadow-offset-unit)) 0 0 0 var(--background-color),
            calc(8 * var(--box-shadow-offset-unit)) 0 0 0 var(--background-color),
            calc(9 * var(--box-shadow-offset-unit)) 0 0 0 var(--background-color);
        cursor: ew-resize;
    }
    input[type="range"]::-moz-range-thumb {
        margin: var(--thumb-margin);
        padding: 0;
        height: var(--thumb-size);
        width: var(--thumb-size);
        border-radius: var(--thumb-border-radius);
        box-sizing: border-box;
        border: none;
        background-color: var(--thumb-color);
        cursor: ew-resize;
    }
    input[type="range"]::-ms-thumb {
        margin: var(--thumb-margin);
        padding: 0;
        height: var(--thumb-size);
        width: var(--thumb-size);
        border-radius: var(--thumb-border-radius);
        box-sizing: border-box;
        border: none;
        background-color: var(--thumb-color);
        cursor: ew-resize;
    }
    /* Webkit appearance reset */
    input[type="range"],
    input[type="range"]::-webkit-slider-runnable-track,
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
    }
    /* IE fixes */
    input[type="range"]::-ms-track {
        color: transparent;
    }
    input[type="range"]::-ms-fill-lower, 
    input[type="range"]::-ms-fill-upper, 
    input[type="range"]::-ms-tooltip {
        display: none;
    }
    /* Slider metrics */
    .slider-group {
        position: relative;
        width: 100%;
        margin-bottom: calc(var(--base-size) * 0.7);
    }
    .slider-group label {
        display: block;
        font-family: Arial, Helvetica, sans-serif;
        font-size: calc(var(--base-size) * 0.7);
        margin-left: calc(var(--base-size) * 0.1);
        user-select: none;
        text-align: left;
        color: #382193;
        text-shadow: 
            -0.06em 0.03em 0 #ACE;
    }
    /* Position before/after text below slider */
    .slider-group > label::before,
    .slider-group > label::after {
        position: absolute;
        bottom: -1.7em;
        font-size: 0.5em;
        font-style: italic;
        color: #666;
        text-shadow: none;
        user-select: none;
        pointer-events: none;
    }
    /* Left side label */
    .slider-group > label::before {
        content: attr(data-before);
        left: 0.5em;
    }
    /* Right side label */
    .slider-group > label::after {
        content: attr(data-after);
        right: 0.5em;
    }

</style>



