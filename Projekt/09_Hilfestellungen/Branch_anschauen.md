### Die Schritt-für-Schritt-Anleitung zum Reingucken:

1. **Den Hash finden:** Lass dir die Liste anzeigen und kopiere die ID (z.B. `a1b2c3d`).
    
    Bash
    
    ```
    git log --oneline
    ```
     (drücke 'q' damit du wieder aus Ansicht kommst)
     
2. **In die Vergangenheit springen:** Nutze den `checkout`-Befehl direkt auf den Hash:
    
   
    
    ``` Bash
    git checkout a1b2c3d
    ```
    
    _Git wird dir eine lange Nachricht anzeigen, dass du dich im "detached HEAD"-Zustand befindest. Keine Panik, das heißt nur: "Du schaust gerade nur zu und bist auf keinem Branch."_
    
3. **Umschauen:** Du kannst jetzt deinen Code-Editor öffnen, die Dateien lesen, den Code testen oder sogar kompilieren. Alles sieht exakt so aus wie zum Zeitpunkt dieses Commits.
    
4. **Zurück in die Gegenwart:** Wenn du genug gesehen hast, springst du einfach wieder auf deinen aktuellen Hauptzweig zurück:
    
    
    
    ```Bash
    git checkout main
    ```
    
    _(Oder `master`, je nachdem wie dein Haupt-Branch heißt.)_
    

---

### Was du in diesem Zustand wissen musst:

- **Keine Angst:** Du kannst nichts kaputt machen. Solange du nicht im `main`-Branch bist, veränderst du dort auch nichts.
    
- **Änderungen werden nicht gespeichert:** Wenn du in diesem Zustand Dateien bearbeitest und speicherst, gehen diese Änderungen "verloren", sobald du wieder zurück zum `main` wechselst (es sei denn, du entscheidest dich spontan doch für einen neuen Branch).
    
- **Spontane Entscheidung:** Falls du beim Reingucken merkst: _"Oh, das war doch ein super Stand, hier will ich doch weiterarbeiten!"_, kannst du **während** du dort bist, immer noch einen Branch erstellen: `git checkout -b mein-neuer-branch`