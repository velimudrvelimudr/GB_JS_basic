/* Урок 3. Циклы, массивы, структуры данных */
/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */
/* 
// Решето Эратосфена
var i = 2
var simples = [] // список Простых чисел.

while(i <= 100) {
    if(simples.length === 0) {simples.push(i)} else {
        var j = 0
        while(j < simples.length) {
            if(i % simples[j] === 0) break
            j++
        }
        if(j === simples.length) simples.push(i)
    }
    i++
}
console.log(simples)
 */ 

/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. */
// Задание 2 - просто декларация. В 3-м начнём выполнять изложенные в нём пожелания.

/* 3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине; */
// В каждой строке двумерного массива будут 3 колонки: Название товара, количество единиц(килограммы, штуки, литры и т.п.) товара и цена (стоимость одной единицы) товара.
/* 
var prices= [
    ['Яблоки', 5, 25],
    ['молоко', 2, 50],
    ['чипсы', 3, 10],
    ['велосипеды', 1, 500]
]
 */
/* b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

/* function countBasketPrice(arr) {
    let summ = 0
    for(var i = 0; i < arr.length; i++) {
        summ += arr[i][1] * arr[i][2]
    }
    return summ
}

console.log(countBasketPrice(prices)) */

/* 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто} */

/* for(var i = 0; i < 10; console.log(i++)); */

/* 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */

/* for(var i = 0;i < 20;i++) {
    var j = 0
    var s = ""
    while (j <= i) {
        s += 'x'
        j++
    }
    console.log(s)
} */