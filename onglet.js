let btn = document.querySelectorAll('button');
let first = document.querySelector('.first-onglet');
let second = document.querySelector('.second-onglet');
let third = document.querySelector('.third-onglet');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let div = document.querySelector('div');

first.style.display = 'none';
second.style.display = 'none';
third.style.display = 'none';


function checkbtn1() {
    first.style.display = 'block';

    second.style.display = 'none';
    third.style.display = 'none';

}

function checkbtn2() {
    second.style.display = 'block';
    first.style.display = 'none';

    third.style.display = 'none';

}

function checkbtn3() {
    third.style.display = 'block';
    first.style.display = 'none';
    second.style.display = 'none';


}