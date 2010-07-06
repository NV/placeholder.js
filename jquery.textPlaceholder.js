/**
 * @param {String} [color='#AAA'] placeholder text color
 */
jQuery.fn.textPlaceholder = function (color) {

	color = color || '#AAA';

	return this.each(function(){

		var that = this;

		if (that.placeholder && 'placeholder' in document.createElement(that.tagName)) return;

		var default_color = that.style.color;
		var placeholder = that.getAttribute('placeholder');

		if (that.value === '' || that.value == placeholder) {
			that.value = placeholder;
			that.style.color = color;
		}

		var input = $(that);

		input.focus(function(){
			this.style.color = default_color;
			if (this.value == placeholder) {
				this.value = '';
			}
		});

		input.blur(function(){
			if (this.value === '') {
				this.value = placeholder;
				this.style.color = color;
			} else {
				this.style.color = default_color;
			}
		});

		that.form && $(that.form).submit(function(){
			if (that.value == placeholder) {
				that.value = '';
			}
		});

	});

};
