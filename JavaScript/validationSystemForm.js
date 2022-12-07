function validateForm() {
    const dateInput = document.getElementById('date');
    const studentSelect = document.getElementById('student');
    const titleDepartmen = document.getElementById('titleDepartmen');
    
    const errorDate = document.getElementById('errorDate');
    const errorStudent = document.getElementById('errorStudent');
    const errorTitleDepartmen = document.getElementById('errorTitleDepartmen');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([studentSelect, titleDepartmen, dateInput], [errorStudent, errorTitleDepartmen, errorDate], errorsSummary);

    let valid = true;

    if(studentSelect.value == "--Wybierz studenta--") {
        valid = false;
        studentSelect.classList.add("error-input");
        errorStudent.innerText = "Pole jest wymagane";
    } 

    if(titleDepartmen.value == "--Wybierz dział--") {
        valid = false;
        titleDepartmen.classList.add("error-input");
        errorTitleDepartmen.innerText = "Pole jest wymagane";
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