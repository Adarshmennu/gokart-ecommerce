document.getElementById("formcontainer").addEventListener("submit", function data(e) {
    e.preventDefault()

    let email=document.getElementById("email").value
    let password=document.getElementById("password").value

    //let userdata=JSON.parse(localStorage.getItem("userdata")) 
     let users = JSON.parse(localStorage.getItem("users")) || [];
 
    
    // if (userdata.email==email && userdata.password==password) {

    //     window.location.href="../Home/home.html"
    // }else{
    //     alert("Invalid Credentials")
    //     window.location.href="./login.html"
    // }
    let validUser = users.find(u => u.email === email && u.password === password);

    if (validUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(validUser));
        window.location.href = "../Home/home.html";
    } else {
        alert("Invalid Credentials ❌");
    }

})