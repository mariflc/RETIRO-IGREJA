function abrirMenu(){
    let menu = document.getElementById("menu")

    //Todas as telas

    if (menu.style.width == "60px" & menu.style.height == "80px"){
        menu.style.width = "170px"
        menu.style.height = "100vh"

    }else{
        menu.style.overflow = "hidden"
        menu.style.width = "60px"
        menu.style.height = "80px"

    }
    if (menu.style.width == "170px" & menu.style.height == "100vh"){
        sleep(1000)
        menu.style.overflow = "visible"

    }else{
        menu.style.overflow = "hidden"
    }

//Telas mobile OOOOH GLORIA 25/08/2023 FUNCIONOUUUU

    let query_760 = window.matchMedia("(max-width:760px)")

    if (query_760.matches){
        const menu = document.querySelector("#menu");
        const width = window.getComputedStyle(menu).getPropertyValue("width");
        const height = window.getComputedStyle(menu).getPropertyValue("height");
        if (width == "50px" & height =="50px"){
            menu.style.width = "170px"
            menu.style.height = "100vh"
        }else{
            menu.style.overflow = "hidden"
            menu.style.width = "50px"
            menu.style.height = "50px"
    }

    }

}





