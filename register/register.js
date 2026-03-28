document.getElementById("formcontainer").addEventListener("submit", function data(e) {
    e.preventDefault()

    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let PhNo=document.getElementById("PhNo").value

    

    let userdata={
        name:name,
        email:email,
        password:password,
        PhNo:PhNo

    }
    let users=JSON.parse(localStorage.getItem("users")) || []
     let exists=users.find(u=>u.email==email)

     if (exists) {
        alert("User already exists!")
        return;
     }
    users.push(userdata)
    localStorage.setItem("users",JSON.stringify(users))
        alert("Registered Successfully ✅");

    window.location.href="./login.html"
    
})