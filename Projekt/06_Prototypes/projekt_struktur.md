### Struktur:

```txt
media-challenge-app/
├── Datenbank/                  # Skripte für Tabellen-Setup und Testdaten
│   ├── schemaDb.js
│   └── seedDb.js
├── middleware/                 # Prüfungen (Login, Rollen, Upload-Validierung)
│   ├── auth.js
│   └── uploads.js
├── public/                     # Statische Dateien (CSS, Bilder, JS-Logik)
│   ├── css/
│   │   └── custom/             # Deine ausgelagerten Styles (z.B. abgabeStyles.css)
│   ├── js/
│   │   └── app/                # Deine ausgelagerte Logik (z.B. abgabeLogic.js)
│   │         ├── utils/
│   │         │     ├── deleteModalUtils.js
│   │         │     └── filterUtils.js
│   │         ├── abgabeLogic.js
│   │         ├── aufgabenpaketeFormLogic.js
│   │         ├── aufgabenpaketeLogic.js
│   │         ├── bewertungDetailLogic.js
│   │         ├── bewertungUebersichtLogic.js
│   │         ├── kategorienLogic.js
│   │         ├── challengesFormLogic.js
│   │         ├── challengesLogic.js
│   │         ├── lehrerList.js
│   │         └── schuelerList.js 
│   │      
│   └── uploads/                # Speicherort für hochgeladene Schüler-Dateien
│       ├── abgaben/
│       │   └── z.B. 2025_26
│       │       └── z.B. Team 1
│       │           └── z.B. bild.png...
│       ├── aufgabenpakete/
│       ├── categories/
│       └── challenges/
├── routes/                     # Die "Verkehrspolizei" (Routen-Logik)
│   ├── api/
│   │   └── index.js            # API-Endpunkte für Fetch-Requests
│   ├── ansichten.js            # Haupt-Router (ehemals index.js)
│   ├── aufgabenpakete.js
│   ├── auth.js
│   ├── bewertung.js
│   ├── kategorien.js
│   ├── challenges.js
│   ├── lehrer.js
│   ├── schueler.js
│   ├── teams.js
│   └── upload.js
├── utils/                      # Hilfsfunktionen
│   └── fileHandler.js          # Logik zum Löschen/Verschieben von Dateien
├── views/                      # EJS-Templates (UI)
│   ├── admin/                  # LEHRER- & ADMIN-BEREICH
│   │   ├── aufgabenpakete/
│   │   │   ├── card.ejs
│   │   │   ├── aufgabenpakete.ejs
│   │   │   ├── aufgabenpaketeDetail.ejs
│   │   │   └── formAufgabenpakete.ejs
│   │   ├── bewertung/
│   │   │   ├── bewertungDetail.ejs
│   │   │   └── bewertungUebersicht.ejs
│   │   ├── challenges/
│   │   │   ├── card.ejs
│   │   │   ├── challenges.ejs
│   │   │   ├── challengesDetail.ejs
│   │   │   └── formChallenges.ejs
│   │   ├── kategorien/
│   │   │   ├── formKategorien.ejs
│   │   │   └── kategorien.ejs
│   │   └── personen/
│   │       ├── formLehrer.ejs
│   │       ├── formSchueler.ejs
│   │       ├── lehrer.ejs
│   │       ├── schueler.ejs
│   │       └── teams.ejs
│   ├── schueler/               # SCHÜLER-BEREICH
│   │   └── abgaben/
│   │       └── abgaben.ejs
│   │   └── challenges/
│   │       ├── abgabe.ejs
│   │       ├── challengesDetails.ejs
│   │       └── challenges.ejs
│   ├── partials/               # PARTIALS-BEREICH
│   │       ├── deleteModal.ejs
│   │       └── filter_search.ejs
│   ├── 404.ejs                 # Error-Handler
│   ├── 500.ejs      
│   ├── layout.ejs              # Das Grundgerüst (Navbar, Footer, Bootstrap)
│   └── login.ejs               # Login-Seite
├── .env                        # Geheimnisse (Datenbank-Pfad, LDAP-Konfig)
├── .gitignore                  # Was nicht zu GitHub soll (node_modules, uploads)
├── db.js                       # Knex-Konfiguration / DB-Verbindung
├── package.json                # Liste aller installierten Pakete
├── server.js                   # Das Herzstück (App-Start)
└── data.sqlite                 # Deine tatsächliche Datenbank-Datei

```
