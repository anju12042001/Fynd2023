const Constants = require( '../Constants' );
const ErrorFunction = require( './ErrorFunction' );

function polarTransform( a, b, out ) {

	var v1 = ( 2.0 * a ) - 1.0;
	var v2 = ( 2.0 * b ) - 1.0;
	var r = ( v1 * v1 ) + ( v2 * v2 );
	if ( r >= 1.0 || r == 0.0 ) {
		x = 0;
		y = 0;
		return false;
	}

	var fac = Math.sqrt( -2.0 * Math.log( r ) / r );
	out.x = v1 * fac;
	out.y = v2 * fac;
	return true;

}

class Normal {
	constructor( mean, deviation ) {
		this.mean = mean || 0;
		this.deviation = deviation || 1;
	}

	denisty( x ) {
		var d = ( x - this.mean ) / this.deviation;
		return Math.exp( -0.5 * d * d ) / ( Constants.sqrt2π * this.deviation );
	}

	densityLn( x ) {
		var d = ( x - this.mean ) / this.deviation;
		return ( -0.5 * d * d ) - Math.log( this.deviation ) - Constants.logSqrt2π;
	}

	cumulative( x ) {
		return 0.5 * ErrorFunction.erfc( ( this.mean - x ) / ( this.deviation * Constants.sqrt2 ) );
	}

	quantile( p ) {
		return this.mean - ( this.deviation * Constants.sqrt2 * ErrorFunction.erfcInv( 2.0 * p ) );
	}

	setVarience( v ) {
		this.deviation = Math.sqrt( v );
		return this;
	}

	setPrecision( p ) {
		this.deviation = 1 / Math.sqrt( p );
		return this;
	}

	entropy() {
		return Math.log( this.deviation ) + Constants.logSqrt2πe;
	}

	skewness() {
		return 0;
	}

	mode() {
		return this.mean;
	}

	median() {
		return this.mean;
	}

	minimum() {
		return Number.NEGATIVE_INFINITY;
	}

	maximum() {
		return Number.POSITIVE_INFINITY;
	}

	samples( c ) {
		var generator = this.generate();
		var values = [];

		while ( values.length < c ) {
			values.push( generator.next().value );
		}
		return values;
	}

	* generate( random ) {
		random = random || new Math.random;
		var out = {};

		while ( true ) {
			if ( !polarTransform( random(), random(), out ) ) {
				continue;
			}

			yield this.mean + ( this.deviation * x );
			yield this.mean + ( this.deviation * y );
		}
	}
}