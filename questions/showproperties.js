const movie ={
    title: "Shawshank redemption",
    year: 1998,
    rating: 4.5,
    director: "eren"
}


for(let key in movie){
        if(typeof movie[key] == "string"){
            console.log(key, movie[key] );
        }
    
    }
