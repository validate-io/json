/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isJSON = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-json', function tests() {

	it( 'should export a function', function test() {
		expect( isJSON ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isJSON( '{"a":5}' );
		assert.ok( bool );

		bool = isJSON( '{}' );
		assert.ok( bool );

		bool = isJSON( '[]' );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			'true',
			'null',
			'NaN',
			'[',
			'{',
			']',
			'}',
			'[{',
			']}',
			'{[',
			'}]',
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{},
			'{a":5}',
			new String( '{"a":5}' )
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isJSON( value );
		}
	});

});
