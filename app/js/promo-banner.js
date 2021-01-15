/**
 * sessionStorage для промо банера "Доставка їжі"
 */
const pageLocation        = document.location.pathname;
const promoBannerStorage  = sessionStorage.getItem('promoBanner');
const promoBanner         = document.querySelector('.promo-banner');
const promoBannerCloseBtn = document.querySelector('.promo-banner__close');

/**
 * Записуємо дані в sessionStorage по кліку на закриття банеру.
 */
if( promoBannerCloseBtn ) {
  promoBannerCloseBtn.addEventListener('click', function() {
    // console.log('🔑 Дані записано в sessionStorage');
    sessionStorage.setItem('promoBanner', 'hidden');
    promoBanner.classList.remove('is-shown')
  })
}

/**
 * Перевіряємо заповненість sessionStorage на обрану мову.
 * Якщо не знайдено запису, тоді робимо редірект на сторінку з вибором країни.
 */
if( ( promoBannerStorage == null || promoBannerStorage == undefined) && ( pageLocation != '/delivery/' ) ) {
  // console.log('👌 Банер показано!');
  promoBanner.classList.add('is-shown')
}