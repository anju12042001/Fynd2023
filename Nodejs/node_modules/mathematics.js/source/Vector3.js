class Vector3 {

	constructor( x, y, z, p ) {
		if ( !p ) {
			this.x = x || 0;
			this.y = y || 0;
			this.z = z || 0;
		}
	}

	// setters and getters
	set( x, y, z ) {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	setX( x ) {
		this.x = x;
		return this;
	}

	setY( y ) {
		this.y = y;
		return this;
	}

	setZ( z ) {
		this.z = z;
		return this;
	}

	copy( v ) {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		return this;
	}

	clone() {
		return new Vector3( this.x, this.y, this.z );
	}

	add( v1, v2 ) {
		this.x = v1.x + v2.x;
		this.y = v1.y + v2.y;
		this.z = v1.z + v2.z;
		return this;
	}

	addSelf( v ) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		return this;
	}

	addScalar( s ) {
		this.x += s;
		this.y += s;
		this.z += s;
		return this;
	}

	sub( v1, v2 ) {
		this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;
		this.z = v1.z - v2.z;
		return this;
	}

	subComponent( v ) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		return this;
	}

	multiply( a, b ) {
		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;
		return this;
	}

	multiplySelf( v ) {
		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
		return this;
	}

	multiplyScalar( s ) {
		this.x *= s;
		this.y *= s;
		this.z *= s;

		return this;
	}

	divideSelf( v ) {
		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;
		return this;
	}

	divideScalar( s ) {
		this.x /= s;
		this.y /= s;
		this.z /= s;
		return this;
	}

	negate() {
		return this.multiplyScalar( -1 );
	}

	dot( v ) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}

	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}

	length() {
		return Math.sqrt( this.lengthSq() );
	}

	lengthManhattan() {
		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );
	}

	normalize() {
		return this.divideScalar( this.length() );
	}

	setLength( l ) {
		return this.normalize().multiplyScalar( l );
	}

	cross( a, b ) {
		this.x = a.y * b.z - a.z * b.y;
		this.y = a.z * b.x - a.x * b.z;
		this.z = a.x * b.y - a.y * b.x;
		return this;
	}

	crossSelf( v ) {
		const x = this.x,
			y = this.y,
			z = this.z;

		this.x = y * v.z - z * v.y;
		this.y = z * v.x - x * v.z;
		this.z = x * v.y - y * v.x;

		return this;
	}

	distanceTo( v ) {
		return Math.sqrt( this.distanceToSquared( v ) );
	}

	distanceToSquared( v ) {
		return new Vector3().sub( this, v ).lengthSq();
	}

	isZero() {
		return ( this.lengthSq() < 0.0001 /* almostZero */ );
	}

	max( a ) {
		for ( var i = 0; i < a.length; i++ ) {
			this.x = Math.max( a[ i ].x, this.x );
			this.y = Math.max( a[ i ].y, this.y );
			this.z = Math.max( a[ i ].z, this.z );
		}
	}

	min( a ) {
		for ( var i = 0; i < a.length; i++ ) {
			this.x = Math.min( a[ i ].x, this.x );
			this.y = Math.min( a[ i ].y, this.y );
			this.z = Math.min( a[ i ].z, this.z );
		}
	}

	midpoint( l, r ) {
		this.x = ( l.x + r.x ) / 2;
		this.y = ( l.y + r.y ) / 2;
		this.z = ( l.z + r.z ) / 2;
		return this;
	}
}

Vector3.Origin = Object.freeze( new Vector3( 0, 0, 0 ) );
Vector3.UnitX = Object.freeze( new Vector3( 1, 0, 0 ) );
Vector3.UnitY = Object.freeze( new Vector3( 0, 1, 0 ) );
Vector3.UnitZ = Object.freeze( new Vector3( 0, 0, 1 ) );

module.exports = Vector3;