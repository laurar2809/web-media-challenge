# Der Workflow für Teams (Schritt für Schritt)

## EINMALIG: (alten Branch auswählen und mit Partner teilen)

|**Schritt**|**Befehl**|**Was passiert?**|
|---|---|---|
|**1. Hash finden**|`git log --oneline`|Du suchst die ID (z.B. `a1b2c3d`) der alten Version aus der Liste.  (drücke 'q' damit du wieder aus Ansicht kommst)|
|**2. Abzweigen**|`git checkout -b fix-version a1b2c3d`|Du erstellst einen neuen Branch (`fix-version`) ab diesem alten Stand und wechselst sofort dorthin.|
|**3. Sichern**|`git add .`<br><br>  <br><br>`git commit -m "Nachricht"`|Deine Änderungen werden **nur** auf diesem neuen Branch gespeichert. Der `main` bleibt unberührt.|
|**4. Teilen**|`git push -u origin fix-version`|Du lädst den Branch auf den Server hoch, damit dein Team ihn sehen und mitarbeiten kann.|
|**5. Wechseln**|`git checkout main`|Du springst jederzeit zurück zur „letzten/neueren“ Version auf dem Hauptzweig.|

---

### Wichtige Regeln für dieses Szenario:

1. **Kein `git reset`:** Benutze niemals `reset`, wenn du mit anderen arbeitest, da dies die gemeinsame Historie löscht.
    
2. **Commits landen im Branch:** Solange du im neuen Branch bist, wird alles dort gespeichert. Der `main`-Branch "weiß" nichts von deiner Arbeit, bis du sie explizit zusammenführst.
    
3. **Zusammenarbeit:** Wenn ein Kollege an deinem Stand mitarbeiten will, muss er nur `git fetch` und dann `git checkout fix-version` eingeben.
    

**Kurztipp:** Stell dir den neuen Branch wie eine Kopie einer alten Datei vor, die du unter einem neuen Namen speicherst. Du kannst sie bearbeiten, während das Original (der `main`) einfach so bleibt, wie es ist.

---
---


## IMMER: Das ist dann der Ablauf, nachdem die ersten Schritte erledigt worden sind.

Wenn du und dein Partner am selben Branch (`fix-version`) arbeitet, sieht euer Ablauf so aus:

1. **`git pull`** (Zuerst immer schauen: Hat mein Partner etwas Neues hochgeladen?)
    
2. _Arbeiten / Code ändern_
    
3. **`git add .`** (Änderungen vormerken)
    
4. **`git commit -m "Beschreibung"`** (Änderungen lokal verpacken)

5. **`git pull`** (Änderungen von Partner holen)
    
5. **`git push`** (Änderungen für den Partner sichtbar machen)
    

**Zusammenfassend:** Das `git add` und `git commit` speichert deine Arbeit nur in deinem "privaten Tagebuch" auf deinem Rechner. Erst das **`git push`** schickt die Seiten des Tagebuchs an den Server, damit dein Partner sie lesen kann.