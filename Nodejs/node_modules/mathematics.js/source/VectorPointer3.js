const Vector3 = require( './Vector3' );

class VectorPointer3 extends Vector3 {

	constructor( array, offset, stride ) {
		super( 0, 0, 0, true );

		this.array = array;
		this.position = offset || 0;
		this.stride = stride || 3;
	}

	get x() {
		return this.array[ this.position ];
	}

	get y() {
		return this.array[ this.position + 1 ];
	}

	get z() {
		return this.array[ this.position + 2 ];
	}

	set x( v ) {
		this.array[ this.position ] = v;
	}

	set y( v ) {
		this.array[ this.position + 1 ] = v;
	}

	set z( v ) {
		this.array[ this.position + 2 ] = v;
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

module.exports = VectorPointer3;