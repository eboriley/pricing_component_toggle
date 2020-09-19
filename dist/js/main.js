const _toggle = document.querySelector(".toggle");
const _card = document.querySelectorAll(".card");
const _price_1 = document.getElementById("price-1");
const _price_2 = document.getElementById("price-2");
const _price_3 = document.getElementById("price-3");

_toggle.addEventListener("click", () => {
    _toggle.classList.toggle("active")
    if (_toggle.classList.contains("active")) {
        _price_1.innerHTML = "$199.99";
        _price_2.innerHTML = "$249.99";
        _price_3.innerHTML = "$399.99";
    } else {
        _price_1.innerHTML = "$19.99";
        _price_2.innerHTML = "$24.99";
        _price_3.innerHTML = "$39.99";
    }

})

//code below flips the states of cards on hover 

// for (let i = 0; i < _card.length; i++) {
//     _card[i].addEventListener("mouseover", () => {
//         for (let i = 0; i < _card.length; i++) {
//             if (_card[i].classList.contains("active")) {
//                 _card[i].classList.remove("active")
//             }
//         }
//         _card[i].classList.add("active");
//     })
// }