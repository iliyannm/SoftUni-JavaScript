  function solve(arr) {
    return arr.filter((x, i) => i % 2)
      .map(x => x * 2)
      .reverse()
      .join(' ');
  }