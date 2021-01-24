function textbox()
{
    var name=document.getElementById("fname");
    var name2 =document.getElementById("lname");
    var email=document.getElementById("email");
    var feedback=document.getElementById("feedback");
    var age=document.getElementById("age");
    var phone=document.getElementById("phone");
    
    if(name.value == "")
    {
        alert("First name is required");
        name.focus();
        name.style.border="3px solid red";
        return  false;
    }
    if(name2.value == "")
    {
        alert("Last name is required");
        name2.focus();
        name2.style.border="3px solid red";
        return  false;
    }
    if(email.value == "")
    {
        alert("Email name is required");
        email.focus();
        email.style.border="3px solid red";
        return  false;
    }
    if(age.value == "")
    {
        alert("Age is required");
        Age.focus();
        Age.style.border="3px solid red";
        return  false;
    }
    if(phone.value == "")
    {
        alert("Mobile number is required");
        Age.focus();
        Age.style.border="3px solid red";
        return  false;
    }
    if(feedback.value == "")
    {
        alert("Feedback is required");
        feedback.focus();
        feedback.style.border="3px solid red";
        return  false;
    }
    return false;
}

function data()
{
    var fname=document.getElementById("fname");
   var field=document.getElementById("b1");
   var final=field.innerHTML=fname.value;

   var lname=document.getElementById("lname");
   var field2=document.getElementById("b2");
   var final2=field2.innerHTML=lname.value;

   var mail=document.getElementById("email");
   var field3=document.getElementById("b3");
   var final3=field3.innerHTML=mail.value;

   var years=document.getElementById("age");
   var field4=document.getElementById("b4");
   var final4=field4.innerHTML=years.value;

   var mobile=document.getElementById("phone");
   var field5=document.getElementById("b5");
   var final5=field5.innerHTML=mobile.value;

   var feed=document.getElementById("feedback");
   var field6=document.getElementById("b6");
   var final6=field6.innerHTML=feed.value;

}
   
let fname,lname,email,age,phone,feedback;

const submit= document.getElementById("last").addEventListener('click',()=>{

     fname =document.getElementById("fname").value;
     lname =document.getElementById("lname").value;
     email=document.getElementById("email").value;
     age=document.getElementById("age").value;
     phone=document.getElementById("phone").value;
     feedback=document.getElementById("feedback").value;

     db.ref("users/").set({
         Name:fname+lname,
         Email:email,
         Age:age,
         MobileNumber:phone,
         Feedback:feedback

     })
    

})