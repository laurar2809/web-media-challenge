# Fotochallenge Medienwoche
 
## **Allgemeine Beschreibung**
 
Es soll eine Plattform erstellt werden, mit der unterschiedliche Aufgabenstellungen, im weiteren *Challenges* genannt, dargestellt werden können. Die Aufgabenstellungen beziehen sich auf multimediale Inhalte, wie zum Beispiel Aufträge zur Erstellung bestimmter Fotoserien.
 
- Aufgaben der Plattform
    - Darstellung der Challenges
    - Abgeben der Arbeiten zu den Challenges
    - Präsentieren der Arbeiten
    - Bewerten der Arbeiten
    - Admin-Funktionen

 
### Aufgaben der Plattform
Die Challenges haben mehrere Zwecke. Zum einen soll den Studierenden klar gemacht werden, was umgesetzt werden soll. Die Anmeldung erfolgt über die bestehende HTL-Benutzerkennung (LDAP).
 
#### Darstellung der Challenges
Dazu sollen bei den Challenges zusätzliche Informationen, wie etwa beispielhafte Fotos oder auch Videos, sowie Footage ersichtlich sein. Bei jeder Challenge werden zusätzlich zur Aufgabenbeschreibung unterstützende multimediale Inhalte wie Beispielbilder, Videos oder Footage bereitgestellt. Die Veröffentlichung erfolgt tagesweise – pro Tag wird genau eine neue Challenge automatisch freigeschaltet (z.B. Montag: Wasser, Dienstag: Lichtefekte, Mittwoch: Augenprotrait, Donnerstag: eigene Ideen). Frühere Aufgaben bleiben einsehbar, während zukünftige ausgegraut und nicht anklickbar sind. Jede Challenge kann um optionale Infoboxen ergänzt werden, etwa mit Kameraeinstellungen oder technischen Tipps.
 
#### Abgeben der Arbeiten zu den Challenges
Die Studierenden müssen sich für Challenges anmelden, um daran teilnehmen zu können. Es soll eine Bereich geben, in dem die Studierenden dann die erstellten Arbeiten abgeben können. Für die Abgabe steht ein zeitlich begrenztes Upload-Fenster zur Verfügung. Innerhalb dieser Zeit darf pro Challenge genau eine Fotoserie mit drei Bildern hochgeladen werden. Der Upload wird validiert (Dateigröße, Format, Anzahl). Nach erfolgreicher Abgabe sind die eingereichten Fotos im eigenen Benutzerbereich sowie in einer Challenge-Galerie sichtbar.
 
 
 
#### Präsentieren der Arbeiten
Die eingereichten Arbeiten können in einer Galerie-Ansicht oder als automatisch ablaufende Slideshow dargestellt werden. Zusätzlich besteht die Möglichkeit, die Ergebnisse als druckfertige PDF-Datei zu exportieren. Diese enthält – je nach Konfiguration – die Fotos, Challenge-Bezeichnungen, QR-Codes zu digitalen Versionen sowie die Namen der Beitragenden. Für Ausstellungen oder Dokumentationen können die Beiträge auch inklusive QR-Codes gedruckt werden. Die drei besten Beiträge je Challenge werden separat gelistet und hervorgehoben.
 
#### Bewerten der Arbeiten
Zusätzlich soll es die Möglichkeit geben die Arbeiten, die entstanden sind zu bewerten. Die Bewertung kann dabei auf unterschiedliche Weisen erfolgen:
 
- Prämierung durch den Lehrkörper
- Votings unter allen Teilnehmenden - alle dürfen bewerten (QR-Code)
- tbd
 
Die Bewertung erfolgt anonymisiert und challengebasiert. Pro Challenge wird ein separates Voting gestartet. Lehrer:innen und Schüler:innen sind stimmberechtigt – Lehrerstimmen werden jedoch mit einem höheren Gewicht berücksichtigt. Das Voting findet am Freitag bei der Präsentation statt, damit alle Teilnehmenden der Medienwoche voten können und nicht nur die Fototeams. Die Stimmabgabe wird über eine externe Voting-Seite bzw. durch Scannen eines QR-Codes erfolgen. Nach Ende der Abstimmung werden die Ergebnisse sichtbar gemacht und die Autor:innen der Beiträge bekannt gegeben.
 
#### Admin-Funktionen
Die Lehrperson übernimmt die Rolle des Admins und kann Challenges verwalten, Fotos moderieren und Anpassungen am Frontend vornehmen. Der Admin ist von der Bewertungsfunktion ausgeschlossen, um Neutralität zu wahren.
 
 --- 

### Ziel des Projekts
Die Fotochallenge-Plattform soll eine neuartige Lösung für schulische Projekte bieten, die sich durch tägliche Freischaltungen, Moderation und anonymes Voting auszeichnet. Sie unterscheidet sich von bestehenden Plattformen durch ihren Fokus auf Fairness und schulische Anforderungen.
 
 ---
## **Anforderungskatatlog**
 
- Benutzerverwaltung & Authentifizierung
 
- Challenge-Management
 
- Upload & Galerie
 
- Voting-System

- Adminfunktion

- Nicht-funktionale Anforderungen

- Technische Randbedingungen



### Benutzerverwaltung & Authentifizierung
Die Plattform soll eine sichere Authentifizierung über die bestehenden HTL-Zugangsdaten ermöglichen mit LDAP. Nur authentifizierte Benutzerinnen und Benutzer (Schüler:innen und Lehrer:innen) erhalten Zugang zur Plattform und können an den Challenges teilnehmen.
Ein klares Rollenkonzept unterscheidet zwischen Schüler:innen und Lehrer:innen. Während Schüler:innen am Voting teilnehmen und voten können, haben Lehrer:innen nur die Möglichkeit zu voten. Eine Lehrkraft bekommt die Befähigung als Administrator:in, der:die  Challenges verwalten und erstellen kann. Der Admin hat kein Recht beim anonymen Voten beteiligt zu sein.
Ein deutlich sichtbarer Logout-Button soll es allen Nutzer:innen ermöglichen, sich sicher vom System abzumelden.

### Challenge-Management
Die täglichen Challenges werden automatisch  durch den Admin freigeschaltet von Montag bis Donnerstag. Zukünftige Challenges erscheinen in der Übersicht ausgegraut und sind nicht anklickbar, während vergangene Challenges dauerhaft einsehbar bleiben.
Jede Challenge enthält eine detaillierte Aufgabenbeschreibung sowie optionale Infoboxen mit hilfreichen Tipps, etwa zu Kameraeinstellungen. Zur Veranschaulichung werden beispielhafte Bilder oder Videos als Referenzmaterial bereitgestellt.

### Upload & Galerie
Teilnehmende können pro Challenge genau eine Fotoserie (typischerweise 3 Bilder) hochladen. Das System prüft automatisch Format (JPG/PNG), Größe und Anzahl der Dateien. Der Upload ist zeitlich begrenzt (z.B. bis 18 Uhr des jeweiligen Tages).
Eine übersichtliche Galerie zeigt alle eingereichten Fotos, filterbar nach Challenge und Datum. Für Präsentationen steht eine automatische Diashow-Funktion zur Verfügung. Zusätzlich können Ergebnisse als PDF exportiert werden, inklusive QR-Codes für weitere Informationen.

### Voting-System
Das anonyme Voting-System erlaubt jedem Teilnehmenden der Medienwoche genau eine Stimme pro Challenge am Freitag. Die Ergebnisse werden erst nach Abschluss der Abstimmungsphase veröffentlicht, um faire Bedingungen zu gewährleisten.
Zur besonderen Gewichtung werden Lehrerstimmen stärker berücksichtigt. Während des Votings bleibt die Zuordnung von Fotos zu Teams verborgen. Alternativ zur Plattform-internen Abstimmung wird das Voting auch über QR-Codes oder externe Links erfolgen.

### Admin-Funktionen
Die:Der Administrator:in (Lehrer:in) verwaltet die Challenges in vollem Umfang - von der Erstellung über Bearbeitung bis zur Löschung. Sie können Challenges bei Bedarf auch manuell freischalten.
Die Moderation umfasst das Lösen unangemessener Inhalte und gegebenenfalls das Sperren von Nutzerkonten bei Regelverstößen. Eine spezielle Teamübersicht ermöglicht Lehrkräften den schnellen Zugriff auf alle Einreichungen der verschiedenen Gruppen.

### Nicht-funktionale Anforderungen
Der Datenschutz hat hohe Priorität: Voting-Daten werden anonymisiert, und sensible Login-Informationen nicht gespeichert. Die Plattform soll performant bleiben, selbst bei vielen gleichzeitigen Uploads, und durch schnelle Ladezeiten überzeugen.
Das schlichte Design gewährleistet eine optimale Nutzung auf mobilen Geräten. Die intuitive Navigation mit klar getrennten Bereichen für Schüler:innen und Admins sorgt für eine gute User Experience.

### Technische Randbedingungen ??? wissen noch nicht genau
Als Backend-Technologien kommen MySQL für die Datenbank und entweder Node.js oder PHP als Serverumgebung zum Einsatz. Für das Frontend wird HTML, CSS und JavaScript eingesetzt.
Die Integration mit dem HTL-System erfolgt über LDAP, um die Authentifizierung mit den bestehenden Schulzugängen zu ermöglichen. 
 
 
 
## **Technologien**