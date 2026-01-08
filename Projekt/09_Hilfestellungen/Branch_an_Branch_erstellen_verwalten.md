## Git-Workflow mit gemeinsamem Branch `fix-version`

### 1. Gemeinsamen Branch aktualisieren

```bash
# Auf gemeinsamen Arbeits-Branch wechseln
git checkout fix-version

# Neueste Änderungen vom Remote holen
git pull origin fix-version
```

### 2. Eigenen Arbeits-Branch von `fix-version` erstellen

```bash
# Neuen Branch auf Basis von fix-version anlegen und wechseln
git checkout -b fix-version-dein-name-partials
```


## 3. Änderungen machen, committen und hochladen

```bash

# Geänderte Dateien zum Commit vormerken 
git add . 

# Änderungen mit aussagekräftiger Nachricht committen 
git commit -m "Refactor: Partials für Layout" 

# Branch zum Remote-Repository hochladen (erstes Mal mit -u) 
git push -u origin fix-version-dein-name-partials
```

## 4. Eigenen Branch in `fix-version` mergen (lokal)

```bash
# Zuerst in den Ziel-Branch wechseln 
git checkout fix-version 

# Änderung von Partnerin holen!
git pull origin fix-version 

# Eigenen Feature-Branch in fix-version mergen 
git merge fix-version-dein-name-partials 

# Den aktualisierten fix-version wieder hochladen 
git push origin fix-version
```

## 5. Alternative: Merge über Pull Request

1. Im Git-Hosting (z.B. GitHub/GitLab) einen Pull Request erstellen.
    
2. Dabei einstellen:
    
    - **Base / Target Branch:** `fix-version`
        
    - **Compare / Source Branch:** `fix-version-dein-name-partials`
        
3. Nach Review den PR mergen – damit sind die Änderungen in `fix-version` integriert.