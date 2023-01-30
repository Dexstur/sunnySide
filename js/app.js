let menu = document.querySelector(`#menu`)
let toggler = document.querySelector(`.toggle`)


toggler.addEventListener(`click`, function(e){
    if(menu.className == `hid`){
        menu.classList.remove(`hid`)
        menu.className += `show`
    }else{
        menu.classList.remove(`show`)
        menu.className += `hid`
    }
    
})
