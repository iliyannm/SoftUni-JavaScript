function solve(arr) {
    const result = {};

    for (let i=0; i<arr.length; i++) {
        if (i % 2 == 0) {
            result[arr[i]] = Number(arr[i + 1]); 
        }
    };

    console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
)