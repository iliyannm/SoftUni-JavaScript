class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0
    }

    reserveABottle (wineName, wineType, price) {
        if (this.space === 0) {
            throw new Error("Not enough space in the cellar.");
        }

        const wine = {
            wineName,
            wineType,
            price,
            paid: false
        }

        this.wines.push(wine);
        this.space -= 1;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle( wineName, price ) {
        const wineBottle = this.wines.find(w => w.wineName == wineName);

        if (wineBottle == undefined) {
            throw new Error(`${wineName} is not in the cellar.`)
        } else if (wineBottle.paid) {
            throw new Error(`${wineName} has already been paid.`)
        }

        wineBottle.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        let wineBottleIndex = this.wines.findIndex(w => w.wineName == wineName);

        if (wineBottleIndex == -1) {
            throw new Error(`The wine, you're looking for, is not found.`)
        }
        
        const wineBot = this.wines[wineBottleIndex]
        if (wineBot.paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        this.wines.splice(wineBottleIndex, 1);
        this.space += 1;
        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {
        if (wineType == undefined) {
            const firstRow = `You have space for ${ this.space } bottles more.`
            const secondRow = `You paid ${this.bill}$ for the wine.`
            const winesSortedNames = this.wines.map(w => w.wineName).sort((a, b) => a.localeCompare(b));
            let thirdRow = ``;
            for (let currentWineName of winesSortedNames) {
                for (let wineObject of this.wines) {
                    if (currentWineName == wineObject.wineName) {
                        let isPaid = wineObject.paid;
                        thirdRow += `\n` + `${currentWineName} > ${wineObject.wineType} - ${isPaid? 'Has Paid': 'Not Paid'}.`;
                    }
                }
            }
            return firstRow + '\n' + secondRow + thirdRow;
        } else {
            let wineBottleIndex = this.wines.findIndex(w => w.wineType == wineType);

            if (wineBottleIndex == -1) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            } else {
                return `${this.wines[wineBottleIndex].wineName} > ${wineType} - ${this.wines[wineBottleIndex].paid? 'Has Paid': 'Not Paid'}.`
            }
        }
    }
}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
