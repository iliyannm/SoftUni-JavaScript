function solve(commands) {
    let result = [];

    for (let command of commands) {
        command = command.split(' ');
        if (command.length == 1 && command[0] == 'print') {
            console.log(result.join(','));
        } else {
            let [action, text] = command;
            if (action == 'add') {
                result.push(text);
            } else if (action == 'remove') {
                result = result.filter((value) => value != text);
            }
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])