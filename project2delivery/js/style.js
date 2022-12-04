
function sendemail(){
    Email.send({
        Host : "smtp.g.com",
        Username : "aashishashu712@gmail.com",
        Password : "7007037260",
        To : 'aashishashu712@gmail.com',
        From : document.getElementById("email").value,
        Subject : "new contact form enguiry",
        Body : ""
    }).then(
      message => alert(message)
    );
}