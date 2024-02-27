function calculate (a, b, fn){
       if (fn === add){
        const sum = add(a, b);
        return sum;
       }
       if (fn === sub){
        const diff = sub(a, b);
        return diff;
       }
}

function add (a, b){
    return a + b;
}

function sub (a, b){
    return a - b;
}

const ans = calculate(10, 5, add);
console.log(ans);