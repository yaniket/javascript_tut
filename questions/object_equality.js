let address = new Address('a','b', 'c');
let address2 =new Address('a', 'b', 'c');

// Addresses are not same as they are stored in different memory locations hence returns false 
console.log("are_same", areSame(address, address2));

function Address(street,city, zipcode){

    this.street=street,
    this.city=city,
    this.zipcode=zipcode
}


function areSame(address,address2){
    console.log("type of address", typeof address);

    return address === address2;
}