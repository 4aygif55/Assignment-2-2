
var  prefs = [];
const errorElement = document.getElementById('error')

function main(){

   
    document.getElementById('contact-form').addEventListener('submit', handleSubmit);
    document.getElementById('contact-form').addEventListener('change', handleChange);

}

function handleChange(e) {
       console.log('changed');
}



function handleSubmit(event){

    var myForm = document.getElementById('contact-form');
    var valid = true;


   if (myForm.email.value == "" ) {
    
    event.preventDefault();
    valid = false;
    document.getElementById('emailRequiredError').style.display ="block";
    messages.push('error')
   
} else {
    document.getElementById('emailRequiredError').style.display ="none";
    valid = true;

}
if (!myForm.terms.checked === false ) {
    
    event.preventDefault();
    valid = false;
    document.getElementById('termsRequiredError').style.display ="block"
    
   
} else {
    document.getElementById('termsRequiredError').style.display ="none";
    valid = true;

}

   if (myForm.text.value == "" ) {
    
    event.preventDefault();
    valid = false;
    document.getElementById('nameRequiredError').style.display ="block"
}else {
    document.getElementById('emailRequiredError').style.display ="none";
    valid = true;
}

   if (myForm.number.value == "" ) {

    event.preventDefault();
    valid = false;
    document.getElementById('numberRequiredError').style.display ="block"

}
else {
    document.getElementById('emailRequiredError').style.display ="none";
    valid = true;
}
if (prefs.length == 0 ) {
    
    event.preventDefault();
    valid = false;
    document.getElementById('prefRequiredError').style.display ="block"
    
   
} else {
    document.getElementById('prefRequiredError').style.display ="none";
    valid = true;

}










if (valid){
    console.log("form submitted");

}
   
      event.preventDefault();
}