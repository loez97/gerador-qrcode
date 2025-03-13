const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Função para gerar QR Code
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value.trim();

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.onload = () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código gerado!";
  };
}

// Evento de clique no botão
qrCodeBtn.addEventListener("click", generateQrCode);

// Evento de Enter no campo de input
qrCodeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") generateQrCode();
});

// Limpar o QR Code se o campo estiver vazio
qrCodeInput.addEventListener("input", () => {
  if (!qrCodeInput.value.trim()) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
