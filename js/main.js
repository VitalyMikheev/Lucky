const menu = document.querySelector('.menu-icon');
const menu_background = document.getElementById('myOverlay');
const menu_window = document.getElementById('myModal');
const input_value = document.querySelector('.form_text');
const uk = document.querySelector('.uk');
const hun = document.querySelector('.hun');
const ind = document.querySelector('.ind');
const ind1 = document.querySelector('.ind1');
const ind2 = document.querySelector('.ind2');
const flags = document.querySelectorAll('.flag');
const logo = document.getElementById('logo');
const centerX = 1010;
const centerY = 260;
const radius = 210;
document.addEventListener("DOMContentLoaded", ready);
menu.onclick = function(){
    menu.classList.toggle('menu-icon-active');
    menu_background.style.setProperty('display', 'block');
    menu_window.style.setProperty('display', 'block');
}
menu_window.onclick = function(){
    menu.classList.toggle('menu-icon-active');
    menu_background.style.setProperty('display', 'none');
    menu_window.style.setProperty('display', 'none');
}
input_value.onchange = function() {
    if (input_value.value.length < 4) {
        alert( 'Должно быть больше 4' );
      } else if (input_value.value.length > 12) {
        alert( 'Должно быть меньше 12 символов' );
      } 
    let i = 0;
    let string = "!@#$%^&*()";
    while (i < input_value.value.length) {
        if (string.includes(input_value.value[i])) {
                alert( "Нельзя вводить симоволы !@#$%^&*()" );
               };
        i = i + 1;
    }
  };
function ready() {
    seqRunner([f1, f2, f3, f4, f5, f6]).then(function() {
    });
};
var seqRunner = function(deeds) {
    return deeds.reduce(function(p, deed) {
        return p.then(function() {
            return deed();
        });
    }, Promise.resolve()); 
}
function f1() {
    return new Promise(function(resolve){
        setTimeout(function() {
            move(uk, 1000, 260, 1000, 52);
            resolve();
        }, 3000);
     });
}
function f2() {
        return new Promise(function(resolve){
            setTimeout(function() {
                move(hun, 1000, 260, 833, 162);
                resolve();
            }, 500);
        });
    }
function f3() {
    return new Promise(function(resolve){
        setTimeout(function() {
            move(ind, 1000, 260, 1200, 164);
            resolve();
        }, 500);
    });
}
function f4() {
    return new Promise(function(resolve){
        setTimeout(function() {
            move(ind2, 1000, 260, 833, 392);
            resolve();
        }, 500);
    });
}
function f5() {
    return new Promise(function(resolve){
        setTimeout(function() {
            move(ind1, 1000, 260, 1200, 392);
            resolve();
        }, 500);
    });
}
function f6() {
    return new Promise(function(resolve){
        setTimeout(function() {
            let Angle = 0;
            const intervalId = setInterval(function() {
                circle (flags[0], Angle-1.5);
                circle (flags[1], Angle-2.7);
                circle (flags[2], Angle-0.5);
                circle (flags[3], Angle+0.6);
                circle (flags[4], Angle-3.7);
                Angle += 0.0147;
                // if (Angle > 60) clearInterval(intervalId);
            }, "1");
            resolve();
        }, 500);
    });
};
function circle (flag, Angle) {
    var vx = Math.cos(Angle) * radius;
    var vy = Math.sin(Angle) * radius;
    let EndX = centerX + vx;
    let EndY = centerY + vy;
    flag.style.setProperty('left', EndX + 'px');
    flag.style.setProperty('top', EndY + 'px');
};

function move (flag, startX, startY, endX, endY) {
    positionX = startX;
    positionY = startY;
    incX = (endX - startX)/20;
    incY = (endY - startY)/20;
    count = 20;
    const intervalId = setInterval(function() {
        flag.style.setProperty('left', positionX + 'px')
        flag.style.setProperty('top', positionY + 'px')
        positionX = positionX + incX;
        positionY = positionY + incY;
        count--;
        if (count < 0) clearInterval(intervalId);
    }, "1");

};

  