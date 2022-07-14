var variations = document.querySelector('#ibsInput');
console.log(variations);
variations.addEventListener('input', function(e) {
    let pounds = e.target.value;
    console.log(pounds);
    document.querySelector('#gramsOutput').innerHTML = pounds/0.0022046;
    document.querySelector('#kilogramsOutput').innerHTML = pounds/2.2046;
    document.querySelector('#OunceOutput').innerHTML = pounds*16;
    visible.style.visibility = 'visible';
})

var visible = document.querySelector('#output')
console.log(visible);
visible.style.visibility = 'hidden';

