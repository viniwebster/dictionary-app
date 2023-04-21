const btnDarkMode = document.getElementById('flexSwitchCheckDefault');

btnDarkMode.addEventListener('click', ()=>{

    const body = document.querySelector('body');

    if (body.classList == ''){
        body.classList.add('dark')
    } else {
        body.classList.remove('dark')
    }

})