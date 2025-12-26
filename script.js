const messages = [
  "Johan tau perut Angel lagi drama 🩸😭",
  "Hari ini Angel boleh manja 100%",
  "Kalau bisa, Johan udah peluk Angel beneran 🤍",
  "Minum air yaa 🚰",
  "Makan yang enak 🍜",
  "Rebahan tanpa rasa bersalah 🛌",
  "Johan di sini buat Angel 🤍",
  "Peluk virtual dulu ya 🧸, Love You Sayangg🤍🤍"
];

let index = 0;

function nextMessage() {
  document.getElementById("message").textContent = messages[index];
  index = (index + 1) % messages.length;
}

function hug() {
  const card = document.getElementById("card");
  card.classList.add("hugged");

  setTimeout(() => {
    card.classList.remove("hugged");
  }, 600);

  // bikin hati & emoji melayang
  for (let i = 0; i < 8; i++) {
    createFloat();
  }

  document.getElementById("message").textContent =
    "🤍 Johan peluk Angel erat-erat… jangan nangis ya 🤍";
}

function createFloat() {
  const float = document.createElement("div");
  const emojis = ["🤍","💖","🧸","✨","💐"];
  float.className = "float";
  float.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  float.style.left = Math.random() * 100 + "vw";
  float.style.bottom = "0px";

  document.body.appendChild(float);

  setTimeout(() => {
    float.remove();
  }, 3000);
}
