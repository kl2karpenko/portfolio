define("apiForNumbers", ['module', 'jquery'],
	function (module,$) {

	var moduleConfig = module.config();

	function multiply(a, b) {
		return a * b;
	}

	function sum(a, b) {
		return a + b;
	}

	return {
		sum: sum,
		multiply: multiply
	};

});