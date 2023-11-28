const url = 'https://botafogo-atletas.mange.li';

const cria_cartao = (entrada) => { 

    const td = document.getElementById('players-container');
    td.style.display = 'flex';
    td.style.flexWrap = 'wrap';
    td.style.gap = '15px';


    const container_atleta = document.createElement('article');
    container_atleta.style.backgroundColor = '#777777';
    container_atleta.style.textAlign = 'center';
    container_atleta.style.margin = 'auto';
    container_atleta.style.width = '250px';
    container_atleta.style.height = '435px';
    
    container_atleta.dataset.id = entrada.id;
    container_atleta.dataset.altura = entrada.altura;
    container_atleta.dataset.nome_completo = entrada.nome_completo;
    container_atleta.dataset.nascimento = entrada.nascimento;
    container_atleta.dataset.descricao = entrada.descricao;
    
    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;
    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `foto de ${entrada.nome}`;

    const sm = document.createElement('button');
    sm.textContent = 'saiba mais';
    sm.style.margin = 'auto';
    sm.style.padding = '5px';


    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(sm);

    sm.onclick = manipulaClick;

    td.appendChild(container_atleta);
    
}

const manipulaClick = (e) => {
    const artigo = e.target.closest('article');
    //cookie
    document.cookie = `id=${artigo.dataset.id}`;
    document.cookie = `altura=${artigo.dataset.altura}`;
    document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
    document.cookie = `nascimento=${artigo.dataset.nascimento}`;
    document.cookie = `descricao=${artigo.dataset.descricao}`;
    
    //localStorage

    localStorage.setItem('id', artigo.dataset.id);
    localStorage.setItem('altura', artigo.dataset.altura);
    localStorage.setItem('nome_completo', artigo.dataset.nome_completo);
    localStorage.setItem('nascimento', artigo.dataset.nascimento);
    localStorage.setItem('descricao', artigo.dataset.descricao);
    
    window.location = `detalhe.html?id=${artigo.dataset.id}&nome_completo=${artigo.dataset.nome_completo}`;
}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e)=> e.startsWith(chave));
    return procurado.split('=')[1];
}

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pega_json(url).then( (r) => console.log(r));

pega_json(`${url}/all`)
.then((r) => {
    for (atleta of r){
        cria_cartao(atleta)
    }
});
