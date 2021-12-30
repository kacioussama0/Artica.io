let menu = document.querySelector('div.burger-menu');
let ul = document.querySelector('div.links ul');
menu.onclick = () => {
    if(ul.style.display == "flex"){
        ul.style.display = "none";
    }

    else 
    ul.style.display = "flex";
}

document.querySelector('.landing-page').onclick = ()=> {
    ul.style.display = "none";
}
    
