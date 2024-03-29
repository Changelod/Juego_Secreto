const textBox = document.getElementById('textBox');
const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.getElementById('btnDecrypt');
const btnCopy = document.getElementById('btnCopy');
const mensage = document.getElementById('mensage');
const muneco = document.getElementById('muneco');
const emptyText = document.getElementById('emptyText');
const sectionRight = document.getElementById('sectionRight');


let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]


const remplace = (change) => {
    mensage.innerHTML = change
    muneco.style.display = 'none';
    textBox.value=""
    emptyText.style.display = 'none';
    sectionRight.classList.add("configRight")
    mensage.classList.add("configRight")
    btnCopy.classList.remove("btnHide");
}

 
btnEncrypt.addEventListener("click",() =>{
    const texto = textBox.value.toLowerCase()
    function encriptar(newText){
        for(let i=0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][0])){
            newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
             };
        };
        return newText
    }

    remplace(encriptar(texto));
  
});

btnDecrypt.addEventListener("click", () =>{
    const texto = textBox.value.toLowerCase();
    function desencriptar(newText) {
        for (let i = 0; i< remplazar.length; i++){
            if (newText.includes(remplazar[i][1])){
                newText = newText.replaceAll(remplazar[i][1],remplazar[i][0]);
            };
        };
        return newText
    };

    remplace(desencriptar(texto));

});

btnCopy.addEventListener("click",() => {
    let texto = mensage;
    texto.select();
    document.execCommand("copy")
    alert("Copiado")
    mensage.innerHTML = ""
    muneco.style.display = "block";
    emptyText.style.display = "block";
    btnCopy.classList.add("btnHide");
    
});