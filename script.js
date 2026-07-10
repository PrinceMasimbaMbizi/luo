// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* ===========================
COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    }

    updateCounter();

});



/* ===========================
TESTIMONIAL SLIDER
=========================== */

const testimonials = document.querySelectorAll(".testimonial");

let current = 0;

function showTestimonial() {

    testimonials.forEach(item => item.classList.remove("active"));

    testimonials[current].classList.add("active");

    current++;

    if (current >= testimonials.length) {

        current = 0;

    }

}

setInterval(showTestimonial, 4000);


/* ==========================
FAQ
========================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});



/* ==========================
SCROLL BUTTON
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};



/* ==========================
CONTACT FORM
========================== */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});



/* ==========================
SCROLL REVEAL
========================== */

const reveals = document.querySelectorAll("section");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

}

reveals.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = ".8s";

});

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

reveals.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = ".8s";

});


/*=========================
BOOKING MODAL
=========================*/

const bookingButtons = document.querySelectorAll(".openBooking");

const bookingModal = document.getElementById("bookingModal");

const closeBooking = document.querySelector(".close-btn");

bookingButtons.forEach(button => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        bookingModal.classList.add("active");

    });

});

closeBooking.addEventListener("click", () => {

    bookingModal.classList.remove("active");

});

window.addEventListener("click", (e) => {

    if (e.target === bookingModal) {

        bookingModal.classList.remove("active");

    }

});

document.getElementById("bookingForm").addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you! Your appointment request has been received.");

    bookingModal.classList.remove("active");

    e.target.reset();

});

document.getElementById("bookingForm").addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you! Your appointment request has been received.");

    bookingModal.classList.remove("active");

    e.target.reset();

});

const serviceSections = document.querySelectorAll(".service-details");

function openService(id) {

    serviceSections.forEach(section => {
        section.classList.remove("active");
    });

    const section = document.getElementById(id);

    if (section) {
        section.classList.add("active");

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

}


function closeService(id) {

    document.getElementById(id).classList.remove("active");

}



const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            cards.forEach((card, index) => {

                setTimeout(() => {

                    card.classList.add("shake");
                    card.classList.add("show-click");

                }, index * 150);

                setTimeout(() => {

                    card.classList.remove("shake");

                }, 1000);

            });

        }

    });

}, {
    threshold: .4
});

observer.observe(document.querySelector(".service-pages"));

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.remove("show-click");

    });

});
