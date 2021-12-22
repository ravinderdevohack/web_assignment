
var regName = /^[a-zA-Z\s]+$/
var regEmail = /^([\w+]+[-._]*[\w*]+\@\w{1,10}\.[a-zA-Z]{1,4})$/
var regPhone = /^[0-9]{10}$/
var regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
var regConfirmPassword = /^\w*$/

// any strng that match regpassword can't be taken as password
// var regPassword = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/

// var fnameIcon = document.getElementById('fname-icon');
// var lnameIcon = document.getElementById('lname-icon');
// var emailIcon = document.getElementById('email-icon');
// var phoneIcon = document.getElementById('phone-icon');
// var birthIcon = document.getElementById('birth-icon');
// var passwordIcon = document.getElementById('password-icon');
// var confirmPasswordIcon = document.getElementById('confirm-password-icon');


var inputArray = document.querySelectorAll(".input");
// var confirmPassword = document.getElementById("cpassword");
console.log(inputArray);
// console.log(confirmPassword.value);



var submit = document.querySelector("#submit-btn");
submit.addEventListener("click", check);

function check() {

  // console.log(inputArray[0].value)
  // console.log(inputArray[1].value)

  var regArray = [regName, regName, regEmail, regPhone, regPassword, regConfirmPassword];
  var alertArray = ["name must be character ", "name must be character", "enter validemail address", "enter valid phone number", "password must be greater than 8 character, conatin onespecial symbol and one number"];
  var array = [];



  for (var i = 0; i < inputArray.length; i++) {
    array.push(inputArray[i].value);
    console.log(array);
    // console.log(array[i]);
    // console.log(inputArray[i].value.types);
    // console.log(regArray[i]);

    if ( !regArray[i].test(array[i]) &&  array[i] != "") {

      alert(alertArray[i]);
      console.log(array[i]);
      console.log(alertArray[i]);
      break;
    }
        
    else if (array[i] == "") {
      alert("please fill the form");
      console.log(array.length);
      break;
    }

  }
  if (array[5] != array[4] && array[5] != "" &&array[4] != "") {
    alert("password must be same");
  }

  





  // // for first name
  // var firstName = document.getElementById("fname").value;
  // console.log(firstName);
  // if (!regName.test(firstName)) {
  //   fnameIcon.classList.remove('fn-hide');
  //   // fnameIcon.setAttribute("title", "name must be character");
  //   alert("nmae must be character");
  //   console.log(1);
  // };

  
  // // for last name
  // var lastName = document.getElementById("lname").value;
  // console.log(lastName);
  // if (!regName.test(lastName)) {
  //   lnameIcon.classList.remove('ln-hide');
  //   // lnameIcon.setAttribute("title", "name must be character");
  //   alert("nmae must be character");
  //   console.log(1);

  // }

  // // for email
  // var email = document.getElementById("email").value;
  // console.log(email);
  // if (!regEmail.test(email)) {
  //   emailIcon.classList.remove('email-hide');
  //   // emailIcon.setAttribute("title", "enter valid email address");
  //   alert("enter valid email address");
  //   console.log(1);

  // }


  // //for phone
  // var phone = document.getElementById("phone").value;
  // console.log(phone);
  // if (!regPhone.test(phone) && phone.length != 10) {
  //   phoneIcon.classList.remove('phone-hide');
  //   // phoneIcon.setAttribute("title", "enter valid phone number");
  //   alert("phone number must be valid");
  //   console.log(1);
  // }
   

  // //for date of birth
  // var birthDate = document.getElementById("birth").value;
  // console.log(birthDate);
  // if (birthDate == "") {
  //   birthIcon.classList.remove('birth-hide');
  //   // birthIcon.setAttribute("title", "Please enter date of birth");
  //   alert("enter date of birth");
  //   console.log(1);
  // }


  // //for password
  // var password = document.getElementById("password").value;
  // console.log(password);
  // if (regPassword.test(password)) {
  //   passwordIcon.classList.remove('password-hide');
  //   // passwordIcon.setAttribute("title", "password must be greater than 8 character, conatin one ial symbol and one number");
  //   alert("password must be greater than 8 character, conatin one special symbol and one number");

  //   console.log(1);
  // }


  // //for confirm pasword
  // var confirmPassword = document.getElementById("cpassword").value;
  // console.log(confirmPassword);
  // if (confirmPassword != password) {
  //   confirmPasswordIcon.classList.remove('cpassword-hide');
  //   // confirmPasswordIcon.setAttribute("title", "password must be same");
  //   alert("password must be same");
  //   console.log(1);
  // }

}
