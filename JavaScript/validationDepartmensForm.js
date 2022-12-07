function validateForm () {
    const titleDepartmenInput = document.getElementById('titleDepartmen');
    const dateInput = document.getElementById('date');

    const errorTitleDepartmen = document.getElementById('errorTitleDepartmen');
    const errorDate = document.getElementById('errorDate');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([titleDepartmenInput, dateInput], [errorTitleDepartmen, errorDate], errorsSummary);

    let valid = true;

    if(!checkRequired(titleDepartmenInput.value)) {
        valid = false;
        titleDepartmenInput.classList.add("error-input");
        errorTitleDepartmen.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(titleDepartmenInput.value, 2, 60)) {
        valid = false;
        titleDepartmenInput.classList.add("error-input");
        errorTitleDepartmen.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    let nowDate = new Date(),
    month = '' + nowDate.getMonth(),
    day = '' + nowDate.getDay();

    if(month.length < 2) {
        month = '0' + month;
    }
    if(day.length < 2) {
        day = '0' + day;
    }

    if(!checkRequired(dateInput.value)) {
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = "Pole jest wymagane";
    } else if(!checkDate(dateInput.value)) {
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = "Pole powino zawierać datę w formacie yyyy-MM-dd (np. 2003-07-26)";
    } 

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;

}