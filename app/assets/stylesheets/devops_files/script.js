var $slideBlock, $slideText;

function is_home() {
    return !!$("body").hasClass("home") && !$("body").hasClass("group-blog")
}

function desktopNav(b, c) {
    var a = b.data("nav-link");
    1 == $('header .slidenav ul[data-nav-for="' + a + '"]').length && (c.preventDefault(), $("header .slidenav ul.submenu").fadeOut("fast"), $('header .slidenav ul[data-nav-for="' + a + '"]').fadeIn("slow"))
}

function mobileNav(a, b) {
    if (1 == a.parent().parent().find("ul.submenu-mobile").length) {
        b.preventDefault();
        var c = a.parent().parent().find("ul.submenu-mobile").outerHeight();
        $("header .slidenav ul.submenu-mobile").fadeOut("fast"), $("header .slidenav .navlinks:not(.submenu) li").css("height", ""), a.parent().parent().css("height", c + 90 + "px"), a.parent().parent().find("ul.submenu-mobile").fadeIn("slow")
    }
}
$(function() {
    var a = location.pathname;
    $("header .desktop-menu li a").each(function() {
        var b = $(this); - 1 != a.indexOf(b.attr("data-nav-link")) && b.parent().addClass("selected")
    })
}), $(document).ready(function() {
    var a = document.referrer; - 1 == a.indexOf(".systango.com") && localStorage.setItem("referrer", a), is_home() && ($("header").removeClass("inner"), $("#social-navigation").addClass("social-white"));
    var b = $(window).width();
    $(".accordion-toOpen").on("click", function(a) {
        a.preventDefault(), $(this).hasClass("active") ? ($(this).parent().removeClass("active"), $(this).text("+").removeClass("active")) : ($(".accordion").removeClass("active"), $(this).parent().addClass("active"), $(".accordion-toOpen").text("+").removeClass("active"), $(this).text("-").addClass("active"))
    }), $("#scrollToTop").on("click", function(a) {
        a.preventDefault(), $("body, html").animate({
            scrollTop: 0
        }, 500, "swing")
    }), $(".fileUpload input").on("change", function(b) {
        b.preventDefault();
        var a = $(this).val().split("\\").pop();
        a ? ($(this).parent().find("#upload-text").text(a), $(this).parent().find("#removeUpload").fadeIn()) : ($(this).parent().find("#upload-text").text("Attach your file here"), $(this).parent().find("#removeUpload").fadeOut("fast"))
    }), $(document).on("click", "#removeUpload", function(a) {
        a.preventDefault(), $(this).parent().find("input").val(""), $(this).parent().find("#upload-text").text("Attach your file here"), $(this).fadeOut("fast")
    }), setTimeout(function() {
        $("#loader").removeClass("active").delay(1e3).fadeOut("slow")
    }, 3e3), $.validator.addMethod("filesize", function(c, a, b) {
        return this.optional(a) || a.files[0].size <= b
    }, "File size must be less than 20MB"), $.validator.addMethod("customemail", function(a, b) {
        return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(a)
    }, "Not a valid email"), $("#contact").validate({
        ignore: [],
        rules: {
            firstname: "required",
            email: {
                required: !0,
                email: !0,
                customemail: !0
            },
            phone: {
                required: !0,
                minlength: 10,
                number: !0
            },
            attachment: {
                extension: "doc,docx,pdf,csv,jpg,jpeg,png",
                filesize: 2e7
            },
            recaptcha: "required"
        },
        messages: {
            attachment: {
                extension: "Please attach file with valid extension"
            }
        },
        errorPlacement: function(b, a) {
            $(a).parents(".animatedFields").addClass("input-filled"), b.appendTo(a.parents(".input-cover"))
        }
    }), $("#contact_zoho").validate({
        ignore: [],
        rules: {
            name: "required",
            email: {
                required: !0,
                email: !0,
                customemail: !0
            },
            phone: {
                required: !0,
                minlength: 10,
                number: !0
            },
            attachment: {
                extension: "doc,docx,pdf,csv,jpg,jpeg,png",
                filesize: 2e7
            },
            recaptcha: "required"
        },
        messages: {
            attachment: {
                extension: "Please attach file with valid extension"
            }
        },
        errorPlacement: function(b, a) {
            $(a).parents(".animatedFields").addClass("input-filled"), b.appendTo(a.parents(".input-cover"))
        }
    }), $("#career_contact").validate({
        ignore: [],
        rules: {
            name: "required",
            email: {
                required: !0,
                email: !0,
                customemail: !0
            },
            phone: {
                required: !0,
                minlength: 10,
                number: !0
            },
            attachment: {
                required: !0,
                extension: "doc,docx,pdf,csv,jpg,jpeg,png",
                filesize: 2e7
            },
            recaptcha: "required"
        },
        messages: {
            attachment: {
                extension: "Please attach file with valid extension"
            }
        },
        errorPlacement: function(b, a) {
            $(a).parents(".animatedFields").addClass("input-filled"), b.appendTo(a.parents(".input-cover"))
        }
    }), $("#contactPopup").validate({
        ignore: [],
        rules: {
            name: "required",
            email: {
                required: !0,
                email: !0,
                customemail: !0
            },
            phone: {
                required: !0,
                minlength: 10,
                number: !0
            },
            attachment: {
                extension: "doc,docx,pdf,csv,jpg,jpeg,png",
                filesize: 2e7
            },
            recaptcha: "required"
        },
        messages: {
            attachment: {
                extension: "Please attach file with valid extension"
            }
        },
        errorPlacement: function(a, b) {
            a.appendTo(b.parents(".input-cover"))
        }
    }), $("#contactus").validate({
        ignore: [],
        rules: {
            name: "required",
            email: {
                required: !0,
                email: !0,
                customemail: !0
            },
            career: "required",
            phone: {
                required: !0,
                minlength: 10,
                number: !0
            },
            attachment: {
                extension: "doc,docx,pdf,csv,jpg,jpeg,png",
                filesize: 2e7
            },
            recaptcha: "required"
        },
        messages: {
            attachment: {
                extension: "Please attach file with valid extension"
            }
        },
        errorPlacement: function(b, a) {
            $(a).parents(".animatedFields").addClass("input-filled"), b.appendTo(a.parents(".input-cover"))
        }
    }), $(".bg").scroll(function() {
        var a = $(this).scrollTop();
        $(this).css("background-position", "0% " + parseInt(-a / 10) + "px")
    }), $("#menu-toggle").on("click", function(a) {
        a.preventDefault(), $("header .slidenav ul.submenu").fadeOut("fast"), $(this).toggleClass("opened"), $(this).parent().find(".slidenav").toggleClass("active"), $("body").toggleClass("modal-open"), $("#contact-navigation").delay(500).toggle("slow"), b <= 768 && $("header .slidenav .navlinks:not(.submenu) li").css("height", "")
    }), $(".animatedFields input, .animatedFields select, .animatedFields textarea").on("focus", function(a) {
        a.preventDefault(), $(this).parent().addClass("input-filled")
    }), $(".animatedFields input, .animatedFields select, .animatedFields textarea").on("blur", function(a) {
        a.preventDefault(), $(this).val() || $(this).parent().removeClass("input-filled")
    }), $("footer .footer-navigation ul > li > a").on("click", function(a) {
        1 == $(this).parent().find(".submenu").length && (a.preventDefault(), $("footer .footer-navigation ul > li").removeClass("active"), $(this).parent().addClass("active"), $("footer .footer-navigation ul.submenu").hide(), $(this).parent().find(".submenu").fadeIn("fast"))
    }), b > 769 ? $("header .desktop-menu li a").on("click", function(a) {
        desktopNav($(this), a), $("header .desktop-menu li").removeClass("selected"), $(this).parent().addClass("selected")
    }) : $("header .slidenav .navlinks:not(.submenu) li > div > a").on("click", function(a) {
        mobileNav($(this), a)
    }), $("#contact-link").on("click", function(a) {
        a.preventDefault(), $("#contact-navigation").toggleClass("active")
    }), $(".hirenow").each(function(a) {
        $(this).on("click", function(a) {
            a.preventDefault(), a.stopImmediatePropagation(), $("#contact-link").trigger("click")
        })
    }), $("#close-contact").on("click", function(a) {
        a.preventDefault(), $("#contact-navigation").removeClass("active")
    }), $(window).on("click", function(a) {
        0 == $("#contact-navigation").has(a.target).length && !$("#contact-navigation").is(a.target) && $("#contact-navigation").hasClass("active") && $("#contact-navigation").removeClass("active")
    });
    var f, g = 0,
        h = $("header.inner");
    $(window).scroll(function() {
        var a = $(window).scrollTop(),
            b = h.height();
        if (g = a, a >= 200 ? h.addClass("scrollDown") : h.removeClass("scrollDown"), window.innerHeight + window.scrollY >= document.body.offsetHeight - 550 ? ($(".inner-page #contact-navigation").addClass("hide"), $(".inner-page #social-navigation").addClass("hide")) : $(".inner-page #contact-navigation").hasClass("hide") && ($(".inner-page #contact-navigation").removeClass("hide"), $(".inner-page #social-navigation").removeClass("hide")), g <= 250 ? $("#scrollToTop").fadeOut("slow") : window.innerHeight + window.scrollY >= document.body.offsetHeight ? $("#scrollToTop").hide() : $("#scrollToTop").fadeIn("slow"), f < g && a > b + b ? h.addClass("scrollUp") : f > g && !(a <= b) && h.removeClass("scrollUp"), f = g, $("#project-screen").parent().hasClass("aos-animate")) {
            var c = $("#scroll-screen").scrollTop();
            console.log("x ==>", c), $("#project-screen").animate({
                backgroundPositionX: "0%",
                backgroundPositionY: parseInt(-c) + "px"
            }, "10")
        }
    });
    var c = $("#work-mobile-carousel-02"),
        d = $("#work-mobile-carousel-01"),
        e = $("#text-carousel");
    $("#carousel-controls .owl-next").on("click", function() {
        e.trigger("next.owl.carousel"), d.trigger("next.owl.carousel"), c.trigger("next.owl.carousel")
    }), $("#carousel-controls .owl-prev").on("click", function() {
        e.trigger("prev.owl.carousel"), d.trigger("prev.owl.carousel"), c.trigger("prev.owl.carousel")
    }), e.owlCarousel({
        center: !0,
        loop: !0,
        items: 1,
        margin: 0,
        nav: !1,
        touchDrag: !1,
        mouseDrag: !1,
        autoplay: !0,
        autoplayTimeout: 8e3
    }), d.owlCarousel({
        center: !0,
        loop: !0,
        items: 1,
        nav: !1,
        rtl: !0,
        touchDrag: !1,
        mouseDrag: !1,
        autoplay: !0,
        autoplayTimeout: 8e3
    }), c.owlCarousel({
        center: !0,
        loop: !0,
        items: 1,
        nav: !1,
        touchDrag: !1,
        mouseDrag: !1,
        autoplay: !0,
        autoplayTimeout: 8e3
    })
}), $(window).load(function(b) {
    var a = localStorage.getItem("referrer");
    a && ($("#popup-referrer").val(a), $("#home-referrer").length && $("#home-referrer").val(a), $("#contact-referrer").length && $("#contact-referrer").val(a)), AOS.init({
        disable: function() {
            return window.innerWidth < 769
        }
    })
}), $(window).resize(function() {
    var a = $(window).width();
    $("header .slidenav .navlinks:not(.submenu) li > div > a").on("click", function(b) {
        a > 769 ? desktopNav($(this), b) : mobileNav($(this), b)
    }), $("#menu-toggle").next().hasClass("active") && ($("header .slidenav .navlinks:not(.submenu) li").css("height", ""), $("#menu-toggle").trigger("click"))
});
let $dmLink = $(".desktop-menu__list-item-link");

function doTheThing() {
    $slideText.animate({
        opacity: 0
    }), $slideBlock.animate({
        left: 200
    }, function() {
        $slideBlock.addClass("processing").html('<span class="loading dots"></span>'), setTimeout(function() {
            $(".slide-captcha").animate({
                width: 75
            }), $slideBlock.animate({
                left: 0
            }), $slideBlock.addClass("done").html(":)"), $(".captchaindex").addClass("done"), $(".captchaindex").val("1"), $(".captchaindex").removeClass("error")
        }, 2e3)
    })
}
$dmLink.each(function() {
    $(this).on("click", function() {
        $dmLink.not($(this)).parent().removeClass("is-active"), $(this).parent().hasClass("is-active") ? $(this).parent().removeClass("is-active") : $(this).parent().addClass("is-active")
    })
}), $(document).on("click", function(a) {
    $dmLink.is(a.target) || 0 !== $dmLink.has(a.target).length || $dmLink.parent().removeClass("is-active")
}), $(function() {
    $slideBlock = $(".slide-block"), $slideText = $(".slide-text")
}), $(".slide-block").draggable({
    containment: "parent",
    drag: function() {
        var a = parseInt($slideBlock.css("left")) / 2;
        $slideText.css("opacity", 1 - a / 100)
    }
}), $(".slide-captcha").droppable({
    drop: function() {
        180 > parseInt($slideBlock.css("left")) && ($slideBlock.animate({
            left: 0
        }), $slideText.animate({
            opacity: 1
        }))
    }
}), $(".slide-target").droppable({
    drop: function(a, b) {
        doTheThing()
    }
})