const myEye1 = document.querySelector('#myEye1');
const password = document.querySelector('#password')
var clickint = 0;
myEye1.addEventListener('click', function(e) {
    clickint++;
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    if (clickint === 1) {
        myEye1.src = "../resources/Icon _ Fonts/uicons-regular-rounded/svg/fi-rr-eye-crossed.svg"

    } else {
        myEye1.src = "../resources/Icon _ Fonts/uicons-regular-rounded/svg/fi-rr-eye.svg"
        clickint = 0;
    }
});