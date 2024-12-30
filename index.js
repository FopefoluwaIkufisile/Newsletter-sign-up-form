const subscribeButton = document.querySelector("input[type='submit']");
const body = document.querySelector("body");
const emailInput = document.querySelector("#email-input");
const wrongMessage = document.querySelector(".wrongemail");
const removeCont= document.querySelector(".remove-cont");
const successBox = document.querySelector(".success-box");
const userEmail = document.querySelector("#useremail");
const dismissButton = document.querySelector("#dismiss-button");


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

subscribeButton.addEventListener("click", (e) => {

    e.preventDefault();
    const emailValue = emailInput.value.trim();

    if (!emailRegex.test(emailInput.value)){
      wrongMessage.textContent = "Valid email required";
      wrongMessage.style.color = "red";
      wrongMessage.style.fontSize = "10px";
      wrongMessage.style.fontWeight = "bold";
      emailInput.style.color = "black";
      emailInput.style.backgroundColor = "pink";
      emailInput.style.borderColor = "red";
    }
    else{
       removeCont.style.display = "none";
       successBox.style.display ="block";
       userEmail.textContent = emailValue;
}
})
dismissButton.addEventListener("click", (e) => {

    e.preventDefault();
    removeCont.style.display = "flex";
    successBox.style.display ="none";


})
