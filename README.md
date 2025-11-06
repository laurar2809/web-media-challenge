# web-media-challenge

Diplomarbeit im Schuljahr 2025/26

## Git-Branch erstellen:

### 1. Stelle sicher, dass du auf dem aktuellen Haupt-Branch bist
- git checkout main

### 2. Hol dir die neuesten Änderungen vom Server
- git pull origin main

### 3. Erstelle einen neuen Branch für deine Aufgabe
- git checkout -b fix/activepage-error

### 4. Mache deine Code-Änderungen (z.B. activePage Fehler beheben)
```
... hier arbeitest du in deinem Editor ...
```

### 5. Füge alle geänderten Dateien zur Staging-Area hinzu
- git add .

### 6. Erstelle einen Commit mit einer beschreibenden Nachricht
- git commit -m "Fix: activePage Fehler in layout.ejs behoben"

### 7. Lade deinen Branch zum GitHub Server hoch
- git push origin fix/activepage-error

### 8. Gehe auf GitHub und erstelle einen Pull Request
```
(Das machst du im Browser auf github.com)
```

### 9. Nachdem der Pull Request gemerged wurde:
```
Zurück zum Haupt-Branch wechseln
```
- git checkout main

### 10. Neueste Änderungen holen
- git pull origin main

### 11. Alten Branch lokal löschen (optional)
- git branch -d fix/activepage-error