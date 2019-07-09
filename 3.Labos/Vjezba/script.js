document.addEventListener('DOMContentLoaded', function(){
    var button=document.querySelector('#btn_menu_mobile');
    var x = document.querySelector("#Links");
    var width =window.innerWidth; 
    caruosel1(width);
    caruosel2(width);


    button.addEventListener('click', function (event) {
        event.preventDefault();
        showNavigation();
    })

    function showNavigation() {
        if (x.style.display === "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
            x.style.marginLeft="80%";
            x.style.right="2%";
            x.style.flex.wrap="wrap";
            x.style.flexDirection="column";
            x.style.textAlign="center";
            x.style.verticalAlign="top";
            x.style.overflow="auto";
            x.style.marginTop="-5%";
        }
    }
    
    function caruosel1(width){
        if(width<768){
            const container = document.querySelector('.container0'), N = container.children.length;
        
            let i = 0, x0 = null;
        
            function unify(e) {
                    return e.changedTouches ? e.changedTouches[0] : e 
                };
        
            function lock(e) { 
                x0 = unify(e).clientX 
            };
        
            function move(e) {
                if(x0 || x0 === 0) {
                    let dx = unify(e).clientX - x0, s = Math.sign(dx);
        
                    if((i > 0 || s < 0) && (i < N - 1 || s > 0))
                        container.style.setProperty('--i', i -= s);
                    x0 = null
                }
            };
        
            container.style.setProperty('--n', N);
        
            container.addEventListener('mousedown', lock, false);
            container.addEventListener('touchstart', lock, false);
        
            container.addEventListener('touchmove', e => { e.preventDefault() }, false);
        
            container.addEventListener('mouseup', move, false);
            container.addEventListener('touchend', move, false);
        }
    }

    function caruosel2(width) {
        if(width<768){
            const container = document.querySelector('.container1'), N = container.children.length;
        
            let i = 0, x0 = null;
        
            function unify(e) {
                    return e.changedTouches ? e.changedTouches[0] : e 
                };
        
            function lock(e) { 
                x0 = unify(e).clientX 
            };
        
            function move(e) {
                if(x0 || x0 === 0) {
                    let dx = unify(e).clientX - x0, s = Math.sign(dx);
        
                    if((i > 0 || s < 0) && (i < N - 1 || s > 0))
                        container.style.setProperty('--i', i -= s);
                    x0 = null
                }
            };
        
            container.style.setProperty('--n', N);
        
            container.addEventListener('mousedown', lock, false);
            container.addEventListener('touchstart', lock, false);
        
            container.addEventListener('touchmove', e => { e.preventDefault() }, false);
        
            container.addEventListener('mouseup', move, false);
            container.addEventListener('touchend', move, false);
        }
    }

})

