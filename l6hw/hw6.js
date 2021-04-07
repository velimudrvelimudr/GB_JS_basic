/* Корзина. */

cart = {
    goods: [], // Массив товаров.

    init: function() {
        this.render()
    },

    buyEventHandler(event) { // А это все методы можно таким же синтаксисом добавлять (без : function), или только какие-то особенные? Из консоли cart.buyEventHandler(event) вызвалась нормально...
        this.clearCart()
        // Ну типа всё куплено и корзина очищается.
    },
    
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

    clearCart: function() { // Очищает корзину.
        this.goods.length = 0
        this.render()
    },

    render: function() { // отображает корзину в браузере.
        let cartC = document.getElementById('cart')
        cartC.innerHTML = '' // Очищаем корзину перед её отображением.
        let h1 = document.createElement('h1')
        h1.innerText = "Корзина"
        cartC.append(h1)
        if(this.goods.length == 0) {
            let pph = document.createElement('p')
            pph.innerText = "Корзина пуста!"
            cartC.append(pph)
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
        cartC.append(tbl)
        let total = document.createElement('p')
        total.innerText = `В корзине ${this.goods.length} товаров на сумму ${this.cartValue()} р.`
        cartC.append(total)
        let btn = document.createElement('button')
        btn.setAttribute('type', 'button')
        btn.innerText = "Купить"
        btn.addEventListener('click', event => this.buyEventHandler(event))
        cartC.append(btn)
    }
}

/* Каталог */

catalog = {
    goods: [],

    init: function() {
        this.load()
        this.render()
        document.querySelector('#catalog > button').addEventListener('click', event => this.addCartHandler(event))
        // Интересно, почему вы выносили связывание события в отдельную функцию...
    },

    addCartHandler(event) {
        cart.addGood(this.goods[0], 1) // Добавляем первый товар из каталога в корзину. Выбирать конкретный я пока не умею. Число единиц товара тоже не знаю, как запросить у пользователя. Собственно, в этом был смысл моего вопроса на вебинаре по поводу обработки форм.
        this.goods.push(this.goods.shift()) // Перекидываю первый товар в каталоге в конец, чтобы в корзину можно было бы добавить все товары, а не только первый.
        cart.render() // переотображение корзины и пересчёт её содержимого.
    },

    addGood: function(good) {
        this.goods.push(good)
    },

    load: function() { // Данная функция должна извлекать данные каталога из БД, или где он там будет храниться... Пока заполняем вручную.
        this.addGood({name: 'Яблоки', price: 50, unit: 'Кг'})
        this.addGood({name: 'Груши', price: 70, unit: 'Кг'})
        this.addGood({name: 'Велосипед', price: 200, unit: 'Шт.'})
    },

    render: function() { // Строкой добавлять действительно короче, нежели через объекты...
        let catC = document.getElementById('catalog')
        let htmt = `<h1>Каталог</h1>\n<table>\n<tr><th>Название</th><th>Цена</th></tr>\n`
        for(let g =0; g < this.goods.length; g++) {
            htmt += `<tr><td>${this.goods[g].name}</td><td>${this.goods[g].price} р. за 1 ${this.goods[g].unit}</td></tr>\n`
        }
        htmt += `</table>\n<button type="button">Добавиь в корзину!</button>`
        catC.innerHTML = htmt
    }
}

