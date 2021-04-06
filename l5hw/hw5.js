/* Шахматная доска. */
function chessBoardCreate() {
    const chessBoardContainer = document.body.querySelector('main > div')
    const tbl = document.createElement('table')
    chessBoardContainer.append(tbl)
    const gc = [null, 'A', 'B', 'C', 'D', 'E', 'F', 'g', 'H', null]

    for(let r = 0; r < 10; r++) {
        let trEl = document.createElement('tr')
        tbl.append(trEl)
        if(r === 0 || r === 9) trEl.className += "gBrd"
        for(let c = 0; c < 10; c++) {
            let tdEl = document.createElement('td')
            tbl.lastElementChild.append(tdEl)

            if(tdEl.parentElement.className == 'gBrd') tdEl.innerText = gc[c]
            else if((c === 0 || c === 9) && trEl.className !== 'gBrd') {
                tdEl.className = "vBrd"
                tdEl.innerText = r
            }
            else {
                if(r % 2 === 1 && c % 2 === 1 || r % 2 === 0 && c % 2 === 0) {
                    tdEl.className = "cWhite"
                    tdEl.innerText = "Б"
                } else {
                    tdEl.className = "cBlack"
                    tdEl.innerText = "Ч"
                }
            }
        }
    }
}

chessBoardCreate();

/* Корзина. */

cart = {
    goods: [], // Массив товаров.
    addGood: function(good, count) { // метод добавления товара в корзину.
        this.goods.push([good, count])
    },
    cartValue: function() { // Подсчитываем полную стоимость корзины.
        let cv = 0
        for(g in this.goods) {
            cv += this.goods[g][0].price * this.goods[g][1]
        }
        return cv
    },
    clearCart: function() {
        this.goods.length = 0
    },
    render: function() {
        let h1 = document.createElement('h1')
        h1.innerText = "Корзина"
        document.getElementById('cart').append(h1)
        if(this.goods.length == 0) {
            let pph = document.createElement('p')
            pph.innerText = "Корзина пуста!"
            document.getElementById('cart').append(pph)
            return undefined
        }
        let tbl = document.createElement('table')
        let trEl = document.createElement('tr')
        let th = document.createElement('th')
        th.innerText = "Название"
        trEl.append(th)
        th = document.createElement('th')
        th.innerText = "Количество"
        trEl.append(th)
        th = document.createElement('th')
        th.innerText = "Стоимость"
        trEl.append(th)
        tbl.append(trEl)
        for(g of this.goods) {
            let trEl = document.createElement('tr')
            let td = document.createElement('td')
            td.innerText = g[0].name
            trEl.append(td)
            td = document.createElement('td')
            td.innerText = g[1] + " " + g[0].unit
            trEl.append(td)
            td = document.createElement('td')
            td.innerText = g[0].price * g[1]
            trEl.append(td)
            tbl.append(trEl)
        }
        document.getElementById('cart').append(tbl)
        let total = document.createElement('p')
        document.getElementById('cart').append(total)
        total.innerText = `В корзине ${this.goods.length} товаров на сумму ${this.cartValue()} р.`
    }
}


// Создаём объект товара. Содержит в себе Наименование, цену и единицу измерения.)
function crGood(name, price, unit) {
    return {'name':name, 'price':price, 'unit':unit}
}

// Наполняем корзину.
cart.addGood(crGood('Яблоки', 50, 'КГ'), 10)
cart.addGood(crGood('Груши', 70, 'КГ'), 5)
cart.addGood(crGood('Велосипед', 200, 'шт'), 1)

cart.render() // Выводим заполненную таблицу.
cart.clearCart() // Очищаем корзину.
cart.render() // Пытаемся отрисовать пустую корзину.
