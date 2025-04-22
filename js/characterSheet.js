        
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", function() {
        atualizarFicha();
    });
});

window.onload = function() {
    atualizarFicha();
}

let informacoes = {
    nome: "",
    tamanho: 0,
    idade: 0.0,
    mt: 0,
    carma: 0,
    alinhamento: "",
    raca: "",
    especie: "",
    divindade: "",
    elementoPrincipal: "",
    classe: "",
    subClasse: "",
    afinidade: 0,
    eficiencia: "0%",
    essencias: 0,
    vinculo: ""
}

let atributosPrimarios = {
    fisico: 0,
    mental: 0,
    mistico: 0
};

let atributosSecundario = {
    forca: 0,
    destreza: 0,
    vitalidade: 0,
    inteligencia: 0,
    conhecimento: 0,
    social: 0,
    fe: 0,
    poder: 0,
    sorte: 0
}

let statusMax = {
    pv: 0,
    pa: 0,
    pe: 0,
    sanidade: 0,
    oracoes: 0,
    pecados: 0,
    vontade: 0,
    percepcao: 0,
    deslocamento: 0,
    defesaFisica: 0,
    defesaMagica: 0
};

let statusAtual = {
    pv: 0,
    pa: 0,
    pe: 0,
    sanidade: 0,
    oracoes: 0,
    pecados: 0
};

let statusOutro = {
    pv: 0,
    pa: 0,
    pe: 0,
    sanidade: 0,
    oracoes: 0,
    pecados: 0,
    vontade: 0,
    percepcao: 0,
    deslocamento: 0,
    defesaFisica: 0,
    defesaMagica: 0
};

function setMT() {
    if(informacoes.tamanho < 0.3) {
        informacoes.mt = -4 + Math.floor((informacoes.tamanho - 0.3) * 10);
    } else if(informacoes.tamanho < 0.5) {
        informacoes.mt = -3;
    }else if(informacoes.tamanho < 1) {
        informacoes.mt = -2;
    } else if(informacoes.tamanho < 1.5) {
        informacoes.mt = -1;
    } else if(informacoes.tamanho < 2) {
        informacoes.mt = 0;
    } else if(informacoes.tamanho < 3) {
        informacoes.mt = 1;
    } else if(informacoes.tamanho < 5) {
        informacoes.mt = 2;
    } else if(informacoes.tamanho < 8) {
        informacoes.mt = 3;
    } else if(informacoes.tamanho < 10) {
        informacoes.mt = 4;
    } else if(informacoes.tamanho < 20) {
        informacoes.mt = 5;
    } else if(informacoes.tamanho < 30) {
        informacoes.mt = 6;
    } else if(informacoes.tamanho < 40) {
        informacoes.mt = 7;
    } else if(informacoes.tamanho < 50) {
        informacoes.mt = 8;
    } else if(informacoes.tamanho < 75) {
        informacoes.mt = 9;
    } else if(informacoes.tamanho <= 100) {
        informacoes.mt = 10;
    } else {
        informacoes.mt = 11 + Math.floor((informacoes.tamanho - 100) / 50);
    }
}

function setStatus() {
    informacoes.nome = document.getElementById("nome").value;
    informacoes.tamanho = Number(document.getElementById("tamanho").value);
    informacoes.idade = Number(document.getElementById("idade").value);
    /* informacoes.carma = Number(document.getElementById("carma").value);
    informacoes.raca = document.getElementById("raca").value;
    informacoes.especie = document.getElementById("especie").value;
    informacoes.divindade = document.getElementById("divindade").value;
    informacoes.elementoPrincipal = document.getElementById("elementoPrincipal").value;
    informacoes.classe = document.getElementById("classe").value;
    informacoes.subClasse = document.getElementById("subclasses").value;
    informacoes.essencias = Number(document.getElementById("essencias").value);
    */

    setMT();
}

function setAtributosPrimarios() {
    atributosPrimarios.fisico = Number(document.getElementById("fisico").value);
    atributosPrimarios.mental = Number(document.getElementById("mental").value);
    atributosPrimarios.mistico = Number(document.getElementById("mistico").value);
}

function setAtributosSecundario() {
    atributosSecundario.forca = Number(document.getElementById("forca").value);
    atributosSecundario.destreza = Number(document.getElementById("destreza").value);
    atributosSecundario.vitalidade = Number(document.getElementById("vitalidade").value);
    atributosSecundario.inteligencia = Number(document.getElementById("inteligencia").value);
    atributosSecundario.conhecimento = Number(document.getElementById("conhecimento").value);
    atributosSecundario.social = Number(document.getElementById("social").value);
    atributosSecundario.fe = Number(document.getElementById("fe").value);
    atributosSecundario.poder = Number(document.getElementById("poder").value);
    atributosSecundario.sorte = Number(document.getElementById("sorte").value);
}

function setStatusOutro() {
    statusOutro.pv = Number(document.getElementById("pvOutro").value);
    statusOutro.pa = Number(document.getElementById("paOutro").value);
    statusOutro.pe = Number(document.getElementById("peOutro").value);
    statusOutro.sanidade = Number(document.getElementById("sanidadeOutro").value);
    statusOutro.oracoes = Number(document.getElementById("oracoesOutro").value);
    statusOutro.pecados = Number(document.getElementById("pecadosOutro").value);
    statusOutro.vontade = Number(document.getElementById("vontadeOutro").value);
    statusOutro.percepcao = Number(document.getElementById("percepcaoOutro").value);
    statusOutro.deslocamento = Number(document.getElementById("deslocamentoOutro").value);
    statusOutro.defesaFisica = Number(document.getElementById("defesaFisicaOutro").value);
    statusOutro.defesaMagica = Number(document.getElementById("defesaMagicaOutro").value);
}

function setStatusMax() {
    statusMax.pv = atributosSecundario.vitalidade * 4 + Number(informacoes.mt >= 0 ? atributosPrimarios.fisico * (informacoes.mt + 1) : atributosPrimarios.fisico + informacoes.mt) + statusOutro.pv;
    statusMax.pa = atributosSecundario.poder + atributosPrimarios.mistico + statusOutro.pa;
    statusMax.pe = atributosSecundario.poder + 1 + statusOutro.pe;
    statusMax.sanidade = atributosSecundario.inteligencia + atributosPrimarios.mental + statusOutro.sanidade;
    statusMax.oracoes = atributosSecundario.fe + statusOutro.oracoes;
    statusMax.pecados = atributosSecundario.sorte + statusOutro.pecados;
    statusMax.vontade = atributosPrimarios.mistico + atributosSecundario.fe + statusOutro.vontade;
    statusMax.percepcao = atributosPrimarios.mental + atributosSecundario.conhecimento + statusOutro.percepcao;
    statusMax.deslocamento = Math.ceil((atributosPrimarios.fisico + atributosSecundario.vitalidade + atributosSecundario.destreza) / 3) 
    + statusOutro.deslocamento;
    statusMax.defesaFisica = Math.floor((atributosPrimarios.fisico + atributosSecundario.destreza) / 2) + 2 + statusOutro.defesaFisica;
    statusMax.defesaMagica = Math.floor((atributosPrimarios.mistico + atributosSecundario.poder) / 2) + 2 + statusOutro.defesaMagica;

}

function setStatusAtual() {
    statusAtual.pv = statusMax.pv;
    statusAtual.pa = statusMax.pa;
    statusAtual.pe = statusMax.pe;
    statusAtual.sanidade = statusMax.sanidade;
    statusAtual.oracoes = statusMax.oracoes;
    statusAtual.pecados = statusMax.pecados;
}

function escreverFicha() {
    document.getElementById("pv").innerHTML = statusAtual.pv;
    document.getElementById("pa").innerHTML = statusAtual.pa;
    document.getElementById("pe").innerHTML = statusAtual.pe;
    document.getElementById("sanidade").innerHTML = statusAtual.sanidade;
    document.getElementById("oracoes").innerHTML = statusAtual.oracoes;
    document.getElementById("pecados").innerHTML = statusAtual.pecados;
    document.getElementById("vontade").innerHTML = statusMax.vontade;
    document.getElementById("percepcao").innerHTML = statusMax.percepcao;
    document.getElementById("deslocamento").innerHTML = statusMax.deslocamento + " m";
    document.getElementById("defesaFisica").innerHTML = statusMax.defesaFisica;
    document.getElementById("defesaMagica").innerHTML = statusMax.defesaMagica;
    document.getElementById("mt").innerHTML = informacoes.mt;
}

function atualizarFicha() {
    setAtributosPrimarios();
    setAtributosSecundario();
    setStatusOutro();
    setStatusMax();
    setStatusAtual();
    setStatus();

    escreverFicha();
}

function mostrarSubClasse(value) {
    if(value == "reforço") {
        document.getElementById("subclasses").innerHTML = "<option value='caminho da espada'>Caminho da Espada</option>"+
        "<option value='caminho do escudo'>Caminho do Escudo</option>"+
        "<option value='caminho da magia'>Caminho da Magia</option>";
    } else if(value == "ampliação") {
        document.getElementById("subclasses").innerHTML = "<option value='táticas de ataque'>Táticas de Ataque</option>"+
        "<option value='táticas de defesa'>Táticas de Defesa</option>"+
        "<option value='táticas de vantagem'>Táticas de Vantagem</option>";
    } else if(value == "invocação") {
        document.getElementById("subclasses").innerHTML = "<option value='conjuração agressiva'>Conjuração Agressiva</option>"+
        "<option value='conjuração defensiva'>Conjuração Defensiva</option>"+
        "<option value='conjuração tática'>Conjuração Tática</option>";
    }
    else {
        document.getElementById("subclasses").innerHTML = "<option value='tormenta corporal'>Tormenta Corporal</option>"+
        "<option value='tormenta mental'>Tormenta Mental</option>"+
        "<option value='tormenta espiritual'>Tormenta Espiritual</option>";
    }
}