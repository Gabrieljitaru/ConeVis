const databaseURL = 'https://conevishs-default-rtdb.firebaseio.com/FAQtranslations'; // URL base senza .json

// Funzione per popolare il database
const populateDatabase = async (data) => {
    try {
        const response = await fetch(databaseURL + '.json', {
            method: 'PUT', // Usa 'PUT' per sovrascrivere i dati
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // I dati saranno inviati come oggetti JSON
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        console.log("Database populated successfully!");
    } catch (error) {
        console.error("Error populating database:", error);
    }
};

const translations = {
    "en": {
        "faqpage": {
            "title": "Frequently Asked Questions",
            "subtitle": "* The answers to the questions refer to a general average applicable to 90% of the job offers and services offered. However, this information may not be completely suitable for all programs. Each job offer has specific characteristics, described in detail in the related announcement, which may confirm or differ from what is reported in the average.",
            "question1": "How does the recruitment process work?",
            "answer1": "Our recruitment process begins when you submit your application through our website. We will evaluate your profile and contact you if your background matches the open positions. This may be followed by a phone or video interview before being presented directly to the client company.",
            "question2": "Do I have to pay to use the agency's services?",
            "answer2": "No, our intermediary services for candidates are completely free. Our fees are paid by the companies seeking qualified personnel.",
            "question3": "What types of contracts do you offer?",
            "answer3": "We offer a variety of contract types depending on the position and the client company. This can include fixed-term contracts, permanent contracts, or even temporary employment (interim).",
            "question4": "Can I apply for a position even if I don’t live in the country where it’s offered?",
            "answer4": "Absolutely. Many of our positions are open to international candidates, and we often provide support with documentation and visas, as well as relocation assistance.",
            "question5": "How will I know if my profile has been selected for a job offer?",
            "answer5": "We will contact you directly via email or phone to inform you about the status of your application. You can also log in to your profile on our website to track the progress.",
            "question6": "Which sectors do you mainly cover?",
            "answer6": "We specialize in various sectors, including logistics, construction, agriculture, hospitality, and warehousing. We collaborate with companies across several European countries, offering dynamic job opportunities.",
            "question7": "Do you provide interview preparation support?",
            "answer7": "Yes, we offer pre-interview consultations to help you present yourself effectively. We will provide information about the company and the specific job requirements, along with tips on how to succeed in the interview.",
            "question8": "What happens if I’m not satisfied with the assigned job position?",
            "answer8": "We are here to support you. If the position isn’t the right fit, we encourage you to contact us immediately. We will do our best to find a solution that meets your needs and the client company’s requirements.",
            "question9": "Do you assist with the necessary documentation for working abroad?",
            "answer9": "Yes, we help candidates with all the necessary paperwork for relocation and working abroad, including visa processing, work permits, and tax documentation.",
            "question10": "Are there opportunities for career growth?",
            "answer10": "Yes, many of the companies we work with offer opportunities for advancement and growth within their organization. They often provide training and development courses to help improve your skills."
        },
    },





    "it": {
        "faqpage": {
            "title": "Domande Frequenti",
            "subtitle": "* Le risposte alle domande fanno riferimento a una media generale applicabile al 90% delle offerte di lavoro e dei servizi offerti. Tuttavia, tali informazioni potrebbero non essere completamente adatte a tutti i programmi. Ogni offerta di lavoro presenta caratteristiche specifiche, descritte dettagliatamente nel relativo annuncio, che possono confermare o differire da quanto riportato nella media.",
            "question1": "Come funziona il processo di reclutamento?",
            "answer1": "Il nostro processo di reclutamento inizia quando invii la tua candidatura attraverso il nostro sito web. Valuteremo il tuo profilo e ti contatteremo se la tua esperienza corrisponde alle posizioni aperte. Questo può essere seguito da un'intervista telefonica o video prima di essere presentato direttamente all'azienda cliente.",
            "question2": "Devo pagare per utilizzare i servizi dell'agenzia?",
            "answer2": "No, i nostri servizi intermediari per i candidati sono completamente gratuiti. Le nostre commissioni sono pagate dalle aziende che cercano personale qualificato.",
            "question3": "Che tipi di contratti offrite?",
            "answer3": "Offriamo una varietà di tipi di contratto a seconda della posizione e dell'azienda cliente. Questo può includere contratti a tempo determinato, contratti a tempo indeterminato o persino lavoro temporaneo (interim).",
            "question4": "Posso candidarmi per una posizione anche se non vivo nel paese in cui è offerta?",
            "answer4": "Assolutamente. Molte delle nostre posizioni sono aperte a candidati internazionali, e spesso forniamo supporto con documentazione e visti, oltre ad assistenza per il trasferimento.",
            "question5": "Come saprò se il mio profilo è stato selezionato per un'offerta di lavoro?",
            "answer5": "Ti contatteremo direttamente via email o telefono per informarti dello stato della tua candidatura. Puoi anche accedere al tuo profilo sul nostro sito web per monitorare i progressi.",
            "question6": "Quali settori coprite principalmente?",
            "answer6": "Siamo specializzati in vari settori, tra cui logistica, costruzioni, agricoltura, ospitalità e magazzinaggio. Collaboriamo con aziende in diversi paesi europei, offrendo opportunità lavorative dinamiche.",
            "question7": "Offrite supporto per la preparazione ai colloqui?",
            "answer7": "Sì, offriamo consultazioni pre-colloquio per aiutarti a presentarti al meglio. Forniremo informazioni sull'azienda e sui requisiti specifici del lavoro, insieme a consigli su come avere successo nel colloquio.",
            "question8": "Cosa succede se non sono soddisfatto della posizione assegnata?",
            "answer8": "Siamo qui per supportarti. Se la posizione non è adatta, ti invitiamo a contattarci immediatamente. Faremo del nostro meglio per trovare una soluzione che soddisfi le tue esigenze e i requisiti dell'azienda cliente.",
            "question9": "Offrite assistenza con la documentazione necessaria per lavorare all'estero?",
            "answer9": "Sì, aiutiamo i candidati con tutta la documentazione necessaria per il trasferimento e per lavorare all'estero, compresi i visti, i permessi di lavoro e la documentazione fiscale.",
            "question10": "Ci sono opportunità di crescita professionale?",
            "answer10": "Sì, molte delle aziende con cui lavoriamo offrono opportunità di avanzamento e crescita all'interno della loro organizzazione. Spesso forniscono corsi di formazione e sviluppo per migliorare le tue competenze."
        },
    },



    "ro": {
        "faqpage": {
            "title": "Întrebări frecvente",
            "subtitle": "* Răspunsurile la întrebări se referă la o medie generală aplicabilă la 90% din ofertele de locuri de muncă și serviciile oferite. Cu toate acestea, este posibil ca aceste informații să nu fie complet potrivite pentru toate programele. Fiecare ofertă de muncă are caracteristici specifice, descrise în detaliu în anunțul relevant, care pot confirma sau diferi de ceea ce este raportat în medie.",
            "question1": "Cum funcționează procesul de recrutare?",
            "answer1": "Procesul nostru de recrutare începe când îți trimiți aplicația prin intermediul site-ului nostru. Îți vom evalua profilul și te vom contacta dacă experiența ta corespunde pozițiilor deschise. Acest lucru poate fi urmat de un interviu telefonic sau video, înainte de a fi prezentat direct companiei client.",
            "question2": "Trebuie să plătesc pentru a folosi serviciile agenției?",
            "answer2": "Nu, serviciile noastre de intermediere pentru candidați sunt complet gratuite. Taxele noastre sunt plătite de companiile care caută personal calificat.",
            "question3": "Ce tipuri de contracte oferiți?",
            "answer3": "Oferim o varietate de tipuri de contracte, în funcție de poziție și de compania client. Acestea pot include contracte pe termen determinat, contracte pe termen nedeterminat sau chiar muncă temporară (interimat).",
            "question4": "Pot aplica pentru o poziție chiar dacă nu locuiesc în țara în care este oferită?",
            "answer4": "Absolut. Multe dintre pozițiile noastre sunt deschise candidaților internaționali și adesea oferim suport cu documentația și vizele, precum și asistență pentru relocare.",
            "question5": "Cum voi ști dacă profilul meu a fost selectat pentru o ofertă de muncă?",
            "answer5": "Te vom contacta direct prin e-mail sau telefon pentru a te informa despre starea aplicației tale. De asemenea, poți accesa profilul tău pe site-ul nostru pentru a urmări progresul.",
            "question6": "În ce sectoare activați în principal?",
            "answer6": "Suntem specializați în diverse sectoare, inclusiv logistică, construcții, agricultură, ospitalitate și depozitare. Colaborăm cu companii din mai multe țări europene, oferind oportunități dinamice de muncă.",
            "question7": "Oferiți suport pentru pregătirea interviului?",
            "answer7": "Da, oferim consultanță înainte de interviu pentru a te ajuta să te prezinți eficient. Îți vom furniza informații despre companie și cerințele specifice ale locului de muncă, împreună cu sfaturi pentru a avea succes la interviu.",
            "question8": "Ce se întâmplă dacă nu sunt mulțumit de poziția atribuită?",
            "answer8": "Suntem aici pentru a te sprijini. Dacă poziția nu este potrivită, te încurajăm să ne contactezi imediat. Vom face tot posibilul pentru a găsi o soluție care să răspundă nevoilor tale și cerințelor companiei client.",
            "question9": "Oferiți asistență cu documentația necesară pentru a lucra în străinătate?",
            "answer9": "Da, ajutăm candidații cu toată documentația necesară pentru relocare și pentru a lucra în străinătate, inclusiv procesarea vizelor, permise de muncă și documentația fiscală.",
            "question10": "Există oportunități de creștere profesională?",
            "answer10": "Da, multe dintre companiile cu care lucrăm oferă oportunități de avansare și creștere în cadrul organizației lor. Adesea oferă cursuri de formare și dezvoltare pentru a îți îmbunătăți abilitățile."
        },
    },

};


populateDatabase(translations);
