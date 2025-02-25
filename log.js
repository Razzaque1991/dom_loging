let logBtn = document.getElementById("log"); // Make sure the button has the id="log"
logBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let account = document.getElementById("account");
    let accountValue = account.value;
    let password = document.getElementById("password");
    let passwordValue = password.value;
    if (accountValue.length === 11 ) {
        if (passwordValue === "202615") {
            window.location.href = "./main.html";
        } else {
            alert("Your password is wrong."); 
        }
    } else {
        alert("Enter your correct account number."); 
    }
});
