function cookTheNumbers(number, ...commands) {
    num = Number(number);

    for (let i=0; i<commands.length; i++) {
        switch (commands[i]) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num -= 0.2 * num; break
        }
        console.log(num);
    }
}

cookTheNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookTheNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')