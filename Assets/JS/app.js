const chatButton = document.querySelector('#chatbox-button');
const chatContent = document.querySelector('.chatbox-support');
const icons = {
    isClicked: '</p>Clicked!</p>',
    isNotClicked: '<p>Not clicked!</p>'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);

function send(){
    (function(){
        emailjs.init("pMP2qNqmUOQKdN2Ke"); //account public key
    })();
    
    var params = {
        message: document.querySelector("#textBox").value,
    };

    document.getElementById('textBox').value='';
    var serviceID = "service_uynr6q8"
    var templateID = "template_d5ukh7h"

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        // alert("Email Sent Sucessfully!")
    })
    .catch();
}