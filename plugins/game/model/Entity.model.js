import Position from './Position.model.js';
import Rotation from './Rotation.model.js';
import TipoTextura from '../enum/tipoTextura.enum.js';
import TipoGeometria from '../enum/tipoGeometry.enum.js';

export default class Entity {

    _nome = "";
    _descrisao = "";
    _produtividade = 0;
    _icon ="";
    _selecionavel = false;
    _movivel = false;
    _position = new Position(0, 0, 0);
    _rotation = new Rotation( 0, 0, 0);

    _textura =  {    tipo: TipoTextura.BASIC,
                    data:{
                            color: 0x22a6dd
                    }
               };
    _geometria = {
        tipo:TipoGeometria.PLANO,
        data:[ 1 , 1 ]
    }

    constructor() {}

    set nome( nome ) {
        this._nome = nome;    
    }
    get nome() {
        return this._nome;
    }
    set descrisao( descrisao ) {
        this._descrisao = descrisao;    
    }
    get descrisao() {
        return this._descrisao;
    }
    
    set produtividade( produtividade ) {
        this._produtividade = produtividade;    
    }
    get produtividade() {
        return this._produtividade;
    }

    set position( position ) {
        this._position = position;    
    }
    get position() {
        return this._position;
    }
    set rotation( rotation ) {
        this._rotation = rotation;
    }
    get rotation() {
        return this._rotation;
    }
    get geometria(){
        return this._geometria;
    }
    get textura(){
        return this._textura;
    }
    get selecionavel(){
        return this._selecionavel;
    }
    get movivel(){
        return this._movivel;
    }
    get icon(){
        return this._icon;
    }
}
