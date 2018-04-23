function openTab(){
    const showTab = document.querySelector('#tabFirst');
    const showTab2 = document.querySelector('#tabSecond');
    const showTab3 = document.querySelector('#tabThird');

    showTab.onclick = toggle;
    showTab2.onclick = toggle2;
    showTab3.onclick = toggle3;

    function toggle(){
        showTab.classList.toggle('opened');
        showTab2.classList.remove('opened');
        showTab3.classList.remove('opened');
    }
    function toggle2(){
        showTab2.classList.toggle('opened');
        showTab.classList.remove('opened');
        showTab3.classList.remove('opened');

    }
    function toggle3(){
        showTab3.classList.toggle('opened');
        showTab.classList.remove('opened');
        showTab2.classList.remove('opened');
    }
}
openTab();