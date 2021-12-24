function validate () {
    var Username=document.getElementById("username").Value ;
    var Password=document.getElementById("password").Value;

    if (Username=="alwi" && Password=="123") {
        alert (`"selamat anda berhasil login"`);
    }
    else{
        alert ("username dan password yang anda mauskan salah!!")
    }
}