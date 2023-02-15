const Vector2 = require( '../source/Vector2' );
const VectorPointer2 = require( '../source/VectorPointer2' );

UnitTest = {
	constructorPreserves( test ) {
		// setup
		var array = [ 1, 2, 3, 4, 5, 6 ];

		// act
		var vector = new VectorPointer2( array );

		// validate
		test.ok( array[ 0 ] == 1 );
		test.ok( array[ 1 ] == 2 );
		test.expect( 2 );
		test.done();
	},

	get( test ) {
		// setup
		var array = [ 1, 2, 3, 4, 5, 6 ];

		// act
		var vector = new VectorPointer2( array, 3 );

		// validate
		test.ok( vector.x == 4 );
		test.ok( vector.y == 5 );
		test.expect( 2 );
		test.done();
	},

	set( test ) {
		// setup
		var array = [ 1, 2, 3, 4, 5, 6 ];
		var vector = new VectorPointer2( array );

		// act
		vector.set( 7, 8 );

		// validate
		test.ok( array[ 0 ] == 7 );
		test.ok( array[ 1 ] == 8 );
		test.expect( 2 );
		test.done();
	},

	advanceRegress( test ) {
		// setup
		var array = [ 1, 2, 3, 4, 5, 6 ];
		var vector = new VectorPointer2( array );

		// act
		vector.advance();
		vector.set( 7, 8 );
		vector.regress();
		vector.set( 10, 11 );

		// validate
		var expected = [ 10, 11, 7, 8, 5, 6 ];
		for ( var i = 0; i < expected.length; i++ ) {
			test.ok( array[ i ] == expected[ i ] );
		}

		test.expect( expected.length );
		test.done();
	}
}

module.exports = UnitTest;