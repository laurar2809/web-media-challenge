# web-media-challenge

Diplomarbeit im Schuljahr 2025/26

## Git-Branch erstellen:

### 1. Haupt-Branch schützen

- git checkout main
    - Stelle sicher, dass du auf dem aktuellen Haupt-Branch bist
- git pull origin main
    - Hol dir die neuesten Änderungen vom Server


### 2. Neuen Feature-Branch erstellen

- git checkout -b feature/mein-feature
    - Erstelle einen neuen Branch für deine Aufgabe

```
    Mache deine Code-Änderungen (z.B. activePage Fehler beheben)
    ...hier arbeitest du in deinem Editor...
```

### 3. Arbeiten & Committen

- git add .
    - Füge alle geänderten Dateien zur Staging-Area hinzu
- git commit -m "Beschreibung was gemacht wurde"
    - Erstelle einen Commit mit einer beschreibenden Nachricht

### 4. Regelmäßig von main aktualisieren

- git checkout main
- git pull origin main
- git checkout feature/mein-feature
- git merge main

### 5. Fertig? Push & Pull Request

- git push origin feature/mein-feature
    - Lade deinen Branch zum GitHub Server hoch
### → Dann Pull Request auf GitHub erstellen

```
Gehe auf GitHub und erstelle einen Pull Request
 (Das machst du im Browser auf github.com)
 ```

 ```
Nachdem der Pull Request gemerged wurde:
Zurück zum Haupt-Branch wechseln
---> git checkout main

Neueste Änderungen holen
---> git pull origin main

Alten Branch lokal löschen (optional)
---> git branch -d fix/activepage-error
 ```

### 6. Nach Merge: Branch löschen

- git branch -d feature/mein-feature