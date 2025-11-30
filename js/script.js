document.addEventListener('DOMContentLoaded', function() {

  function setupAccordion(itemSelector, headerSelector, contentSelector, toggleBtnSelector, imageSelector, images) {
    const accordionItems = document.querySelectorAll(itemSelector);
    const itemImage = document.querySelector(imageSelector);

    accordionItems.forEach((item, index) => {
      const header = item.querySelector(headerSelector);
      const content = item.querySelector(contentSelector);
      const toggleBtn = item.querySelector(toggleBtnSelector);

      header.addEventListener('click', function() {
        accordionItems.forEach((otherItem, otherIndex) => {
          if (otherIndex !== index) {
            const otherContent = otherItem.querySelector(contentSelector);
            const otherToggleBtn = otherItem.querySelector(toggleBtnSelector);
            otherContent.classList.remove('active');
            otherToggleBtn.textContent = '+';
          }
        });

        content.classList.toggle('active');
        toggleBtn.textContent = content.classList.contains('active') ? '−' : '+';

        if (content.classList.contains('active') && images[index]) {
          itemImage.src = images[index];
        }
      });
    });

    if (accordionItems.length > 0) {
      const firstContent = accordionItems[0].querySelector(contentSelector);
      const firstToggleBtn = accordionItems[0].querySelector(toggleBtnSelector);
      firstContent.classList.add('active');
      firstToggleBtn.textContent = '−';
      itemImage.src = images[0];
    }
  }

  const images = {
    0: 'images/pics/why-choose-us-dental-chair.png',
    1: 'images/pics/why-choose-us-safety.png',
    2: 'images/pics/why-choose-us-dentists.png',
    3: 'images/pics/why-choose-us-dentists-equipments.png',
    4: 'images/pics/why-choose-us-safety-protocols.png'
  };

  setupAccordion('.item', '.item-header', '.item-content', '.toggle-btn', '.item-image', images);
  setupAccordion('.mobile-item', '.mobile-item-header', '.mobile-item-content', '.mobile-toggle-btn', '.mobile-item-image', images);


  const form = document.getElementById("userForm");
  if (form) {
    const fields = ["name", "mobileNumber", "captcha"];

    fields.forEach(field => {
      const input = form.querySelector(`[name="${field}"]`);
      const saved = localStorage.getItem(field);
      if (saved) input.value = saved;

      input.addEventListener("input", () => localStorage.setItem(field, input.value));
    });

    form.addEventListener("submit", () => fields.forEach(field => localStorage.removeItem(field)));
  }


  (function() {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    const links = document.querySelectorAll('.nav-menu .nav-link');

    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.classList.toggle('open');
      navMenu.classList.toggle('active', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navMenu.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
      });
    });

    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!navMenu.contains(target) && !menuBtn.contains(target) && navMenu.classList.contains('active')) {
        menuBtn.classList.remove('open');
        navMenu.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
      }
    });
  })();


  const backToHomeBtns = document.querySelectorAll('[id="backToHomeBtn"]');
  backToHomeBtns.forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });


  const mobileCallBtn = document.querySelector('.mobile-btn-call');
  if (mobileCallBtn) {
    mobileCallBtn.addEventListener('click', function() {
      window.location.href = 'tel:9856589510';
    });
  }

});