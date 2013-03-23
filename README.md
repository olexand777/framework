Framework
=======

Framework is a very basic library of js.


Documentation
-------------

###$

Choose elements.

#####Example
```javascript
$('div');
```


###hasClass

Check if element has any class.

#####Example
```javascript
var flag = $('div').hasClass();
```

Check if element has class with name.

#####Example
```javascript
var flag = $('div').hasClass('name');
```


###addClass

Append class to all elements.

#####Example
```javascript
$('div').addClass('name');
```


###removeClass

Remove class from all elements.

#####Example
```javascript
$('div').removeClass('name');
```


###toggleClass

Add class if it is not and remove if it is.

#####Example
```javascript
$('div').toggleClass('name');
```


###HTML

Append HTML.

#####Example
```javascript
$('div').HTML('some');
```

Get HTML.

#####Example
```javascript
var value = $('div').HTML();
```


###text

Append text.

#####Example
```javascript
$('div').text('some');
```

Get text.

#####Example
```javascript
var value = $('div').text();
```


###addAttr

Append attribute.

#####Example
```javascript
$('div').addAttr('name','value');
```


###removeAttr

Remove attribute.

#####Example
```javascript
$('div').removeAttr('name');
```


###getAttr

Get attribute.

####Example
```javascript
var value = $('div').getAttr('name');
```
