let emailAddress = document.getElementById("exampleDropdownFormEmail1");
let passWord = document.getElementById("exampleDropdownFormPassword1");
let errOne = document.getElementById("error1");
let errTwo = document.getElementById("error2");
let wel = document.getElementById("welcome");



function check(event) {
    event.preventDefault();
    if (emailAddress.value.includes("@") === false) {
        errOne.innerHTML = "Email is not true";
        event.stopPropagation();

    } else if (passWord.value.length <= 7) {
        errTwo.innerHTML = "Password length must be greater than 7 ";
        event.stopPropagation();
    } else {
        wel.innerHTML = `Welcome to page ${emailAddress.value}`;

    }
}



document.getElementById('mybtn').addEventListener("click", check);
//document.getElementById("myDropdown").classList.toggle("show");
