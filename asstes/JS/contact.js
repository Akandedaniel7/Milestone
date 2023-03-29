/* =========== CONTACT FORM  ========= */
const contactMe = document.getElementById("contact-general-form"),
  nameMe = document.getElementById("contact-general-name"),
  emailMe = document.getElementById("contact-general-email"),
  messageMe = document.getElementById("message"),
  contactMessage = document.getElementById("contact-general-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactMe.value === "" ||
    emailMe.value === "" ||
    messageMe.value === ""
  ) {
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");

    contactMessage.textContent = "Write all the input fields";
  } else {
    emailjs
      .sendForm(
        "service_uwcayxn",
        "template_gd847dv",
        "#contact-general-form",
        "8yLa5U7uZdiWxN27J"
      )
      .then(
        () => {
          contactMessage.classList.add("color-light");
          contactMessage.textContent = "Message sent";

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPs! SOMETHING WENT WRONG...", error);
        }
      );
    nameMe.value = "";
    emailMe.value = "";
    messageMe.value = "";
  }
};

contactMe.addEventListener("submit", sendEmail);
