var fs = require('fs');

function Template(dir) {
    this.dir = dir;
}
  
Template.prototype.renderFile = function (file, value) {
    let data = fs.readFileSync(`${this.dir}/${file}.html`, 'utf8');
    if (value) {
        Object.keys(value).forEach(function(key) {
            data = data.replace(`{{ replace-${key} }}`, () => value[key]);
        });
    }
    return data;
}

Template.prototype.render = function (data, value) {
    if (value) {
        Object.keys(value).forEach(function(key) {
            data = data.replace(`{{ replace-${key} }}`, () => value[key]);
        });
    }
    return data;
}

module.exports = Template;
