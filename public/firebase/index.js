const databaseURL = 'https://conevishs-default-rtdb.firebaseio.com/translations'; // URL base senza .json

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
        "navbar": {
            "opportunities": "Opportunities",
            "application_form": "Application Form",
            "send_mail": "Send a mail",
            "call_us": "Call us",
            "faq": "FAQ"
        },
        "hero": {
            "subtitle": "Connecting talent with strength across borders",
            "presentation": "We are a leading multi-service company in human resources, specializing in placing qualified personnel throughout Europe. We offer tailored career opportunities with a fast and targeted hiring process to connect the right talents with growing businesses.",
            "bt_cta": "Discover Opportunities"
        },
        "services": {
            "title": "Our Services",
            "description": "We help connect skilled workers with leading companies in the Netherlands, Italy, and Germany.",
            "cards": {
                "flower": {
                    "title": "Flower & Plant Collection",
                    "description": "Jobs in agriculture, flower harvesting, and plant management."
                },
                "warehouse": {
                    "title": "Warehouse Workers",
                    "description": "Logistics, packaging, and warehouse jobs available."
                },
                "waitstaff": {
                    "title": "Waitstaff",
                    "description": "Opportunities in hospitality as waitstaff across Europe."
                },
                "construction": {
                    "title": "Construction Workers",
                    "description": "Join construction teams in various international projects."
                }
            }
        },
        "contact": {
            "title": "Contacts",
            "description": "Contact Information..."
        },
        "application": {
            "title": "Application Form",
            "description": "Form for applications..."
        },
        "faq": {
            "title": "FAQ",
            "description": "Frequently Asked Questions..."
        },
        "faqpage": {
            "title": "Frequently Asked Questions",
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
        "jobs": {
            "manager": {
                "title": "Position: Manager",
                "location": "Location: Rome",
                "description": "Description: We are looking for a manager to oversee the team...",
                "apply": "Apply Now"
            },
            "web_developer": {
                "title": "Position: Web Developer",
                "location": "Location: Milan",
                "description": "Description: We are seeking an experienced web developer...",
                "apply": "Apply Now"
            }
        }

    },
    "it": {
        "navbar": {
            "opportunities": "Opportunità",
            "application_form": "Modulo di Candidatura",
            "send_mail": "Invia una mail",
            "call_us": "Chiamaci",
            "faq": "FAQ"
        },
        "hero": {
            "title": "ConeVis",
            "subtitle": "Connettere il talento con la forza oltre i confini",
            "presentation": "Siamo un'azienda multiservizi leader nelle risorse umane, specializzata nel collocamento di personale qualificato in tutta Europa. Offriamo opportunità di carriera su misura, con un processo di assunzione rapido e mirato, per connettere i talenti giusti alle aziende in crescita.",
            "bt_cta": "Scopri le opportunità"
        },
        "services": {
            "title": "I nostri servizi",
            "description": "Aiutiamo a connettere lavoratori qualificati con le principali aziende nei Paesi Bassi, in Italia e in Germania.",
            "cards": {
                "flower": {
                    "title": "Raccolta di Fiori e Piante",
                    "description": "Lavori in agricoltura, raccolta di fiori e gestione delle piante."
                },
                "warehouse": {
                    "title": "Lavoratori di Magazzino",
                    "description": "Lavori di logistica, confezionamento e magazzino disponibili."
                },
                "waitstaff": {
                    "title": "Camerieri",
                    "description": "Opportunità nell'ospitalità come camerieri in tutta Europa."
                },
                "construction": {
                    "title": "Lavoratori Edili",
                    "description": "Unisciti a team di costruzione in vari progetti internazionali."
                }
            }
        },
        "contact": {
            "title": "Contatti",
            "description": "Informazioni di contatto..."
        },
        "application": {
            "title": "Modulo di Candidatura",
            "description": "Modulo per candidature..."
        },
        "faq": {
            "title": "FAQ",
            "description": "Domande frequenti..."
        },
        "faqpage": {
            "title": "Domande Frequenti",
            "question1": "Come funziona il processo di reclutamento?",
            "answer1": "Il nostro processo di reclutamento inizia quando invii la tua candidatura attraverso il nostro sito web. Valuteremo il tuo profilo e ti contatteremo se il tuo background corrisponde alle posizioni aperte. Questo può essere seguito da un colloquio telefonico o video prima di essere presentato direttamente all'azienda cliente.",
            "question2": "Devo pagare per utilizzare i servizi dell'agenzia?",
            "answer2": "No, i nostri servizi di intermediazione per i candidati sono completamente gratuiti. Le nostre spese sono coperte dalle aziende che cercano personale qualificato.",
            "question3": "Quali tipi di contratti offrite?",
            "answer3": "Offriamo una varietà di tipi di contratto a seconda della posizione e dell'azienda cliente. Questo può includere contratti a tempo determinato, contratti permanenti o anche impiego temporaneo (interinale).",
            "question4": "Posso candidarmi per una posizione anche se non vivo nel paese in cui è offerta?",
            "answer4": "Assolutamente. Molte delle nostre posizioni sono aperte a candidati internazionali, e spesso forniamo supporto per la documentazione e i visti, oltre ad assistenza per il trasferimento.",
            "question5": "Come saprò se il mio profilo è stato selezionato per un'offerta di lavoro?",
            "answer5": "Ti contatteremo direttamente via email o telefono per informarti sullo stato della tua candidatura. Puoi anche accedere al tuo profilo sul nostro sito web per monitorare il progresso.",
            "question6": "Quali settori coprite principalmente?",
            "answer6": "Ci specializziamo in vari settori, tra cui logistica, costruzioni, agricoltura, ospitalità e magazzinaggio. Collaboriamo con aziende in diversi paesi europei, offrendo opportunità di lavoro dinamiche.",
            "question7": "Fornite supporto per la preparazione ai colloqui?",
            "answer7": "Sì, offriamo consulenze pre-colloquio per aiutarti a presentarti in modo efficace. Forniremo informazioni sull'azienda e sui requisiti specifici del lavoro, insieme a suggerimenti su come avere successo nel colloquio.",
            "question8": "Cosa succede se non sono soddisfatto della posizione di lavoro assegnata?",
            "answer8": "Siamo qui per supportarti. Se la posizione non è quella giusta, ti incoraggiamo a contattarci immediatamente. Faremo del nostro meglio per trovare una soluzione che soddisfi le tue esigenze e quelle dell'azienda cliente.",
            "question9": "Assistete con la documentazione necessaria per lavorare all'estero?",
            "answer9": "Sì, aiutiamo i candidati con tutta la documentazione necessaria per il trasferimento e il lavoro all'estero, inclusa la gestione dei visti, dei permessi di lavoro e della documentazione fiscale.",
            "question10": "Ci sono opportunità di crescita professionale?",
            "answer10": "Sì, molte delle aziende con cui lavoriamo offrono opportunità di avanzamento e crescita all'interno della loro organizzazione. Spesso forniscono corsi di formazione e sviluppo per aiutare a migliorare le tue competenze."
        },
        "jobs": {
            "manager": {
                "title": "Posizione: Manager",
                "location": "Sede: Roma",
                "description": "Descrizione: Stiamo cercando un manager per la gestione del team...",
                "apply": "Candidati Ora"
            },
            "web_developer": {
                "title": "Posizione: Sviluppatore Web",
                "location": "Sede: Milano",
                "description": "Descrizione: Siamo alla ricerca di uno sviluppatore web esperto...",
                "apply": "Candidati Ora"
            }
        }
    },
    "ro": {
        "navbar": {
            "opportunities": "Oportunități",
            "application_form": "Formular de Aplicare",
            "send_mail": "Trimite un mail",
            "call_us": "Sună-ne",
            "faq": "FAQ"
        },
        "hero": {
            "title": "ConeVis",
            "subtitle": "Conectând talentul cu forța dincolo de granițe",
            "presentation": "Suntem o companie multi-servicii de top în resurse umane, specializată în plasarea personalului calificat în toată Europa. Oferim oportunități de carieră personalizate, cu un proces rapid și bine definit de angajare, pentru a conecta talentele potrivite cu afaceri în expansiune.",
            "bt_cta": "Descoperă Oportunitățile"
        },
        "services": {
            "title": "Serviciile Noastre",
            "description": "Ajutăm la conectarea lucrătorilor calificați cu companii de top din Olanda, Italia și Germania.",
            "cards": {
                "flower": {
                    "title": "Colectarea Florilor și Plantelor",
                    "description": "Locuri de muncă în agricultură, recoltarea florilor și gestionarea plantelor."
                },
                "warehouse": {
                    "title": "Lucrători în Depozit",
                    "description": "Locuri de muncă în logistică, ambalare și depozit."
                },
                "waitstaff": {
                    "title": "Personal pentru Restaurant",
                    "description": "Oportunități în ospitalitate ca personal pentru restaurant în întreaga Europă."
                },
                "construction": {
                    "title": "Lucrători în Construcții",
                    "description": "Alăturați-vă echipelor de construcție în diverse proiecte internaționale."
                }
            }
        },
        "contact": {
            "title": "Contact",
            "description": "Informații de contact..."
        },
        "application": {
            "title": "Formular de Aplicare",
            "description": "Formular pentru aplicare..."
        },
        "faq": {
            "title": "FAQ",
            "description": "Întrebări frecvente..."
        },
        "faqpage": {
            "title": "Întrebări Frecvente",
            "question1": "Cum funcționează procesul de recrutare?",
            "answer1": "Procesul nostru de recrutare începe atunci când trimiți aplicația ta prin intermediul site-ului nostru. Vom evalua profilul tău și te vom contacta dacă experiența ta se potrivește cu posturile disponibile. Acest lucru poate fi urmat de un interviu telefonic sau video înainte de a fi prezentat direct clientului.",
            "question2": "Trebuie să plătesc pentru a utiliza serviciile agenției?",
            "answer2": "Nu, serviciile noastre de intermediere pentru candidați sunt complet gratuite. Taxele noastre sunt plătite de companiile care caută personal calificat.",
            "question3": "Ce tipuri de contracte oferiți?",
            "answer3": "Oferim o varietate de tipuri de contracte, în funcție de post și de compania client. Acestea pot include contracte pe durată determinată, contracte permanente sau chiar muncă temporară.",
            "question4": "Pot aplica pentru un post chiar dacă nu locuiesc în țara în care este oferit?",
            "answer4": "Absolut. Multe dintre posturile noastre sunt deschise pentru candidați internaționali, și adesea oferim suport cu documentația și vizele, precum și asistență pentru relocare.",
            "question5": "Cum voi ști dacă profilul meu a fost selectat pentru o ofertă de muncă?",
            "answer5": "Te vom contacta direct prin email sau telefon pentru a te informa despre statutul aplicației tale. De asemenea, poți accesa profilul tău pe site-ul nostru pentru a urmări progresul.",
            "question6": "Ce sectoare acoperiți în principal?",
            "answer6": "Ne specializăm în diverse sectoare, inclusiv logistică, construcții, agricultură, ospitalitate și depozitare. Colaborăm cu companii din mai multe țări europene, oferind oportunități de muncă dinamice.",
            "question7": "Oferiți suport pentru pregătirea interviurilor?",
            "answer7": "Da, oferim consultanțe pre-interviu pentru a te ajuta să te prezinți eficient. Îți vom oferi informații despre companie și cerințele specifice ale locului de muncă, împreună cu sfaturi despre cum să ai succes în interviu.",
            "question8": "Ce se întâmplă dacă nu sunt mulțumit de postul de muncă alocat?",
            "answer8": "Suntem aici pentru a te sprijini. Dacă postul nu este potrivit, te încurajăm să ne contactezi imediat. Vom face tot posibilul să găsim o soluție care să satisfacă nevoile tale și cerințele companiei cliente.",
            "question9": "Asistați cu documentele necesare pentru a lucra în străinătate?",
            "answer9": "Da, ajutăm candidații cu toată documentația necesară pentru relocare și muncă în străinătate, inclusiv procesarea vizelor, permiselor de muncă și documentației fiscale.",
            "question10": "Există oportunități de avansare în carieră?",
            "answer10": "Da, multe dintre companiile cu care colaborăm oferă oportunități de avansare și dezvoltare în cadrul organizației lor. De obicei, oferă cursuri de formare și dezvoltare pentru a ajuta la îmbunătățirea abilităților tale."
        },
        "jobs": {
            "manager": {
                "title": "Poziție: Manager",
                "location": "Locație: Roma",
                "description": "Descriere: Căutăm un manager pentru a supraveghea echipa...",
                "apply": "Aplică Acum"
            },
            "web_developer": {
                "title": "Poziție: Dezvoltator Web",
                "location": "Locație: Milano",
                "description": "Descriere: Căutăm un dezvoltator web experimentat...",
                "apply": "Aplică Acum"
            }
        }

    }
};


populateDatabase(translations);
