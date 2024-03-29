const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

const OPENAI_API_KEY = "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"

const generateAiImages = async (userPrompt, userImgQuantity) => {
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", {
           method: "POST",
           headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
           },
           body: JSON.stringify({
            prompt: userPrompt,
            n: userImgQuantity,
            size: "512x512",
            response_format: "b64_json"
           })
            
        });

        
    } catch (error) {
        console.log(error);
    }
}

const handleFormSubmission = (e) => {
    e.preventDefault();

    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = e.srcElement[1].value;
    
    const imgCardMarkup = Array.from({length: userImgQuantity}, () => `
        <div class="img-card loading">
            <img src="img/loader.svg" alt="image">
            <a href="#" class="download-btn">
                <img src="img/000.svg" alt="download icon">
            </a>
        </div>
    `).join("");

    imageGallery.innerHTML = imgCardMarkup;
    generateAiImages(userPrompt, userImgQuantity);


}


generateForm.addEventListener("submit", handleFormSubmission);