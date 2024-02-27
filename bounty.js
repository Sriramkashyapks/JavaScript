let variable = 0;

for (let i = 0; i < 10000000000; i++){
    variable = variable + 1;
}

console.log(variable);

// the issue is this program dosen't consume fully capacity of the core which it should be doing when I tried with htop, why?
// hint is provided with the question
