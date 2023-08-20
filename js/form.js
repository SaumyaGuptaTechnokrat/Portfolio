function sendEmail(){
    console.log("function Call");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "gupta.saumya837@gmail.com",
        Password : "75760AA1E8E5805D38464446F3AE13A7EF39",
        To : "saumya4765@gmail.com",
        From : "gupta.saumya837@gmail.com",
        Subject : document.getElementById("subject").value,
        Body : "Name:" + document.getElementById("name").value + "<br/>"+
        "Email:" + document.getElementById("email").value+"<br/>"+
        
        "Subject:" +document.getElementById("subject").value+"<br/>"+
        "Comany Name:" +document.getElementById("companyname").value+"<br/>"+
        "Role for which I am hired:" +document.getElementById("roleforhiring").value+"<br/>"+

        
        "Message:"+document.getElementById("message").value
    }).then(
    message => alert(message)
    );
}
