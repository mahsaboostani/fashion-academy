


let emailAddress = document.getElementById("exampleDropdownFormEmail1");
let passWord = document.getElementById("exampleDropdownFormPassword1");
let errOne = document.getElementById("error1");
let errTwo = document.getElementById("error2");
let wel = document.getElementById("welcome");

let black = document.getElementsByClassName("bg-dark");
let yelow = document.getElementsByClassName("bg-warning");

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
    let answer = atob("MjEzMTI=").split("");
    for (let i = 0; i < questions_count; i++) {
        let question = document.querySelector('input[name="q[' + i + ']"][value="' + result[i] + '"]');
        if (result[i] === answer[i]) {
            document.getElementById("tick" + i).innerHTML = "&#9989";
            count++;
        } else {
            if (question) {
                document.querySelector('[for = "' + question.id + '"]').style.color = "red";
            }
        }

    }
    if (count === 5) {
        document.getElementById("gif").setAttribute("src", "images/FymNEH.gif");

    }
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


document.getElementById('mybtn').addEventListener("click", check);
