/* FUCTIONS */
function pageLoadValidator() {
    if (performance.getEntriesByType("navigation")[0].type === "navigate") {
        preloaderAnimationNavigate();
    }
    else {
        preloaderAnimationReload();
    }
}

function preloaderMaxHeight() {
    var maxWindowHeight = window.innerHeight,
        preloader = document.getElementById("preloader");

    preloader.style.height = `${maxWindowHeight}px`;
}

function preloaderAnimationNavigate() {
    var preloader = document.getElementById("preloader"),
        preloaderLayer1 = document.getElementById("preloader-layer1"),
        preloaderLayer1_h1__span = preloaderLayer1.querySelectorAll("h1 span"),
        preloaderLayer2 = document.getElementById("preloader-layer2"),
        preloaderLayer2_container = document.getElementById("preloader-layer2--container"),
        preloaderLayer2_container__img = preloaderLayer2.querySelectorAll("#preloader-layer2--logo img"),
        preloaderLayer2_container__text = preloaderLayer2.querySelectorAll("#preloader-layer2--mainText h2"),
        preloaderScripTag = document.getElementById("preloaderScriptTag");

    document.body.style.backgroundColor = "var(--black-color)";
    preloaderLayer1.style.opacity = 0;

    preloaderLayer1.style.zIndex = 1

    preloaderLayer1.animate(
        [
            { opacity: 0 },
            { opacity: 1 },
        ],
        {
            duration: 600,
            delay: 200,
            iterations: 1,
            easing: "ease-in-out",
            fill: "forwards"
        },
    );

    for (i = 0; i < 9; i += 1) {
        if (i % 2 == 0) {
            preloaderLayer1_h1__span[i].animate(
                [
                    { top: "-11.3vw" },
                ],
                {
                    duration: 600,
                    delay: 1300,
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
                    delay: 1300,
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
    }, "1900");

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
    }, "3050");

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
        document.body.style.backgroundColor = "var(--white-color)"
        preloader.remove();
        preloaderScripTag.remove();
        window.removeEventListener("resize", preloaderMaxHeight, false)
    }, "4700")
}

function preloaderAnimationReload() {
    var preloader = document.getElementById("preloader"),
        preloaderLayer1 = document.getElementById("preloader-layer1"),
        preloaderLayer2 = document.getElementById("preloader-layer2"),
        preloaderLayer2_container = document.getElementById("preloader-layer2--container"),
        preloaderLayer2_container__img = preloaderLayer2.querySelectorAll("#preloader-layer2--logo img"),
        preloaderLayer2_container__text = preloaderLayer2.querySelectorAll("#preloader-layer2--mainText h2"),
        preloaderScripTag = document.getElementById("preloaderScriptTag");

    document.body.style.backgroundColor = "var(--black-color)"

    preloaderLayer1.remove();
    preloaderLayer2_container.getElementsByTagName("div")[0].style.opacity = 0;
    preloaderLayer2_container.getElementsByTagName("div")[1].style.opacity = 0;

    for (i = 0; i < 4; i += 1) {
        switch (i) {
            case 0:
                preloaderLayer2_container__img[i].style.top = "24.9%";
                break;

            case 1:
                preloaderLayer2_container__img[i].style.bottom = 0;
                break;

            case 2:
                preloaderLayer2_container__img[i].style.left = 0;
                break;

            case 3:
                preloaderLayer2_container__img[i].style.left = "50%";
                break;
        }
    }

    preloaderLayer2_container__text[0].style.top = 0;

    for (i = 0; i < 2; i += 1) {
        preloaderLayer2_container.getElementsByTagName("div")[i].animate(
            [
                { opacity: 0 },
                { opacity: 1 },
            ],
            {
                duration: 600,
                delay: 200,
                iterations: 1,
                easing: "ease-in-out",
                fill: "forwards"
            },
        );
    }

    setTimeout(() => {
        if (window.innerWidth <= 425) {
            preloaderLayer2_container.animate(
                [
                    { transform: "perspective(100px) translatez(99px) translatex(-8%) translatey(1.5%)" },
                ],
                {
                    duration: 900,
                    delay: 200,
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
                    delay: 200,
                    iterations: 1,
                    easing: "ease-in-out",
                    fill: "forwards"
                },
            );
        }
    }, "800")

    setTimeout(() => {
        document.body.style.backgroundColor = "var(--white-color)"
        preloader.remove();
        preloaderScripTag.remove();
        window.removeEventListener("resize", preloaderMaxHeight, false)
    }, "1900")
}



/* FUNCTION MANUAL TRIGGERS */
preloaderMaxHeight();



/* EVENT LISTENERS */
window.addEventListener("load", pageLoadValidator, false);
window.addEventListener("resize", preloaderMaxHeight, false);
