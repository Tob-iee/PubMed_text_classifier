// classify.js

function convertHTML(outputs) {
    print(outputs)
    // Your classification logic here
    let outputstring = ""

    for (const out of outputs) {
        let cls = out[0].toLowerCase()
        let text = out[1]

        outputstring += `<span class = ${cls}> ${text}</span>`; // Example result
    }

    return outputstring
}

// Replace this with your actual classification logic
function preprocessAbstract(sentences) {
    // Your classification logic here
    console.log(sentences);
    
    let model_inputs = []
    for (const sent in sentences){
        let model_input = []
        if (sent == 0){
            model_input = [sentences[sent], "", "" ]
        }
        else if (sent == 1){
            model_input = [sentences[sent], sentences[sent-1], ""]
        } else {
            model_input = [sentences[sent], sentences[sent-1], sentences[sent-2]]
        }
        console.log(model_input)

        model_inputs[sent] = model_input
    }
    
    return model_inputs
}


// Replace this with your actual classification logic
async function classifyAbstract(abstract) {
    console.log(abstract);

    abstract = abstract.split('. '); // Split by periods to get sentences
    console.log(abstract);

    let preprocessedinputs = preprocessAbstract(abstract)

    console.log(preprocessedinputs);

    try {
        const response = await fetch("/predict", {
            method: "POST",
            body: JSON.stringify({
                abstract: preprocessedinputs
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        if (response.ok) {
            const data = await response.json();
            const predictions = data.predictions; // Assuming predictions is a key in the response
            let output = []
            for (let index = 0; index < abstract.length; index++) {
                output[index] = [predictions[index], abstract[index]];
            }
            
            console.log(output)
            return output
        } else {
            console.error("Error:", response.status, response.statusText);
            return null; // Return null or handle the error as needed
        }
    } catch (error) {
        console.error("Fetch error:", error);
        return null; // Return null or handle the error as needed
    }
}
 
// Export the classifyAbstract function
export { classifyAbstract, convertHTML};
