document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transition = 'all 0.3s ease';
            });

            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');

                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (event) {
            event.preventDefault();
            formStatus.textContent = 'Sending...';

            const formData = new FormData(contactForm);
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { Accept: 'application/json' }
                });

                if (response.ok) {
                    formStatus.textContent = 'Thanks! Your message was sent.';
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    const err = data.errors
                        ? data.errors.map(x => x.message).join(', ')
                        : 'Submission failed';
                    formStatus.textContent = 'Error: ' + err;
                }
            } catch (error) {
                console.error(error);
                formStatus.textContent = 'Error: could not send. Check network/console.';
            }
        });
    }
});
