let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let para = document.querySelector('.para')

class Cars {
    constructor(name,year,price){
        this.name = name;
        this.year = year;
        this.price = price;
    }
    makeCheaper(){}
}
let pr;
function newcar(car){
    car = new Cars('BMW', Math.round(Math.random() * (2023 - 1950) + 1950), Math.round(Math.random() * (1000000 - 1000) + 1000))
    console.log(car)
    pr = car.price;
    para.textContent = pr;
    console.log(pr)
    a = 0
    rand = Math.round(Math.random() * (10 - 2) + 2)
}
let a = 0;
let rand = Math.round(Math.random() * (10 - 2) + 2)
function trade(){
    if(a == rand){
        alert('Або купляєш, або йдеш геть!')
        console.log(pr)
    }
    else{
        if(pr > 900000){
            pr = pr-50000;
            a++
            para.textContent = pr
            console.log(pr)
        }
        else if(pr > 700000 && pr < 900000){
            pr = pr-30000;
            a++
            para.textContent = pr
            console.log(pr)
        }
        else if(pr > 400000 && pr < 700000){
            pr = pr-20000;
            a++
            para.textContent = pr
            console.log(pr)
        }
        else if(pr > 100000 && pr < 400000){
            pr = pr-10000;
            a++
            para.textContent = pr
            console.log(pr)
        }
    }
}