document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    const activate = document.querySelector('#activate');
    const light = document.querySelector(".traffic-light__lamp");
    const redLight = document.querySelector('.red-color');
    const yellowLight = document.querySelector('.yellow-color');
    const greenLight = document.querySelector('.green-color');

    function activateTrafLight() {
        if (light.hasAttribute("disabled")) {
            document.getElementsByClassName("traffic-light__lamp")[0].removeAttribute("disabled");
            document.getElementsByClassName("traffic-light__lamp")[1].removeAttribute("disabled");
            document.getElementsByClassName("traffic-light__lamp")[2].removeAttribute("disabled");
            redLight.onclick = activateRed;
            function activateRed() {
                redLight.style.background = '#ff0000';
                yellowLight.style.background = 'transparent';
                greenLight.style.background = 'transparent';
            }

            yellowLight.onclick = activateYellow;
            function activateYellow() {
                redLight.style.background = 'transparent';
                yellowLight.style.background = '#fff500';
                greenLight.style.background = 'transparent';

            }

            greenLight.onclick = activateGreen;
            function activateGreen() {
                redLight.style.background = 'transparent';
                yellowLight.style.background = 'transparent';
                greenLight.style.background = '#00923f';
            }
        }
    }
    function deactivateTrafLight(){
        redLight.onclick = false;
        redLight.style.background='transparent';
        yellowLight.onclick = false;
        yellowLight.style.background='transparent';
        greenLight.onclick = false;
        greenLight.style.background='transparent';
        document.getElementsByClassName("traffic-light__lamp")[0].setAttribute("disabled","");
        document.getElementsByClassName("traffic-light__lamp")[1].setAttribute("disabled","");
        document.getElementsByClassName("traffic-light__lamp")[2].setAttribute("disabled","");
    }
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            activateTrafLight();
        } else {
            deactivateTrafLight();
        }
    });
})