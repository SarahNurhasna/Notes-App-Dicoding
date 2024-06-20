import './styles/style.css';
import anime from 'animejs/lib/anime.es.js';
import './script/component/index.js';
import home from './script/view/home.js';

document.addEventListener('DOMContentLoaded', () => {
  const myAppBar = document.querySelector('app-bar');
  const myFooter = document.querySelector('footer-bar');
  const modeButton = myAppBar.shadowRoot.querySelector('#lightmode-darkmode');
  const imgButton = myAppBar.shadowRoot.querySelector('img');
  const sectionTitles = document.querySelectorAll('.section-title');
  const myLoadingIndicators = document.querySelectorAll('loading-indicator');

  let isDarkMode = false;

  const toggleDarkMode = () => {
    isDarkMode = !isDarkMode;
    const color = isDarkMode ? '#ffffff' : '#092639';
    const loadingColor = isDarkMode ? '#cccccc' : '#a0a0a0';
    const backgroundColors = isDarkMode ? '#1B273E' : '#acc8ff';
    const bodyBgColors = isDarkMode ? '#25324E' : '#ffffff';
    const source = isDarkMode ? 'darkmode.svg' : 'lightmode.svg';

    imgButton.setAttribute('src', source);

    myFooter.setAttribute('color', color);
    myFooter.setAttribute('background-color', backgroundColors);

    myAppBar.style.color = color;
    myAppBar.style.backgroundColor = backgroundColors;

    document.body.style.backgroundColor = bodyBgColors;
    sectionTitles.forEach((title) => {
      title.style.color = color;
    });

    myLoadingIndicators.forEach((indicator) => {
      const loadingElement = indicator.shadowRoot.querySelector('.loading');
      if (loadingElement) {
        loadingElement.style.color = loadingColor;
      }
    });

    animateOnScroll();
  };

  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutQuad',
            duration: 1000,
          });
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  animateOnScroll();

  modeButton.onclick = toggleDarkMode;

  home();
});
