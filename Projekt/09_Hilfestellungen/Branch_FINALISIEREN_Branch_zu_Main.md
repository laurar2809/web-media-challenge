
# FINALISIEREN: "fix-version" zu neuem Main machen


Um `fix-version` zum neuen „Stand von main“ zu machen, führst du im Prinzip einen Merge von `fix-version` in `main` durch (oder ersetzt `main` komplett durch `fix-version`). Hier eine einfache, saubere Variante für eure Diplomarbeit.[](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)​

## 1. Sicherstellen, dass alles auf `fix-version` fertig und gepusht ist

Auf Rechner:


```bash
# Auf fix-version wechseln 
git checkout fix-version 

# Neueste Änderungen holen 
git pull origin fix-version
```

Ggf. noch offene Änderungen committen und pushen:

```bash
git add . git commit -m "Finaler Stand für neuen Main" 

git push origin fix-version
```
## 2. `main` lokal aktualisieren

```bash
# Auf main wechseln 
git checkout main 

# Neueste Änderungen holen 
git pull origin main
```
## 3. `fix-version` in `main` mergen

Jetzt sagen: „main soll den Stand von fix-version übernehmen“:

```bash
# Von main aus den Branch fix-version mergen 
git merge fix-version
```

- Falls **keine Konflikte**: weiter mit Schritt 4.
    
- Falls **Konflikte**: diese in den betroffenen Dateien lösen, dann:
    

```bash
git add . git commit -m "Merge fix-version into main"
```


Damit ist lokal `main` jetzt auf dem Stand von `fix-version`.[](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)​

## 4. Aktualisierten `main` nach Remote pushen

```bash
git push origin main
```

Ab diesem Zeitpunkt ist auf dem Remote‑Repo `main` der neue „offizielle“ Stand mit allen Änderungen aus `fix-version`.[](https://nvie.com/posts/a-successful-git-branching-model/)​

## 5. Optional: `fix-version` aufräumen

Wenn  `fix-version` fertig ist und alles in `main` steckt, kann er (später) gelöscht werden:

Lokal:

```bash
git branch -d fix-version
```


Remote (optional):

```bash
git push origin --delete fix-version
```


Das ist aber nur aufräumen – für die Diplomarbeit können wir `fix-version` auch einfach als „Arbeitsbranch“ sichtbar lassen.

---

Kurz zusammengefasst:

- Alle Änderungen auf `fix-version` fertigstellen und pushen.
    
- Auf `main` wechseln, `git merge fix-version`, dann `git push origin main`.  
    Damit wird `fix-version` effektiv zum neuen Stand deines `main`‑Branches.
