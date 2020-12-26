var eng = ["Hello user", "You chose English", "Let's work"];
var rus = ["Привет пользователь", "Ты выбрал русский язык", "Давай работать"];


let engBtn = document.querySelector(".header__eng-button");
let rusBtn = document.querySelector(".header__rus-button");

engBtn.addEventListener("click", function () {
    for (i = 0; i < eng.length; ++i) {
        console.log(eng[i]);
    }
});

rusBtn.addEventListener("click", function () {
    for (i = 0; i < rus.length; ++i) {
        console.log(rus[i]);
    }
});
