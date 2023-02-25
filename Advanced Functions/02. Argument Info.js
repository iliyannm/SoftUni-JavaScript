function solve(...arguments) {
    let objectTypes = {};
    let currentElementType;

    for (let el of arguments) {
        currentElementType = typeof el;
        console.log(`${currentElementType}: ${el}`);
        if (Object.keys(objectTypes).some(key => key === currentElementType)) {
            objectTypes[currentElementType] += 1
        } else {
            objectTypes[currentElementType] = 0
            objectTypes[currentElementType] += 1
        }
    }

    const sorted = Object.entries(objectTypes)
  .sort(([, a], [, b]) => b - a)
  .reduce(
    (r, [k, v]) => ({
      ...r,
      [k]: v
    }),
    {}
  )

    for (let key in sorted) {
        console.log(`${key} = ${objectTypes[key]}`)
    }

}

solve('cat', 42, function () { console.log('Hello world!'); })

solve({ name: 'bob'}, 3.333, 9.999)