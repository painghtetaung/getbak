document.getElementById('add_team').onclick = changeColor;
const add_icon = document.querySelector('#add_icon');
var click = 1;
if (click === 1) {
    document.querySelector('.bg-modal').style.display = "flex";
    document.getElementById('add_team').style.color = '#0055FF';
    document.getElementById('span_team').style.color = '#0055FF';
    add_icon.src = "../resources/Icon _ Fonts/uicons-regular-rounded/svg/fi-rr-add-blue.svg"
}

function changeColor() {
    click++;

    if (click === 1) {
        document.querySelector('.bg-modal').style.display = "flex";
        document.getElementById('add_team').style.color = '#0055FF';
        document.getElementById('span_team').style.color = '#0055FF';
        add_icon.src = "../resources/Icon _ Fonts/uicons-regular-rounded/svg/fi-rr-add-blue.svg"
    } else {
        document.getElementById('add_team').style.color = '#000000';
        document.getElementById('span_team').style.color = '#A5A5A5';
        add_icon.src = "../resources/Icon _ Fonts/uicons-regular-rounded/svg/fi-rr-add.svg"
        click = 0;
    }
    return false;
}

document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "none";
    document.getElementById('add_team').style.color = '#000000';
    document.getElementById('span_team').style.color = '#A5A5A5';
    add_icon.src = "../resources/Icon _ Fonts/uicons-regular-rounded/svg/fi-rr-add.svg"
    click = 0;
});