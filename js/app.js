/**------------------------------------------------------------------------
 **                          Table of Contents
 //todo 1- Global variables
 //todo 2- Dynamic navigation bar
 //todo 3- Active section
 //todo 4- Scrolling Smoothly
 //todo 5- Hiding the fixed navigation
 //todo 6- Scroll to top button
            1- adding button
            2- Event listener scroll to top 
            3- showing and hiding the top button


 *------------------------------------------------------------------------**/


// Global variables
let ul = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');
let fragment = document.createDocumentFragment();
let main = document.querySelector('main');

/*==== END OF SECTION ====*/


// Building the navigation bar
function navbar() {
    for (let i = 0; i < sections.length; i++) {
        // creating li
        let li = document.createElement('li');
        // creating a
        let a = document.createElement('a');
        // adding text to a
        a.textContent = sections[i].getAttribute('data-nav');
        // adding class to a
        a.classList.add('menu__link');
        // adding href to a
        a.setAttribute('href', '#' + sections[i].getAttribute('id'));
        // adding a to li
        li.appendChild(a);

        fragment.appendChild(li);
    }
    // adding li to ul
    ul.appendChild(fragment);
}
// calling the function navbar
navbar();

/*==== END OF SECTION ====*/



// Adding class 'active' to section if it is in the viewport

function active() {
    // getting the height of the viewport and the top of the viewport
    for (let i = 0; i < sections.length; i++) {
        // getting the position of the section
        let rect = sections[i].getBoundingClientRect();
        // check if the section is in the viewport 
        if (rect.top >= 0 && rect.top <= 300) {
            // adding class 'your-active-class' to the section
            sections[i].classList.add('your-active-class');
            // getting the link of the section
            let link = document.querySelector('a[href="#' + sections[i].getAttribute('id') + '"]');
            // adding class 'active' to the link
            link.classList.add('active');




        } else {
            // removing class 'your-active-class' from the section
            sections[i].classList.remove('your-active-class');
            // getting the link of the section
            let link = document.querySelector('a[href="#' + sections[i].getAttribute('id') + '"]');
            // removing class 'active' from the link
            link.classList.remove('active');
        }
    }
}
// calling the function active to check if the section is in the viewport
window.addEventListener('scroll', active);

/*==== END OF SECTION ====*/



// scrolling to the section when clicking on the navigation bar
function smoothScroll() {
    // getting all the links    
    let links = document.querySelectorAll('a');
    // looping over the links
    for (let i = 0; i < links.length; i++) {
        // adding event listener to each link
        links[i].addEventListener('click', function(e) {
            // preventing the default behavior which is to jumping to the section
            e.preventDefault();
            // getting the href attribute of the link
            let section = document.querySelector(links[i].getAttribute('href'));
            // scrolling to the section smoothly
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}
// calling the function smoothScroll
smoothScroll();

/*==== END OF SECTION ====*/



// Hiding the fixed navigation bar while not scrolling
let Timer;
// add event listener to the window
window.addEventListener('scroll', function() {
    // show the navigation bar
    ul.style.display = 'block';
    // clear the Timer if it has already been set
    clearTimeout(Timer);
    // set the Timer
    Timer = setTimeout(function() {
        // hide the navigation bar
        ul.style.display = 'none';
    }, 3000); // hiding the navigation bar after 3 seconds
});

/*==== END OF SECTION ====*/

// 1- Adding a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
// create the button 
let btn = document.createElement('a');
// add text to the button
btn.textContent = '⬆';
// add class to the button
btn.classList.add('top');
btn.style.cssText = 'padding: 10px; color: black; font-size: 20px; border-radius:3rem; position: fixed; bottom: 180px; left: 1.5em; display: none; z-index: 1000; cursor:pointer; background-color: #fff; ';
// add the button to the main
main.appendChild(btn);

//2- add event listener to the button to scroll to the top of the page
btn.addEventListener('click', function() {
    // scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//3- show the button when the user scrolls below the fold of the page
window.addEventListener('scroll', function() {
    // get the height of the viewport
    let height = window.innerHeight;

    // get the position of the top of the page
    let top = window.pageYOffset || document.documentElement.scrollTop;

    // check if the user scrolls below the fold of the page
    if (top > height) {
        // show the button
        btn.style.display = 'block';
    } else {
        // hide the button
        btn.style.display = 'none';
    }
});

/*==== END OF SECTION ====*/



// End of the file