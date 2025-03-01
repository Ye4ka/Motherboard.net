        // Находим элементы 

        const burger = document.querySelector('.header__burger');
        const nav = document.querySelector('.header__nav');
        const links = document.querySelectorAll('.header__link');
        const logo = document.querySelector('.header__logo-img'); 
        // Открытие/закрытие по клику на бургер
        
        burger.addEventListener('click', function() {
            this.classList.toggle("active");
            nav.classList.toggle("header__open");
            logo.classList.toggle("active");
        });
        
        // Закрытие при клике на ссылки

        links.forEach(link => {
            link.addEventListener('click', function() {
                burger.classList.remove("active");
                nav.classList.remove("header__open");
                logo.classList.remove("active");
            });
        });
