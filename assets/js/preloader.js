/* FUCTIONS */
function preloaderMaxHeight() {
    var maxWindowHeight = window.innerHeight,
    preloader = document.getElementById("preloader");

    preloader.style.height = `${maxWindowHeight}px`;
}

function preloaderAnimation() {
    var codeforgeText = `<span>C</span><span>O</span><span>D</span><span>E</span><span>F</span><span>O</span><span>R</span><span>G</span><span>E</span>`,
        preloaderLayer1 = document.getElementById("preloader-layer1"),
        preloaderLayer1_h1__span = preloaderLayer1.querySelectorAll("h1 span"),
        preloaderLayer2 = document.getElementById("preloader-layer2"),
        preloaderLayer2_container1__img = preloaderLayer2.querySelectorAll("#preloader-layer2--logo img");

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
        for (i = 0; i < 4; i += 1) {
            switch (i) {
                case 0:
                    preloaderLayer2_container1__img[i].animate(
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
                    preloaderLayer2_container1__img[i].animate(
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
                    preloaderLayer2_container1__img[i].animate(
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
                    preloaderLayer2_container1__img[i].animate(
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
}



/* FUNCTION TRIGGERS */
preloaderMaxHeight();
preloaderAnimation();



/* EVENT LISTENERS */
window.onresize = () => {
    preloaderMaxHeight();
};