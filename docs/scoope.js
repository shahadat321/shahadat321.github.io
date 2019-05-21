Scope


function name() {
	this // scoope name

	var _this = this


	function innername() {
		this // innername

		var _newThis = this

		/*
		scoope this not work here beacuse this function create new boundary
		*/

		_this // access name this;


		function innerInnerName() {
			this // innerInnerName

			_this
			_newThis
		}

	}

}