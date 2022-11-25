import {onEvent, select, selectAll, create, log} from './utils.js';

'use strict';



/*****************************************
        Variables
*****************************************/
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
const nameRegex = /^[a-z ,.'-]+$/i;
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

    getName() {
        console.log(getName())
        if(city.length > 1) {
            this.#city = city;
            return this.#name;
        } else {
            throw new TypeError('City is not valid');
        }
    }
    
    getCity() {
        if(email.length > 0) {
            this.#email = email;
            return this.#city;
        } else {
            throw new TypeError('Email is not valid');
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


/*****************************************
        Creating new Contact
*****************************************/
function newContact(name, city, email) {
    const createContact = new Contact(name, city, email)
    return createContact
};


/*****************************************
        Building Contact
*****************************************/
const arr = []
function createContact(obj){
   
    const contactInput = contactInfo.value.split(', ');

    if(contactInfo.value == '') {
        errorOutput.innerText = 'Enter the fields above!'
    } else {
        let contactDiv = create('div');
        contactDiv.className = 'contact';
        parent.appendChild(contactDiv);
        arr.push(obj)
        contactCounter.innerText = `Contacts: ${arr.length}`

        // Delete contact
        contactDiv.onclick = function() {
            contactDiv.remove()
            contactCounter.innerText = `Contacts: ${arr.length -= 1}`
        }
        contactDiv.innerText = `Name: ${contactInput[0]}\nCity: ${contactInput[1]}\n Email: ${contactInput[2]}`
    }
}


/*****************************************
        Assigning new Contact
*****************************************/
function assignContact(){
   
        if(contactInfo.value !== ''){
            const contactInput = contactInfo.value.split(', ');
            // Email Validation
            if(!emailRegex.test(contactInput[2])){
                errorOutput.innerText = 'Email is not valid. Delete and try again.'

            }else if (!cityRegex.test(contactInput[1])) {
                errorOutput.innerText = 'City is not valid. Delete and try again.'
    
            } else if(!nameRegex.test(contactInput[0])){
                errorOutput.innerText = 'Name is not valid. Delete and try again.'
    
            }
        } else {
            errorOutput.innerText = 'Full Name, City and Email are required.';
        }
        

   // Counter

}

/*****************************************
        onEvent add
*****************************************/


onEvent('click', add, function(){
    event.preventDefault(assignContact(createContact()))
})




// onEvent('click', contactBox, function() {

// })