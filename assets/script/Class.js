/*****************************************
        Class
*****************************************/

class Contact {

    #name;
    #city;
    #email;

    constructor (name, city, email) {
        this.name = name;
        this.city = city;
        this.email = email;
    }

    getName() {
        if(name.length > 1) {
            this.#name = name;
            return this.#name;
        } else {
            throw new TypeError('Name is not valid');
        }
    }
    
    getCity() {
        if(city.length > 0) {
            this.#city = city;
            return this.#city;
        } else {
            throw new TypeError('City is not valid');
        }
    }

    getEmail() {
        if(email.length > 0) {
            this.#email = email;
            return this.#email;
        } else {
            throw new TypeError('Email is not valid');
        }
    }
    
    getInfo() {
        return `Name: ${this.name}\nCity: ${this.city}\nEmail: ${this.email} `;
    }
}

export { Contact }