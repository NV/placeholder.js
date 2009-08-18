/**
 * @example InputPlaceholder( document.getElementById('my_input_element') )
 * @param {Element} input
 * @param {String} color
 * @return {Boolean}
 */
var InputPlaceholder = function(input, color) {

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

  input.onfocus = function(){
    this.style.color = '';
      if (this.value == this.getAttribute('placeholder')) {
          this.value = '';
      }
  };

  input.onblur = function(){
      if (this.value === '') {
          this.value = this.getAttribute('placeholder');
          this.style.color = color;
      } else {
          this.style.color = '';
      }
  };

	return true;
};
