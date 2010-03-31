/**
 * Example: inputPlaceholder( document.getElementById('my_input_element') )
 * @param {Element} input
 * @param {String} color
 * @return {Element} input
 */
function inputPlaceholder (input, color) {

  if (!input) return null;

  // Do nothing if placeholder supported by browser (Webkit, Firefox 3.7)
  if (input.placeholder && 'placeholder' in document.createElement(input.tagName)) return input;

  color = color || '#AAA';
  var default_color = input.style.color;
  var placeholder = input.getAttribute('placeholder');

  if (input.value === '' || input.value == placeholder) {
    input.value = placeholder;
    input.style.color = color;
  }

  var add_event = /*@cc_on'attachEvent'||@*/'addEventListener';

  input[add_event](/*@cc_on'on'+@*/'focus', function(){
    input.style.color = default_color;
    if (input.value == placeholder) {
      input.value = '';
    }
  }, false);

  input[add_event](/*@cc_on'on'+@*/'blur', function(){
    if (input.value === '') {
      input.value = placeholder;
      input.style.color = color;
    } else {
      input.style.color = default_color;
    }
  }, false);

  input.form && input.form[add_event](/*@cc_on'on'+@*/'submit', function(){
    if (input.value == placeholder) {
      input.value = '';
    }
  }, false);

  return input;
}
