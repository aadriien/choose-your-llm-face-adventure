<script context="module">
    export let prompt;
    let result;

    const URL_BASE = "https://text.pollinations.ai/openai";

    const systemMessage = `
        You are a master storyteller who likes to keep your audience engaged.
        You are also narrating a Choose-Your-Adventure style game.
        This means you build a story around your audience's choices.
        You provide them with options at each turn, and adjust from there.
    `;

    export async function fetchTextLLM(userPrompt) {
        // Randomized seed for unique storytelling experiences
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

        console.log(payload);

        try {
            const response = await fetch(URL_BASE, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`LLM error ${response.status}: ${errorText}`);
            }

            const result = await response.json(); 
            return result.choices[0].message.content;
        } catch (err) {
            console.error("fetchTextLLM error:", err);
            throw err;
        }
    }

    // When component mounts or prompt changes, fetch text
    $: if (prompt) {
        fetchTextLLM(prompt).then(text => {
            result = text;
        });
    }

</script>


<main>
    <div>
        <h3>Prompt:</h3>
        <p>{systemMessage} {prompt}</p>
        <!-- <h3>Result:</h3>
        <p>{result}</p> -->
    </div>

</main>
    
    