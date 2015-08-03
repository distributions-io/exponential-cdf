'use strict';

// FUNCTIONS //

var exp = Math.exp;


// PARTIAL //

/**
* FUNCTION: partial( lambda )
*	Partially applies rate parameter `lambda` and returns a function for evaluating the cumulative distribution function (CDF) for an exponential distribution.
*
* @param {Number} lambda - rate parameter
* @returns {Function} CDF
*/
function partial( lambda ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for an exponential distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
		if ( x < 0 ) {
			return 0;
		} else {
			return 1 - exp( - lambda * x );
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
