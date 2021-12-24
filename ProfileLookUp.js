/*
This is a program that returns the value/details of any contact paased into it from the contact list.
*/


var contacts = [
    {
    "firstname": "Äkira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownis Points"]
    },
    {
        "firstname": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstname": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstname": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Gaming", "JavaScript", "Foxes"]
    },
];


function lookUpProfile(name, prop) {
    for(var i= 0; i < contacts.length; i++) {
        if (contacts[i],firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Akira", "likes");

console.log(data)