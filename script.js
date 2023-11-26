document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function selectPlan(planId) {
  document.querySelectorAll(".pricing-plan").forEach((plan) => {
    plan.classList.remove("active");
  });
  document.getElementById(planId).classList.add("active");
  selectedPlan = planId;
}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("All fields must be filled out");
  } else {
    displaySuccessMessage();
  }
}

function displaySuccessMessage() {
  var successMessage = document.getElementById("successMessage");
  successMessage.innerHTML =
    "Thank you for contacting us! We'll get back to you soon.";
  document.getElementById("contactForm").reset();
}

var countDownDate = new Date("feb1, 2024 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
