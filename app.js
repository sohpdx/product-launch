const form = document.getElementById("contact-form");
const email = document.getElementById("email");
const thankYouDiv = document.getElementById("thank-you");
const clickMe = document.getElementById("click-me");
const cat1 = document.getElementById("cat-1");
const cat2 = document.getElementById("cat-2");
const cat3 = document.getElementById("cat-3");
const audio1 = document.getElementById("audio-1");
const audio2 = document.getElementById("audio-2");
const audio3 = document.getElementById("audio-3");
email.value = "info@example.com";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("I am submitting the form!");
  thankYouDiv.classList.remove("hide");
  form.classList.add("hide");
});
cat1.addEventListener("click", (e) => {
  audio1.play();
  // alert("Meow!!!!");
});
cat2.addEventListener("click", (e) => {
  audio2.play();
  // alert("Growl!!!!");
});
cat3.addEventListener("click", (e) => {
  audio3.play();
  // alert("Roar!!!!");
});
