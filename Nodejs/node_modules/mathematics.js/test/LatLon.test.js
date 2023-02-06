const LatLon = require( '../source/LatLon' );
const ε = 0.01;

UnitTest = {
	distance( test ) {
		// setup
		var p1 = new LatLon( 52.205, 0.119 );
		var p2 = new LatLon( 48.857, 2.351 );

		// act
		var d = LatLon.distance( p1, p2 ); // 404.3 km

		// validate
		test.ok( Math.abs( d - 404279.1639 ) < 1 );
		test.expect( 1 );
		test.done();
	},

	bearing( test ) {
		// setup
		var p1 = new LatLon( 52.205, 0.119 );
		var p2 = new LatLon( 48.857, 2.351 );

		// act
		var b1 = LatLon.bearing( p1, p2 ); // 156.16°
		var b2 = ( LatLon.bearing( p2, p1 ) + 180 ) % 360; // 157.89°

		// validate
		test.ok( Math.abs( b1 - 156.16 ) < ε );
		test.ok( Math.abs( b2 - 157.89 ) < ε );
		test.expect( 2 );
		test.done();
	},

	midpoint( test ) {
		// setup
		var p1 = new LatLon( 52.205, 0.119 );
		var p2 = new LatLon( 48.857, 2.351 );
		var pm = new LatLon();

		// act
		pm.midpoint( p1, p2 ); // 50.5363°N, 001.2746°E

		// validate
		test.ok( Math.abs( pm.latitude - 50.5363 ) < ε );
		test.ok( Math.abs( pm.longitude - 1.2746 ) < ε );
		test.expect( 2 );
		test.done();
	},

	destination( test ) {
		// setup
		var p1 = new LatLon( 51.4778, -0.0015 );
		var p2 = new LatLon();

		// act
		p2.destination( p1, 300.7, 7794 ); // 51.5135°N, 000.0983°W

		// validate
		test.ok( Math.abs( p2.latitude - 51.5135 ) < ε );
		test.ok( Math.abs( p2.longitude - ( -0.0983 ) ) < ε );
		test.expect( 2 );
		test.done();
	}
}

module.exports = UnitTest;