const audioHtml = document.querySelector('#audio');

const btnAudio = document.getElementById('play');
btnAudio.addEventListener('click', ()=>{
    audioHtml.play();
})


function adicionaAudio(sound) {  
   audioHtml.src = "";
   
   let find = sound.find(e => e.audio);
   audioHtml.src = find.audio;
   
}

