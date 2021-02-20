// Lista de resultados do input
const listaTermosAdicionados = document.getElementById('inputResultados');

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

function criaItemDaLista() {
  const itemLista = document.createElement("li");
  itemLista.classList.add("configurador_card__input___lista_resultados__item");
  listaTermosAdicionados.appendChild(itemLista);

  const itemComponentTexto = document.createElement("p");
  itemComponentTexto.classList.add("configurador_card__input___lista_resultados__item___componente____texto");
  itemLista.appendChild(itemComponentTexto);
  
  const itemComponentBotao = document.createElement("p");
  itemComponentBotao.classList.add("configurador_card__input___lista_resultados__item___componente____botao");
  itemComponentBotao.textContent = "✖";
  itemLista.appendChild(itemComponentBotao);

  deletaItemDaLista(itemComponentBotao, itemLista);

  return itemComponentTexto;
}

function deletaItemDaLista(componenteBotao=HTMLElement, componentItemLista=HTMLElement) {
  return componenteBotao.addEventListener("click", function() {
    listaTermosAdicionados.removeChild(componentItemLista);
  });
}

function pegaDadosInput() {
  document.addEventListener('keypress', function() {
    
    let entrada = event.key;
    
    if (entrada == "Enter") {
      criaItemDaLista();
      itemComponentTexto.textContent = inputValores;
    }
  });
}

pegaDadosInput();
