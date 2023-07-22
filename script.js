


function validateform() {
    let firstnameerror = document.getElementById('firstnameerror');
    let name = document.forms['myForm']['fname'].value
    if (name == "") {
        firstnameerror.innerHTML = "*name is required"
        return false;
    } else if (name.length < 3) {
        firstnameerror.innerHTML = '*name is too short'
        return false;
    }
    else {
        firstnameerror.innerHTML = ""
    }

    let lastnameerror = document.getElementById('lastnameerror')
    let lastname = document.forms['myForm']['lname'].value;
    if (lastname == '') {
        lastnameerror.innerHTML = '*last namerequired'
        return false
    } else if (lastname < 2) {
        lastnameerror.innerHTML = '*last name is too short'
        return false
    }
    else {
        lastnameerror.innerHTML = ''
    };


    let emalerror = document.getElementById('emalerror')
    let femail = document.forms['myForm']['femail'].value;
    if (femail == '') {
        emalerror.innerHTML = '*email namerequired'
        return false
    } else if (femail < 12) {
        emalerror.innerHTML = '*email is too short'
        return false
    }
    else {
        emalerror.innerHTML = ''
    };




    let phone = document.getElementById('phoneerror')
    let fphone = document.forms['myForm']['fphone'].value;
    if (fphone == '') {
        phone.innerHTML = '*phone number is required'
        return false
    } else if (fphone.length < 10 || fphone.length > 11) {
        phone.innerHTML = '*phone number should be in 10 degit'
        return false
    }

    else {
        phone.innerHTML = ""
    }

    let casterror = document.getElementById('casterror');
    let cast = document.getElementById('cast');
    if (cast.value == 'Blank') {
        casterror.innerText = "*select your cast"
        return false
    } else {
        casterror.innerText = ''
    }

    let Religionerror = document.getElementById('Religionerror');
    let Religion = document.getElementById('Religion');
    if (Religion.value == 'Blank') {
        Religionerror.innerText = '*select your religion'
        return false
    } else {
        Religionerror.innerText = ""
    }





    let stateerror = document.getElementById('stateerror');
    let state = document.forms['myForm']['state'].value;
    if (state == "") {
        stateerror.innerHTML = "*name of state is required"
        return false
    }
    else if (state.length < 5) {
        stateerror.innerHTML = "*enter valid state name"
        return false
    }
    else {
        stateerror.innerHTML = ""
    }

    let districterror = document.getElementById('districterror')
    let district = document.forms['myForm']['District'].value;
    if (district == "") {
        districterror.innerHTML = "*name of district is required"
    }
    else if (district.length < 4) {
        districterror.innerHTML = "*enter valid district name"
    }
    else {
        districterror.innerHTML = ""
    }



    let pinerror = document.getElementById('pinerror');
    let pin = document.forms['myForm']['pin'].value;
    if (pin == "") {
        pinerror.innerHTML = "*pin no. is required"
        return false;
    }
    else if (pin.length < 6 || pin.length > 7) {
        pinerror.innerHTML = "*enter 6 digit pin number"
        return false;
    }
    else {
        pinerror.innerHTML = ""
    }


    let taddresserror = document.getElementById('taddresserror');
    let ftaddress = document.forms['myForm']['ftaddress'].value;
    if (ftaddress == "") {
        taddresserror.innerHTML = "*address is required"
        return false;
    }
    else if (ftaddress.length < 10) {
        taddresserror.innerHTML = "*enter valid address"
        return false;

    }
    else {
        taddresserror.innerHTML = ""
    };

    let paddresserror = document.getElementById('paddresserror');
    let fpaddress = document.forms['myForm']['fpaddress'].value;
    if (fpaddress == "") {
        paddresserror.innerHTML = "*address is required"
        return false;
    }
    else if (fpaddress.length < 10) {
        paddresserror.innerHTML = "*enter valid address"
        return false;

    }
    else {
        paddresserror.innerHTML = ""
    }

    let choosquaificationerror = document.getElementById('choosquaificationerror');
    let Qualification = document.getElementById('Qualification');
    if (Qualification.value == "Blank") {
        choosquaificationerror.innerText = "*Select Highest Qualification";
        return false;
    } else {
        choosquaificationerror.innerText = ""
    }

    let choospasingyearerror = document.getElementById('choospasingyearerror');
    let passingyear = document.forms['myForm']['passingyear'].value;
    if (passingyear == "") {
        choospasingyearerror.innerText = "*select valid passing year"
        return false
    } else {
        choospasingyearerror.innerText = ""
    }





    let percenterrorpercent = document.getElementById('percenterror');
    let percent = document.forms['myForm']['percent'].value;
    if (percent == "") {
        percenterrorpercent.innerHTML = "*percent is required"
        return false;
    }
    else if (percent.length < 2) {
        percenterrorpercent.innerHTML = "*enter valid percent"
        return false;

    }
    else {
        percenterrorpercent.innerHTML = ""
    }


    let aadharerror = document.getElementById('aadharerror');
    let aadhar = document.forms['myForm']['aadhar'].value;
    if (aadhar == "") {
        aadharerror.innerHTML = "*aadhar number is required"
        return false;
    }
    else if (aadhar.length < 12 || aadhar.length > 13) {
        aadharerror.innerHTML = "*enter valid aadhar number"
        return false;

    }
    else {
        aadharerror.innerHTML = ""
    }



    let samagrerror = document.getElementById('samagrerror');
    let samagr = document.forms['myForm']['samagr'].value;
    if (samagr == "") {
        samagrerror.innerHTML = "*samagr id is required"
        return false;
    }
    else if (samagr.length < 9) {
        samagrerror.innerHTML = "*enter valid samagr id"
        return false;

    }
    else {
        samagrerror.innerHTML = ""
    }



    let marksheeterror = document.getElementById('marksheeterror');
    let marksheet = document.forms['myForm']['marksheet'].value;
    if (marksheet == "") {
        marksheeterror.innerHTML = "*marksheet id is required"
        return false;
    }
    else if (marksheet.length < 9 || marksheet.length > 10) {
        marksheeterror.innerHTML = "*enter valid marksheet number"
        return false;

    }
    else {
        marksheeterror.innerHTML = ""
    }
    // 1111111111111111111111111111111111111111111111111111111111111111

    var inputElement = document.getElementById('file-upload');
    var files = inputElement.files;
    var photopdferror = document.getElementById('photopdferror');
    var right = document.getElementById('right')
    if (files.length == 0) {
        photopdferror.innerText = "*Please choose a file first";
        right.innerText = "";
        return false;
    }
    else {
        var filename = files[0].name;
        var extension = filename.substr(filename.lastIndexOf("."));
        var allowedExtensionsRegx = /(\.jpg|\.jpeg)$/i;
        var isAllowed = allowedExtensionsRegx.test(extension);

        if (isAllowed) {
            photopdferror.innerText = "";
            right.innerText = "✔";

        }
        else {
            photopdferror.innerText = "*select valid file type(jpg/jpeg)"
            right.innerText = "";
            return false;
        }
    }
    // 2222222222222222222222222222222222222222222222222222222222222222222222222222

    var inputElement2 = document.getElementById('markfile');
    var files2 = inputElement2.files;
    var marksheeterror1 = document.getElementById('marksheeterror1');
    var demo = document.getElementById('demo')
    if (files2.length == 0) {
        marksheeterror1.innerText = "*Please choose a file first";
        demo.innerText = "";
        return false;
    }
    else {
        var filename = files2[0].name;
        var extension = filename.substr(filename.lastIndexOf("."));
        var allowedExtensionsRegx = /(\.jpg|\.jpeg)$/i;
        var isAllowed = allowedExtensionsRegx.test(extension);

        if (isAllowed) {
            marksheeterror1.innerText = "";
            demo.innerText = "✔";

        }
        else {
            marksheeterror1.innerText = "*select valid file type(jpg/jpeg)"
            demo.innerText = "";
            return false;
        }
    }
 //333333333333333333333333333333333333333333333333333333333333333333333333333333333333 
    var inputElement3 = document.getElementById('file-upload3');
    var files3 = inputElement3.files;
    var signaturepdferror = document.getElementById('signaturepdferror');
    var right3 = document.getElementById('right3')
    if (files3.length == 0) {
        signaturepdferror.innerText = "*Please choose a file first";
        right3.innerText = "";
        return false;
    }
    else {
        var filename = files3[0].name;
        var extension = filename.substr(filename.lastIndexOf("."));
        var allowedExtensionsRegx = /(\.jpg|\.jpeg)$/i;
        var isAllowed = allowedExtensionsRegx.test(extension);

        if (isAllowed) {
            signaturepdferror.innerText = "";
            right3.innerText = "✔";

        }
        else {
            signaturepdferror.innerText = "*select valid file type(jpg/jpeg)"
            right3.innerText = "";
            return false;
        }
    }
//4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444 

var inputElement4 = document.getElementById('file-upload4');
var files4 = inputElement4.files;
var castcirtificatepdferror = document.getElementById('castcirtificatepdferror');
var right4 = document.getElementById('right4')
if (files4.length == 0) {
    castcirtificatepdferror.innerText = "*Please choose a file first";
    right4.innerText = "";
    return false;
}
else {
    var filename = files4[0].name;
    var extension = filename.substr(filename.lastIndexOf("."));
    var allowedExtensionsRegx = /(\.jpg|\.jpeg)$/i;
    var isAllowed = allowedExtensionsRegx.test(extension);

    if (isAllowed) {
        castcirtificatepdferror.innerText = "";
        right4.innerText = "✔";

    }
    else {
        castcirtificatepdferror.innerText = "*select valid file type(jpg/jpeg)"
        right4.innerText = "";
        return false;
    }
}








    let bankerror = document.getElementById('bankerror');
    let bank = document.forms['myForm']['bank'].value;
    if (bank == "") {
        bankerror.innerHTML = "*account number is required"
        return false;
    }
    else if (bank.length < 10) {
        bank
        bankerror.innerHTML = "*enter valid account number"
        return false;

    }
    else {
        bankerror.innerHTML = ""
    }

    let ifscerror = document.getElementById('ifscerror');
    let ifsc = document.forms['myForm']['ifsc'].value;
    if (ifsc == "") {
        ifscerror.innerHTML = "*ifsc code is required"
        return false;
    }
    else if (ifsc.length < 7) {
        bank
        ifscerror.innerHTML = "*enter valid ifsc code"
        return false;

    }
    else {
        ifscerror.innerHTML = ""
    }


    let linkmobileerror = document.getElementById('linkmobileerror');
    let register = document.forms['myForm']['register'].value;
    if (register == "") {
        linkmobileerror.innerHTML = "*mobile number is required"
        return false;
    }
    else if (register.length < 10) {
        linkmobileerror.innerHTML = "*enter valid mobile number"
        return false;

    }
    else {
        linkmobileerror.innerHTML = ""
    }

    let iderror = document.getElementById('iderror');
    let loginid = document.forms['myForm']['loginid'].value;
    if (loginid == "") {
        iderror.innerHTML = "*registration id is required"
        return false;
    }
    else if (loginid.length < 8) {
        iderror.innerHTML = "*enter above 8 character"
        return false;

    }
    else {
        iderror.innerHTML = ""
    }

    let passworderror = document.getElementById('passworderror');
    let password = document.forms['myForm']['password'].value;
    if (password == "") {
        passworderror.innerHTML = "*password is required"
        return false;
    }
    else if (password.length < 6) {
        passworderror.innerHTML = "*password have at least 6 characters"
        return false;

    }
    else {
        passworderror.innerHTML = ""
    }

}

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    var termsCheckbox = document.getElementById("termsCheckbox");
    
    if (!termsCheckbox.checked) {
      event.preventDefault(); // Prevent form submission
      alert("Please accept the terms and conditions.");
    }
  });
  
