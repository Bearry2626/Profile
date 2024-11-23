const nameText = "Name : Nanthakan Sukkasem";
const studentIdText = "67130500093";

function typeWriter(element, text, delay = 100, callback) {
  element.textContent = "";
  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
      if (callback) callback();
    }
  }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  const profileDiv = document.getElementById("profile");
  const nameElement = document.getElementById("name");
  const studentIdElement = document.getElementById("studentId");

  profileDiv.classList.remove("hidden");

  typeWriter(nameElement, nameText, 100, () => {
    setTimeout(() => {
      typeWriter(studentIdElement, studentIdText, 100);
    }, 500);
  });
});
