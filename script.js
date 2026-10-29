
function contactUs(productName) {
  alert(
    "Thank you for your interest in " +
    productName +
    "! Please contact Shavika Industries for an enquiry."
  );
}

/*
  Apni details yahan update karein.
  Phone number: country code ke saath, + ya spaces ke bina.
*/

const BUSINESS = {
  phone: "919536685811",
  whatsapp: "919536685811",
  email: "shavikatech@gmail.com"
};

function contactUs(productName) {
  const message =
    `Hello Shavika Industries, mujhe ${productName} ke baare mein ` +
    "product details aur quotation chahiye.";

  const url =
    "https://wa.me/" +
    BUSINESS.whatsapp +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
}

document.addEventListener("DOMContentLoaded", function () {
  const phoneLink = document.getElementById("phone-link");
  const emailLink = document.getElementById("email-link");
  const whatsappLink = document.getElementById("whatsapp-link");
  const year = document.getElementById("year");

  if (phoneLink) {
    phoneLink.href = "tel:+" + BUSINESS.phone;
    phoneLink.textContent = "+" + BUSINESS.phone;
  }

  if (emailLink) {
    emailLink.href = "mailto:" + BUSINESS.email;
    emailLink.textContent = BUSINESS.email;
  }

  if (whatsappLink) {
    whatsappLink.href = "https://wa.me/" + BUSINESS.whatsapp;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
    whatsappLink.textContent = "Chat with us on WhatsApp";
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
