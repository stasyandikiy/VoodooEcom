let select = function(){
    let selectTeg = document.querySelector('.wrapper select'); //знаходит селект по тегу
    let selectCustom = document.querySelector('.select');//знаходит кастомізовний селект
    replacedNode = selectTeg.parentNode.replaceChild(selectCustom, selectTeg);//Замінює через родителя єлемент

    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item =>{
        item.addEventListener('click', selectToggle)
    });
    selectItem.forEach(item =>{
        item.addEventListener('click', selectChoose)
    });
    function selectToggle(){
        this.parentElement.classList.toggle('is-active');
    };

    function selectChoose(){
        let text = this.innerText;
            select = this.closest('.select');
            currentText = select.querySelector('.select__header__current');
        currentText.innerText = text;
        select.classList.remove('is-active')
    }
}
select()


function initMap() {
    let opt = {
        center: {lat: 43.45299477416808, lng: -80.51338045976628},
        zoom: 17,
    }   
    let myMap = new google.maps.Map(document.querySelector('#map'), opt);

    let marker = new google.maps.Marker({
            position: opt.center,
            map: myMap,
            title: 'Ти знайшов Voodoo',
            icon: './assets/markerGoogle.png',
            animation: google.maps.Animation.DROP

        })

        //Вікно інформаційне по кліку маркера
    let popUpMap = document.querySelector('#popUpMap');
    let info= new google.maps.InfoWindow({
            content: popUpMap
        });
        marker.addListener("click", function(){
            popUpMap.style.display = 'block';
            info.open(myMap, marker)
        })
}
initMap() 