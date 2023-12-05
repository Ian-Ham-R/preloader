/* FUCTIONS */
function preloaderMaxHeight() {
    var maxWindowHeight = window.innerHeight,
        preloader = document.getElementById("preloader");

    preloader.style.height = `${maxWindowHeight}px`;
}

function preloaderAnimation() {
    var preloader = document.getElementById("preloader"),
        preloaderLayer1 = document.getElementById("preloader-layer1"),
        preloaderLayer1_h1__span = preloaderLayer1.querySelectorAll("h1 span"),
        preloaderLayer2 = document.getElementById("preloader-layer2"),
        preloaderLayer2_container = document.getElementById("preloader-layer2--container"),
        preloaderLayer2_container__img = preloaderLayer2.querySelectorAll("#preloader-layer2--logo img"),
        preloaderLayer2_container__text = preloaderLayer2.querySelectorAll("#preloader-layer2--mainText h2"),
        preloaderScripTag = document.getElementById("preloaderScriptTag");

    preloaderLayer1.style.zIndex = 1

    for (i = 0; i < 9; i += 1) {
        if (i % 2 == 0) {
            preloaderLayer1_h1__span[i].animate(
                [
                    { top: "-11.3vw" },
                ],
                {
                    duration: 600,
                    delay: 900,
                    iterations: 1,
                    easing: "ease-in-out",
                    fill: "forwards"
                },
            );
        }
        else {
            preloaderLayer1_h1__span[i].animate(
                [
                    { top: "11.3vw" },
                ],
                {
                    duration: 600,
                    delay: 900,
                    iterations: 1,
                    easing: "ease-in-out",
                    fill: "forwards"
                },
            );
        }
    }

    setTimeout(() => {
        preloaderLayer1.remove();

        for (i = 0; i < 4; i += 1) {
            switch (i) {
                case 0:
                    preloaderLayer2_container__img[i].animate(
                        [
                            { top: "24.9%" },
                        ],
                        {
                            duration: 500,
                            delay: 200,
                            iterations: 1,
                            easing: "ease-in-out",
                            fill: "forwards"
                        },
                    );
                    break;

                case 1:
                    preloaderLayer2_container__img[i].animate(
                        [
                            { bottom: "0" },
                        ],
                        {
                            duration: 500,
                            delay: 350,
                            iterations: 1,
                            easing: "ease-in-out",
                            fill: "forwards"
                        },
                    );
                    break;

                case 2:
                    preloaderLayer2_container__img[i].animate(
                        [
                            { left: "0" },
                        ],
                        {
                            duration: 500,
                            delay: 500,
                            iterations: 1,
                            easing: "ease-in-out",
                            fill: "forwards"
                        },
                    );
                    break;

                case 3:
                    preloaderLayer2_container__img[i].animate(
                        [
                            { left: "50%" },
                        ],
                        {
                            duration: 500,
                            delay: 650,
                            iterations: 1,
                            easing: "ease-in-out",
                            fill: "forwards"
                        },
                    );
                    break;
            }
        }
    }, "1600");

    setTimeout(() => {
        preloaderLayer2_container__text[0].animate(
            [
                { top: "0" },
            ],
            {
                duration: 500,
                delay: 150,
                iterations: 1,
                easing: "ease-in-out",
                fill: "forwards"
            },
        );
    }, "2800");

    setTimeout(() => {
        if (window.innerWidth <= 425) {
            preloaderLayer2_container.animate(
                [
                    { transform: "perspective(100px) translatez(99px) translatex(-8%) translatey(1.5%)" },
                ],
                {
                    duration: 900,
                    delay: 100,
                    iterations: 1,
                    easing: "ease-in-out",
                    fill: "forwards"
                },
            );
        }
        else {
            preloaderLayer2_container.animate(
                [
                    { transform: "perspective(100px) translatez(99px) translatex(-4%) translatey(4%)" },
                ],
                {
                    duration: 900,
                    delay: 100,
                    iterations: 1,
                    easing: "ease-in-out",
                    fill: "forwards"
                },
            );
        }
    }, "3700")

    setTimeout(() => {
        preloader.remove();
        preloaderScripTag.remove();
        window.removeEventListener("resize", preloaderMaxHeight, false)
    }, "4700")
}



/* FUNCTION TRIGGERS */
preloaderMaxHeight();
preloaderAnimation();



/* EVENT LISTENERS */
window.addEventListener("resize", preloaderMaxHeight, false);