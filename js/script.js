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
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    console.log('Form found:', !!contactForm);
    console.log('Form status found:', !!formStatus);
    console.log('Form success found:', !!formSuccess);
    console.log('Form error found:', !!formError);

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Hide previous messages
            formSuccess.style.display = 'none';
            formError.style.display = 'none';

            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('_replyto');  // FIXED: HTML field is named '_replyto'
            const message = formData.get('message');

            console.log('Form submitted with:', { name, email, message });

            // Google Form URL - Replace with your actual form ID
            const googleFormURL = 'https://forms.gle/7RC3htoPmLFm4G7N6';

            // Create form data for Google Forms - Replace entry IDs with your actual IDs
            const googleFormData = new FormData();
            googleFormData.append('entry.913038133', name);      // Replace with your Name entry ID
            googleFormData.append('entry.1356796986', email);     // Replace with your Email entry ID
            googleFormData.append('entry.718680108', message);   // Replace with your Message entry ID

            // Submit to Google Forms
            fetch(googleFormURL, {
                method: 'POST',
                mode: 'no-cors',
                body: googleFormData
            }).then(() => {
                console.log('Form submitted successfully');
                document.getElementById('formSuccess').style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    document.getElementById('formSuccess').style.display = 'none';
                }, 5000);
            }).catch((error) => {
                console.error('Form submission error:', error);
                document.getElementById('formError').style.display = 'block';
            });
        });
    } else {
        console.error('Contact form not found!');
    }
});
