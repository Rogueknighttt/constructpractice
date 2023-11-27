let navbarBlocks = document.getElementsByClassName("in-topbar__navbar__block");
for(let i=0; i<navbarBlocks.length;i++){
    navbarBlocks[i].addEventListener('click', () => {
            switch(i){
                case 0:
                    document.getElementById('page1').scrollIntoView({behavior: "smooth", block: "center"});
                break;
                case 2:
                        document.getElementById('services').scrollIntoView({behavior: "smooth", block: "center"});
                break;
                case 3:
                    document.getElementById('get-in-touch').scrollIntoView({behavior: "smooth", block: "center"});
                break;
                case 4:
                    document.getElementById('footer').scrollIntoView({behavior: "smooth", block: "center"});
                break;
            }
    })
}
