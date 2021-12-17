import GRAMA from "./model/Grama.model.js";

const tipos = {
	GRAMA:  "grama",
    ARVORE: "arvore",
    model:function(tipo){
        switch(tipo){
            case tipos.GRAMA:
                break;
            case tipos.ARVORE:
                break;
        }
    }
}

export default tipos;