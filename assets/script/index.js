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


/*****************************************
        Variables
*****************************************/
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
const cityRegex = /^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$/;
const add = select('.add');
const parent = select('.contact-page');
const contactBox = select('.contact');
const contactInfo = select(".contact-input");
const contactCounter = select('.contact-counter p')
const errorOutput = select('.output')

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

    set name (name) {
        if(name.length > 0) {
            this.#name = name;
        } else {
            throw new TypeError('Name is not valid');
        }
    }

    get name() {
        return this.#name;
    }
    
    set city (city) {
        if(city.length > 1) {
            this.#city = city;
        } else {
            throw new TypeError('City is not valid');
        }
    }

    get city() {
        return this.#city;
    }

    set email (email) {
        if(email.length > 0) {
            this.#email = email;
        } else {
            throw new TypeError('Email is not valid');
        }
    }

    get email() {
        return this.#email;
    }
    
    getInfo() {
        return `Name: ${this.name}\nCity: ${this.city}\nEmail: ${this.email} `;
    }
}


/*****************************************
        Creating new Contact
*****************************************/
function newContact(name, city, email) {
    const createContact = new Contact(name, city, email)
    return createContact
};

/*****************************************
        Delete Contact
*****************************************/

/*****************************************
        Building Card
*****************************************/

function createContact(obj){
    let contactDiv = create('div');
    contactDiv.className = 'contact';
    parent.appendChild(contactDiv);
    const contactInput = contactInfo.value.split(', ');
    contactDiv.innerText = `Name: ${contactInput[0]}\n City: ${contactInput[1]}\n Email: ${contactInput[2]}`

    const arr = [];
    arr.push(obj);
}
/*****************************************
        Assigning new Contact
*****************************************/
function assignContact(){
  let valid = true;
    
    if(contactInfo.value !== ''){
        const contactInput = contactInfo.value.split(', ');
        // Email Validation
        if(!emailRegex.test(contactInput[2])){
            errorOutput.innerText = 'Email is not valid. Delete and try again.'
            valid = false;
        }else if (!cityRegex.test(contactInput[1])) {
            errorOutput.innerText = 'City is not valid. Delete and try again.'
            valid = false;

        } else if(!nameRegex.test(contactInput[0])){
            errorOutput.innerText = 'Name is not valid. Delete and try again.'
            valid = false;

        }
    } else {
        errorOutput.innerText = 'Full Name, City and Email are required';
    }
    


    // Counter

}

/*****************************************
        onEvent add
*****************************************/
onEvent('click', add, function(){
    assignContact(createContact())
})




// onEvent('click', contactBox, function() {

// })