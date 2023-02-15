const wrapper = document.querySelector(".sliderwrapper")
const menuItem = document.querySelectorAll(".menuItem")

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
    
            wrapper.style.transform = 'translatex(${-100 * index}vw)' ;
        
    });
})