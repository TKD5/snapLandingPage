const featureButton = document.querySelector('.js-feature');
const companyButton = document.querySelector('.js-company');
const companyDropdown = document.querySelector('.company');
const featureDropdown = document.querySelector('.features');
const arrow = document.querySelector('.arrow');

/* Mobile Elements Start */
const menuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-btn');

const mobileFeatureBtn = document.querySelector('.mobile-js-feature');
const mobileFeatureDropdown = document.querySelector('.mobile-js-feature-dropdown');

const mobileCompanyBtn = document.querySelector('.mobile-js-company');
const mobileCompanyDropdown = document.querySelector('.mobile-js-company-dropdown');

/* Mobile Elements Finish */

mobileFeatureBtn.addEventListener('click', function() {
    mobileFeatureDropdown.classList.toggle('mobile-js-feature-dropdown');
});

mobileCompanyBtn.addEventListener('click', function() {
    mobileCompanyDropdown.classList.toggle('mobile-js-company-dropdown');
});

menuButton.addEventListener('click', function() {
    mobileMenu.style.display = 'block';
});
closeButton.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
})

featureButton.addEventListener('click', function() {
    featureDropdown.classList.toggle('features');
});

companyButton.addEventListener('click', function() {
    companyDropdown.classList.toggle('company');
});