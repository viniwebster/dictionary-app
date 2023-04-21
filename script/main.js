const btn = document.getElementById('btn');
const input = document.getElementById('search');
const invalid = document.querySelector(".invalid");

/* elementos do html */
const meaningVerb = document.getElementById('meaning-verb');
const sinonimosVerb = document.getElementById('synonyms-verbs');

/* inicia a busca */
input.addEventListener('keydown', (e)=>{

    if(e.key === 'Enter'){

            dictionaryApi(input.value.toLowerCase());
            input.value = "";

            meaningVerb.innerHTML =  "";
            sinonimosVerb.innerHTML = "";     
            
    }
})


/* Acessa a API */
async function dictionaryApi(word) {
    invalid.textContent = ""
    
    if(word.length == 0){
        invalid.textContent = `Insert a word`;
    }

        let api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        let apiConvertida = await api.json();

    if(!api.ok){
        invalid.textContent = `Please insert a valid word`;
    }
        console.log(apiConvertida[0]);
        adicionaPalavra(apiConvertida[0].word, apiConvertida[0].phonetics[0].text);
        adicionaLink(apiConvertida[0].word);
        adicionaAudio(apiConvertida[0].phonetics, word);
        adicionaNoun(apiConvertida[0].meanings[0].definitions, apiConvertida[0].meanings[0].synonyms);
        adicionaVerb(apiConvertida[0].meanings[1].definitions, apiConvertida[0].meanings[1].synonyms);
      
}


/* Adiciona conteudo da API no HTML */
function adicionaPalavra(wordApi, phoneticApi){
    const word = document.getElementById('word');
    const phonetic = document.getElementById('phonetic');

    word.innerHTML = wordApi;

   if (!phoneticApi) {
    phonetic.innerHTML = "";
    } else {
        phonetic.innerHTML = phoneticApi; 
    }
}

function adicionaNoun(definitions, synonyms) {
    

    const meaning = document.getElementById('meaning__infos');
    meaning.innerHTML = `<span class="span__title"> Meaning</span>`;

    let posicaoAtual = 0;
    while (posicaoAtual < definitions.length) {
        meaning.innerHTML += ` <li class="meaning__infos-itens">${definitions[posicaoAtual].definition}</li> `
        if (definitions[posicaoAtual].example) {
            meaning.innerHTML += `<p class="meaning__infos-example">Example: ${definitions[posicaoAtual].example}</p></li>`
        }
        posicaoAtual++
    }  

    const sinonimos = document.getElementById('synonyms');
    sinonimos.innerHTML = "";

    let posicaoAtualSinonimo = 0;
    while (posicaoAtualSinonimo < synonyms.length) {
        sinonimos.innerHTML += `<span>${synonyms[posicaoAtualSinonimo]}</span>`

        posicaoAtualSinonimo++
    }

    if (synonyms.length == 0) {
        sinonimos.innerHTML = "";
    }

}


function adicionaVerb(definitions, synonyms) {
    
    let posicaoAtual = 0;
    while (posicaoAtual < definitions.length) {
        meaningVerb.innerHTML += ` <li class="meaning__infos-itens">${definitions[posicaoAtual].definition}</li> `
        if (definitions[posicaoAtual].example) {
            meaningVerb.innerHTML += `<p class="meaning__infos-example">Example: ${definitions[posicaoAtual].example}</p></li>`
        }
        posicaoAtual++
    }  

    let posicaoAtualSinonimo = 0;

    while (posicaoAtualSinonimo < synonyms.length) {
        sinonimosVerb.innerHTML += `<span>${synonyms[posicaoAtualSinonimo]}</span>`
        posicaoAtualSinonimo++
    }
}


function adicionaLink(word) {
    const link = document.getElementById('link');
    link.textContent = `https://en.wiktionary.org.wiki/${word}`
}
 