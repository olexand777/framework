function $(val) {
  return document.querySelector(val);
}

function $All(val) {
	return document.querySelectorAll(val);
}

function addClass(el,cls) {
	$(el).classList.add(cls);
}

function removeClass(el,cls) {
	$(el).classList.remove(cls);
}

function toggleClass(el,cls){
	$(el).classList.toggle(cls);
}

function HTML(el,value){
	if (value !== undefined) {
		$(el).innerHTML = value;	
	}
	else 
		return $(el).innerHTML;
}

function text(el,value){
	if (value !== undefined) {
		$(el).innerText = value;	
	}
	else 
		return $(el).innerText;
}

function addAttr (el,name,value){
	$(el).setAttribute(name,value);
}

function removeAttr(el,name){
	$(el).removeAttribute(name);
}

function getAttr(el,name){
	return $(el).getAttribute(name);
}

function hasClass(el,cls){
	if (cls === undefined) {
		if($(el).className !== "") return true;
	}
	else
	{
		var classes = $(el).className.split(" ");
		for (var i = 0; i < classes.length; i++) {
			if( classes[i] === cls ) return true;
		}
	}
	return false;
}
