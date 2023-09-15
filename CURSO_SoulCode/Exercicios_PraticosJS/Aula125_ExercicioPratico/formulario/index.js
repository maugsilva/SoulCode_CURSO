function myBtn () {
    const txtObj = document.getElementById("id1");
    if (!txtObj.checkValidity()) {
        document.getElementById("demo").innerHTML = txtObj.validationMessage;
    }else{
        document.getElementById("demo").innerHTML = "O input está Ok!"
    }
}

