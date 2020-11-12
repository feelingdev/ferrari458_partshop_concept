var carPage = $('.carpage');
var wheelPage = $('.wheelpage');

function showWheelsMenu() {
    $(carPage).attr('class', 'carpage carhide');
    setTimeout(()=> {
        $(wheelPage).css('display', '');
        $(wheelPage).attr('class', 'wheelpage wheelshow');
    }, 1500);
}

function showMainMenu() {
    $(wheelPage).attr('class', 'wheelpage wheelhide');
    setTimeout(() => {
        $(carPage).attr('class', 'carpage carshow');
        $(wheelPage).css('display', 'none');
    }, 600);
}