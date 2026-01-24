 function googleTranslateElementInit() {
            new google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    includedLanguages: 'hi,en,mr,gu,ta,te,ur',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                },
                'google_translate_element'
            );
        }

        setInterval(function () {
    var gtFrame = document.querySelector('.skiptranslate iframe');
    if (gtFrame) {
        gtFrame.style.display = 'none';
    }
   
}, 100);

setInterval(function () {
    $('#google_translate_element span').each(function () {
        if (!$(this).hasClass('language-name')) {
            $(this).addClass('language-name');
        }
    });
}, 120);

setInterval(function () {

    var selectedLang = $('.goog-te-combo option:selected').text();

    // Remove old class
    $('#google_translate_element .language-name').removeClass('language-name');

    // Add class only to selected language text
    $('#google_translate_element span').each(function () {
        if ($(this).text() === selectedLang) {
            $(this).addClass('select-language-name');
        }
    });

}, 140);