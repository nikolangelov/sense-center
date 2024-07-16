function emailSend(){
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nicole.angelov396@gmail.com",
        Password : "718D52D1E063DD61524D35FB8BAE5877ED06",
        To : 'nicole.angelov396@gmail.com',
        From : "nicole.angelov396@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
}