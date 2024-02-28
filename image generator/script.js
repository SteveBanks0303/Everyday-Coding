const generateForm = document.querySelector(".generate-form");

const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(e.srcElement);
}

generateForm.addEventListener("submit", handleFormSubmission);