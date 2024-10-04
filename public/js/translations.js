document.addEventListener("DOMContentLoaded", function () {
    // Funzione per caricare i componenti HTML da file esterni
    function loadIncludes() {
        const promises = [];
        $("[include-html]").each(function () {
            const element = $(this);
            const file = element.attr("include-html");
            if (file) {
                const promise = new Promise((resolve, reject) => {
                    element.load(file, function (response, status, xhr) {
                        if (status === "error") {
                            element.html("Error loading file: " + xhr.status + " " + xhr.statusText);
                            reject(new Error("Error loading file: " + xhr.status + " " + xhr.statusText));
                        } else {
                            resolve();
                        }
                    });
                });
                promises.push(promise);
            }
        });
        return Promise.all(promises);
    }

    // Controlla se c'è una lingua salvata in localStorage e imposta la lingua predefinita
    let lang = localStorage.getItem('lang') || 'en';

    // Carica e applica le traduzioni dal database Firebase
    function loadTranslations() {
        const databaseURL = 'https://conevishs-default-rtdb.firebaseio.com/translations/' + lang + '.json'; // URL per la lingua

        fetch(databaseURL)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(translations => { 
                // Navbar
                document.getElementById('nav-opportunities').textContent = translations.navbar.opportunities;
                document.getElementById('nav-application').textContent = translations.navbar.application_form;
                document.getElementById('nav-mail').textContent = translations.navbar.send_mail;
                document.getElementById('nav-call').textContent = translations.navbar.call_us;
                document.getElementById('nav-faq').textContent = translations.navbar.faq;

                // Hero Section
                document.getElementById('hero-subtitle').textContent = translations.hero.subtitle;
                document.getElementById('hero-bt_cta').textContent = translations.hero.bt_cta;
                document.getElementById('hero-presentation').textContent = translations.hero.presentation;

                // Services Section
                document.getElementById('services-title').textContent = translations.services.title;
                document.getElementById('services-description').textContent = translations.services.description;

                document.getElementById('services-cards-one-country').textContent = translations.services.cards.one.country;
                document.getElementById('services-cards-one-title').textContent = translations.services.cards.one.title;
                document.getElementById('services-cards-one-description').textContent = translations.services.cards.one.description;
                document.getElementById('services-viewmore1').textContent = translations.services.viewmore;

                document.getElementById('services-cards-two-country').textContent = translations.services.cards.two.country;
                document.getElementById('services-cards-two-title').textContent = translations.services.cards.two.title;
                document.getElementById('services-cards-two-description').textContent = translations.services.cards.two.description;
                document.getElementById('services-viewmore2').textContent = translations.services.viewmore;

                document.getElementById('services-cards-three-country').textContent = translations.services.cards.three.country;
                document.getElementById('services-cards-three-title').textContent = translations.services.cards.three.title;
                document.getElementById('services-cards-three-description').textContent = translations.services.cards.three.description;
                document.getElementById('services-viewmore3').textContent = translations.services.viewmore;

                document.getElementById('services-cards-four-country').textContent = translations.services.cards.four.country;
                document.getElementById('services-cards-four-title').textContent = translations.services.cards.four.title;
                document.getElementById('services-cards-four-description').textContent = translations.services.cards.four.description;
                document.getElementById('services-viewmore4').textContent = translations.services.viewmore;

                document.getElementById('services-cards-five-country').textContent = translations.services.cards.five.country;
                document.getElementById('services-cards-five-title').textContent = translations.services.cards.five.title;
                document.getElementById('services-cards-five-description').textContent = translations.services.cards.five.description;
                document.getElementById('services-viewmore5').textContent = translations.services.viewmore;

                document.getElementById('services-cards-six-country').textContent = translations.services.cards.six.country;
                document.getElementById('services-cards-six-title').textContent = translations.services.cards.six.title;
                document.getElementById('services-cards-six-description').textContent = translations.services.cards.six.description;
                document.getElementById('services-viewmore6').textContent = translations.services.viewmore;



                // Application Section
                document.getElementById('application-title').textContent = translations.application.title;
                document.getElementById('application-description').textContent = translations.application.description;
                document.getElementById('application-name').textContent = translations.application.name;
                document.getElementById('application-email').textContent = translations.application.email;
                document.getElementById('application-message').textContent = translations.application.message;
                document.getElementById('application-submit').textContent = translations.application.submit;
                document.getElementById('application-or').textContent = translations.application.or;
                document.getElementById('application-infocontact').textContent = translations.application.infocontact;
                document.getElementById('application-orcall').textContent = translations.application.orcall;
                document.getElementById('application-ormail').textContent = translations.application.ormail;

                document.getElementById('footer-contact-title').textContent = translations.footer.contact.title;
                document.getElementById('footer-link-title').textContent = translations.footer.link.title;
                document.getElementById('footer-link-oppo').textContent = translations.footer.link.oppo;
                document.getElementById('footer-link-home').textContent = translations.footer.link.home;
                document.getElementById('footer-link-faq').textContent = translations.footer.link.faq;
                document.getElementById('footer-link-cont').textContent = translations.footer.link.cont;
                document.getElementById('footer-follow-title').textContent = translations.footer.follow.title;
                document.getElementById('footer-follow-soca').textContent = translations.footer.follow.soca;
                document.getElementById('footer-follow-socb').textContent = translations.footer.follow.socb;
                document.getElementById('footer-follow-socc').textContent = translations.footer.follow.socc;



                // Jobs Section
                // document.getElementById('jobs-title').textContent = translations.jobs.title;
                // document.getElementById('jobs-description').textContent = translations.jobs.description;

                // Assuming there are multiple job listings
                // const jobCards = translations.jobs.cards;
                // jobCards.forEach((job, index) => {
                //     document.getElementById(`card-job-${index}-title`).textContent = job.title;
                //     document.getElementById(`card-job-${index}-description`).textContent = job.description;
                // });

                setLanguageSelect(lang);
            });
    }

    // Funzione per impostare il selettore della lingua
    function setLanguageSelect(lang) {
        const languageSelects = document.querySelectorAll('#language-select');
        languageSelects.forEach(select => {
            select.value = lang;
        });
    }

    // Funzione per aggiornare la lingua
    function updateLanguage(newLang) {
        lang = newLang;
        localStorage.setItem('lang', lang);
        loadTranslations();
        setLanguageSelect(lang);
    }

    // Event listener per il cambio di lingua
    document.addEventListener('change', function (event) {
        if (event.target.id === 'language-select') {
            updateLanguage(event.target.value);
        }
    });

    // Carica i componenti HTML, quindi imposta la lingua e carica le traduzioni
    loadIncludes().then(() => {
        lang = localStorage.getItem('lang') || 'en';
        setLanguageSelect(lang);
        loadTranslations();
    }).catch(error => console.error('Error loading includes:', error));

});
