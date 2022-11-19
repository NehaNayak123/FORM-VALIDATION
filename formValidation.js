function validate(){
    // var name=document.getElementById("name").value
    // var email=document.getElementById("email").value
    // const phone=document.getElementById("phone").value
    // const gender=document.getElementById("gender").value
    // const nation=document.getElementById("nation").value
    // const password=document.getElementById("password").value
    // const cpassword=document.getElementById("cpassword").value


    const name=document.forms["validation"]["name"].value
    const email=document.forms["validation"]["email"].value
    const phone=document.forms["validation"]["phone"].value
    const gender=document.forms["validation"]["gender"].value
    const nation=document.forms["validation"]["nation"].value
    const password=document.forms["validation"]["password"].value
    const cpassword=document.forms["validation"]["cpassword"].value
    if(name==""){
        window.alert("Name Not Entered")
        name.focus();
        return false;
    }


    if(email==""){
        alert("Enter Valid Email id")
        // email.focus()
        return false;
    }
    if(phone=="" || phone.length<10 || phone.length>10){
        alert("Enter 10 digit Contact Number")
        phone.focus()
        return false
    }
    if(gender==""){
        alert("Select Gender")
        gender.focus()
        return false
    }
    if(nation==""){
        alert("Select Nationality")
        nation.focus()
        return false
    }
    if(password.length<8 || password==""){
        alert("password is of minimum 8 character")
        password.focus()
        return false
    }
    if(password != cpassword){
        alert("Password and Confirm Password will be same")
        cpassword.focus()
        return false
    }
    // window.location.href="https://www.w3schools.com/js/"
    alert("Successfully Submited")
    return true;
}