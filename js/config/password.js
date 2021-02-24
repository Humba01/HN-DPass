// event.key -> propriedade para pegar a entrada do teclado.

// Componentes que devem ser verificados e coletados seus dados

// Tamanho da Senha
const tamanhoSenhaTipo1 = document.getElementById('tam_01');
const tamanhoSenhaTipo2 = document.getElementById('tam_02');
const tamanhoSenhaTipo3 = document.getElementById('tam_03');
const tamanhoSenhaTipo4 = document.getElementById('tam_04');
const tamanhoSenhaTipo5 = document.getElementById('tam_05');
const tamanhoSenhaTipo6 = document.getElementById('tam_06');
const tamanhoSenhaTipo7 = document.getElementById('tam_07');
const tamanhoSenhaTipo8 = document.getElementById('tam_08');
const tamanhoSenhaTipo9 = document.getElementById('tam_09');

// Caracteres Numéricos
const caracNumericos1 = document.getElementById('cat_n_01');
const caracNumericos2 = document.getElementById('cat_n_02');

// Caracteres Comuns
const caracComuns1 = document.getElementById('cat_c_01');
const caracComuns2 = document.getElementById('cat_c_02');

// Caracteres Especiais
const caracEspeciais1 = document.getElementById('cat_e_01');
const caracEspeciais2 = document.getElementById('cat_e_02');

//Entrada do Usuário
const inputValores = document.getElementById('inp_1');

//Mostragem da Entrada do Usuário
const inputValoresSubmitMostragem = document.getElementById('inp_c_m_1');

//Resultado
const quadroDoResultado = document.getElementById('disp_1');

var fb = 0;
var values = {itemTexto: []};

function adicionaItemAListaDeValores() {
  
  let novoItem = document.createElement('li');
  novoItem.classList.add("configurador_card__input_cont_most___lista____item");
  
  let novoItemTexto = document.createElement('p');
  novoItemTexto.classList.add("configurador_card__input_cont_most___lista____item_texto");
  novoItemTexto.id = `btn_${fb}`;
  
  let novoItemBotao = document.createElement('button');
  novoItemBotao.classList.add("configurador_card__input_cont_most___lista____item_botao");
  novoItemBotao.textContent = "✖";

  verificaEntrada(novoItem, novoItemTexto, novoItemBotao);
  
  novoItemBotao.addEventListener('click', function() {
    for(let r = 0; r < values.itemTexto.length; r++) {
      if(values.itemTexto[r] == novoItemTexto.textContent) {
        values.itemTexto.slice(r, r+1);
      }
    }
    inputValoresSubmitMostragem.removeChild(novoItem);
    console.log(values.itemTexto);
  });
}

function verificaEntrada(novoItem=HTMLLIElement, novoItemTexto=HTMLParagraphElement, novoItemBotao=HTMLButtonElement) {
  if(event.key == "Enter") {
    novoItemTexto.textContent = inputValores.value;
    novoItem.appendChild(novoItemTexto);
    novoItem.appendChild(novoItemBotao);
    inputValoresSubmitMostragem.appendChild(novoItem);
    fb++;

    let novosAtributos = new Object({"attr": novoItemTexto.textContent});
    console.log(novosAtributos);
    values.itemTexto.push(novosAtributos);
    console.log(values);
  }
}

inputValores.addEventListener('keydown', function() {
  adicionaItemAListaDeValores();
});

function _montaNovaSenha() {}
function mostraNovaSenha() {}