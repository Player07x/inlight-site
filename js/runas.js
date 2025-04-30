import { character } from "./character.js";

const characterInstance = new character();
  
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", function() {
        characterInstance.atualizarFicha();
    });
});


window.onload = function() {
    characterInstance.atualizarFicha();
};

window.mostrarSubClasse = function(value) {
    
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

