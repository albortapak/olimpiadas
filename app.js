function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  console.log(campoPesquisa);

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado. Digite o nome do atleta ou esporte</p>"
    return;
  }

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da pesquisa e constrói o HTML
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
    };
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }

  // Insere os resultados construídos na seção HTML
  section.innerHTML = resultados;
}