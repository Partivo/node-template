var fs = require('fs');

module.exports = {
	renderFile: function(file, data, options) {
		const str = fs.readFileSync(file, 'utf8');
		return this.render(str, data, options);
	},

	render: function(str, data, options = {}) {
		if (data)
			Object.keys(data).forEach(function(key) {
				str = str.replace(`{{ ${key} }}`, () => data[key]);
			});

		if(options.minify)
			str = this.minify(str);

		return str;
	},

	minify: function(str) {

	}
}
