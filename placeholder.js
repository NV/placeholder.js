/**
 * Example: inputPlaceholder( document.getElementById('my_input_element') )
 * @param {Element} input
 * @param {String} color
 * @return {Element} input
 */
function inputPlaceholder (input, color) {

  if (!input) return null;

  /**
   * Webkit browsers already implemented placeholder attribute.
   * This function useless for them.
   */
  if ('placeholder' in document.createElement('input')) return input;

  var color = color || '#AAA';

  if (input.value === '' || input.value == input.getAttribute('placeholder')) {
    input.value = input.getAttribute('placeholder');
    input.style.color = color;
  }

  input[/*@cc_on'attachEvent'||@*/'addEventListener'](/*@cc_on'on'+@*/'focus', function(){
    input.style.color = '';
    if (input.value == input.getAttribute('placeholder')) {
      input.value = '';
    }
  }, false);

  input[/*@cc_on'attachEvent'||@*/'addEventListener'](/*@cc_on'on'+@*/'blur', function(){
    if (input.value === '') {
      input.value = input.getAttribute('placeholder');
      input.style.color = color;
    } else {
      input.style.color = '';
    }
  }, false);

  return input;
};
