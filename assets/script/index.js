'use strict';

// Utility Functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
 }
    

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
}


function create(element, parent = document) {
    return parent.createElement(element);
}

function log(content) {
    console.log(content);
}

const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
const add = select('.add');
const userContact = select('.contact-input');
const parent = select('.contact-page');
const contactBox = select('.contact');
const name = ('.name');
const city = ('.city');
const email = ('.email');


class Contact {
    #name;
    #city;
    #email;

    constructor(name, city, email) {
        this.#name = name;
        this.#city = city;
        this.#email = email;
    }

    set Name(name){
        this.#name = name
    }

    getName(){
        return this.#name
    }

    getCity(){
        this.#city = this.city
        return this.#city
    }

    getEmail(){
        this._email = email;
        return this._email
    }

    getInfo(){
        return `Name: ${this.#name}\n City: ${this.#city}\n Email: ${this.email}`
    }
}

function newContact(name, city, email) {
    const createContact = new Contact(name, city, email)
    return createContact
};

function listContacts(obj) {
    const arr = [];
    
    let contactDiv = create('div');
    let pName = create('p');
    let pCity = create('p');
    let pEmail = create('p');

    pName.className = 'name';
    pCity.className = 'city';
    pEmail.className = 'email'
    contactDiv.className = 'contact';

    parent.appendChild(contactDiv);
    contactDiv.appendChild(pName);
    contactDiv.appendChild(pCity);
    contactDiv.appendChild(pEmail)
    
    arr.push(obj);
    contactDiv.innerText = `${obj.getInfo()}`
    console.log(obj.getInfo())
}

onEvent('click', add, function(){
    listContacts(newContact(name.value, city.value, email.value));
});

// onEvent('click', contactBox, function() {

// })