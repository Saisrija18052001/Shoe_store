var email=localStorage.getItem("email")
console.log(email)
var pass=localStorage.getItem("pass")
console.log(pass)
var form=document.forms;
function loginfun()
{
    var inputtags=document.querySelectorAll("input")
    var userEmail=inputtags[0].value
    var userpass=inputtags[1].value
    var borders=document.getElementsByClassName("a")
    
    if(email!=userEmail && pass!=userpass)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
        borders[0].style.borderColor="red"
        borders[1].style.borderColor="red"
        document.getElementById("message").innerHTML="UserId and Password is wrong"
    }
    else if(email==userEmail && pass!=userpass || (email!=userEmail && pass==userpass))
    {
        document.body.style.backgroundImage="linear-gradient(75deg,orange,red)"
        borders[0].style.borderColor="orange"
        borders[1].style.borderColor="red"
        document.getElementById("message").innerHTML="Password or emailId is Wrong"
    }
    
    else{
        window.open("./index.html")
        // form[0].action="./index.html"
        // form[0].elements[2].type="submit"
    }
}