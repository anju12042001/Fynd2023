const Vector2 = require( './Vector2' );

class VectorPointer2 extends Vector2 {

	constructor( array, offset, stride ) {
		super( 0, 0, true );

		this.array = array;
		this.position = offset || 0;
		this.stride = stride || 2;
	}

	get x() {
		return this.array[ this.position ];
	}

	get y() {
		return this.array[ this.position + 1 ];
	}

	set x( v ) {
		this.array[ this.position ] = v;
	}

	set y( v ) {
		this.array[ this.position + 1 ] = v;
	}

	advance() {
		this.position += this.stride;
		return this;
	}

	regress() {
		this.position -= this.stride;
		return this;
	}

}

module.exports = VectorPointer2;