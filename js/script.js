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
    var apkURL = './assets/app/Posyandu-Bayi-Balita.apk';
    var tempLink = document.createElement('a');
    tempLink.href = apkURL;
    tempLink.setAttribute('download', 'Posyandu-Bayi-Balita.apk');
    tempLink.click();
}

document.addEventListener('DOMContentLoaded', function() {
    function handleMenuClick(event) {
        event.preventDefault();

        var targetId = this.getAttribute('href').substring(1);

        var targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    var menuLinks = document.querySelectorAll('.btn-getStarted');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', handleMenuClick);
    });
});