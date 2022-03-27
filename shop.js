var readline = require('readline-sync');

var catalog = [
    {
        id: '1',
        name: 'Клавиатура',          
        description: 'Лучшая клавиатура',
        sizes: '20x30',         
        price: 1000,         
        available: 'Доступен',
    },     
    {
        id: '2',
        name: 'Мышь',          
        description: 'Лучшая Мышь',
        sizes: '10x15',         
        price: 500,         
        available: 'Доступен',
    },
    {
        id: '3',
        name: 'Монитор',          
        description: 'Лучший Монитор',
        sizes: '1200x1500',         
        price: 1500,         
        available: 'Доступен',
    },
    {
        id: '4',
        name: 'Коврик',          
        description: 'Лучший Коврик',
        sizes: '200х200',         
        price: 700,         
        available: 'Доступен',
    },
    {
        id: '5',
        name: 'Флешка',          
        description: 'Лучшая Флешка',
        sizes: '20х30',         
        price: 800,         
        available: 'Доступен',
    },   
];

var basket = [
    {
        good: [catalog[0], catalog[1],],
        amount: 2,
    }
];
     
function product_add(userBasket, product,){
    newBasket = userBasket.good.concat(product);
    basket[0].good= newBasket
    let totalAmount = newBasket.length;
    userBasket.amount = totalAmount
    return console.log('Продукт добавлен, Ваша корзина:',newBasket)
}



function product_del(userBasket, product){
    for(let i = 0; i <= (basket[0].good.length); i++){
        if(userBasket.good.includes(product)){
            if(userBasket.good[i].id == product.id){
                basket[0].good.splice(i,i + 1);
                console.log(`Продукт успешно удален`);
                break;
            }
            else{
                continue;
            }
        }
        else {
            console.log('Вы выбрали товар, которого у Вас нету в корзине')
            break;
        }
    }
    basket[0].amount = userBasket.good.length
    return console.log('Ваши продукты:', basket[0].good)
}


function del_all(userBasket){
    basket[0].amount = 0;
    newBasket = []
    basket[0].good= newBasket
    return console.log('Корзина очищена', basket[0])

}

function total(userBasket){
    let totalSumm = 0;
    for(let i = 0; i <= (basket[0].good.length - 1); i++){
        totalSumm = totalSumm + userBasket.good[i].price;
    }
    return console.log(`Количество товаров в корзине: ${basket[0].good.length},\nСумма товаров: ${totalSumm}`)
}



function menu(){
    console.log(`\t\t\t**** МЕНЮ **** 
                Для добавления продукта нажмите - 1
                Для удаления продукта нажмите - 2
                Для очистки корзины нажмите - 3
                Для уточнения количества и суммы товаров нажмите - 4
                Для выхода из программы нажмите - 5
                Для вывода меню нажмите - 6`)
    while(true){
        var user_input = readline.question("Vvedite chislo: ");
        if (user_input == 1){
            product_add(basket[0], catalog[2]);
        }
        else if (user_input == 2){
            product_del(basket[0], catalog[0]);
        }
        else if (user_input == 3){
            del_all(basket[0]);
        }
        else if (user_input == 4){
            total(basket[0]);
        }
        else if (user_input == 5){
            break;
        }
        else if (user_input = 6){
            menu();
        }
    }
}

menu()
