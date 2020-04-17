export class Modelrole {
    name: string;
    description: string;
    options: string;

    constructor(name = '', description= '', options = '') {
        this.name = name;
        this.description = description;
        this.options = options;
    }
}
