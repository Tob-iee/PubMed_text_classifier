// script.js
import { classifyAbstract, convertHTML } from './classify.js'; // Import the classifyAbstract function

document.addEventListener("DOMContentLoaded", () => {
    const abstractInput = document.getElementById("abstract-input");
    const classifyButton = document.getElementById("classify-button");
    const resultSection = document.getElementById("result-section");
    const classificationResult = document.getElementById("classification-result");

    classifyButton.addEventListener("click", () => {
        const abstract = abstractInput.value;

        // Classify the Inputs 
        const classification = classifyAbstract(abstract).then(
            classification => {
                console.log(classification)
                // Color code the classification
                let coloredHTML = convertHTML(classification);

                // Append it to the final output
                classificationResult.innerHTML = coloredHTML;

                // Show the final output
                resultSection.style.display = "block";
            }
        );

        
        
    });
});

