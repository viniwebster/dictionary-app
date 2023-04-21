const fontBtn = document.getElementById('font');

fontBtn.addEventListener('click', abreMenuFontes)

function abreMenuFontes() {
    const fontsItens = document.querySelector('.header__fonts');
    const seta = document.getElementById('seta');

    if(fontsItens.style.display == "none"){
        fontsItens.style.display = "flex"
        seta.style.transform = "rotate("+180+"deg)"
    } else {
        fontsItens.style.display = "none"
        seta.style.transform = "rotate("+360+"deg)"
    }
}


const main = document.querySelector('main');
const btnFontes = document.querySelectorAll('.header__fonts-item');

btnFontes.forEach((botao)=>{   
    botao.addEventListener('click', (e)=>{
        console.log(e.target.id);
        main.style.fontFamily = e.target.id;
    })

})