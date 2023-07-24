// What is the output
const courses = [
    {id: 1, name: "Javascript" },
    {id: 2, name: "Nodejs" }
]

console.log(courses.sort(function(a,b){

    console.log(a.name.length);

    if(a.name < b.name){
        return -1;
    }
    else{
        return 1;
    }

}));