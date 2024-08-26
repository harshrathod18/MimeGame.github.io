
function init() {
    let userName = document.getElementById('floatingInput').value;
    let passWord = document.getElementById('floatingPassword').value;
    checkLogin(userName, passWord);
}

function checkLogin(uname, pass) {
    let adminName = "harshrathod18";
    let adminPass = "11223344";
    if (uname == adminName && pass == adminPass) {
        console.log("Successfully Login.");
        window.location.replace("dashboard.html");
    }
    else {
        alert("Wrong Credentials.");
        window.location.replace("index.html");
    }
}