function myFunction () {
  var at = document.getElementById("email").value.indexOf("@");
  var subject = document.getElementById("lname").value;
  var fname = document.getElementById("fname").value;
  submitOK = "true";
  
  if (fname.length > 10) {
    alert("The name may have no more than 10 characters");
    submitOK = "false";
  }
  
 if (lname.length > 10) {
    alert("the Subject may have no more than 30 Words");
    submitOK = "false";
  }
  
  if (at == -1) {
    alert("Not a valid e-mail!");
    submitOK = "false";
  }
  
  if (submitOK == "false") {
    return false;
}
}