import fs from 'node:fs';

export default class template {
    constructor(dir) {
        this.dir = dir;
    }

    render(file, value) {
        let data = fs.readFileSync(`${this.dir}/${file}.html`, 'utf8');
        if(value) Object.keys(value).forEach((key) =>
            data = data.replace(`{{ replace-${key} }}`, () => value[key])
        );
        return data;
    }
}
