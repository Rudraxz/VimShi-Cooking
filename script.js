function save()
{
    var mail = document.getElementById("email").value;
    var ema = localStorage.setItem("mail", mail);
}