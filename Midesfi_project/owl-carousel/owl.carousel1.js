/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function T() {}
        T.prototype = obj;
        return new T();
    };
}
(function ($, window, document) {

    var Carousel1 = {
        init : function (options, el) {
            var base1 = this;

            base1.$elem = $(el);
            base1.options = $.extend({}, $.fn.owlCarousel1.options, base1.$elem.data(), options);

            base1.userOptions = options;
            base1.loadContent();
        },

        loadContent : function () {
            var base1 = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base1.options.jsonSuccess === "function1") {
                    base1.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl1) {
                        if (data.owl1.hasOwnProperty(i)) {
                            content += data.owl1[i].item;
                        }
                    }
                    base1.$elem.html(content);
                }
                base1.logIn();
            }

            if (typeof base1.options.beforeInit === "function") {
                base1.options.beforeInit.apply(this, [base1.$elem]);
            }

            if (typeof base1.options.jsonPath === "string") {
                url = base1.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base1.logIn();
            }
        },

        logIn : function () {
            var base1 = this;

            base1.$elem.data("owl-originalStyles1", base1.$elem.attr("style"));
            base1.$elem.data("owl-originalClasses1", base1.$elem.attr("class"));

            base1.$elem.css({opacity: 0});
            base1.orignalItems = base1.options.items;
            base1.checkBrowser();
            base1.wrapperWidth = 0;
            base1.checkVisible = null;
            base1.setVars();
        },

        setVars : function () {
            var base1 = this;
            if (base1.$elem.children().length === 0) {return false; }
            base1.baseClass();
            base1.eventTypes();
            base1.$userItems = base1.$elem.children();
            base1.itemsAmount = base1.$userItems.length;
            base1.wrapItems();
            base1.$owlItems = base1.$elem.find(".owl-item1");
            base1.$owlWrapper = base1.$elem.find(".owl-wrapper1");
            base1.playDirection = "next";
            base1.prevItem = 0;
            base1.prevArr = [0];
            base1.currentItem = 0;
            base1.customEvents();
            base1.onStartup();
        },

        onStartup : function () {
            var base1 = this;
            base1.updateItems();
            base1.calculateAll();
            base1.buildControls();
            base1.updateControls();
            base1.response();
            base1.moveEvents();
            base1.stopOnHover();
            base1.owlStatus();

            if (base1.options.transitionStyle !== false) {
                base1.transitionTypes(base1.options.transitionStyle);
            }
            if (base1.options.autoPlay === true) {
                base1.options.autoPlay = 5000;
            }
            base1.play();

            base1.$elem.find(".owl-wrapper1").css("display", "block");

            if (!base1.$elem.is(":visible")) {
                base1.watchVisibility();
            } else {
                base1.$elem.css("opacity", 1);
            }
            base1.onstartup = false;
            base1.eachMoveUpdate();
            if (typeof base1.options.afterInit === "function") {
                base1.options.afterInit.apply(this, [base1.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base1 = this;

            if (base1.options.lazyLoad === true) {
                base1.lazyLoad();
            }
            if (base1.options.autoHeight === true) {
                base1.autoHeight();
            }
            base1.onVisibleItems();

            if (typeof base1.options.afterAction === "function") {
                base1.options.afterAction.apply(this, [base1.$elem]);
            }
        },

        updateVars : function () {
            var base1 = this;
            if (typeof base1.options.beforeUpdate === "function") {
                base1.options.beforeUpdate.apply(this, [base1.$elem]);
            }
            base1.watchVisibility();
            base1.updateItems();
            base1.calculateAll();
            base1.updatePosition();
            base1.updateControls();
            base1.eachMoveUpdate();
            if (typeof base1.options.afterUpdate === "function") {
                base1.options.afterUpdate.apply(this, [base1.$elem]);
            }
        },

        reload : function () {
            var base1 = this;
            window.setTimeout(function () {
                base1.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base1 = this;

            if (base1.$elem.is(":visible") === false) {
                base1.$elem.css({opacity: 0});
                window.clearInterval(base1.autoPlayInterval);
                window.clearInterval(base1.checkVisible);
            } else {
                return false;
            }
            base1.checkVisible = window.setInterval(function () {
                if (base1.$elem.is(":visible")) {
                    base1.reload();
                    base1.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base1.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base1 = this;
            base1.$userItems.wrapAll("<div class=\"owl-wrapper1\">").wrap("<div class=\"owl-item1\"></div>");
            base1.$elem.find(".owl-wrapper1").wrap("<div class=\"owl-wrapper-outer1\">");
            base1.wrapperOuter = base1.$elem.find(".owl-wrapper-outer1");
            base1.$elem.css("display", "block");
        },

        baseClass : function () {
            var base1 = this,
                hasBaseClass = base1.$elem.hasClass(base1.options.baseClass),
                hasThemeClass = base1.$elem.hasClass(base1.options.theme);

            if (!hasBaseClass) {
                base1.$elem.addClass(base1.options.baseClass);
            }

            if (!hasThemeClass) {
                base1.$elem.addClass(base1.options.theme);
            }
        },

        updateItems : function () {
            var base1 = this, width, i;

            if (base1.options.responsive === false) {
                return false;
            }
            if (base1.options.singleItem === true) {
                base1.options.items = base1.orignalItems = 1;
                base1.options.itemsCustom = false;
                base1.options.itemsDesktop = false;
                base1.options.itemsDesktopSmall = false;
                base1.options.itemsTablet = false;
                base1.options.itemsTabletSmall = false;
                base1.options.itemsMobile = false;
                return false;
            }

            width = $(base1.options.responsiveBaseWidth).width();

            if (width > (base1.options.itemsDesktop[0] || base1.orignalItems)) {
                base1.options.items = base1.orignalItems;
            }
            if (base1.options.itemsCustom !== false) {
                //Reorder array by screen size
                base1.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base1.options.itemsCustom.length; i += 1) {
                    if (base1.options.itemsCustom[i][0] <= width) {
                        base1.options.items = base1.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base1.options.itemsDesktop[0] && base1.options.itemsDesktop !== false) {
                    base1.options.items = base1.options.itemsDesktop[1];
                }

                if (width <= base1.options.itemsDesktopSmall[0] && base1.options.itemsDesktopSmall !== false) {
                    base1.options.items = base1.options.itemsDesktopSmall[1];
                }

                if (width <= base1.options.itemsTablet[0] && base1.options.itemsTablet !== false) {
                    base1.options.items = base1.options.itemsTablet[1];
                }

                if (width <= base1.options.itemsTabletSmall[0] && base1.options.itemsTabletSmall !== false) {
                    base1.options.items = base1.options.itemsTabletSmall[1];
                }

                if (width <= base1.options.itemsMobile[0] && base1.options.itemsMobile !== false) {
                    base1.options.items = base1.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base1.options.items > base1.itemsAmount && base1.options.itemsScaleUp === true) {
                base1.options.items = base1.itemsAmount;
            }
        },

        response : function () {
            var base1 = this,
                smallDelay,
                lastWindowWidth;

            if (base1.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base1.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base1.options.autoPlay !== false) {
                        window.clearInterval(base1.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base1.updateVars();
                    }, base1.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base1.resizer);
        },

        updatePosition : function () {
            var base1 = this;
            base1.jumpTo(base1.currentItem);
            if (base1.options.autoPlay !== false) {
                base1.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base1 = this,
                roundPages = 0,
                lastItem = base1.itemsAmount - base1.options.items;

            base1.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base1.itemWidth})
                    .data("owl-item1", Number(index));

                if (index % base1.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages1", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base1 = this,
                width = base1.$owlItems.length * base1.itemWidth;

            base1.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base1.appendItemsSizes();
        },

        calculateAll : function () {
            var base1 = this;
            base1.calculateWidth();
            base1.appendWrapperSizes();
            base1.loops();
            base1.max();
        },

        calculateWidth : function () {
            var base1 = this;
            base1.itemWidth = Math.round(base1.$elem.width() / base1.options.items);
        },

        max : function () {
            var base1 = this,
                maximum = ((base1.itemsAmount * base1.itemWidth) - base1.options.items * base1.itemWidth) * -1;
            if (base1.options.items > base1.itemsAmount) {
                base1.maximumItem = 0;
                maximum = 0;
                base1.maximumPixels = 0;
            } else {
                base1.maximumItem = base1.itemsAmount - base1.options.items;
                base1.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base1 = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base1.positionsInArray = [0];
            base1.pagesInArray = [];

            for (i = 0; i < base1.itemsAmount; i += 1) {
                elWidth += base1.itemWidth;
                base1.positionsInArray.push(-elWidth);

                if (base1.options.scrollPerPage === true) {
                    item = $(base1.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages1");
                    if (roundPageNum !== prev) {
                        base1.pagesInArray[prev] = base1.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base1 = this;
            if (base1.options.navigation === true || base1.options.pagination === true) {
                base1.owlControls = $("<div class=\"owl-controls1\"/>").toggleClass("clickable1", !base1.browser.isTouch).appendTo(base1.$elem);
            }
            if (base1.options.pagination === true) {
                base1.buildPagination();
            }
            if (base1.options.navigation === true) {
                base1.buildButtons();
            }
        },

        buildButtons : function () {
            var base1 = this,
                buttonsWrapper = $("<div class=\"owl-buttons1\"/>");
            base1.owlControls.append(buttonsWrapper);

            base1.buttonPrev = $("<div/>", {
                "class" : "owl-prev1",
                "html" : base1.options.navigationText[0] || ""
            });

            base1.buttonNext = $("<div/>", {
                "class" : "owl-next1",
                "html" : base1.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base1.buttonPrev)
                .append(base1.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next1")) {
                    base1.next();
                } else {
                    base1.prev();
                }
            });
        },

        buildPagination : function () {
            var base1 = this;

            base1.paginationWrapper = $("<div class=\"owl-pagination1\"/>");
            base1.owlControls.append(base1.paginationWrapper);

            base1.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page1", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page1")) !== base1.currentItem) {
                    base1.goTo(Number($(this).data("owl-page1")), true);
                }
            });
        },

        updatePagination : function () {
            var base1 = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base1.options.pagination === false) {
                return false;
            }

            base1.paginationWrapper.html("");

            counter = 0;
            lastPage = base1.itemsAmount - base1.itemsAmount % base1.options.items;

            for (i = 0; i < base1.itemsAmount; i += 1) {
                if (i % base1.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base1.itemsAmount - base1.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page1"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base1.options.paginationNumbers === true ? counter : "",
                        "class": base1.options.paginationNumbers === true ? "owl-numbers1" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page1", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages1", counter);

                    base1.paginationWrapper.append(paginationButton);
                }
            }
            base1.checkPagination();
        },
        checkPagination : function () {
            var base1 = this;
            if (base1.options.pagination === false) {
                return false;
            }
            base1.paginationWrapper.find(".owl-page1").each(function () {
                if ($(this).data("owl-roundPages1") === $(base1.$owlItems[base1.currentItem]).data("owl-roundPages1")) {
                    base1.paginationWrapper
                        .find(".owl-page1")
                        .removeClass("active1");
                    $(this).addClass("active1");
                }
            });
        },

        checkNavigation : function () {
            var base1 = this;

            if (base1.options.navigation === false) {
                return false;
            }
            if (base1.options.rewindNav === false) {
                if (base1.currentItem === 0 && base1.maximumItem === 0) {
                    base1.buttonPrev.addClass("disabled");
                    base1.buttonNext.addClass("disabled");
                } else if (base1.currentItem === 0 && base1.maximumItem !== 0) {
                    base1.buttonPrev.addClass("disabled");
                    base1.buttonNext.removeClass("disabled");
                } else if (base1.currentItem === base1.maximumItem) {
                    base1.buttonPrev.removeClass("disabled");
                    base1.buttonNext.addClass("disabled");
                } else if (base1.currentItem !== 0 && base1.currentItem !== base1.maximumItem) {
                    base1.buttonPrev.removeClass("disabled");
                    base1.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base1 = this;
            base1.updatePagination();
            base1.checkNavigation();
            if (base1.owlControls) {
                if (base1.options.items >= base1.itemsAmount) {
                    base1.owlControls.hide();
                } else {
                    base1.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base1 = this;
            if (base1.owlControls) {
                base1.owlControls.remove();
            }
        },

        next : function (speed) {
            var base1 = this;

            if (base1.isTransition) {
                return false;
            }

            base1.currentItem += base1.options.scrollPerPage === true ? base1.options.items : 1;
            if (base1.currentItem > base1.maximumItem + (base1.options.scrollPerPage === true ? (base1.options.items - 1) : 0)) {
                if (base1.options.rewindNav === true) {
                    base1.currentItem = 0;
                    speed = "rewind";
                } else {
                    base1.currentItem = base1.maximumItem;
                    return false;
                }
            }
            base1.goTo(base1.currentItem, speed);
        },

        prev : function (speed) {
            var base1 = this;

            if (base1.isTransition) {
                return false;
            }

            if (base1.options.scrollPerPage === true && base1.currentItem > 0 && base1.currentItem < base1.options.items) {
                base1.currentItem = 0;
            } else {
                base1.currentItem -= base1.options.scrollPerPage === true ? base1.options.items : 1;
            }
            if (base1.currentItem < 0) {
                if (base1.options.rewindNav === true) {
                    base1.currentItem = base1.maximumItem;
                    speed = "rewind";
                } else {
                    base1.currentItem = 0;
                    return false;
                }
            }
            base1.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
            var base1 = this,
                goToPixel;

            if (base1.isTransition) {
                return false;
            }
            if (typeof base1.options.beforeMove === "function") {
                base1.options.beforeMove.apply(this, [base1.$elem]);
            }
            if (position >= base1.maximumItem) {
                position = base1.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base1.currentItem = base1.owl.currentItem = position;
            if (base1.options.transitionStyle !== false && drag !== "drag" && base1.options.items === 1 && base1.browser.support3d === true) {
                base1.swapSpeed(0);
                if (base1.browser.support3d === true) {
                    base1.transition3d(base1.positionsInArray[position]);
                } else {
                    base1.css2slide(base1.positionsInArray[position], 1);
                }
                base1.afterGo();
                base1.singleItemTransition();
                return false;
            }
            goToPixel = base1.positionsInArray[position];

            if (base1.browser.support3d === true) {
                base1.isCss3Finish = false;

                if (speed === true) {
                    base1.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base1.isCss3Finish = true;
                    }, base1.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base1.swapSpeed(base1.options.rewindSpeed);
                    window.setTimeout(function () {
                        base1.isCss3Finish = true;
                    }, base1.options.rewindSpeed);

                } else {
                    base1.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base1.isCss3Finish = true;
                    }, base1.options.slideSpeed);
                }
                base1.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base1.css2slide(goToPixel, base1.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base1.css2slide(goToPixel, base1.options.rewindSpeed);
                } else {
                    base1.css2slide(goToPixel, base1.options.slideSpeed);
                }
            }
            base1.afterGo();
        },

        jumpTo : function (position) {
            var base1 = this;
            if (typeof base1.options.beforeMove === "function") {
                base1.options.beforeMove.apply(this, [base1.$elem]);
            }
            if (position >= base1.maximumItem || position === -1) {
                position = base1.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base1.swapSpeed(0);
            if (base1.browser.support3d === true) {
                base1.transition3d(base1.positionsInArray[position]);
            } else {
                base1.css2slide(base1.positionsInArray[position], 1);
            }
            base1.currentItem = base1.owl.currentItem = position;
            base1.afterGo();
        },

        afterGo : function () {
            var base1 = this;

            base1.prevArr.push(base1.currentItem);
            base1.prevItem = base1.owl.prevItem = base1.prevArr[base1.prevArr.length - 2];
            base1.prevArr.shift(0);

            if (base1.prevItem !== base1.currentItem) {
                base1.checkPagination();
                base1.checkNavigation();
                base1.eachMoveUpdate();

                if (base1.options.autoPlay !== false) {
                    base1.checkAp();
                }
            }
            if (typeof base1.options.afterMove === "function" && base1.prevItem !== base1.currentItem) {
                base1.options.afterMove.apply(this, [base1.$elem]);
            }
        },

        stop : function () {
            var base1 = this;
            base1.apStatus = "stop";
            window.clearInterval(base1.autoPlayInterval);
        },

        checkAp : function () {
            var base1 = this;
            if (base1.apStatus !== "stop") {
                base1.play();
            }
        },

        play : function () {
            var base1 = this;
            base1.apStatus = "play";
            if (base1.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base1.autoPlayInterval);
            base1.autoPlayInterval = window.setInterval(function () {
                base1.next(true);
            }, base1.options.autoPlay);
        },

        swapSpeed : function (action) {
            var base1 = this;
            if (action === "slideSpeed") {
                base1.$owlWrapper.css(base1.addCssSpeed(base1.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base1.$owlWrapper.css(base1.addCssSpeed(base1.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base1.$owlWrapper.css(base1.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base1 = this;
            base1.$owlWrapper.css(base1.doTranslate(value));
        },

        css2move : function (value) {
            var base1 = this;
            base1.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base1 = this;

            base1.isCssFinish = false;
            base1.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base1.options.slideSpeed,
                complete : function () {
                    base1.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base1 = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                  "; -ms-transform:"     + translate3D +
                                  "; -o-transform:"      + translate3D +
                                  "; -webkit-transform:" + translate3D +
                                  "; transform:"         + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base1.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base1 = this;
            if (base1.options.mouseDrag !== false || base1.options.touchDrag !== false) {
                base1.gestures();
                base1.disabledEvents();
            }
        },

        eventTypes : function () {
            var base1 = this,
                types = ["s", "e", "x"];

            base1.ev_types = {};

            if (base1.options.mouseDrag === true && base1.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base1.options.mouseDrag === false && base1.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base1.options.mouseDrag === true && base1.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base1.ev_types.start = types[0];
            base1.ev_types.move = types[1];
            base1.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base1 = this;
            base1.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base1.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base1 = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base1.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base1.ev_types.move, dragMove);
                    $(document).on(base1.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base1.ev_types.move);
                    $(document).off(base1.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base1.itemsAmount <= base1.options.items) {
                    return;
                }
                if (base1.isCssFinish === false && !base1.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base1.isCss3Finish === false && !base1.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base1.options.autoPlay !== false) {
                    window.clearInterval(base1.autoPlayInterval);
                }

                if (base1.browser.isTouch !== true && !base1.$owlWrapper.hasClass("grabbing1")) {
                    base1.$owlWrapper.addClass("grabbing1");
                }

                base1.newPosX = 0;
                base1.newRelativeX = 0;

                $(this).css(base1.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base1.newPosX = getTouches(ev).x - locals.offsetX;
                base1.newPosY = getTouches(ev).y - locals.offsetY;
                base1.newRelativeX = base1.newPosX - locals.relativePos;

                if (typeof base1.options.startDragging === "function" && locals.dragging !== true && base1.newRelativeX !== 0) {
                    locals.dragging = true;
                    base1.options.startDragging.apply(base1, [base1.$elem]);
                }

                if ((base1.newRelativeX > 8 || base1.newRelativeX < -8) && (base1.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base1.newPosY > 10 || base1.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base1.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base1.maximumPixels + base1.newRelativeX / 5;
                };

                base1.newPosX = Math.max(Math.min(base1.newPosX, minSwipe()), maxSwipe());
                if (base1.browser.support3d === true) {
                    base1.transition3d(base1.newPosX);
                } else {
                    base1.css2move(base1.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base1.browser.isTouch !== true) {
                    base1.$owlWrapper.removeClass("grabbing1");
                }

                if (base1.newRelativeX < 0) {
                    base1.dragDirection = base1.owl.dragDirection = "left";
                } else {
                    base1.dragDirection = base1.owl.dragDirection = "right";
                }

                if (base1.newRelativeX !== 0) {
                    newPosition = base1.getNewPosition();
                    base1.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base1.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base1.$elem.on(base1.ev_types.start, ".owl-wrapper1", dragStart);
        },

        getNewPosition : function () {
            var base1 = this,
                newPosition = base1.closestItem();

            if (newPosition > base1.maximumItem) {
                base1.currentItem = base1.maximumItem;
                newPosition  = base1.maximumItem;
            } else if (base1.newPosX >= 0) {
                newPosition = 0;
                base1.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base1 = this,
                array = base1.options.scrollPerPage === true ? base1.pagesInArray : base1.positionsInArray,
                goal = base1.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base1.itemWidth / 20) > array[i + 1] && goal - (base1.itemWidth / 20) < v && base1.moveDirection() === "left") {
                    closest = v;
                    if (base1.options.scrollPerPage === true) {
                        base1.currentItem = $.inArray(closest, base1.positionsInArray);
                    } else {
                        base1.currentItem = i;
                    }
                } else if (goal + (base1.itemWidth / 20) < v && goal + (base1.itemWidth / 20) > (array[i + 1] || array[i] - base1.itemWidth) && base1.moveDirection() === "right") {
                    if (base1.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base1.currentItem = $.inArray(closest, base1.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base1.currentItem = i + 1;
                    }
                }
            });
            return base1.currentItem;
        },

        moveDirection : function () {
            var base1 = this,
                direction;
            if (base1.newRelativeX < 0) {
                direction = "right";
                base1.playDirection = "next";
            } else {
                direction = "left";
                base1.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base1 = this;
            base1.$elem.on("owl.next1", function () {
                base1.next();
            });
            base1.$elem.on("owl.prev1", function () {
                base1.prev();
            });
            base1.$elem.on("owl.play1", function (event, speed) {
                base1.options.autoPlay = speed;
                base1.play();
                base1.hoverStatus = "play";
            });
            base1.$elem.on("owl.stop1", function () {
                base1.stop();
                base1.hoverStatus = "stop";
            });
            base1.$elem.on("owl.goTo1", function (event, item) {
                base1.goTo(item);
            });
            base1.$elem.on("owl.jumpTo1", function (event, item) {
                base1.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base1 = this;
            if (base1.options.stopOnHover === true && base1.browser.isTouch !== true && base1.options.autoPlay !== false) {
                base1.$elem.on("mouseover", function () {
                    base1.stop();
                });
                base1.$elem.on("mouseout", function () {
                    if (base1.hoverStatus !== "stop") {
                        base1.play();
                    }
                });
            }
        },

        lazyLoad : function () {
            var base1 = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base1.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base1.itemsAmount; i += 1) {
                $item = $(base1.$owlItems[i]);

                if ($item.data("owl-loaded1") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item1");
                $lazyImg = $item.find(".lazyOwl1");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded1", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded1") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded1", "checked");
                }
                if (base1.options.lazyFollow === true) {
                    follow = itemNumber >= base1.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base1.currentItem + base1.options.items && $lazyImg.length) {
                    base1.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base1 = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded1", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base1.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base1.options.afterLazyLoad === "function") {
                    base1.options.afterLazyLoad.apply(this, [base1.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base1.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds 
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base1 = this,
                $currentimg = $(base1.$owlItems[base1.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base1.$owlItems[base.currentItem]).height();
                base1.wrapperOuter.css("height", $currentItem + "px");
                if (!base1.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base1.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base1.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds 
                    window.setTimeout(checkImage, 100);
                } else {
                    base1.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base1 = this,
                i;

            if (base1.options.addClassActive === true) {
                base1.$owlItems.removeClass("active1");
            }
            base1.visibleItems = [];
            for (i = base1.currentItem; i < base1.currentItem + base1.options.items; i += 1) {
                base1.visibleItems.push(i);

                if (base1.options.addClassActive === true) {
                    $(base1.$owlItems[i]).addClass("active1");
                }
            }
            base1.owl.visibleItems = base1.visibleItems;
        },

        transitionTypes : function (className) {
            var base1 = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base1.outClass = "owl-" + className + "-out";
            base1.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base1 = this,
                outClass = base1.outClass,
                inClass = base1.inClass,
                $currentItem = base1.$owlItems.eq(base1.currentItem),
                $prevItem = base1.$owlItems.eq(base1.prevItem),
                prevPos = Math.abs(base1.positionsInArray[base1.currentItem]) + base1.positionsInArray[base1.prevItem],
                origin = Math.abs(base1.positionsInArray[base1.currentItem]) + base1.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base1.isTransition = true;

            base1.$owlWrapper
                .addClass('owl-origin1')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base1.endPrev = true;
                    $prevItem.off(animEnd);
                    base1.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                    base1.endCurrent = true;
                    $currentItem.off(animEnd);
                    base1.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base1 = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base1.endPrev && base1.endCurrent) {
                base1.$owlWrapper.removeClass('owl-origin1');
                base1.endPrev = false;
                base1.endCurrent = false;
                base1.isTransition = false;
            }
        },

        owlStatus : function () {
            var base1 = this;
            base1.owl = {
                "userOptions"   : base1.userOptions,
                "baseElement"   : base1.$elem,
                "userItems"     : base1.$userItems,
                "owlItems"      : base1.$owlItems,
                "currentItem"   : base1.currentItem,
                "prevItem"      : base1.prevItem,
                "visibleItems"  : base1.visibleItems,
                "isTouch"       : base1.browser.isTouch,
                "browser"       : base1.browser,
                "dragDirection" : base1.dragDirection
            };
        },

        clearEvents : function () {
            var base1 = this;
            base1.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base1.resizer);
        },

        unWrap : function () {
            var base1 = this;
            if (base1.$elem.children().length !== 0) {
                base1.$owlWrapper.unwrap();
                base1.$userItems.unwrap().unwrap();
                if (base1.owlControls) {
                    base1.owlControls.remove();
                }
            }
            base1.clearEvents();
            base1.$elem
                .attr("style", base1.$elem.data("owl-originalStyles1") || "")
                .attr("class", base1.$elem.data("owl-originalClasses1"));
        },

        destroy : function () {
            var base1 = this;
            base1.stop();
            window.clearInterval(base1.checkVisible);
            base1.unWrap();
            base1.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base1 = this,
                options = $.extend({}, base1.userOptions, newOptions);
            base1.unWrap();
            base1.init(options, base1.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base1 = this,
                position;

            if (!htmlString) {return false; }

            if (base1.$elem.children().length === 0) {
                base1.$elem.append(htmlString);
                base1.setVars();
                return false;
            }
            base1.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base1.$userItems.length || position === -1) {
                base1.$userItems.eq(-1).after(htmlString);
            } else {
                base1.$userItems.eq(position).before(htmlString);
            }

            base1.setVars();
        },

        removeItem : function (targetPosition) {
            var base1 = this,
                position;

            if (base1.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base1.unWrap();
            base1.$userItems.eq(position).remove();
            base1.setVars();
        }

    };

    $.fn.owlCarousel1 = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init1") === true) {
                return false;
            }
            $(this).data("owl-init1", true);
            var carousel1 = Object.create(Carousel1);
            carousel1.init(options, this);
            $.data(this, "owlCarousel1", carousel1);
        });
    };

    $.fn.owlCarousel1.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel1",
        theme : "owl-theme1",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));