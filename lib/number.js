'use strict';

// FUNCTIONS //

var exp = Math.exp;


// CDF //

/**
* FUNCTION: cdf( x, lambda )
*	Evaluates the cumulative distribution function (CDF) for an exponential distribution with rate parameter `lambda` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} lambda - rate parameter
* @returns {Number} evaluated CDF
*/
function cdf( x, lambda ) {
	if ( x < 0 ) {
		return 0;
	} else {
		return 1 - exp( - lambda * x );
	}
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
