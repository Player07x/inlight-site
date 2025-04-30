export class character {
    informacoes = {
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
    };


    atributosPrimarios = {
        fisico: 0,
        mental: 0,
        mistico: 0
    };


    atributosSecundario = {
        forca: 0,
        destreza: 0,
        vitalidade: 0,
        inteligencia: 0,
        conhecimento: 0,
        social: 0,
        fe: 0,
        poder: 0,
        sorte: 0
    };


    statusMax = {
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


    statusAtual = {
        pv: 0,
        pa: 0,
        pe: 0,
        sanidade: 0,
        oracoes: 0,
        pecados: 0
    };


    statusOutro = {
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

    setMT() {
        if (this.informacoes.tamanho < 0.3) {
            return -4 + Math.floor((this.informacoes.tamanho - 0.3) * 10);
        } else if (this.informacoes.tamanho < 0.5) {
            return -3;
        } else if (this.informacoes.tamanho < 1) {
            return -2;
        } else if (this.informacoes.tamanho < 1.5) {
            return -1;
        } else if (this.informacoes.tamanho < 2) {
            return 0;
        } else if (this.informacoes.tamanho < 3) {
            return 1;
        } else if (this.informacoes.tamanho < 5) {
            return 2;
        } else if (this.informacoes.tamanho < 8) {
            return 3;
        } else if (this.informacoes.tamanho < 10) {
            return 4;
        } else if (this.informacoes.tamanho < 20) {
            return 5;
        } else if (this.informacoes.tamanho < 30) {
            return 6;
        } else if (this.informacoes.tamanho < 40) {
            return 7;
        } else if (this.informacoes.tamanho < 50) {
            return 8;
        } else if (this.informacoes.tamanho < 75) {
            return 9;
        } else if (this.informacoes.tamanho <= 100) {
            return 10;
        } else {
            return 10 + Math.ceil((this.informacoes.tamanho - 100) / 50);
        }
    }

    setStatus() {
        this.informacoes.nome = document.getElementById("nome").value;
        this.informacoes.tamanho = Number(document.getElementById("tamanho").value);
        this.informacoes.mt = Number(this.setMT());
        this.informacoes.idade = Number(document.getElementById("idade").value);
        /* this.informacoes.carma = Number(document.getElementById("carma").value);
        this.informacoes.raca = document.getElementById("raca").value;
        this.informacoes.especie = document.getElementById("especie").value;
        this.informacoes.divindade = document.getElementById("divindade").value;
        this.informacoes.elementoPrincipal = document.getElementById("elementoPrincipal").value;
        this.informacoes.classe = document.getElementById("classe").value;
        this.informacoes.subClasse = document.getElementById("subclasses").value;
        this.informacoes.essencias = Number(document.getElementById("essencias").value);
        */
    }

    setAtributosPrimarios() {
        this.atributosPrimarios.fisico = Number(document.getElementById("fisico").value);
        this.atributosPrimarios.mental = Number(document.getElementById("mental").value);
        this.atributosPrimarios.mistico = Number(document.getElementById("mistico").value);
    }

    setAtributosSecundario() {
        this.atributosSecundario.forca = Number(document.getElementById("forca").value);
        this.atributosSecundario.destreza = Number(document.getElementById("destreza").value);
        this.atributosSecundario.vitalidade = Number(document.getElementById("vitalidade").value);
        this.atributosSecundario.inteligencia = Number(document.getElementById("inteligencia").value);
        this.atributosSecundario.conhecimento = Number(document.getElementById("conhecimento").value);
        this.atributosSecundario.social = Number(document.getElementById("social").value);
        this.atributosSecundario.fe = Number(document.getElementById("fe").value);
        this.atributosSecundario.poder = Number(document.getElementById("poder").value);
        this.atributosSecundario.sorte = Number(document.getElementById("sorte").value);
    }

    setStatusOutro() {
        this.statusOutro.pv = Number(document.getElementById("pvOutro").value);
        this.statusOutro.pa = Number(document.getElementById("paOutro").value);
        this.statusOutro.pe = Number(document.getElementById("peOutro").value);
        this.statusOutro.sanidade = Number(document.getElementById("sanidadeOutro").value);
        this.statusOutro.oracoes = Number(document.getElementById("oracoesOutro").value);
        this.statusOutro.pecados = Number(document.getElementById("pecadosOutro").value);
        this.statusOutro.vontade = Number(document.getElementById("vontadeOutro").value);
        this.statusOutro.percepcao = Number(document.getElementById("percepcaoOutro").value);
        this.statusOutro.deslocamento = Number(document.getElementById("deslocamentoOutro").value);
        this.statusOutro.defesaFisica = Number(document.getElementById("defesaFisicaOutro").value);
        this.statusOutro.defesaMagica = Number(document.getElementById("defesaMagicaOutro").value);
    }

    setStatusMax() {
        this.statusMax.pv = this.atributosSecundario.vitalidade * 4 + Number(this.informacoes.mt >= 0 ? this.atributosPrimarios.fisico * (this.informacoes.mt + 1) : this.atributosPrimarios.fisico + this.informacoes.mt) + this.statusOutro.pv;
        this.statusMax.pa = this.atributosSecundario.poder + this.atributosPrimarios.mistico + this.statusOutro.pa;
        this.statusMax.pe = this.atributosSecundario.poder + 1 + this.statusOutro.pe;
        this.statusMax.sanidade = this.atributosSecundario.inteligencia + this.atributosPrimarios.mental + this.statusOutro.sanidade;
        this.statusMax.oracoes = this.atributosSecundario.fe + this.statusOutro.oracoes;
        this.statusMax.pecados = this.atributosSecundario.sorte + this.statusOutro.pecados;
        this.statusMax.vontade = this.atributosPrimarios.mistico + this.atributosSecundario.fe + this.statusOutro.vontade;
        this.statusMax.percepcao = this.atributosPrimarios.mental + this.atributosSecundario.conhecimento + this.statusOutro.percepcao;
        this.statusMax.deslocamento = Math.ceil((this.atributosPrimarios.fisico + this.atributosSecundario.vitalidade + this.atributosSecundario.destreza) / 3) + this.statusOutro.deslocamento;
        this.statusMax.defesaFisica = Math.floor((this.atributosPrimarios.fisico + this.atributosSecundario.destreza) / 2) + 2 + this.statusOutro.defesaFisica;
        this.statusMax.defesaMagica = Math.floor((this.atributosPrimarios.mistico + this.atributosSecundario.poder) / 2) + 2 + this.statusOutro.defesaMagica;
    }

    setStatusAtual() {
        this.statusAtual.pv = this.statusMax.pv;
        this.statusAtual.pa = this.statusMax.pa;
        this.statusAtual.pe = this.statusMax.pe;
        this.statusAtual.sanidade = this.statusMax.sanidade;
        this.statusAtual.oracoes = this.statusMax.oracoes;
        this.statusAtual.pecados = this.statusMax.pecados;
    }

    escreverFicha() {
        document.getElementById("pv").innerHTML = this.statusAtual.pv;
        document.getElementById("pa").innerHTML = this.statusAtual.pa;
        document.getElementById("pe").innerHTML = this.statusAtual.pe;
        document.getElementById("sanidade").innerHTML = this.statusAtual.sanidade;
        document.getElementById("oracoes").innerHTML = this.statusAtual.oracoes;
        document.getElementById("pecados").innerHTML = this.statusAtual.pecados;
        document.getElementById("vontade").innerHTML = this.statusMax.vontade;
        document.getElementById("percepcao").innerHTML = this.statusMax.percepcao;
        document.getElementById("deslocamento").innerHTML = this.statusMax.deslocamento + " m";
        document.getElementById("defesaFisica").innerHTML = this.statusMax.defesaFisica;
        document.getElementById("defesaMagica").innerHTML = this.statusMax.defesaMagica;
        document.getElementById("mt").innerHTML = this.informacoes.mt;
    }
    
    atualizarFicha() {
    
        this.setStatus();
        this.setAtributosPrimarios();
        this.setAtributosSecundario();
        this.setStatusOutro();
        this.setStatusMax();
        this.setStatusAtual();
    
        this.escreverFicha();
    
    }

    save() {
        const jsonString = JSON.stringify(this);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const fileName = this.informacoes.nome ? `${this.informacoes.nome}.json` : 'characterSheet.json';
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

}