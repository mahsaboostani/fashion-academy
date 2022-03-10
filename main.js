


let emailAddress = document.getElementById("exampleDropdownFormEmail1");
let passWord = document.getElementById("exampleDropdownFormPassword1");
let errOne = document.getElementById("error1");
let errTwo = document.getElementById("error2");
let wel = document.getElementById("welcome");

let black = document.getElementsByClassName("bg-dark");
let yelow = document.getElementsByClassName("bg-warning");
let trueAnswer = [];
let arroW = document.getElementById("arrow");
let questions_count = 5;


function checkWin() {
    let result = [];
    for (let i = 0; i < questions_count; i++) {
        let answer = document.querySelector('input[name="q[' + i + ']"]:checked');
        if (answer) {
            result.push(answer.value);
        } else {
            result.push(0);
        }
    }
    checkAnswer(result);
}

function checkAnswer(result) {
    let count = 0;
    let answer = trueAnswer.split("");
    console.log(answer);
    for (let i = 0; i < questions_count; i++) {
        let question = document.querySelector('input[name="q[' + i + ']"][value="' + result[i] + '"]');
        if (result[i] === answer[i]) {
            document.getElementById("tick" + i).style.display = "block";
            document.getElementById("tick" + i).innerHTML = "&#9989";
            count++;
        } else {
            if (question) {
                document.querySelector('[for = "' + question.id + '"]').style.color = "red";
            }
        }

    }
    if (count === 5) {
        document.getElementById("gif").style.display = "block";

    }
}

function resetwin() {
    document.getElementById("gif").style.display = "none";

    for (let i = 0; i < questions_count; i++) {
        document.getElementById("tick" + i).style.display = "none";
    }
    let labels = document.getElementById('form').querySelectorAll('label');
    console.log("hi");
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.color = "black";


    }
    document.getElementById("form").reset();



}




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


function changeColor(event) {
    var color = event.value;
    for (let i = 0; i < black.length; i++) {
        black[i].style.setProperty('background-color', color, 'important');
    }


}

function changeColorY(event) {
    var color = event.value;
    for (let i = 0; i < yelow.length; i++) {
        yelow[i].style.setProperty('background-color', color, 'important');
    }


}


function activeArrow() {
    let chan = document.getElementById("change");
    if (chan.classList.contains("change-hide")) {
        chan.classList.remove("change-hide");
        chan.classList.add("change-box");
    } else {
        chan.classList.add("change-hide");
        chan.classList.remove("change-box");
    }
}



const login = async () => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", emailAddress.value);
    urlencoded.append("password", passWord.value);

    try {
        const response = await fetch("http://127.0.0.1:3001/login", {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: urlencoded

        });
        const data = await response.json();
        console.log(data);
        localStorage.setItem('token', data.token);
        wel.innerHTML = `welcome ${emailAddress.value}`;
        document.getElementById("dropdownMenu").innerHTML = "Log out";


    }
    catch (error) {
        console.log(error);
    }


}


window.onload = async function info() {
    var tok = localStorage.getItem("token");
    try {
        const response = await fetch("http://127.0.0.1:3001/info", {
            method: 'GET',
            headers: { "Authorization": tok, "Content-Type": "application/x-www-form-urlencoded" }
        });
        const data = await response.json();
        console.log(data);
        if (data.user) {
            wel.innerHTML = `welcome ${data.user}`;
            document.getElementById("dropdownMenu").innerHTML = "Log out";
        }

    }
    catch (error) {
        console.log(error);


    }

}

function logOut() {
    let logout = document.getElementById("dropdownMenu");
    if (logout.innerHTML === "Log out") {
        localStorage.removeItem("token");
        location.reload();
        //     logout.addEventListener("click", function () {

        //         localStorage.removeItem("token");
        //         document.getElementById("dropdownMenu").innerHTML = "Log in";
        //         wel.style.display = "none";
        //     })

    }

}


const checkServer = async () => {
    var tok = localStorage.getItem("token");
    try {
        const response = await fetch("http://127.0.0.1:3001/check", {
            method: 'GET',
            headers: { "Authorization": tok, "Content-Type": "application/x-www-form-urlencoded" }
        });
        const data = await response.json();
        trueAnswer = data.answer;
        console.log(data);

    }
    catch (error) {
        console.log(error);

    }
}
checkServer();

document.getElementById('mybtn').addEventListener("click", check);
