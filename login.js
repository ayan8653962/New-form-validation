
var userObj = [];



function setData() {
  var users = localStorage.getItem("USERDATA") ;//get all users from local storage
  console.log(users); //console show
  console.log(JSON.parse(users)); //convert (string to orginal format)
  userObj = JSON.parse(users)|| []; //convert store in local varaiable
}


setData(); //first run

function login() {
  var email = document.getElementById("email").value; //get email
  var password = document.getElementById("password").value; //get password

  if (email === "" || password === "") { //conditions
    Toastify({
      text: "please enter email and password",
      duration: 3000,
        gravity: "top", // `top` or `bottom`
  position: "left",
      style: {
        background: "linear-gradient(to right, #00b09b, red)",
      },
   
    }).showToast();
  } else {
    var userExit = false;
    var selectedIndex; //new email reg 
    for (var i = 0; i < userObj.length; i++) { // only check user email reg => true,flase
      console.log(userObj[i]["email"]); //email 
      if (userObj[i]["email"] == email) {  //object email check user input email
        userExit = true; ///email already 
        selectedIndex = i;
        break;  //check loop stope
      }
    }
    if(userExit == true){
      if(userObj[selectedIndex]["password"] ==password){
      alert("Login Sussesfully ")
       }
    }
  }
}

