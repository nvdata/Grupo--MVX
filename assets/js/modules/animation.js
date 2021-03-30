export function animationIntro() {

    const timeLine = new TimelineMax();
    const timeLine2 = new TimelineMax();

    const clique = document.querySelector(".clique")
    const compre = document.querySelector(".compre")
    const receba = document.querySelector(".receba")
    const ornamentos = document.querySelectorAll(".ornamentos")
    const interoga = document.querySelector(".interoga")

    // timeLine2
    //     .set(ornamentos, {
    //         scale: 0,
    //         transformOrigin: "left bottom"
    //     })
    //     .to(ornamentos, {
    //         scale: 1,
    //         transformOrigin: "left bottom"
    //     }, "-=.5")

    timeLine2.staggerFromTo(ornamentos, .5, {
        scale: .2,
        transformOrigin: "left bottom",
        ease: "power3",
    }, {
        scale: 1,
        delay: 2,
    });


    timeLine
        .from(clique, .5, {
            scale: 1,
            transformOrigin: "center",

        })
        .set(clique, {
            scale: 0,
            transformOrigin: "center",
            backgroundColor: "#7055FA",
        })
        .to(clique, .5, {
            scale: 1,
            // delay: .5,
        })
        .to(clique, .5, {
            backgroundColor: "transparent",
        })
        .set(compre, {
            scale: 3,
            transformOrigin: "center",
        })
        .to(compre, .3, {
            scale: 1,
        })
        .to(receba, .5, {
            scale: 1.3,
            ease: "power3",

        }, "+=.3")
        .to(receba, .2, {
            scale: 1,
        })
        .to(interoga, .2, {
            rotate: "40deg",
            transformOrigin: "bottom center"
        }, "+=.4")
        .to(interoga, .2, {
            rotate: 0,
        })
        .to(interoga, .2, {
            rotate: "-40deg",
            transformOrigin: "bottom center"
        }, )
        .to(interoga, .2, {
            rotate: 0,
        })

}

export function animaAoScroll() {
    gsap.registerPlugin(ScrollTrigger)

    function animateFrom(elem, direction) {
        direction = direction | 1;

        var x = 0,
            y = direction * 150;
        if (elem.classList.contains("animate-left")) {
            x = -100;
            y = 0;
        } else if (elem.classList.contains("animate-right")) {
            x = 100;
            y = 0;
        }
        gsap.fromTo(elem, {
            x: x,
            y: y,
            autoAlpha: 0,

        }, {
            duration: 1.1,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            // overwrite: "auto"
        });
    }

    function hide(elem) {
        gsap.set(elem, {
            autoAlpha: 0
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".js__animate").forEach(function (elem) {
            hide(elem); // assure that the element is hidden when scrolled into view

            ScrollTrigger.create({
                trigger: elem,
                // markers: true,
                onEnter: function () {
                    animateFrom(elem)
                },
                // onEnterBack: function () {
                //     animateFrom(elem, -1)
                // },
                // onLeave: function () {
                //     hide(elem)
                // } // assure that the element is hidden when scrolled into view
            });
        });
    });





}