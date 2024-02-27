function community() {  // here {} is the scope
    let goals = "Lets Grow Together";
    return goals;
}

let vision = community();  // community is present inside the scope
console.log(vision); // Lets Grow Together


// local and global scope

let suv = "Thar";  // global scope which can be accessed anywhere in the program

function offRoad() { // local scope
    let sedan = "verna";
    console.log(sedan); 
    console.log(suv); // Thar is a global scope that can be anywhere
}

offRoad();
console.log(suv); // Thar
console.log(sedan); // error : sedan is a local scope and can't be accessed outside the function offRoad
