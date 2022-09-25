function solve(names) {
    let newArrayOfNames = names.sort((a, b) => a.localeCompare(b));
    for (let i=0; i<newArrayOfNames.length; i++) {
        console.log(`${i+1}.${newArrayOfNames[i]}`)
    }
}

solve(["John", "Bob", "Christina", "Ema"])