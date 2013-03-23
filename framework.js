function $(val) {
	return document.querySelectorAll(val);
}

var Node = NodeList.__proto__ || NodeList.prototype;

Node.hasClass = function (value){
	if (value === undefined) {
		if(this[0].className !== "") return true;
	}
	else
	{
		var classes = this[0].className.split(" ");
		for (var i = 0; i < classes.length; i++) {
			if( classes[i] === value ) return true;
		}
	}
	return false;
}

Node.addClass = function (value) {
	for (var i = 0; i < this.length; i++) {
		this[i].classList.add(value);
	};
}

Node.removeClass = function(value) {
	for (var i = 0; i < this.length; i++) {
		this[i].classList.remove(value);
	};
}

Node.toggleClass = function(value){
	for (var i = 0; i < this.length; i++) {
		this[i].classList.toggle(value);
	};
	
}
Node.HTML = function(value){
	if (value !== undefined) {
		this[0].innerHTML = value;	
	}
	else 
		return this[0].innerHTML;
}

Node.text = function(value){
	if (value !== undefined) {
		this.innerText = value;	
	}
	else 
		return this.innerText;
}

Node.addAttr = function(name,value){
	for (var i = 0; i < this.length; i++) {
		this[0].setAttribute(name,value);
	};
	
}

Node.removeAttr = function(name){
	for (var i = 0; i < this.length; i++) {
		this[i].removeAttribute(name);
	};
}

Node.getAttr = function(name){
	return this[0].getAttribute(name);
}
