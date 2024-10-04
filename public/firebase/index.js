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
            "title": "See, Click and Apply Now!",
            "description": "we help you connect with qualified companies across Europe",
            "viewmore": "View more",
            "cards": {
                "one": {
                    "country": "France",
                    "title": "WAREHOUSEMAN",
                    "description": "The warehouse worker is responsible for managing and controlling inventory, organizing the warehouse and preparing orders for shipment"
                },
                "two": {
                    "country": "Germany",
                    "title": "WAREHOUSEMAN",
                    "description": "The warehouse worker is responsible for managing and controlling inventory, organizing the warehouse and preparing orders for shipment"
                },
                "three": {
                    "country": "Italy",
                    "title": "WAREHOUSEMAN",
                    "description": "The warehouse worker is responsible for managing and controlling inventory, organizing the warehouse and preparing orders for shipment"
                },
                "four": {
                    "country": "Romania",
                    "title": "WAREHOUSEMAN",
                    "description": "The warehouse worker is responsible for managing and controlling inventory, organizing the warehouse and preparing orders for shipment"
                },
                "five": {
                    "country": "Holland",
                    "title": "WAREHOUSEMAN",
                    "description": "The warehouse worker is responsible for managing and controlling inventory, organizing the warehouse and preparing orders for shipment"
                },
                "six": {
                    "country": "Tunisia",
                    "title": "WAREHOUSEMAN",
                    "description": "The warehouse worker is responsible for managing and controlling inventory, organizing the warehouse and preparing orders for shipment"
                },
            }
        },
        "contact": {
            "title": "Contacts",
            "description": "Contact Information..."
        },
        "application": {
            "title": "Tell us what you like to do!",
            "description": "We will contact you with a tailored idea.",
            "name": "Name:",
            "email": "Email:",
            "message": "Message:",
            "submit": "Send",
            "or": "Or",
            "ormail": "Send a mail",
            "orcall": "Call Us",
            "infocontact": "Choose another method:"
        },
        "faq": {
            "title": "FAQ",
            "description": "Frequently Asked Questions..."
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
        },

        "footer": {
            "contact": {
                "title": "Company",
            },
            "link": {
                "title": "Useful Links",
                "home": "Home",
                "oppo": "Opportunities",
                "faq": "Faq",
                "cont": "Contact Us"
            },
            "follow": {
                "title": "Follow Us",
                "soca": "Facebook",
                "socb": "InfoJobs",
                "socc": "Olx"
            },
        },
        

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
            "subtitle": "Connettiamo il talento con la forza oltre i confini",
            "presentation": "Siamo un'azienda leader multiservizio nel campo delle risorse umane, specializzata nel collocare personale qualificato in tutta Europa. Offriamo opportunità di carriera su misura con un processo di assunzione rapido e mirato per connettere i giusti talenti con le imprese in crescita.",
            "bt_cta": "Scopri le Opportunità"
        },
        "services": {
            "title": "Guarda, Clicca e Candidati Ora!",
            "description": "ti aiutiamo a connetterti con aziende qualificate in tutta Europa",
            "viewmore": "Vedi di più",
            "cards": {
                "one": {
                    "country": "Francia",
                    "title": "MAGAZZINIERE",
                    "description": "Il magazziniere è responsabile della gestione e del controllo dell'inventario, dell'organizzazione del magazzino e della preparazione degli ordini per la spedizione"
                },
                "two": {
                    "country": "Germania",
                    "title": "MAGAZZINIERE",
                    "description": "Il magazziniere è responsabile della gestione e del controllo dell'inventario, dell'organizzazione del magazzino e della preparazione degli ordini per la spedizione"
                },
                "three": {
                    "country": "Italia",
                    "title": "MAGAZZINIERE",
                    "description": "Il magazziniere è responsabile della gestione e del controllo dell'inventario, dell'organizzazione del magazzino e della preparazione degli ordini per la spedizione"
                },
                "four": {
                    "country": "Romania",
                    "title": "MAGAZZINIERE",
                    "description": "Il magazziniere è responsabile della gestione e del controllo dell'inventario, dell'organizzazione del magazzino e della preparazione degli ordini per la spedizione"
                },
                "five": {
                    "country": "Olanda",
                    "title": "MAGAZZINIERE",
                    "description": "Il magazziniere è responsabile della gestione e del controllo dell'inventario, dell'organizzazione del magazzino e della preparazione degli ordini per la spedizione"
                },
                "six": {
                    "country": "Tunisia",
                    "title": "MAGAZZINIERE",
                    "description": "Il magazziniere è responsabile della gestione e del controllo dell'inventario, dell'organizzazione del magazzino e della preparazione degli ordini per la spedizione"
                }
            }
        },
        "contact": {
            "title": "Contatti",
            "description": "Informazioni di Contatto..."
        },
        "application": {
            "title": "Dicci cosa ti piace fare!",
            "description": "Ti contatteremo con un'idea su misura.",
            "name": "Nome:",
            "email": "Email:",
            "message": "Messaggio:",
            "submit": "Invia",
            "or": "Oppure",
            "ormail": "Invia una mail",
            "orcall": "Chiamaci",
            "infocontact": "Scegli un altro metodo:"
        },
        "faq": {
            "title": "FAQ",
            "description": "Domande Frequenti..."
        },
        "jobs": {
            "manager": {
                "title": "Posizione: Manager",
                "location": "Luogo: Roma",
                "description": "Descrizione: Stiamo cercando un manager per supervisionare il team...",
                "apply": "Candidati Ora"
            },
            "web_developer": {
                "title": "Posizione: Sviluppatore Web",
                "location": "Luogo: Milano",
                "description": "Descrizione: Cerchiamo uno sviluppatore web esperto...",
                "apply": "Candidati Ora"
            },
        },

        "footer": {
            "contact": {
                "title": "Azienda",
            },
            "link": {
                "title": "Link Utili",
                "home": "Home",
                "oppo": "Opportunità",
                "faq": "Faq",
                "cont": "Contattaci"
            },
            "follow": {
                "title": "Seguici",
                "soca": "Facebook",
                "socb": "InfoJobs",
                "socc": "Olx",
            },
        },
    },



    "ro": {
        "navbar": {
            "opportunities": "Oportunități",
            "application_form": "Formular de aplicare",
            "send_mail": "Trimite un e-mail",
            "call_us": "Sună-ne",
            "faq": "FAQ"
        },
        "hero": {
            "subtitle": "Conectăm talentul cu forța dincolo de granițe",
            "presentation": "Suntem o companie de top multiservicii în domeniul resurselor umane, specializată în plasarea de personal calificat în toată Europa. Oferim oportunități de carieră personalizate, cu un proces de angajare rapid și țintit pentru a conecta talentele potrivite cu afacerile în creștere.",
            "bt_cta": "Descoperă Oportunitățile"
        },
        "services": {
            "title": "Vezi, Clic și Aplică acum!",
            "description": "Te ajutăm să te conectezi cu companii calificate din toată Europa",
            "viewmore": "Vezi mai multe",
            "cards": {
                "one": {
                    "country": "Franța",
                    "title": "DEPOZITAR",
                    "description": "Muncitorul din depozit este responsabil de gestionarea și controlul inventarului, organizarea depozitului și pregătirea comenzilor pentru expediere"
                },
                "two": {
                    "country": "Germania",
                    "title": "DEPOZITAR",
                    "description": "Muncitorul din depozit este responsabil de gestionarea și controlul inventarului, organizarea depozitului și pregătirea comenzilor pentru expediere"
                },
                "three": {
                    "country": "Italia",
                    "title": "DEPOZITAR",
                    "description": "Muncitorul din depozit este responsabil de gestionarea și controlul inventarului, organizarea depozitului și pregătirea comenzilor pentru expediere"
                },
                "four": {
                    "country": "România",
                    "title": "DEPOZITAR",
                    "description": "Muncitorul din depozit este responsabil de gestionarea și controlul inventarului, organizarea depozitului și pregătirea comenzilor pentru expediere"
                },
                "five": {
                    "country": "Olanda",
                    "title": "DEPOZITAR",
                    "description": "Muncitorul din depozit este responsabil de gestionarea și controlul inventarului, organizarea depozitului și pregătirea comenzilor pentru expediere"
                },
                "six": {
                    "country": "Tunisia",
                    "title": "DEPOZITAR",
                    "description": "Muncitorul din depozit este responsabil de gestionarea și controlul inventarului, organizarea depozitului și pregătirea comenzilor pentru expediere"
                }
            }
        },
        "contact": {
            "title": "Contacte",
            "description": "Informații de Contact..."
        },
        "application": {
            "title": "Spune-ne ce îți place să faci!",
            "description": "Te vom contacta cu o idee personalizată.",
            "name": "Nume:",
            "email": "Email:",
            "message": "Mesaj:",
            "submit": "Trimite",
            "or": "Sau",
            "ormail": "Trimite un e-mail",
            "orcall": "Sună-ne",
            "infocontact": "Alege o altă metodă:"
        },
        "faq": {
            "title": "FAQ",
            "description": "Întrebări frecvente..."
        },
        "jobs": {
            "manager": {
                "title": "Poziție: Manager",
                "location": "Locație: Roma",
                "description": "Descriere: Căutăm un manager pentru a supraveghea echipa...",
                "apply": "Aplică acum"
            },
            "web_developer": {
                "title": "Poziție: Dezvoltator Web",
                "location": "Locație: Milano",
                "description": "Descriere: Căutăm un dezvoltator web experimentat...",
                "apply": "Aplică acum"
            },
        },

        "footer": {
            "contact": {
                "title": "Companie",
            },
            "link": {
                "title": "Link-uri",
                "home": "Home",
                "oppo": "Opportunitati",
                "faq": "Intrebari Frecvente",
                "cont": "Suna-ne"
            },
            "follow": {
                "title": "Da-ne Follow",
                "soca": "Facebook",
                "socb": "InfoJobs",
                "socc": "Olx",
            },
        },
    },

};


populateDatabase(translations);
