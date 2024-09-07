function pesquisar() {
    let termoPesquisa = document.getElementById("termo-busca").value.toLowerCase();
    let section = document.getElementById("resultados-pesquisa");
    if (termoPesquisa == "") {
        section.innerHTML = "<div style= 'background: rgba(255, 255, 0, 1); text-align: center; margin: 5vh; padding: 1.5rem;'><p>Nada foi digitado! Escreva o nome de uma substância.</p><p>Sugestão:<b>Alecrim</b></p></div>"
        return };
    let resultados = "";
    for (let ativo of ativos){
        if (ativo.nome.toLowerCase().includes(termoPesquisa) || ativo.descricao.toLowerCase().includes(termoPesquisa) || ativo.nomeCientifico.includes(termoPesquisa) || ativo.tagsx.includes(termoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <div class="titulo">
                        <h2>
                            ${ativo.nome}
                        </h2>
                        <img src="${ativo.foto}" alt="${ativo.fotodesc}">
                    </div>
                    <div class="textinfo">
                        <p class="cientific_name"><b>Nome(s) científico(s): </b><i>${ativo.nomeCientifico}</i>
                        </p>
                        <h3>Para que serve</h3>
                        <p class="descricao-meta">
                            ${ativo.descricao}
                        </p>
                        <h3>Dosagem e posologia</h3>
                        <p class="descricao-meta">
                            ${ativo.dose}
                        </p>
                        <h3>Referências Adicionais</h3>
                        <ul>
                            <li>
                                <a href=${ativo.linkk} target="_blank">Mais informações farmacológicas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            `
        }
    }
;

if (!resultados) {
    resultados = "<div style= 'background: rgba(0, 255, 255, 1); text-align: center; margin: 5vh; padding: 1.5rem;'><p>Nada foi encontrado, verifique se o nome digitado está correto.</p><p>Sugestão:<b>Maca Peruana</b></p></div>"
}

section.innerHTML = resultados
}


// FUNÇÃO AUXILIADA PELA GEMINI, PARA DEFINIR TAMANHO MINIMO PARA O INPUT
function setInputMinWidth() {
    const inputs = document.querySelectorAll('input[placeholder]');
  
    inputs.forEach(input => {
      const placeholderText = input.getAttribute('placeholder');
      const tempElement = document.createElement('span');
      tempElement.style.visibility = 'hidden';
      tempElement.textContent = placeholderText;
      document.body.appendChild(tempElement);
  
      input.style.minWidth = tempElement.offsetWidth + 'px';
  
      document.body.removeChild(tempElement);
    });
  }
  
  setInputMinWidth();

  // FUNÇÃO AUXILIADA PELA GEMINI, PARA DEFINIR TAMANHO MINIMO PARA O BUTTON
  function setButtonMinWidth() {
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
      const buttonText = button.textContent;
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.textContent = buttonText;
      document.body.appendChild(tempSpan);
  
      button.style.minWidth = tempSpan.offsetWidth + 'px';
  
      document.body.removeChild(tempSpan);
    });
  }
  
  setInputMinWidth();




