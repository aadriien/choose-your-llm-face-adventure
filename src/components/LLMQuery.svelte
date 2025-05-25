<script context="module">
    export const systemMessage = `
        You are a master storyteller who likes to keep your audience engaged.
        You are also narrating a Choose-Your-Adventure style game.
        This means you build a story around your audience's choices.
        You provide them with options at each turn, and adjust from there.
    `;
    
    export async function fetchTextLLM(userPrompt) {
        const TEXT_PARAMS = {
            "model": "mistral",
            "seed": Math.floor(Math.random() * 100000),
            "private": "true",
        };
        
        const payload = {
            ...TEXT_PARAMS,
            messages: [
                { role: "system", content: systemMessage },
                { role: "user", content: userPrompt },
            ]
        };
        
        const URL_BASE = "https://text.pollinations.ai/openai";
        
        try {
            const response = await fetch(URL_BASE, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`LLM error ${response.status}: ${errorText}`);
            }
            
            const result = await response.json();
            return result.choices[0].message.content;
        } catch (error) {
            console.error("Text fetch error:", error);
            return ""; // Return empty string on error
        }
    }
    
    export async function fetchImageLLM(prompt, params = {}) {
        const IMAGE_PARAMS = {
            width: 512,
            height: 384,
            private: "true",
            nologo: "true",
            safe: "true"
        };
        const urlBase = "https://image.pollinations.ai/prompt";
        
        const queryParams = new URLSearchParams({ ...IMAGE_PARAMS, ...params });
        const encodedPrompt = encodeURIComponent(prompt);
        
        const url = `${urlBase}/${encodedPrompt}?${queryParams.toString()}`;
        console.log("Fetching image from:", url);
        
        try {
            const response = await fetch(url);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error ${response.status}: ${errorText}`);
            }

            const imageBlob = await response.blob();
            return URL.createObjectURL(imageBlob);

        } catch (error) {
            console.error("Image fetch error:", error);
            return ""; // Return empty string on error
        }
    }
</script>

<script>
    export let prompt;
        
    let result = "";
    let imageUrl = "";
    let imageError = "";
    
    // Whenever prompt changes, fetch story, then corresponding image
    // $: if (prompt) {
    //     (async () => {
    //         try {
    //             result = await fetchTextLLM(prompt);
    //             imageUrl = await fetchImageLLM(result);
    //             imageError = "";
    //         } catch (err) {
    //             console.error(err);
    //             imageError = err.message || "Error fetching data";
    //             result = "";
    //             imageUrl = "";
    //         }
    //     })();
    // }
</script>


<main>
    <div>
        <h3>Prompt:</h3>
        <p>{systemMessage} {prompt}</p>
        
        <h3>Resulting Story:</h3>
        <p>{result}</p>
    </div>
    
    <!-- <h3>Generated Image:</h3>
    {#if imageUrl}
        <img src={imageUrl} alt="Generated" loading="lazy" style="max-width: 100%;" />
    {:else if imageError}
        <p>{imageError}</p>
    {:else}
        <p>Loading image...</p>
    {/if} -->
</main>

