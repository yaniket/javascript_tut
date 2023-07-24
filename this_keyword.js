
const video = {
    title: "a",
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach((e)=>{
            console.log(this.title, e);
        },{firstName: "Mosh"});
    }
}

video.showTags()




// In case of regular function this refers to Windows object
// function regular(){
//     console.log(this);
// }
// regular();


// In case of constructor this refers to video object
// function Video(title){
//   this.title = title;
//   console.log(this);
// }

// const a = new Video("a");


console.log( undefined && "" && false);  