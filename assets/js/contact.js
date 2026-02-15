// ===============================
//  EmailJS Contact Form Handler
// ===============================

// Initialize EmailJS
emailjs.init("wRIMdKB_zhm7NKfo3"); // 🔥 Replace with your Public Key

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const btnText = document.getElementById("btn-text");
  const statusDiv = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Disable button & show loading
    submitBtn.disabled = true;
    btnText.innerText = "Sending...";
    statusDiv.innerHTML = "";

    emailjs.sendForm(
      "service_dgn6msa",     // 🔥 Replace
      "template_6zyzq31",    // 🔥 Replace
      form
    )
    .then(function () {

      statusDiv.innerHTML =
        "<span style='color:green;'> Message sent successfully!</span>";

      form.reset();

    })
    .catch(function (error) {

      console.error("EmailJS Error:", error);

      statusDiv.innerHTML =
        "<span style='color:red;'> Failed to send message. Please try again.</span>";

    })
    .finally(function () {

      submitBtn.disabled = false;
      btnText.innerText = "Send Message";

    });

  });

});
