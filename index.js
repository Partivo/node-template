const fs = require('fs');

function templateEngine(dir) {
    this.dir = dir;
}

templateEngine.prototype.render = function(file, value) {
    let data = fs.readFileSync(`${this.dir}/${file}.html`, 'utf8');
    if(value) Object.keys(value).forEach((key) =>
        data = data.replace(`{{ replace-${key} }}`, () => value[key])
    );
    return data;
}
