export default function animation() {

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