const swup = new Swup();



let documentActions = (e) => {
    const targetElement = e.target;
    let menu__body = document.querySelector('.menu__body');
    let menu__burger = document.querySelector('.menu__burger')
    let active1 = document.querySelector('._active1')
    let active2 = document.querySelector('._active2')
    let active3 = document.querySelector('._active3')
    let active4 = document.querySelector('._active4')
    let body = document.querySelector('.body');
    let worksPopup = document.querySelector('.works__popup');
    let orderPopupShell = document.querySelector('.order__popup-shell');
    let orderIncorrect1 = document.querySelector('.order__popup-incorrect-1')
    let orderIncorrect2 = document.querySelector('.order__popup-incorrect-2')
    let orderIncorrect3 = document.querySelector('.order__popup-incorrect-3')
    
    if(targetElement.closest('.menu__burger')){
        menu__body.classList.toggle('_active');
        menu__burger.classList.toggle('_active');
    }
    if(targetElement.closest('.menu__close')){
        menu__body.classList.remove('_active');
    }
    if(!targetElement.closest('.menu__body') && !targetElement.closest('.menu__burger') && !targetElement.closest('.order__popup-shell')){
        menu__body.classList.remove('_active');
        menu__burger.classList.remove('_active');
    }
    if(targetElement.closest('.organization__arrow')){
        targetElement.classList.toggle('_active');
        setTimeout(function(){
            targetElement.classList.remove('_active')
        }, 300)
    }
    if(targetElement.closest('.item__material-choice-item-1')){
        if(active1 && active1 !== targetElement){
            active1.classList.remove('_active1');
        }
        targetElement.closest('.item__material-choice-item').classList.toggle('_active1');
    }
    if(targetElement.closest('.item__material-choice-item-2')){
        if(active2 && active2 !== targetElement){
            active2.classList.remove('_active2');
        }
        targetElement.closest('.item__material-choice-item').classList.toggle('_active2');
    }
    if(targetElement.closest('.item__material-choice-item-3')){
        if(active3 && active3 !== targetElement){
            active3.classList.remove('_active3');
        }
        targetElement.closest('.item__material-choice-item').classList.toggle('_active3');
    }
    if(targetElement.closest('.item__material-choice-item-4')){
        if(active4 && active4 !== targetElement){
            active4.classList.remove('_active4');
        }
        targetElement.closest('.item__material-choice-item').classList.toggle('_active4');
    }
    if(targetElement.closest('.order__popup-connection-btn')){
        let regName = /[A-Za-zА-Яа-яЁё]/;
        let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        let regNumber = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        let orderEmail = document.querySelector('.order__popup-input-email')
        let orderName = document.querySelector('.order__popup-input-name')
        let orderTel = document.querySelector('.order__popup-input-tel')
        if(!regName.test(orderName.value)){
            orderName.classList.add('_incorrect');
            orderIncorrect2.classList.add('_incorrect');
        }else{
            orderIncorrect2.classList.remove('_incorrect');
            orderName.classList.remove('_incorrect');
        }

        if(!regNumber.test(orderTel.value)){
            orderTel.classList.add('_incorrect');
            orderIncorrect3.classList.add('_incorrect');
        }else{
            orderTel.classList.remove('_incorrect');
            orderIncorrect3.classList.remove('_incorrect');
        }
        if(!regEmail.test(orderEmail.value)){
            orderEmail.classList.add('_incorrect');
            orderIncorrect1.classList.add('_incorrect');
        }else{
            orderEmail.classList.remove('_incorrect');
            orderIncorrect1.classList.remove('_incorrect');
        }
    }   
    if(document.querySelector('.questions')){
        let activeAcc = document.querySelector('._activeAcc');
        let spollerActive = document.querySelector('._spoller-active')
        let body = document.querySelector('body')
        if(targetElement.closest('.accardion__questions-item-title-container')){
            if(!targetElement.parentElement.classList.contains('_activeAcc')){
                if(activeAcc){
                    activeAcc.classList.remove('_activeAcc');
                }
            }
            targetElement.nextElementSibling.classList.toggle('_activeText');
            targetElement.parentElement.classList.toggle('_activeAcc');
            body.classList.add('_activeVoid');
            setTimeout(() => body.classList.remove('_activeVoid'), 700)
        }
        if(!targetElement.closest('.accardion__questions-item') && !targetElement.closest('.void')){
            if(activeAcc && spollerActive){
                spollerActive.click();
            }
        }
    }
    if(targetElement.closest('._btn')){
        orderPopupShell.classList.add('_active');
        body.classList.add('_popup');
        worksPopup.classList.remove('_active');
    }
    if(!targetElement.closest('.order__popup-shell') && !targetElement.closest('._btn') && !targetElement.closest('.void') && !targetElement.closest('.works__popup')){
        orderPopupShell.classList.remove('_active');
        body.classList.remove('_popup');
        worksPopup.classList.remove('_active');
    }
    if(targetElement.closest('.order__popup-close')){
        orderPopupShell.classList.remove('_active');
        body.classList.remove('_popup');
    }
    if(targetElement.closest('._btn-order')){
        let application = document.querySelector('.application')
        if(!orderIncorrect1.classList.contains('_incorrect') && !orderIncorrect2.classList.contains('_incorrect') && !orderIncorrect3.classList.contains('_incorrect')){
            orderPopupShell.classList.remove('_active');
            body.classList.add('_activeVoid');
            setTimeout(() => {
                application.classList.toggle('_active');
            }, 300);
            setTimeout(() => {
                application.classList.remove('_active');
                body.classList.remove('_popup');
                body.classList.remove('_activeVoid');
            }, 2000);
            console.log('yes');
        }
    }
    if(targetElement.closest('.works__img-item')){
        worksPopup.classList.toggle('_active');
        body.classList.add('_popup');
    }
}
document.addEventListener('click', documentActions);



function main () {
    if(document.querySelector('.header')){
        let headerElement = document.querySelector('.header');
        let callback = (entries) => {
            if(entries[0].isIntersecting){
                headerElement.classList.remove('_scroll');
            }else{
                headerElement.classList.add('_scroll');
            }
        }
        let headerObserver = new IntersectionObserver(callback);
        headerObserver.observe(headerElement)
    }
    function dinamicAdaptive(){
        function DynamicAdapt(type) {
            this.type = type;
        }
        
        DynamicAdapt.prototype.init = function () {
            const _this = this;
            // массив объектов
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            // массив DOM-элементов
            this.nodes = document.querySelectorAll("[data-da]");
        
            // наполнение оbjects объктами
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
        
            this.arraySort(this.оbjects);
        
            // массив уникальных медиа-запросов
            this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
                return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }, this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            });
        
            // навешивание слушателя на медиа-запрос
            // и вызов обработчика при первом запуске
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ',');
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
        
                // массив объектов с подходящим брейкпоинтом
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
                    return item.breakpoint === mediaBreakpoint;
                });
                matchMedia.addListener(function () {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                });
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        
        DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
            if (matchMedia.matches) {
                for (let i = 0; i < оbjects.length; i++) {
                    const оbject = оbjects[i];
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                }
            } else {
                for (let i = 0; i < оbjects.length; i++) {
                    const оbject = оbjects[i];
                    if (оbject.element.classList.contains(this.daClassname)) {
                        this.moveBack(оbject.parent, оbject.element, оbject.index);
                    }
                }
            }
        };
        
        // Функция перемещения
        DynamicAdapt.prototype.moveTo = function (place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === 'last' || place >= destination.children.length) {
                destination.insertAdjacentElement('beforeend', element);
                return;
            }
            if (place === 'first') {
                destination.insertAdjacentElement('afterbegin', element);
                return;
            }
            destination.children[place].insertAdjacentElement('beforebegin', element);
        }
        
        // Функция возврата
        DynamicAdapt.prototype.moveBack = function (parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== undefined) {
                parent.children[index].insertAdjacentElement('beforebegin', element);
            } else {
                parent.insertAdjacentElement('beforeend', element);
            }
        }
        
        // Функция получения индекса внутри родителя
        DynamicAdapt.prototype.indexInParent = function (parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        
        // Функция сортировки массива по breakpoint и place 
        // по возрастанию для this.type = min
        // по убыванию для this.type = max
        DynamicAdapt.prototype.arraySort = function (arr) {
            if (this.type === "min") {
                Array.prototype.sort.call(arr, function (a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) {
                            return 0;
                        }
        
                        if (a.place === "first" || b.place === "last") {
                            return -1;
                        }
        
                        if (a.place === "last" || b.place === "first") {
                            return 1;
                        }
        
                        return a.place - b.place;
                    }
        
                    return a.breakpoint - b.breakpoint;
                });
            } else {
                Array.prototype.sort.call(arr, function (a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) {
                            return 0;
                        }
        
                        if (a.place === "first" || b.place === "last") {
                            return 1;
                        }
        
                        if (a.place === "last" || b.place === "first") {
                            return -1;
                        }
        
                        return b.place - a.place;
                    }
        
                    return b.breakpoint - a.breakpoint;
                });
                return;
            }
        };
        
        const da = new DynamicAdapt("max");
        da.init();
    }
    function phoneMask(){
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
            var keyCode;
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                var matrix = "+7 (___) ___ ____",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function(a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i)
                }
                var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    function(a) {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5)  this.value = ""
            }
        
            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false)
        
          });
        
    }
    function spoilersMain(){
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    // Создаем событие
                    document.dispatchEvent(
                        new CustomEvent("slideUpDone", {
                            detail: {
                                target: target
                            }
                        })
                    );
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    // Создаем событие
                    document.dispatchEvent(
                        new CustomEvent("slideDownDone", {
                            detail: {
                                target: target
                            }
                        })
                    );
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) {
                return _slideDown(target, duration);
            } else {
                return _slideUp(target, duration);
            }
        };
        function dataMediaQueries(array, dataSetValue) {
            // Получение объектов с медиа запросами
            const media = Array.from(array).filter(function (item, index, self) {
                if (item.dataset[dataSetValue]) {
                    return item.dataset[dataSetValue].split(",")[0];
                }
            });
            // Инициализация объектов с медиа запросами
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item) => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    if (item.hasAttribute("data-em")) {
                        breakpoint.dataEm = true;
                    }
                    breakpointsArray.push(breakpoint);
                });
                // Получаем уникальные брейкпоинты
                let mdQueries = breakpointsArray.map(function (item) {
                    if (item.dataEm) {
                        item.value = (item.value / 16).toString();
                        return (
                            "(" +
                            item.type +
                            "-width: " +
                            item.value +
                            "em)," +
                            item.value +
                            "," +
                            item.type
                        );
                    } else {
                        return (
                            "(" +
                            item.type +
                            "-width: " +
                            item.value +
                            "px)," +
                            item.value +
                            "," +
                            item.type
                        );
                    }
                    // item.value = (item.value / 16).toString()
                    // return '(' + item.type + "-width: " + item.value + "em)," + item.value + ',' + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
        
                if (mdQueries.length) {
                    // Работаем с каждым брейкпоинтом
                    mdQueries.forEach((breakpoint) => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        // Объекты с нужными условиями
                        const itemsArray = breakpointsArray.filter(function (item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) {
                                return true;
                            }
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                // Получение обычных слойлеров
                const spollersRegular = Array.from(spollersArray).filter(function (
                    item,
                    index,
                    self
                ) {
                    return !item.dataset.spollers.split(",")[0];
                });
                // Инициализация обычных слойлеров
                if (spollersRegular.length) {
                    initSpollers(spollersRegular);
                }
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) {
                    mdQueriesArray.forEach((mdQueriesItem) => {
                        // Событие
                        // mdQueriesItem.matchMedia.addEventListener("change", function () {
                        // 	initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                        // });
                        mdQueriesItem.matchMedia.onchange = () => {
                            initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                        };
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    });
                }
                // Инициализация
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock) => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    });
                }
                // Работа с контентом
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter(
                            (item) => item.closest("[data-spollers]") === spollersBlock
                        );
                        spollerTitles.forEach((spollerTitle) => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) {
                                    spollerTitle.nextElementSibling.hidden = true;
                                }
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        });
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed
                            ? parseInt(spollersBlock.dataset.spollersSpeed)
                            : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) {
                                hideSpollersBody(spollersBlock);
                            }
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector(
                        "[data-spoller]._spoller-active"
                    );
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed
                        ? parseInt(spollersBlock.dataset.spollersSpeed)
                        : 500;
                    if (
                        spollerActiveTitle &&
                        !spollersBlock.querySelectorAll("._slide").length
                    ) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                // Закрытие при клике вне спойлера
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) {
                    document.addEventListener("click", function (e) {
                        const el = e.target;
                        if (!el.closest("[data-spollers]")) {
                            spollersClose.forEach((spollerClose) => {
                                const spollersBlock = spollerClose.closest("[data-spollers]");
                                const spollerSpeed = spollersBlock.dataset.spollersSpeed
                                    ? parseInt(spollersBlock.dataset.spollersSpeed)
                                    : 500;
                                spollerClose.classList.remove("_spoller-active");
                                _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                            });
                        }
                    });
                }
            }
        }
        
        spollers();        
    }
    phoneMask();
    dinamicAdaptive();
    spoilersMain();
    if(document.querySelector('.organization__swiper')){
        let organization__swiper = new Swiper('.organization__swiper', {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            loop: true,
            watchSlidesProgress: true,
            pagination: {
                el:'.elem',
                clickable: true,
            },
            navigation: {
                nextEl: '.organization__arrow-left',
                prevEl: '.organization__arrow-right'
            },
            breakpoints: {
            },
        })
    }
    if(document.querySelector('.material__swiper')){
        let material__swiper = new Swiper('.material__swiper', {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            loop: true,
            watchSlidesProgress: true,
        })
        let material__slider__controlls__swiper = new Swiper('.material__slider__controlls__swiper', {
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            loop: true,
            watchSlidesProgress: true,
            centeredSlides: true,
            navigation: {
                nextEl: '.material__controlls-item-arrow-next',
                prevEl: '.material__controlls-item-arrow-prev'
            },
            breakpoints: {
            },
            thumbs: {
                swiper: material__swiper
            }
        })
    }
    if(document.querySelector('.order__popup')){
        let orderSelect = document.querySelector('.order__popup-select');
        const choices = new Choices(orderSelect, {
            searchEnabled: false,
            itemSelectText: ''
        })
    }
}

swup.on('contentReplaced', function() {
    main()
});

main()