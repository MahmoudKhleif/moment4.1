
// Create object1 with literal notation 
var movie1 = {
    title:"Star Wars",
    category:["Science fiction","Utbildning","Drama","Thriller"],
    playtime:104,
    getInformation:function(){
        return this.title +", "+ this.category[0]+", "+ this.playtime +" "+"Minuter";
    }   
}
// Create object2 with literal notation 
var movie2 = {
    title:"Interduktion Till Javascript",
    category:["Science fiction","Utbildning","Drama","Thriller"],
    playtime:24,
    getInformation:function(){
        return this.title +", "+ this.category[1]+", "+ this.playtime +" "+"Minuter";
    }   
}
// Create object3 with literal notation 
var movie3 = {
    title:"Borta med vinden",
    category:["Science fiction","Utbildning","Drama","Thriller"],
    playtime:210,
    getInformation:function(){
        return this.title +", "+ this.category[2]+", "+ this.playtime +" "+"Minuter";
    }   
}
// Create object4 with literal notation 
var movie4 = {
    title:"Jagad",
    category:["Science fiction","Utbildning","Drama","Thriller"],
    playtime:105,
    getInformation:function(){
        return this.title +", "+ this.category[3]+", "+ this.playtime +" "+"Minuter";
    }  
}

// Print info on text box(html) by calling getInformation function

document.getElementById('output').innerHTML += movie1.getInformation()+"\n"+ movie2.getInformation() +"\n"+ movie3.getInformation()+"\n"
+ movie4.getInformation();
