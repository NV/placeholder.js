placeholder.js — bring HTML 5 placeholder attribute to all browsers
===================================================================

[![placeholder](http://nv.github.com/placeholder.js/example.png)](http://nv.github.com/placeholder.js/)

The placeholder attribute is the part of [HTML5 specification](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#attr-input-placeholder).
Currently, it works only in WebKit-based browsers, like Google Chrome and Safari.
Placeholder.js fixes it!

Tested on IE 6—8, Firefox 3.5, Safari 4—5, Google Chrome 3—6, Opera 9.5—10.6.


## [jquery.textPlaceholder.js](http://nv.github.com/placeholder.js/jquery.textPlaceholder.js)

CSS: `.text-placeholder {color: #AAA !important}`  
JS: `$("[placeholder]").textPlaceholder();`

[An example](http://nv.github.com/placeholder.js/tests/jquery/textarea.html).


## [placeholder.js](http://nv.github.com/placeholder.js/placeholder.js) (pure JS version)

JS: `inputPlaceholder(document.getElementById('some_input'), "#AAA")`

[An example](http://nv.github.com/placeholder.js/tests/textarea.html).


## Limitations

placeholder.js doesn't work for `<input type='password'>` in IE (at least in IE ≤ 9). If you need it use [danielstocks/jQuery-Placeholder](https://github.com/danielstocks/jQuery-Placeholder) instead.