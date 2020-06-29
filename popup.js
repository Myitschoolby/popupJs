(function() {

    const showPopup = function(content) {
        if (!content) return false;
        
        let elementWrapper = document.createElement('div');
        elementWrapper.classList.add('popup_wrapper');

        let elementClose = document.createElement('div');
        elementClose.classList.add('popup_close');
        elementClose.innerHTML = 'Закрыть';

        let element = document.createElement('div');
        element.classList.add('popup');

        element.innerHTML = content.innerHTML;
        element.appendChild(elementClose);

        let elementLink = document.createElement('link');
        elementLink.setAttribute('rel', 'stylesheet');
        elementLink.setAttribute('href', 'popup.css');

        document.head.appendChild(elementLink);
        document.body.appendChild(elementWrapper);
        document.body.appendChild(element);

        elementClose.addEventListener('click', function() {
            element.remove();
            elementWrapper.remove();
            elementStyle.remove();
        });
    };

    const popupInit = function() {    
        let dataPopup = document.querySelectorAll('[data-popup]');

        dataPopup.forEach(function(element) {
            element.addEventListener('click', function(event) {
                event.preventDefault();

                let contentPopup = document.querySelector('#' + this.dataset.popup);

                showPopup(contentPopup);
            });
        });
    };
    
    this.popup = function() {
        popupInit();
    };
    
}());