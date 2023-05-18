function signup(e){
    event.preventDefault();
    var username = document.getElementById(elementId , "username").Value;
    var email = document.getElementById(elementId , "email").Value;
    var password = document.getElementById(elementId , "repass").Value;
    var user = {
        username : username,
        email : email,
        password : repass,
    }
    var json = Json.stringify(value, user);
    localStorage.setItem(key, username, value , json);
    alert("Đăng ký thành công")
}