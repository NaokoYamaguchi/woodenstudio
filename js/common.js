$(function () {
    AOS.init();

    $(".main-visual").vegas({
        timer: false,
        ovarlay: false,
        transition: 'blur',
        transitionDuration: 2000,
        delay: 10000,
        animation: 'kenburns',
        animationDuration: 10000,
        slides: [{
                src: "./img/photo01.jpg"
            },
            {
                src: "./img/photo011.jpg"
            },
            {
                src: "./img/photo012.jpg"
            },
        ]
    });

    $(document).ready(function () {
        $('.drawer').drawer();
    });
})