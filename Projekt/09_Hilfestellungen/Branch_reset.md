### Schritt-für-Schritt Anleitung (Hard Reset)

1. **ID finden:** 

    `git log --oneline` (Hash kopieren).
    
    (drücke 'q' damit du wieder aus Ansicht kommst)

    
2. **Reset ausführen:**
    
    
    
    ```Bash
    git reset --hard a1b2c3d
    ```
    
3. **Status prüfen:**
    
    
    
    ```Bash
    git status
    ```
    
    _(Git wird dir sagen: "Your branch is behind 'origin/main'...", weil du lokal in der Zeit zurückgesprungen bist, der Server aber noch die neuen Versionen hat.)_