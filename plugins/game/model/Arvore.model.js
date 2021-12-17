import Entity from './Entity.model.js';
import TipoTextura from '../enum/tipoTextura.enum.js';
import TipoGeometria from '../enum/tipoGeometry.enum.js';

export default class Arvore extends Entity{

    _selecionavel = false;
    _movivel = true;
    _icon ="game/carvalho.png";
    _textura =  {    tipo: TipoTextura.BASIC,
                     data: `game/carvalho.png`
               };
    _geometria = {
        tipo:TipoGeometria.PLANO,
        data:[ 1.3, 4 ]
    }

}

//module.exports = Grama;
