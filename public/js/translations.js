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
                document.getElementById('hero-cta').textContent = translations.hero.bt_cta;
                document.getElementById('hero-presentation').textContent = translations.hero.presentation;

                // Services Section
                document.getElementById('services-title').textContent = translations.services.title;
                document.getElementById('services-description').textContent = translations.services.description;
                // document.getElementById('card-flower-title').textContent = translations.services.cards.flower.title;
                // document.getElementById('card-flower-description').textContent = translations.services.cards.flower.description;
                // document.getElementById('card-warehouse-title').textContent = translations.services.cards.warehouse.title;
                // document.getElementById('card-warehouse-description').textContent = translations.services.cards.warehouse.description;
                // document.getElementById('card-waitstaff-title').textContent = translations.services.cards.waitstaff.title;
                // document.getElementById('card-waitstaff-description').textContent = translations.services.cards.waitstaff.description;
                // document.getElementById('card-construction-title').textContent = translations.services.cards.construction.title;
                // document.getElementById('card-construction-description').textContent = translations.services.cards.construction.description;

                // Contact Section
                // document.getElementById('contact-title').textContent = translations.contact.title;
                // document.getElementById('contact-description').textContent = translations.contact.description;

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

                // FAQ Section
                document.getElementById('faqpage-title').textContent = translations.faqpage.title;
                document.getElementById('faqpage-question1').textContent = translations.faqpage.question1;
                document.getElementById('faqpage-answer1').textContent = translations.faqpage.answer1;
                document.getElementById('faqpage-question2').textContent = translations.faqpage.question2;
                document.getElementById('faqpage-answer2').textContent = translations.faqpage.answer2;
                document.getElementById('faqpage-question3').textContent = translations.faqpage.question3;
                document.getElementById('faqpage-answer3').textContent = translations.faqpage.answer3;
                document.getElementById('faqpage-question4').textContent = translations.faqpage.question4;
                document.getElementById('faqpage-answer4').textContent = translations.faqpage.answer4;
                document.getElementById('faqpage-question5').textContent = translations.faqpage.question5;
                document.getElementById('faqpage-answer5').textContent = translations.faqpage.answer5;
                document.getElementById('faqpage-question6').textContent = translations.faqpage.question6;
                document.getElementById('faqpage-answer6').textContent = translations.faqpage.answer6;
                document.getElementById('faqpage-question7').textContent = translations.faqpage.question7;
                document.getElementById('faqpage-answer7').textContent = translations.faqpage.answer7;
                document.getElementById('faqpage-question8').textContent = translations.faqpage.question8;
                document.getElementById('faqpage-answer8').textContent = translations.faqpage.answer8;
                document.getElementById('faqpage-question9').textContent = translations.faqpage.question9;
                document.getElementById('faqpage-answer9').textContent = translations.faqpage.answer9;
                document.getElementById('faqpage-question10').textContent = translations.faqpage.question10;
                document.getElementById('faqpage-answer10').textContent = translations.faqpage.answer10;

                //jobs
                // Jobs Section
                document.getElementById('jobs-title').textContent = translations.jobs.title;
                document.getElementById('jobs-description').textContent = translations.jobs.description;

                // Assuming there are multiple job listings
                const jobCards = translations.jobs.cards;
                jobCards.forEach((job, index) => {
                    document.getElementById(`card-job-${index}-title`).textContent = job.title;
                    document.getElementById(`card-job-${index}-description`).textContent = job.description;
                });


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
