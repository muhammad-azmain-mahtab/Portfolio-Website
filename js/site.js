window.addEventListener("scroll", function () {
    var nav = document.querySelector(".navbar");
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (window.pageYOffset > 0) {
        nav.classList.add("shadow");
        scrollToTopBtn.classList.add("show");
    } else {
        nav.classList.remove("shadow");
        scrollToTopBtn.classList.remove("show");
    }
});

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.add('show1');
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.remove('show1');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements1 = document.querySelectorAll('.hidden1');
hiddenElements1.forEach((el) => observer.observe(el));