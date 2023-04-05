class RefurbishedSmartphones {
    constructor (retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone (model, storage, price, condition) {
        if (typeof model !== 'string' || model.trim().length <= 0) {
            throw new Error('Invalid smartphone!');
        }

        if (!Number.isInteger(storage) || storage < 0) {
            throw new Error('Invalid smartphone!');
        }

        if (typeof price !== 'number' || price < 0) {
            throw new Error('Invalid smartphone!');
        }

        if (typeof condition !== 'string' || condition.trim().length <= 0) {
            throw new Error('Invalid smartphone!');
        }

        const smartphone = {
            model,
            storage,
            price,
            condition
        }

        this.availableSmartphones.push(smartphone);

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    }

    sellSmartphone (model, desiredStorage) {
        let smartphoneIndex = this.availableSmartphones.findIndex(s => s.model == model);

        if (smartphoneIndex == -1) {
            throw new Error(`${model} was not found!`)
        }

        const currentSmartphone = this.availableSmartphones[smartphoneIndex];
        let soldPrice = 0;

        if (currentSmartphone.storage >= desiredStorage) {
            soldPrice = currentSmartphone.price;
        } else if (desiredStorage - currentSmartphone.storage <= 128) {
            soldPrice = currentSmartphone.price * 0.9;
            currentSmartphone.price = soldPrice;
        } else {
            soldPrice = currentSmartphone.price * 0.8;
            currentSmartphone.price = soldPrice;
        }

        this.availableSmartphones.splice(smartphoneIndex, 1);

        const soldSmartphone = {
            model, 
            storage: currentSmartphone.storage, 
            soldPrice
        }

        this.soldSmartphones.push(soldSmartphone);

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones () {
        if (this.availableSmartphones.length == 0) {
            throw new Error("There are no available smartphones!");
        }

        let answer = 'Upgraded Smartphones:';

        for (let phone of this.availableSmartphones) {
            phone.storage *= 2;
            answer += `\n` + `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`
        }

        return answer;
    }

    salesJournal (criteria) {
        if (criteria != 'model' && criteria != 'storage') {
            throw new Error('"Invalid criteria!"');
        }

        if (criteria == 'storage') {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        } else if (criteria == 'model') {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model))
        }

        const totalIncome = this.soldSmartphones.reduce((acc, cur) => acc + cur.soldPrice, 0);

        let answer = `${this.retailer} has a total income of ${totalIncome.toFixed(2)}$`
        answer += `\n` + `${this.soldSmartphones.length} smartphones sold:`

        for (let sp of this.soldSmartphones) {
            answer += `\n` + `${sp.model} / ${sp.storage} GB / ${sp.soldPrice.toFixed(2)}$`
        }

        return answer;
    }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));
