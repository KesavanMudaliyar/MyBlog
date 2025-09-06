// Subscribe Function
function subscribe() {
  const email = document.getElementById("email").value;
  if (email) {
    alert("Subscribed with: " + email);
    document.getElementById("email").value = "";
  } else {
    alert("Please enter your email.");
  }
}

// Send Message Function
function sendMessage() {
  const msg = document.getElementById("message").value;
  if (msg) {
    alert("Message sent: " + msg);
    document.getElementById("message").value = "";
  } else {
    alert("Please enter a message.");
  }
}

// Video Controls (Play / Pause)
const video = document.getElementById("bg-video");

// Create play/pause button dynamically
const controlBtn = document.createElement("button");
controlBtn.innerText = "Pause Background";
controlBtn.style.position = "fixed";
controlBtn.style.bottom = "20px";
controlBtn.style.right = "20px";
controlBtn.style.padding = "10px 15px";
controlBtn.style.border = "none";
controlBtn.style.borderRadius = "5px";
controlBtn.style.background = "#007bff";
controlBtn.style.color = "#fff";
controlBtn.style.cursor = "pointer";
controlBtn.style.zIndex = "10";
document.body.appendChild(controlBtn);

controlBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    controlBtn.innerText = "Pause Background";
  } else {
    video.pause();
    controlBtn.innerText = "Play Background";
  }
});

