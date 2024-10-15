$(document).ready(function() {
    const coordinates = [
        { img: "assets/trimmed1", coord: "40.74874° N, 73.98879° W" },
        { img: "assets/trimmed2", coord: "40.74869° N, 73.98878° W" },
        { img: "assets/trimmed3", coord: "40.74855° N, 73.98887° W" },
        { img: "assets/trimmed4", coord: "40.74831° N, 73.98903° W" },
        { img: "assets/trimmed5", coord: "40.74788° N, 73.98905° W" },
        { img: "assets/trimmed6", coord: "40.74767° N, 73.98872° W" },
        { img: "assets/trimmed7", coord: "40.74767° N, 73.98848° W" },
        { img: "assets/trimmed8", coord: "40.74744° N, 73.98850° W" },
        { img: "assets/trimmed9", coord: "40.74559° N, 73.98857° W" },
        { img: "assets/trimmed10", coord: "40.74479° N, 73.98855° W" },
        { img: "assets/trimmed11", coord: "40.74300° N, 73.98905° W" },
        { img: "assets/trimmed12", coord: "40.73576° N, 73.99358° W" },
        { img: "assets/trimmed13", coord: "40.73568° N, 73.99366° W" },
        { img: "assets/trimmed14", coord: "40.73579° N, 73.99366° W" },
        { img: "assets/trimmed15", coord: "40.73555° N, 73.99712° W" },
        { img: "assets/trimmed16", coord: "40.73559° N, 73.99692° W" },
        { img: "assets/trimmed17", coord: "40.73557° N, 73.99648° W" },
        { img: "assets/trimmed18", coord: "40.73867° N, 73.99230° W" },
        { img: "assets/trimmed19", coord: "40.73555° N, 73.99648° W" },
        { img: "assets/trimmed20", coord: "40.73026° N, 73.99145° W" },
        { img: "assets/trimmed21", coord: "40.73520° N, 73.99576° W" },
        { img: "assets/trimmed22", coord: "40.73529° N, 73.99502° W" },
        { img: "assets/trimmed23", coord: "40.75008° N, 73.98800° W" },
        { img: "assets/trimmed24", coord: "40.75244° N, 73.98750° W" },
        { img: "assets/trimmed25", coord: "40.74854° N, 73.98912° W" },
        { img: "assets/trimmed26", coord: "40.73454° N, 73.99433° W" },
        { img: "assets/trimmed27", coord: "40.73367° N, 73.99207° W" },
        { img: "assets/trimmed28", coord: "40.73321° N, 73.99125° W" },
        { img: "assets/trimmed29", coord: "40.73316° N, 73.99113° W" },
        { img: "assets/trimmed30", coord: "40.73311° N, 73.99110° W" },
        { img: "assets/trimmed31", coord: "40.73285° N, 73.99122° W" },
        { img: "assets/trimmed32", coord: "40.73262° N, 73.99131° W" },
        { img: "assets/trimmed33", coord: "40.73252° N, 73.99132° W" },
        { img: "assets/trimmed34", coord: "40.73236° N, 73.99132° W" },
        { img: "assets/trimmed35", coord: "40.73196° N, 73.99137° W" },
        { img: "assets/trimmed36", coord: "40.73182° N, 73.99137° W" },
        { img: "assets/trimmed37", coord: "40.73170° N, 73.99131° W" },
        { img: "assets/trimmed38", coord: "40.73172° N, 73.99136° W" },
        { img: "assets/trimmed39", coord: "40.73060° N, 73.99074° W" },
        { img: "assets/trimmed40", coord: "40.73033° N, 73.99010° W" },
        { img: "assets/trimmed41", coord: "40.73020° N, 73.98978° W" },
        { img: "assets/trimmed42", coord: "40.73019° N, 73.98978° W" },
        { img: "assets/trimmed43", coord: "40.73018° N, 73.98975° W" },
        { img: "assets/trimmed44", coord: "40.72975° N, 73.98996° W" },
        { img: "assets/trimmed45", coord: "40.72926° N, 73.99089° W" },
        { img: "assets/trimmed46", coord: "40.75276° N, 73.98746° W" },
        { img: "assets/trimmed47", coord: "40.75339° N, 73.98866° W" },
        { img: "assets/trimmed48", coord: "40.75319° N, 73.98889° W" },
        { img: "assets/trimmed49", coord: "40.75044° N, 73.99097° W" },
        { img: "assets/trimmed50", coord: "40.75037° N, 73.99091° W" },
        { img: "assets/trimmed51", coord: "40.74681° N, 73.98870° W" },
        { img: "assets/trimmed52", coord: "40.74746° N, 73.98846° W" },
        { img: "assets/trimmed53", coord: "40.75332° N, 73.99077° W" },
        { img: "assets/trimmed54", coord: "40.73555° N, 73.99650° W" },
        { img: "assets/trimmed55", coord: "40.73459° N, 73.99443° W" }
    ];

    const $container = $('.coordinates-container');
    const containerWidth = $container.width();
    const containerHeight = $container.height();

    coordinates.forEach(function(item) {
        const randomX = Math.random() * (containerWidth - 100);
        const randomY = Math.random() * (containerHeight - 30);

        const coordElement = $('<div>', {
            class: 'coord-text',
            text: item.coord
        }).css({
            position: 'absolute',
            left: randomX + 'px',
            top: randomY + 'px',
            cursor: 'pointer',
            color: 'blue',
            fontSize: '16px'
        });

        $container.append(coordElement);

        coordElement.on('click', function() {
            $('.manhole-img').fadeOut(350, function() {
                $(this).remove();
            });

            const imageSrc = item.img + ".webp";
            const imgElement = $('<img>', {
                src: imageSrc,
                alt: 'Manhole Image',
                class: 'manhole-img'
            }).css({
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '80%',
                maxHeight: '80%'
            }).hide();

            $('body').append(imgElement);

            imgElement.fadeIn(350);

            setTimeout(function() {
                imgElement.fadeOut(350, function() {
                    $(this).remove();
                });
            }, 4000);
        });
    });
});