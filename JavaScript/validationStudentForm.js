function validateForm () {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const titleJobInput = document.getElementById('titleJob');
    const schoolInput = document.getElementById('school');
    const classInput = document.getElementById('class');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorTitleJob = document.getElementById('errorTitleJob');
    const errorSchool = document.getElementById('errorSchool');
    const errorClass = document.getElementById('errorClass');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors ([firstNameInput, lastNameInput, titleJobInput, schoolInput, classInput], [errorFirstName, errorLastName, errorTitleJob, errorSchool, errorClass], errorsSummary);

    let valid = true;

    if (!checkRequired (firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input")
        errorFirstName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if(!checkRequired (lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole powinno zawiera od 2 do 60 znaków";
    }

    if (!checkRequired (titleJobInput.value)) {
        valid = false;
        titleJobInput.classList.add("error-input");
        errorTitleJob.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange (titleJobInput.value, 2, 60)) {
        valid = false;
        titleJobInput.classList.add("error-input");
        errorTitleJob.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}

