"use strict";
jQuery(document).ready(function (o) {
    if (o(".offset-side-bar").length > 0) {
        o(".offset-side-bar").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            o(".cart-group").addClass("isActive");
        });
    }

    if (o(".close-side-widget").length > 0) {
        o(".close-side-widget").on("click", function (e) {
            e.preventDefault();
            o(".cart-group").removeClass("isActive");
        });
    }

    if (o(".navSidebar-button").length > 0) {
        o(".navSidebar-button").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            o(".info-group").addClass("isActive");
        });
    }

    if (o(".close-side-widget").length > 0) {
        o(".close-side-widget").on("click", function (e) {
            e.preventDefault();
            o(".info-group").removeClass("isActive");
        });
    }

    o("body").on("click", function (e) {
        o(".info-group").removeClass("isActive");
        o(".cart-group").removeClass("isActive");
    });

    o(".xs-sidebar-widget").on("click", function (e) {
        e.stopPropagation();
    });

    if (o(".xs-modal-popup").length > 0) {
        o(".xs-modal-popup").magnificPopup({
            type: "inline",
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: "auto",
            closeBtnInside: false,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                }
            }
        });
    }
});
