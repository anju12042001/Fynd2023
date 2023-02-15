// subdivide a triangle list so that no side is longer than max
subdivide( v, t, max ) {
	var maxSq = max * max;

	var A = new VectorPointer3( v ),
		B = new VectorPointer3( v ),
		C = new VectorPointer3( v ),
		a = new Vector3(),
		b = new Vector3(),
		c = new Vector3();

	var i = 0;
	while ( i < t.length ) {
		A.position = t[ i ] * 3;
		B.position = t[ i + 1 ] * 3;
		C.position = t[ i + 2 ] * 3;
		a.sub( B, C );
		b.sub( C, A );
		c.sub( A, B );

		var divideA = a.lengthSq() > maxSq;
		var divideB = b.lengthSq() > maxSq;
		var divideC = c.lengthSq() > maxSq;
		var divide = divideA + divideB + divideC;
		var append = ( v.length / 3 );

		if ( divide > 1 ) {
			//     A
			//    / \
			//   b - c
			//  / \ / \
			// C - a - B

			// split into four
			a.midpoint( B, C );
			b.midpoint( C, A );
			c.midpoint( A, B );

			// add vertices
			v.push( a.x, a.y, a.z );
			v.push( a.x, a.y, a.z );
			v.push( c.x, c.y, c.z );

			// triangles
			t.push( append, append + 1, append + 2 ); // a b c
			t.push( t[ i + 2 ], append + 1, append ); // C b a
			t.push( t[ i + 1 ], append, , append + 2 ); // B a c
			t[ i + 1 ] = append + 2; // A c b
			t[ i + 2 ] = append + 1;

		} else if ( divide == 1 ) {

			// split into two
			if ( divideA ) {
				//     A
				//    /|\
				//   / | \
				//  /  |  \
				// C - a - B
				a.midpoint( B, C );
				v.push( a.x, a.y, a.z );

				t.push( t[ i ], append, t[ i + 2 ] ); // A a C
				t[ i + 2 ] = append; // A B a
			} else if ( divideB ) {

				//     B
				//    /|\
				//   / | \
				//  /  |  \
				// A - b - C
				b.midpoint( B, C );
				v.push( b.x, b.y, b.z );

				t.push( append, t[ i + 1 ], t[ i + 2 ] ); // b B C
				t[ i + 2 ] = append; // A B b
			} else {

				//     C
				//    /|\
				//   / | \
				//  /  |  \
				// B - c - A
				b.midpoint( B, C );
				v.push( b.x, b.y, b.z );

				t.push( append, t[ i + 1 ], t[ i + 2 ] ); // c B C
				t[ i + 2 ] = append; // A c C
			}
		} else {
			// no splitting occoured, move onto the next triangle
			i += 3;
		}
	}
}