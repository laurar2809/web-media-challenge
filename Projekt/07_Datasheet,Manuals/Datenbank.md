# Datenbank

## Benutzer:
Verschiedene Benutzer haben verschiedene *Rollen*, 
wie zum Beispiel: 
- Administrator 
- Schüler 
- Lehrer


## Medien:
 Alle Benutzer können Werke anlegen. Ein Werk kann aus *mehreren Medien* bestehen. Die Werke lassen sich in Kategorien einteilen, wie zum Beispiel:
- Audio
- Video 
- Fotografie 
- 3D Modellierung
- Metallgestaltung

## Aufbau Datenbank
Um die Medien in verschiedene Werke speichern zu können, legt man eine extra Tabelle an. Zum Beispiel:
- partOf

### Vorgang
Es gibt mehrere Kategorien, wobei es mehrere Werke gibt. In den Werken können mehrere Medien von Usern gespeichert werden. Übersicht: 

- User --> Kategorien --> Werke/Projekte --> Medien


![Bild](img/SQL_Datenbank_Anfang.png)

--- 
###  Categories:
In "Categories" werden alle Kategorien angelegt. Es gibt mehrere Kategorien wie zum Beispiel Video, Foto, 3D Modellierung und Audio.

### Works:
In "Works" werden die einzelnen Aufgaben angelegt, die zu erledigen sind. Zum Beispiel bei Foto: 1. Oneshot, 2. Himmel,... 

### Media:
In "Media" werden alle Medien von den Usern angelegt. Es können mehrere Medien in Arbeiten (Works) hochgeladen werden.

### Users:
In "Users" werden alle User angelegt. Darunter zählen Schüler, Lehrer und Admin. User können Medien in Arbeiten hochladen. 

### Work_category
In "Work_category" werden alle Medien und Arbeiten angelegt. Dabei können alle Medien in mehrere Arbeiten zugeteilt werden.
