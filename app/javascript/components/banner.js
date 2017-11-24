import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#typed-text', {
    strings: ["Change your life", "Drink cocktails", "and learn to code"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
