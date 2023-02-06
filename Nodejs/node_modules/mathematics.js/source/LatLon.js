const Constants = require( './Constants' );

class LatLon {

	constructor( latitude, longitude, p ) {
		if ( !p ) {
			this.a = latitude || 0;
			this.o = longitude || 0;
		}
	}

	get latitude() {
		return this.a;
	}

	set latitude( v ) {
		this.a = v;
	}

	get longitude() {
		return this.o;
	}

	set longitude( v ) {
		this.o = v;
	}

	get φ() {
		return this.a * Constants.toRadians;
	}

	get λ() {
		return this.o * Constants.toRadians;
	}

	get x() {
		return this.o;
	}

	set x( v ) {
		this.o = v;
	}

	get y() {
		return this.a;
	}

	set y( v ) {
		this.a = v
	}

	set( a, o ) {
		this.a = a;
		this.o = o;
		return this;
	}

	setRadians( a, o ) {
		this.a = a * Constants.toDegrees;
		this.o = o * Constants.toDegrees;
		return this;
	}

	copy( v ) {
		this.a = v.a;
		this.o = v.o;
		return this;
	}

	add( l, r ) {
		this.a = l.a + r.a;
		this.o = l.o + r.o;
		return this;
	}

	addSelf( v ) {
		this.a += v.a;
		this.o += v.o;
	}

	sub( l, r ) {
		this.a = l.a - r.a;
		this.o = l.o - r.o;
		return this;
	}

	subSelf( v ) {
		this.a -= v.a;
		this.o -= v.o;
		return this;
	}

	multiplyScalar( s ) {
		this.a *= s;
		this.o *= s;
		return this;
	}

	divideScalar( s ) {
		this.a /= s;
		this.o /= s;
		return this;
	}

	negate() {
		return this.multip.oScalar( -1 );
	}

	normalize() {
		this.o = ( this.o + 540 ) % 360 - 180;
		return this;
	}

	equals( v ) {
		return ( ( v.a === this.a ) && ( v.o === this.o ) );
	}

	destination( p, bearing, d, radius ) {
		bearing = bearing * Constants.toRadians;
		radius = radius || 6371000; // meters
		var φ1 = p.φ,
			λ1 = p.λ;

		// http://www.movable-type.co.uk/scripts/latlong.html
		var φ2 = Math.asin( Math.sin( φ1 ) * Math.cos( d / radius ) +
			Math.cos( φ1 ) * Math.sin( d / radius ) * Math.cos( bearing ) );
		var λ2 = λ1 + Math.atan2( Math.sin( bearing ) * Math.sin( d / radius ) * Math.cos( φ1 ),
			Math.cos( d / radius ) - Math.sin( φ1 ) * Math.sin( φ2 ) );

		this.setRadians( φ2, λ2 );
		return this;
	}

	midpoint( l, r ) {
		var φ1 = l.φ,
			φ2 = r.φ,
			λ1 = l.λ,
			λ2 = r.λ;

		// http://www.movable-type.co.uk/scripts/latlong.html
		var Bx = Math.cos( φ2 ) * Math.cos( λ2 - λ1 );
		var By = Math.cos( φ2 ) * Math.sin( λ2 - λ1 );
		var φ3 = Math.atan2( Math.sin( φ1 ) + Math.sin( φ2 ),
			Math.sqrt( ( Math.cos( φ1 ) + Bx ) * ( Math.cos( φ1 ) + Bx ) + By * By ) );
		var λ3 = λ1 + Math.atan2( By, Math.cos( φ1 ) + Bx );

		this.setRadians( φ3, λ3 );
		return this;
	}

	static bearing( l, r ) {
		var φ1 = l.φ,
			φ2 = r.φ,
			λ1 = l.λ,
			λ2 = r.λ;

		// http://www.movable-type.co.uk/scripts/latlong.html
		var y = Math.sin( λ2 - λ1 ) * Math.cos( φ2 );
		var x = Math.cos( φ1 ) * Math.sin( φ2 ) -
			Math.sin( φ1 ) * Math.cos( φ2 ) * Math.cos( λ2 - λ1 );

		return Math.atan2( y, x ) * Constants.toDegrees;
	}

	static distance( l, r, radius ) {
		radius = radius || 6371000; // meters
		var φ1 = l.φ,
			φ2 = r.φ,
			λ1 = l.λ,
			λ2 = r.λ,
			Δφ = ( φ2 - φ1 ),
			Δλ = ( λ2 - λ1 );

		// http://www.movable-type.co.uk/scripts/latlong.html
		var a = Math.sin( Δφ / 2 ) * Math.sin( Δφ / 2 ) +
			Math.cos( φ1 ) * Math.cos( φ2 ) *
			Math.sin( Δλ / 2 ) * Math.sin( Δλ / 2 );
		var c = 2 * Math.atan2( Math.sqrt( a ), Math.sqrt( 1 - a ) );

		return radius * c;
	}
}

module.exports = LatLon;