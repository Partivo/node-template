var fs = require('fs');

function Template(dir) {
    this.dir = dir;
}
  
Template.prototype.renderFile = function (file, data) {
    let str = fs.readFileSync(`${this.dir}/${file}.html`, 'utf8');
    if (data) {
        Object.keys(data).forEach(function(key) {
            str = str.replace(`{{ ${key} }}`, () => data[key]);
        });
    }
    return str;
}

Template.prototype.render = function (str, data) {
    if (data) {
        Object.keys(data).forEach(function(key) {
            str = str.replace(`{{ ${key} }}`, () => data[key]);
        });
    }
    return str;
}

module.exports = Template;
