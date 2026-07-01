function storeData()
{
    var allInput=document.querySelectorAll("input")
    var allSelect=document.querySelectorAll("select")
    var fName=allInput[1].value
    var lName=allInput[2].value
    var email=allInput[3].value
    var phno= allInput[4].value
    var pass= allInput[5].value
    var date=allSelect[0].value
    var month=allSelect[1].value
    var year=allSelect[2].value

    window.sessionStorage.setItem("email",email);
    window.sessionStorage.setItem("pass",pass);

    window.localStorage.setItem("fName",fName);
    window.localStorage.setItem("lName",lName);
    window.localStorage.setItem("email",email);
    window.localStorage.setItem("phno",phno);
    window.localStorage.setItem("pass",pass);
    window.localStorage.setItem("date",date);
    window.localStorage.setItem("month",month);
    window.localStorage.setItem("year",year);
}
function gender(gen)
{
    localStorage.setItem("gender",gen)
}