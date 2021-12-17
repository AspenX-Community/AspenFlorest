import Entity from './Entity.model.js';
import TipoTextura from '../enum/tipoTextura.enum.js';
import TipoGeometria from '../enum/tipoGeometry.enum.js';


export default class Grama extends Entity{

    _selecionavel = true;
    _movivel = false;
    _textura =  {    tipo: TipoTextura.FACE,
                    data:[
                            `game/texture07.png` ,
                            `game/texture07.png` ,
                            `game/texture06.png` ,
                            `game/texture06.png` ,
                            `game/texture04.png` ,
                            `game/texture07.png` 
                    ],
                    dataSelecionado:[
                            `game/texture07.png` ,
                            `game/texture07.png` ,
                            `game/texture06.png` ,
                            `game/texture06.png` ,
                            `game/texture04-select.png` ,
                            `game/texture07.png` 
                    ]
               };
    _geometria = {
        tipo:TipoGeometria.CAIXA,
        data:[ 1, 1, 0.6 ]
    }
    

}

//module.exports = Grama;
