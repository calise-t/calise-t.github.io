const subscribeBtn = document.getElementById("subscribe-button");
const subscribeMessage = document.getElementById("subscribe-message");
const emailInput = document.getElementById("floatingInput");

subscribeBtn.onclick = function(){
    if (emailInput.value == ""){
        subscribeMessage.innerHTML= `Email input required.`
    } else {
        subscribeMessage.innerHTML = `You have succesfully subscribed!`;
    }
};  

const contactBtn = document.getElementById("contact-button");
const nameInput = document.getElementById("exampleFormControlInput1");
const messageInput = document.getElementById("exampleFormControlTextarea1");
const nameWarn = document.getElementById("nameWarn");
const messageWarn = document.getElementById("messageWarn");
const contactMessage = document.getElementById("contact-message");

contactBtn.onclick = function(){
    if (nameInput.value == "" || messageInput.value == ""){
        nameWarn.innerHTML= `Your Name*`;
        nameWarn.style.color = "Crimson";
        messageWarn.innerHTML= `Your Message*`;
        messageWarn.style.color = "Crimson";
    } else {
        nameWarn.innerHTML= `Your Name`;
        nameWarn.style.color = "black";
        messageWarn.innerHTML= `Your Message`;
        messageWarn.style.color = "black";
        contactMessage.innerHTML = `Hi, ${nameInput.value}, we will get back to your soon!`;
    }
};  