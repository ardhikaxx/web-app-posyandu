$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

function confirmDownload() {
    Swal.fire({
        title: 'Anda ingin mendownload aplikasi-posyandu?',
        icon: 'question',
        iconColor: '#3085d6',
        showCancelButton: true,
        confirmButtonText: 'Ya',
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'Tidak'
    }).then((result) => {
        if (result.isConfirmed) {
            downloadAPK();
        }
    });
}

function downloadAPK() {
    var apkURL = 'path/to/asset/app/aplikasi-posyandu.apk';
    var tempLink = document.createElement('a');
    tempLink.href = apkURL;
    tempLink.setAttribute('download', 'aplikasi-posyandu.apk');
    tempLink.click();
}