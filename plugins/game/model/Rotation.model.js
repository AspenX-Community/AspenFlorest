export default class Rotation {

    
    constructor(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }

    set x( x ) {
        this._x = x;    
    }
    get x() {
        return this._x;
    }

    set y( y ) {
        this._y = y;    
    }
    get y() {
        return this._y;
    }
    
    set z( z ) {
        this._z = z;    
    }
    get z() {
        return this._z;
    }
    
    
}
