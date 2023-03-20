class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (department in this.departments == false) {
            this.departments[department] = [];
        }

        if (!name) {
            throw new Error('Invalid input!')
        }
        if (!salary || salary < 0) {
            throw new Error('Invalid input!')
        } 
        if (!position) {
            throw new Error('Invalid input!')
        } else {
            this.departments[department].push({name, position, salary})
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }

    bestDepartment() {
        let result = '';
        let bestDepartment;
        let highestAverageSalary = 0;
        for(let d in this.departments) {
            let currentAverageSalary = 0;
            for (let person of this.departments[d]) {
                currentAverageSalary += person.salary;
            }
            currentAverageSalary /= this.departments[d].length;
            if (currentAverageSalary > highestAverageSalary) {
                highestAverageSalary = currentAverageSalary.toFixed(2);
                bestDepartment = d;
            }   
        }

        this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        result += `Best Department is: ${bestDepartment}` + '\n' + `Average salary: ${highestAverageSalary}` + '\n';
        for (let employee of this.departments[bestDepartment]) {
            result += `${employee.name} ${employee.salary} ${employee.position}` + '\n';
        }

        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
