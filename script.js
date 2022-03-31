document.getElementById('burgerMenu').style.display = 'none';
let burgerBtn = document.getElementById('burgerBut');
burgerBtn.onclick = function () {
    if (document.getElementById('burgerMenu').style.display === 'none') {
        document.getElementById('burgerMenu').style.display = 'flex';
} else {
    document.getElementById('burgerMenu').style.display = 'none';
}};


let switchBtn = document.querySelector('.rates__switch');
            const priceOpt = 500;
            const priceProf = 1000;
switchBtn.onclick = function() {
            /*switchBtn.classList.toggle('switch2');*/
    if (switchBtn == document.querySelector('.rates__switch')) {
        switchBtn.classList.remove('rates__switch');
        switchBtn.classList.add('rates__switch2'); 
        switchBtn = document.querySelector('.rates__switch2');
        document.getElementById('priceOpt').textContent = priceOpt*12*0.95 + 'Р';
        document.getElementById('priceProf').textContent = priceProf*12*0.95 + 'Р';
        document.getElementById('mounth').style.fontWeight = 'normal';
        document.getElementById('year').style.fontWeight = 'bold';
        } else {
            switchBtn.classList.remove('rates__switch2');
            switchBtn.classList.add('rates__switch');
            document.getElementById('priceOpt').textContent = priceOpt + 'Р';
            document.getElementById('priceProf').textContent = priceProf + 'Р';
            document.getElementById('mounth').style.fontWeight = 'bold';
            document.getElementById('year').style.fontWeight = 'normal';
            };
        };
