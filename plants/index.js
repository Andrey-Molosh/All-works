(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());



//Burger


(function () {

    const burgerItem = document.querySelector(".burger");
    const menu = document.querySelector(".header__nav");
    const menuCloseItem = document.querySelector(".header__nav-close");
    const headerCloseItem = document.querySelector(".header__nav");
    burgerItem.addEventListener('click', () => {
        menu.classList.add("header__nav_active");
        
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove("header__nav_active");

    });
    headerCloseItem.addEventListener('click', () => {
        menu.classList.remove("header__nav_active");

    });

    
}());




// Scroll to anchors


(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());





//Focus в секции Service



const gardenItems = document.querySelectorAll('.gardens');
const plantingItems = document.querySelectorAll('.planting');
const lawnItem = document.querySelector('.lawn');



const buttonGardens = document.getElementById('button_gardens');
const buttonLawn = document.getElementById('button_lawn');
const buttonPlanting = document.getElementById('button_planting');



// Gardens

buttonGardens.addEventListener('click', focusGardens);

function focusGardens() {

    if (buttonLawn.classList.contains('btn_selected')) {
        buttonLawn.classList.remove('btn_selected');
        buttonGardens.classList.add('btn_selected');

        plantingItems.forEach (plantingItem => {
            plantingItem.classList.add('service__card-focus');
        });

        lawnItem.classList.add('service__card-focus');

        gardenItems.forEach (gardenItem => {
                gardenItem.classList.remove('service__card-focus');
            });
    }

    else if (buttonPlanting.classList.contains('btn_selected')) {
        buttonPlanting.classList.remove('btn_selected');
        buttonGardens.classList.add('btn_selected');

        plantingItems.forEach (plantingItem => {
            plantingItem.classList.add('service__card-focus');
        });

        lawnItem.classList.add('service__card-focus');

        gardenItems.forEach (gardenItem => {
                gardenItem.classList.remove('service__card-focus');
            });
    }

    else if (buttonGardens.classList.contains('btn_selected')) {
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.remove('service__card-focus');
        });

        lawnItem.classList.remove('service__card-focus');
        buttonGardens.classList.toggle('btn_selected');
    }

    
     else {
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.toggle('service__card-focus');
        });

        lawnItem.classList.toggle('service__card-focus');

        buttonGardens.classList.add('btn_selected');
    }
}


// Planting

buttonPlanting.addEventListener('click', focusPlanting);


function focusPlanting() {

    if (buttonGardens.classList.contains('btn_selected')) {

        buttonGardens.classList.remove('btn_selected');

        gardenItems.forEach (gardenItem => {
            gardenItem.classList.add('service__card-focus');
        });

        plantingItems.forEach (plantingItem => {
            plantingItem.classList.remove('service__card-focus');
        });

    lawnItem.classList.add('service__card-focus');

    buttonPlanting.classList.add('btn_selected');
    }

    else if (buttonLawn.classList.contains('btn_selected')) {
        buttonLawn.classList.remove('btn_selected');
        gardenItems.forEach (gardenItem => {
            gardenItem.classList.add('service__card-focus');
        });

    lawnItem.classList.add('service__card-focus');

    plantingItems.forEach (plantingItem => {
        plantingItem.classList.remove('service__card-focus');
    });

    buttonPlanting.classList.add('btn_selected');
    }

   else if (buttonPlanting.classList.contains('btn_selected')) {
        gardenItems.forEach (gardenItem => {
            gardenItem.classList.remove('service__card-focus');
        });
        lawnItem.classList.remove('service__card-focus');
        buttonPlanting.classList.remove('btn_selected');
    }
    else {
    gardenItems.forEach (gardenItem => {
            gardenItem.classList.toggle('service__card-focus');
        });

    lawnItem.classList.toggle('service__card-focus');
    buttonPlanting.classList.add('btn_selected');


}
}

//  Lawn
buttonLawn.addEventListener('click', focusLawn);

function focusLawn() {

    if (buttonGardens.classList.contains('btn_selected')) {
        buttonGardens.classList.remove('btn_selected');
        gardenItems.forEach (gardenItem => {
            gardenItem.classList.add('service__card-focus');
        });
    
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.add('service__card-focus');
        });
        buttonLawn.classList.add('btn_selected');
        lawnItem.classList.remove('service__card-focus');

    }

    else if (buttonPlanting.classList.contains('btn_selected')) {
        buttonPlanting.classList.remove('btn_selected');
        gardenItems.forEach (gardenItem => {
            gardenItem.classList.add('service__card-focus');
        });
    
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.add('service__card-focus');
        });
        buttonLawn.classList.add('btn_selected');
        lawnItem.classList.remove('service__card-focus');
    }


    else if (buttonLawn.classList.contains('btn_selected')) {
        gardenItems.forEach (gardenItem => {
            gardenItem.classList.remove('service__card-focus');
        });
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.remove('service__card-focus');
        });
        buttonLawn.classList.remove('btn_selected');
    }
        else {
            gardenItems.forEach (gardenItem => {
            gardenItem.classList.toggle('service__card-focus');
        });
    
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.toggle('service__card-focus');
        });
        buttonLawn.classList.add('btn_selected');

}
}



//prices

const btnAcc = document.querySelectorAll('.prices__item');

const btnOpen = document.querySelectorAll('.prices__open');


btnAcc.forEach(function(item, i) {
  item.onclick = function() {

    btnOpen[i].classList.toggle('price-show');
    btnAcc[i].classList.toggle('active-price');

    btnOpen.forEach(function(el, index){
      if (index !== i) {
        el.classList.remove('price-show');
      }
    })

    btnAcc.forEach(function(el, index){
      if (index !== i) {
        el.classList.remove('active-price');
      }
    })

   
  }
})

//Contacts


const selectHeader = document.querySelectorAll('.select__header');
const headerActiv  = document.querySelector('.select__header');
const selectItem = document.querySelectorAll('.select__item');

const selectIcon  = document.querySelector('.select__icon-pic');
const selectIconActiv = document.querySelector('.select__icon-pic-activ');

const AdressCanandaigua = document.querySelector('.Canandaigua');
const selectCanandaigua = document.querySelector('.Canandaigua-item');

const AdressYonkers = document.querySelector('.Yonkers');
const selectYonkers = document.querySelector('.Yonkers-item');


const AdressSherrill = document.querySelector('.Sherrill');
const selectSherrill = document.querySelector('.Sherrill-item');

const AdressNewYork = document.querySelector('.New__York');
const selectNewYork = document.querySelector('.New__York-item');

const contactsPic = document.querySelector('.contacts__pic__min');


selectHeader.forEach(function(item) {
  item.addEventListener('click', function () {
    selectIcon.style.display = "none";
    
    selectIconActiv.style.display = "block";
    
    item.parentElement.classList.toggle('is-activ');

    if (item.parentElement.classList.contains('is-activ')) {
      headerActiv.classList.add('select__header-activ');
      AdressCanandaigua.classList.remove('Canandaigua-activ');
      AdressYonkers.classList.remove('Yonkers-active');
      AdressSherrill.classList.remove('Sherrill-activ');
      AdressNewYork.classList.remove('New__York-activ');
      contactsPic.classList.add('contacts__pic-active');
      
    } else {
      headerActiv.classList.remove('select__header-activ');
      selectIcon.style.display = "block";
      selectIconActiv.style.display = "none";
      contactsPic.classList.remove('contacts__pic-active');
    }
  })
})

selectItem.forEach(function(item){
  item.addEventListener ('click', function() {
       
    let select =  document.querySelector('.contacts__city__wrapper')
    let textTitle =  document.querySelector('.select__curent')
     textTitle.innerText = item.innerText;
     select.classList.remove('is-activ');
  })
})

selectCanandaigua.addEventListener('click', function(){
  AdressCanandaigua.classList.add('Canandaigua-activ');
})

selectYonkers.addEventListener('click', function() {
  AdressYonkers.classList.add('Yonkers-active');
})

selectSherrill.addEventListener('click', function(){
  AdressSherrill.classList.add('Sherrill-activ');
})

selectNewYork.addEventListener('click', function(){
  AdressNewYork.classList.add('New__York-activ');
})