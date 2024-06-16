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

function requestPassword() {
    Swal.fire({
        title: 'Masukkan Password',
        input: 'password',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Kirim',
        confirmButtonColor: '#3085d6',
        showLoaderOnConfirm: false,
        preConfirm: (password) => {
            const correctPassword = 'posyandu2024';
            if (password === correctPassword) {
                return Promise.resolve();
            } else {
                return Promise.reject('Password salah, coba lagi!');
            }
        },
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            downloadAPK();
        }
    }).catch((error) => {
        Swal.fire({
            title: 'Gagal!',
            text: error,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6'
        });
    });
}

function downloadAPK() {
    var apkURL = './assets/app/Posyandu-Bayi-Balita.apk';
    var tempLink = document.createElement('a');
    tempLink.href = apkURL;
    tempLink.setAttribute('download', 'Posyandu-Bayi-Balita.apk');
    tempLink.click();
}

function confirmWebsiteAccess() {
    Swal.fire({
        title: 'Masukkan Password',
        input: 'password',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Kirim',
        confirmButtonColor: '#3085d6',
        showLoaderOnConfirm: false,
        preConfirm: (password) => {
            const correctPassword = 'posyandu2024';
            if (password === correctPassword) {
                return Promise.resolve();
            } else {
                return Promise.reject('Password salah, coba lagi!');
            }
        },
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            window.open('https://posyandubayibalita.com/', '_blank');
        }
    }).catch((error) => {
        Swal.fire({
            title: 'Gagal!',
            text: error,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6'
        });
    });
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