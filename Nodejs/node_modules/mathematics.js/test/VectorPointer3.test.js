const Vector3 = require( '../source/Vector3' );
const VectorPointer3 = require( '../source/VectorPointer3' );

UnitTest = {
	constructorPreserves( test ) {
		// setup
		var array = [ 1, 2, 3, 4, 5, 6 ];

		// act
		var vector = new VectorPointer3( array );

		// validate
		test.ok( array[ 0 ] == 1 );
		test.ok( array[ 1 ] == 2 );
		test.ok( array[ 2 ] == 3 );
		test.expect( 3 );
		test.done();
	},

	get( test ) {
		// setup
		var array = [ 1, 2, 3, 4, 5, 6 ];

		// act
		var vector = new VectorPointer3( array, 3 );

		// validate
		test.ok( vector.x == 4 );
		test.ok( vector.y == 5 );
		test.ok( vector.z == 6 );
		test.expect( 3 );
		test.done();
	},

	set( test ) {
		// setup
		var array = [ 1, 2, 3, 4, 5, 6 ];
		var vector = new VectorPointer3( array );

		// act
		vector.set( 7, 8, 9 );

		// validate
		test.ok( array[ 0 ] == 7 );
		test.ok( array[ 1 ] == 8 );
		test.ok( array[ 2 ] == 9 );
		test.expect( 3 );
		test.done();
	},

	advanceRegress( test ) {
		// setup
		var array = [ 1, 2, 3, 4, 5, 6 ];
		var vector = new VectorPointer3( array );

		// act
		vector.advance();
		vector.set( 7, 8, 9 );
		vector.regress();
		vector.set( 10, 11, 12 );

		// validate
		var expected = [ 10, 11, 12, 7, 8, 9 ];
		for ( var i = 0; i < expected.length; i++ ) {
			test.ok( array[ i ] == expected[ i ] );
		}

		test.expect( expected.length );
		test.done();
	}
}

module.exports = UnitTest;