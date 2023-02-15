class Polynomial {
	constructor () {
		this.coefficients = arguments;
	}

	evaluate(v) {
		var sum = this.coefficients[this.coefficients.length - 1];
		for (var i = this.coefficients.length - 2; i >= 0; i--) {

            sum *= v;
			sum += this.coefficients[i];

		}

		return sum;
	}
}

module.exports = Polynomial;