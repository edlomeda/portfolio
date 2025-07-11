// Tab Switching
const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname, event) {
  tablinks.forEach(link => link.classList.remove("active-link"));
  tabcontents.forEach(content => content.classList.remove("active-tab"));
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Mobile Menu
const sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// Form Submission to Google Sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzcSTM-VQEPz1wfeeAJu3MTJl7pgp89wzvufBwxmHza-DICxZM1lXmZ1bkY90WkdrTf/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.style.color = '#61b752';
      msg.innerHTML = "Message sent successfully!";
      setTimeout(() => msg.innerHTML = "", 5000);
      form.reset();
    })
    .catch(error => {
      msg.style.color = '#ff004f';
      msg.innerHTML = "Something went wrong.";
      console.error('Error!', error.message);
    });
});
