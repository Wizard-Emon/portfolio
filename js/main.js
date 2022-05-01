const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controlls");
const secBtn = document.querySelectorAll(".control");
const allsections = document.querySelector(".main_content");

function PageTransiton() {
    //this is for btn click active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener("click", function() {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace(
                "active-btn",

            );
            this.className += " active-btn";
        })
    }

    //This is active section
    allsections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from other button
            secBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
                //hide other section
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })



    //toggle theme on button click

    const themeBtn = document.querySelector('.theme-button');
    themeBtn.addEventListener('click', () => {

        let element = document.body;
        element.classList.toggle('light-mode')
    })
}
PageTransiton();