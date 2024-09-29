// Hiệu ứng cuộn mượt
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hiệu ứng ẩn hiện khi cuộn
const sections = document.querySelectorAll('section');

function checkVisibility() {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}
// Hiệu ứng phóng to khi di chuột
const aboutImg = document.querySelector('.about-img img');

aboutImg.addEventListener('mouseenter', () => {
    aboutImg.style.transform = 'scale(1.1)';
    aboutImg.style.transition = 'transform 0.3s ease-in-out';
});

aboutImg.addEventListener('mouseleave', () => {
    aboutImg.style.transform = 'scale(1)';
});

window.addEventListener('scroll', checkVisibility);
checkVisibility();