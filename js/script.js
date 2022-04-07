const container = document.querySelector(".container");
const generateBtn = container.querySelector(".form button");
const qrinput = container.querySelector(".form input");
const qrImg = container.querySelector(".qr-code img");

generateBtn.addEventListener("click",()=>{
    let qrValue = qrinput.value; 
    if(qrValue === ""){
        return;
    }
    generateBtn.textContent = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        container.classList.add("active");
        generateBtn.textContent = "Generate QR Code";
    });
});

qrinput.addEventListener("keyup",()=>{
    if(qrinput.value === "")
    container.classList.remove("active");
});