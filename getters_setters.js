const person = {
    firstname: 'Aniket',
    lastname: 'Yadav',
    get fullName(){
        return `${person.firstname} ${person.lastname}`
    },

    set fullName(value){
        const parts = value.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
};

person.fullName = 'John Smith'

console.log(person);