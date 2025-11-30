document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.item');
    const itemImage = document.querySelector('.item-image');

    const images = {
        0: 'images/pics/why-choose-us-dental-chair.png',  
        1: 'images/pics/why-choose-us-safety.png',  
        2: 'images/pics/why-choose-us-dentists.png',  
        3: 'images/pics/why-choose-us-dentists-equipments.png',
        4: 'images/pics/why-choose-us-safety-protocols.png'   
    };

    accordionItems.forEach((item, index) => {
        const header = item.querySelector('.item-header');
        const content = item.querySelector('.item-content');
        const toggleBtn = item.querySelector('.toggle-btn');

        header.addEventListener('click', function() {
            accordionItems.forEach((otherItem, otherIndex) => {
                if (otherIndex !== index) {
                    const otherContent = otherItem.querySelector('.item-content');
                    const otherToggleBtn = otherItem.querySelector('.toggle-btn');
                    otherContent.classList.remove('active');
                    otherToggleBtn.textContent = '+';
                }
            });

            content.classList.toggle('active');

            if (content.classList.contains('active')) {
                toggleBtn.textContent = '−';

                if (images[index]) {
                    itemImage.src = images[index];
                }
            } else {
                toggleBtn.textContent = '+';
            }
        });
    });

    if (accordionItems.length > 0) {
        const firstContent = accordionItems[0].querySelector('.item-content');
        const firstToggleBtn = accordionItems[0].querySelector('.toggle-btn');
        firstContent.classList.add('active');
        firstToggleBtn.textContent = '−';
        itemImage.src = images[0];
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.mobile-item');
    const itemImage = document.querySelector('.mobile-item-image');

    const images = {
        0: 'images/pics/why-choose-us-dental-chair.png',  
        1: 'images/pics/why-choose-us-safety.png',  
        2: 'images/pics/why-choose-us-dentists.png',  
        3: 'images/pics/why-choose-us-dentists-equipments.png',
        4: 'images/pics/why-choose-us-safety-protocols.png'   
    };

    accordionItems.forEach((item, index) => {
        const header = item.querySelector('.mobile-item-header');
        const content = item.querySelector('.mobile-item-content');
        const toggleBtn = item.querySelector('.mobile-toggle-btn');

        header.addEventListener('click', function() {
            accordionItems.forEach((otherItem, otherIndex) => {
                if (otherIndex !== index) {
                    const otherContent = otherItem.querySelector('.mobile-item-content');
                    const otherToggleBtn = otherItem.querySelector('.mobile-toggle-btn');
                    otherContent.classList.remove('active');
                    otherToggleBtn.textContent = '+';
                }
            });

            content.classList.toggle('active');

            if (content.classList.contains('active')) {
                toggleBtn.textContent = '−';

                if (images[index]) {
                    itemImage.src = images[index];
                }
            } else {
                toggleBtn.textContent = '+';
            }
        });
    });

    if (accordionItems.length > 0) {
        const firstContent = accordionItems[0].querySelector('.mobile-item-content');
        const firstToggleBtn = accordionItems[0].querySelector('.mobile-toggle-btn');
        firstContent.classList.add('active');
        firstToggleBtn.textContent = '−';
        itemImage.src = images[0];
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const fields = ["name", "mobileNumber", "captcha"];

    fields.forEach(field => {
        const input = form.querySelector(`[name="${field}"]`);
        const saved = localStorage.getItem(field);
        if (saved) input.value = saved;
    });

    fields.forEach(field => {
        const input = form.querySelector(`[name="${field}"]`);
        input.addEventListener("input", () => {
            localStorage.setItem(field, input.value);
        });
    });

    form.addEventListener("submit", () => {
        fields.forEach(field => localStorage.removeItem(field));
    });
});

