// Thực hiện kiểm tra nếu người dùng chưa đăng nhập, nếu đã đăng nhập thì chuyển hướng người dùng đến trang chính
function checkLogin() {
    if (localStorage.getItem("username")) {
      window.location.href = "main.html";
    }
  }
  
  // Hàm đăng ký
  function signup() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var repass = document.getElementById("repass").value;
  
    // Kiểm tra xem tên người dùng đã tồn tại chưa
    if (localStorage.getItem(username)) {
      alert("Tên người dùng đã tồn tại");
      window.location.href = "../dangky.html";
    } else {
      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem(username, email, repass);
      window.location.replace('./dangnhap.html')
      alert("Đăng ký thành công");
      
    }
  }
  
  // Hàm đăng nhập
  function login() {
    var username = document.getElementById("login-username").value;
    var repass = document.getElementById("login-repass").value;
  
    // Kiểm tra xem tên người dùng và mật khẩu có khớp không
    if (localStorage.getItem(username) === repass) {
      localStorage.setItem("username", username);
      window.location.replace('./index.html')
    } else {
      alert("Tên người dùng hoặc mật khẩu không đúng");
    }
  }
  
  checkLogin();
  