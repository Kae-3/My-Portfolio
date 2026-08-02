$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

   // typing text animation script
    $('.typing, .typing-2, .typing-3').css({
        fontFamily: "'Segoe Script', 'Brush Script MT', cursive",
        fontStyle: "italic"
    });

    var typed = new Typed(".typing", {
        strings: ["an Aspiring Software Engineer", "a Mathematics Enthusiast", "a High School Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed3 = new Typed(".typing-3", {
        strings: ["Reach out to me!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed2 = new Typed(".typing-2", {
        strings: ["an Aspiring Software Engineer", "a Mathematics Enthusiast", "a High School Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });

    // =======================================================
    // MY SERVICES SLIDER JS
    // =======================================================
    let currentSlide = 0;
    const slides = document.querySelectorAll('.services-slider .slide');
    const totalSlides = slides.length;
    let autoScrollInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
        resetAutoScroll();
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
        resetAutoScroll();
    }

    // Auto-scroll every 15 seconds (15000 milliseconds)
    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(nextSlide, 15000); 
    }

    // Slider Event Listeners
    $('.next-btn').click(nextSlide);
    $('.prev-btn').click(prevSlide);

    // Initialize services slider
    resetAutoScroll();
    // =======================================================

    // dynamic age update based on date of birth 17 October 2011
    function updateAge() {
        var dob = new Date(2011, 9, 17); // October is month 9 in JavaScript Date
        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();
        var monthDiff = today.getMonth() - dob.getMonth();
        var dayDiff = today.getDate() - dob.getDate();
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }
        $('.age').text(age);
    }

    // dynamic copyright year update
    function updateCopyrightYear() {
        var year = new Date().getFullYear();
        $('.copyright-year').text(year);
    }

    updateAge();
    updateCopyrightYear();
    setInterval(updateAge, 24 * 60 * 60 * 1000);
    setInterval(updateCopyrightYear, 24 * 60 * 60 * 1000);
});

