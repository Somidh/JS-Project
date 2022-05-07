const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // }
    // else{
    //     links.classList.add("show-links");
    // }


    // Or We can just do it in one line of code

    links.classList.toggle('show-links');
});