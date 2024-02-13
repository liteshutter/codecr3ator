const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function sendMail(){
    (function(){
        emailjs.init("pMP2qNqmUOQKdN2Ke"); //account public key
    })();
    
    var params = {
        fname: document.querySelector("#name").value,
        lname: document.querySelector("#surname").value,
        email: document.querySelector("#email").value,
        contact: document.querySelector("#contact").value,
        comment: document.querySelector("#message").value,
    };

    document.getElementById('name').value='';
    document.getElementById('surname').value='';
    document.getElementById('email').value='';
    document.getElementById('contact').value='';
    document.getElementById('message').value='';

    var serviceID = "service_uynr6q8"
    var templateID = "template_5mlualf"

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert("Email Sent Sucessfully!")        
    })
    .catch();
}

