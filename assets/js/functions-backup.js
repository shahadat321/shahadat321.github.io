jQuery('html').removeClass('no-js').addClass('js');
jQuery(document).ready(function($) {
    // variable to hold request
    var request;

    $("#form_data").submit(function(event) {

        // abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);
        // let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");
        // serialize the data in the form
        var serializedData = $form.serialize();

        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);
        $('#result').text('Sending data...');

        // fire off the request to /form.php
        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbw31RppvJmmR-jHf3hS9BhtAcLVlL8FHqDs-mMeE10khROwvg/exec",
            type: "post",
            data: serializedData
        });

        // callback handler that will be called on success
        request.done(function(response, textStatus, jqXHR) {
            $('#result').html('<span class="success">Thank you for your query.</span>');
            console.log("Hooray, it worked!");
        });

        // callback handler that will be called on failure
        request.fail(function(jqXHR, textStatus, errorThrown) {
            // log the error to the console
            console.error(
                "The following error occured: " +
                textStatus, errorThrown
            );
        });

        // if the request failed or succeeded
        request.always(function() {
            // reenable the inputs
            $inputs.prop("disabled", false);
        });

        $('#form_data').find('input, textarea').val('');

        // prevent default posting of form
        event.preventDefault();
    });
});

$(window).load(function() {
    /* ==============================================
    Preloader
    =============================================== */
    var preloaderDelay = 350,
        preloaderFadeOutTime = 800;

    function hidePreloader() {
        var loadingAnimation = $('#loader-animation'),
            preloader = $('#preloader');
        loadingAnimation.fadeOut();
        preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});
$(document).ready(function() {
    var wWidth = $(window).width(),
        mobileRes = 767;

    function stopEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        if ($.browser.msie) {
            event.originalEvent.keyCode = 0;
            event.originalEvent.cancelBubble = true;
            event.originalEvent.returnValue = false;
        }
    }
    /* ==============================================
    Section Position
    =============================================== */
    function setSections() {
        var sections = $("section"),
            wWidth = $(window).width(),
            wCounter = 0;
        if (wWidth > mobileRes) {
            $.each(sections, function(eq) {
                if (eq > 0) {
                    $(this).css({ 'left': wCounter });
                }
                wCounter = wCounter + $(this).width();
            });
        } else {
            $.each(sections, function(eq) {
                $(this).css({ 'left': 0 });
            });
        }
    }

    function forcePosition() {
        var hash = window.location.hash,
            $panels = $('section'),
            scrollElement = 'html, body',
            $mainNav = $('#main-nav ul li a'),
            found = false;
        $panels.each(function(eq) {
            var panelId = $(this).attr('id');
            if ('#' + panelId == hash) {
                found = true;
                var wWidth = $(window).width();
                $(scrollElement).stop().animate({
                    scrollLeft: wWidth * eq
                }, 300, 'easeOutCubic');
            }
        });
        if (!found) {
            var scroll = $(window).scrollLeft();
            if (scroll != 0) {
                $(scrollElement).stop().animate({
                    scrollLeft: 0
                }, 300, 'easeOutCubic');
            }
        }
    }

    function resetWindowWidth() {
        wWidth = $(window).width();
    }
    $(window).resize(function() {
        setSections();
        forcePosition();
        resetWindowWidth();
    });
    setSections();
    $(window).on('hashchange', forcePosition);
    /* ==============================================
    Navigation
    =============================================== */
    var noIntro = $('body').hasClass('no-intro');

    function setNavigation() {
        var nav = $('nav#main-nav'),
            wWidth = $(window).width();
        if (!noIntro) {
            if (wWidth > mobileRes) {
                nav.css({ 'left': wWidth });
            }
        }
    }
    setNavigation();

    function adjustNavigation() {
        var nav = $('nav#main-nav'),
            scroll = $(window).scrollLeft(),
            wWidth = $(window).width();
        if (!noIntro) {
            if (wWidth > mobileRes) {
                if (scroll >= wWidth) {
                    nav.css({
                        'left': 0
                    });
                } else {
                    nav.css({
                        'left': wWidth - scroll
                    });
                }
            } else {
                nav.css({
                    'left': 0
                });
            }
        }
    }
    $(window).scroll(function() {
        adjustNavigation();
    });
    $(window).resize(function() {
        adjustNavigation();
    });
    /* ==============================================
    Mobile Navigation
    =============================================== */
    $(function() {
        var trigger = $('#menu-icon');
        menu = $('#main-nav ul');
        $(trigger).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
            $(this).toggleClass('nav-visible');
        });
        $(window).resize(function() {
            var windowW = $(window).width();
            if (windowW > mobileRes && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });
    /* ==============================================
    Smooth Scrolling
    =============================================== */
    var scrollElement = 'html, body',
        $scrollElement,
        isMoving = false;
    $(function() {
        $('html, body').each(function() {
            if (wWidth > mobileRes) {
                var initScrollLeft = $(this).attr('scrollLeft');
                $(this).attr('scrollLeft', initScrollLeft + 1);
                if ($(this).attr('scrollLeft') == initScrollLeft + 1) {
                    scrollElement = this.nodeName.toLowerCase();
                    $(this).attr('scrollLeft', initScrollLeft);
                    return false;
                }
            }
        });
        $scrollElement = $(scrollElement);
    });
    $(function() {
        var $sections = $('section.section');
        $sections.each(function() {
            var $section = $(this);
            var hash = '#' + this.id;
            $('a[href="' + hash + '"]').on('click touchstart', function(event) {
                stopEvent(event);
                isMoving = true;
                if (wWidth > mobileRes) {
                    $scrollElement.stop().animate({
                        scrollLeft: $section.offset().left
                    }, 1200, 'easeOutCubic', function() {
                        window.location.hash = hash;
                        isMoving = false;
                    });
                } else {
                    $scrollElement.stop().animate({
                        scrollTop: $section.offset().top
                    }, 1200, 'easeOutCubic', function() {
                        isMoving = false;
                    });
                }
                $('nav#main-nav a').removeClass('active');
                if ($(this).hasClass('content-menu-link')) {
                    var link = $(this).attr('href');
                    $('a[href="' + hash + '"]').addClass('active');
                } else {
                    $(this).addClass('active');
                }
                var trigger = $('#responsive-nav'),
                    menu = $('#main-nav ul');
                if (trigger.hasClass('nav-visible')) {
                    menu.slideToggle();
                    trigger.toggleClass('nav-visible');
                }
                event.preventDefault();
            });
        });
    });

    function setInitActiveMenu() {
        var hash = window.location.hash;
        $('a[href="' + hash + '"]').addClass('active');
    }
    setInitActiveMenu();
    /* ==============================================
    Mobile Menu
    =============================================== */
    if ($('.mobile-nav').length && $('.mobile-nav').attr('data-autogenerate') == 'true') {
        var mobileMenu = $('.mobile-nav');
        $('ul.nav li a').each(function(index, elem) {
            mobileMenu.append($('<option></option>').val($(elem).attr('href')).html($(elem).html()));
        });
    }
    $('.mobile-nav').on('change', function() {
        link = $(this).val();
        if (!link) {
            return;
        }
        if (link.substring(0, 1) == '#') {
            $('html, body').animate({ scrollTop: $(link).offset().top - 74 }, 750);
        } else {
            document.location.href = link;
        }
    });
    /* ==============================================
    Fancybox
    =============================================== */
    function bindFancybox() {
        $("a.fancybox").fancybox({
            'overlayShow': false,
            'transitionIn': 'elastic',
            'transitionOut': 'elastic'
        });
    }
    bindFancybox();
    /* ==============================================
    Input Placeholder for IE
    =============================================== */
    if (!Modernizr.input.placeholder) {
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            });
        });
    }
    /* ==============================================
    Portfolio
    =============================================== */
    $(window).load(function() {
        var $container = $('.portfolio');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('nav.portfolio-filter ul a').click(function() {
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
        var $optionSets = $('nav.portfolio-filter ul'),
            $optionLinks = $optionSets.find('a');
        $optionLinks.click(function() {
            var $this = $(this);
            // don't proceed if already selected
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents('nav.portfolio-filter ul');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');
        });
        $(window).resize(function() {
            $container.isotope('reLayout');
        });
        var $portfolioContainer = $('#portfolio > .container'),
            $portfolioSingle = $('.single-portfolio'),
            portfolioSingleH = 0;
        portfolioActive = false;

        function loadPortfolio(fileToLoad) {
            $portfolioSingle.load(fileToLoad, function() {
                portfolioSingleH = $portfolioSingle.find('.container').outerHeight();
                $portfolioSingle.css({
                    'top': -portfolioSingleH
                });
                if (wWidth > mobileRes) {
                    $('#portfolio').animate({ scrollTop: 0 }, "slow");
                    $portfolioSingle.stop().animate({
                        'top': 0
                    }, 500, 'easeOutCubic');
                    $portfolioContainer.stop().animate({
                        'marginTop': portfolioSingleH
                    });
                } else {
                    var portfolioPos = $('#portfolio').offset().top;
                    $scrollElement.animate({ scrollTop: portfolioPos }, "slow");
                    $portfolioSingle.stop().animate({
                        'top': 0
                    }, 500, 'easeOutCubic');
                    $portfolioContainer.stop().animate({
                        'marginTop': portfolioSingleH
                    });
                }
                portfolioActive = true;
                bindClosePortfolio();
                bindFancybox();
                setupFlexslider();
            });
        }

        function changePortfolio(fileToLoad) {
            $portfolioSingle.load(fileToLoad, function() {
                portfolioActive = true;
                portfolioSingleH = $portfolioSingle.find('.container').outerHeight();
                $('#portfolio').animate({ scrollTop: 0 }, "slow");
                $portfolioSingle.animate({
                    'height': portfolioSingleH
                }, 500);
                $portfolioContainer.stop().animate({
                    'marginTop': portfolioSingleH
                }, 500);
                bindClosePortfolio();
                bindFancybox();
                setupFlexslider();
            });
        }

        function bindClosePortfolio() {
            $portfolioSingle.find('.portfolio-close').bind('click', function() {
                closePortfolio(false);
            });
        }

        function closePortfolio(reopen, fileToLoad) {
            if (reopen) {
                changePortfolio(fileToLoad)
            } else {
                $portfolioSingle.stop().animate({
                    'top': -portfolioSingleH
                }, 500, 'easeOutCubic', function() {
                    portfolioActive = false;
                    $portfolioSingle.css({
                        'height': 'auto'
                    });
                });
                $portfolioContainer.stop().animate({
                    'marginTop': 0
                });
            }
        }
        $(".portfolio .portfolio-item a").on('click', function(event) {
            event.preventDefault();
            var fileToLoad = $(this).data('file');
            if (portfolioActive) {
                closePortfolio(true, fileToLoad);
            } else {
                loadPortfolio(fileToLoad);
            }
        });
        $(window).resize(function() {
            portfolioSingleH = $portfolioSingle.find('.container').outerHeight();
            var $closeButton = $portfolioSingle.find('.portfolio-close');
            $portfolioSingle.css({
                'height': portfolioSingleH
            });
            $portfolioContainer.css({
                'marginTop': portfolioSingleH
            });
            $closeButton.unbind('click');
            $closeButton.bind('click', function() {
                closePortfolio(false);
            });
            if (!portfolioActive) {
                $portfolioSingle.css({
                    'top': -portfolioSingleH
                });
                $portfolioContainer.css({
                    'marginTop': 0
                });
            }
        });
        /* ==============================================
        Flexslider
        =============================================== */
        function setupFlexslider() {
            $('.flexslider').flexslider({
                pauseOnHover: true,
                directionNav: true,
                controlNav: false
            });
        }
        setupFlexslider();
        /* ==============================================
        Google Maps
        =============================================== */
        var $mapTrigger = $('#show-map'),
            $map = $('#map'),
            $contactForm = $('.contact-form'),
            mapOptions = {
                center: new google.maps.LatLng(28.612793, 77.2289743),
                zoom: 5,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            map,
            mapActiveClass = 'map-active',
            mapFadeTime = 500,
            mapShowText = 'Show Map',
            mapHideText = 'Hide Map',
            mapMarkerTitle = 'India Map',
            $mainNavLinks = $('nav#main-nav a'),
            contactID = "contacts",
            $contactsContainer = $('#contacts .container');
        $mapTrigger.on('click', function(event) {
            event.preventDefault();
            var $this = $(this);
            if ($this.hasClass(mapActiveClass)) {
                hideMap();
            } else {
                showMap();
            }
        });

        function hideMap() {
            $contactForm.fadeIn(mapFadeTime);
            $mapTrigger.removeClass(mapActiveClass).html(mapShowText);
            $map.fadeOut(mapFadeTime, function() {
                $(this).empty();
            });
        }

        function showMap() {
            $contactForm.fadeOut(mapFadeTime, function() {
                var cHeight = $contactsContainer.outerHeight(),
                    wHight = $(window).height();
                if (cHeight > wHight) {
                    $map.css({ 'height': cHeight }).show();
                } else {
                    $map.show();
                }
                map = new google.maps.Map(document.getElementById("map"), mapOptions);
                var marker = new google.maps.Marker({
                    position: mapOptions.center,
                    title: mapMarkerTitle
                });
                marker.setMap(map);
                $mapTrigger.addClass(mapActiveClass).html(mapHideText);
            });
        }
        $mainNavLinks.on('click', function() {
            if ($(this).attr('href') != "#" + contactID) {
                hideMap();
            }
        });
    });
});