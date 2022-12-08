import { readFileSync } from 'fs';

export default class templateEngine {
    constructor(dir) {
        this.dir = dir;
    }

    render(file, value) {
        let data = readFileSync(`${this.dir}/${file}.html`, 'utf8');
        if (value)
            Object.keys(value).forEach((key) => data = data.replace(`{{ replace-${key} }}`, () => value[key])
            );
        return data;
    }
}
