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
  if (input.placeholder) return false;

  var color = color || '#AAA';

  if (input.value === '' || input.value == input.getAttribute('placeholder')) {
    input.value = input.getAttribute('placeholder');
    input.style.color = color;
  }

  input[/*@cc_on'attachEvent'||@*/'addEventListener'](/*@cc_on'on'+@*/'focus', function(){
    this.style.color = '';
    if (this.value == this.getAttribute('placeholder')) {
      this.value = '';
    }
  }, false);

  input[/*@cc_on'attachEvent'||@*/'addEventListener'](/*@cc_on'on'+@*/'blur', function(){
    if (this.value === '') {
      this.value = this.getAttribute('placeholder');
      this.style.color = color;
    } else {
      this.style.color = '';
    }
  }, false);

  return input;
};
