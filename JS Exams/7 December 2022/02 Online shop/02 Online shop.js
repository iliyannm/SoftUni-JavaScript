class OnlineShop {
    constructor (warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error('Not enough space in the warehouse.');
        }

        const item = {
            product,
            quantity
        }

        this.products.push(item);
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        const item = this.products.find(i => i.product == product);
        if (item == undefined) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        if (minimalQuantity <= item.quantity) {
            return `You have enough from product ${product}.`
        }

        let difference = minimalQuantity - item.quantity;
        item.quantity = minimalQuantity
        return `You added ${difference} more from the ${product} products.`
    }

    sellProduct(product) {
        const item = this.products.find(i => i.product == product);
        if (item == undefined) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        item.quantity -= 1;
        const soldProduct = {
            product,
            quantity: 1
        }
        this.sales.push(soldProduct);
        return `The ${product} has been successfully sold.`
    }

    revision() {
        let answer = ''
        let sales = this.sales.length;
        if (sales == 0) {
            throw new Error("There are no sales today!");
        }
        else {
            answer += `You sold ${sales} products today!` + '\n' + 'Products in the warehouse:';
        }

        for (let prod of this.products) {
            answer += '\n' + `${prod.product}-${prod.quantity} more left`
        }

        return answer;
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
