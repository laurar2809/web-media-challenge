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
In "Work_category" werden alle Medien und Arbeiten angelegt. Dabei können alle Medien in mehrere Kategorien zugeteilt werden.


# Datenbank Befehle: Multi Media Challenge

## 1. Multi_media_web Tabellen

```sql
-- Tabelle erstellen
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('Administrator', 'Schüler', 'Lehrer') NOT NULL
);

CREATE TABLE Works (
    work_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_by INT,
    FOREIGN KEY (created_by) REFERENCES Users(user_id)
);

CREATE TABLE Media (
    media_id INT PRIMARY KEY AUTO_INCREMENT,
    work_id INT,
    media_type ENUM('Audio', 'Video', 'Foto') NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (work_id) REFERENCES Works(work_id)
);

CREATE TABLE Categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Work_Category (
    work_id INT,
    category_id INT,
    PRIMARY KEY (work_id, category_id),
    FOREIGN KEY (work_id) REFERENCES Works(work_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);
```

```sql
-- Löschen einer Tabelle
DROP TABLE users;
``` 
```sql
-- Einträge in Tabelle
-- Benutzer (Users)
INSERT INTO Users (username, password, role) VALUES
('admin1', 'password123', 'Administrator'),
('schueler1', 'password123', 'Schüler'),
('lehrer1', 'password123', 'Lehrer'),
('admin2', 'adminpassword', 'Administrator'),
('schueler2', 'pass1234', 'Schüler'),
('lehrer2', 'securepassword', 'Lehrer'),
('schueler3', 'testpassword', 'Schüler');

-- Werke (Works)
INSERT INTO Works (title, description, created_by) VALUES
('Werk 1', 'Beschreibung von Werk 1', 1),  -- admin1
('Werk 2', 'Beschreibung von Werk 2', 2),  -- schueler1
('Werk 3', 'Beschreibung von Werk 3', 3),  -- lehrer1
('Werk 4', 'Beschreibung von Werk 4', 4),  -- admin2
('Werk 5', 'Beschreibung von Werk 5', 5),  -- schueler2
('Werk 6', 'Beschreibung von Werk 6', 6),  -- lehrer2
('Werk 7', 'Beschreibung von Werk 7', 7);  -- schueler3

-- Medien (Media)
INSERT INTO Media (work_id, media_type, file_path) VALUES
(1, 'Audio', '/path/to/audio1.mp3'),
(1, 'Video', '/path/to/video1.mp4'),
(2, 'Foto', '/path/to/photo1.jpg'),
(2, 'Audio', '/path/to/audio2.mp3'),
(3, 'Video', '/path/to/video2.mp4'),
(3, 'Foto', '/path/to/photo2.jpg'),
(4, 'Audio', '/path/to/audio3.mp3'),
(5, 'Foto', '/path/to/photo3.jpg'),
(6, 'Video', '/path/to/video3.mp4'),
(7, 'Audio', '/path/to/audio4.mp3');

-- Kategorien (Categories)
INSERT INTO Categories (name) VALUES
('Audio'),
('Video'),
('Fotografie'),
('Dokumente'),
('Illustrationen');

-- Werk-Kategorie (Work_Category)
INSERT INTO Work_Category (work_id, category_id) VALUES
(1, 1),  -- Werk 1 gehört zu Audio
(1, 2),  -- Werk 1 gehört zu Video
(2, 3),  -- Werk 2 gehört zu Fotografie
(2, 1),  -- Werk 2 gehört zu Audio
(3, 2),  -- Werk 3 gehört zu Video
(3, 3),  -- Werk 3 gehört zu Fotografie
(4, 1),  -- Werk 4 gehört zu Audio
(5, 3),  -- Werk 5 gehört zu Fotografie
(6, 2),  -- Werk 6 gehört zu Video
(7, 1);  -- Werk 7 gehört zu Audio
```


### Aufgabe 1.1
Wähle alle Einträge aus der Tabelle, deren Kalorienwert höher als 250 ist.
```sql
SELECT * FROM `ksn_01_nutrition` WHERE kcal > 250;
```


### Aufgabe 1.2
Finde alle Getränke in der Tabelle und zeige ihre Namen und Kalorienwerte an.

```sql
SELECT bezeichnung,kcal FROM `ksn_01_nutrition` WHERE art='Trinken';
```


### Aufgabe 1.3
Aktualisiere den Kalorienwert des Lebensmittels Leberkässemmel auf 550 kcal.

```sql
UPDATE `ksn_01_nutrition` SET kcal=550  WHERE bezeichnung ='Leberkässemmel';
```


### Aufgabe 1.4
Füge einen neuen Eintrag mit dem Namen Salat, der Art Essen, einer Menge Schüssel und einem Kalorienwert von 350 kcal hinzu.
```sql
INSERT INTO ksn_01_nutrition (bezeichnung, menge, art, kcal) VALUES ('Salat', 'Schüssel', 'Essen', 350);
```


### Aufgabe 1.5
Lösche den Eintrag mit der niedrigsten Kalorienanzahl aus der Tabelle.
```sql
DELETE FROM ksn_01_nutrition WHERE kcal = (SELECT min_kcal FROM ( SELECT MIN(kcal) as min_kcal FROM ksn_01_nutrition ) AS temp);
```


### Aufgabe 1.6
Zeige den Durchschnitt der Kalorien aller Lebensmittel an.
```sql
SELECT AVG(kcal) FROM ksn_01_nutrition;
```

### Aufgabe 1.7
Wähle den Namen und die Menge der Einträge aus, die mehr als 500 Kalorien haben.
```sql
SELECT bezeichnung,menge FROM `ksn_01_nutrition` WHERE kcal>500;
```

### Aufgabe 1.8
Zähle, wie viele Einträge in der Tabelle der Kategorie Essen zugeordnet sind.
```sql
SELECT COUNT(art='Essen') FROM ksn_01_nutrition;
```

### Aufgabe 1.9
Wähle den Eintrag mit der höchsten Kalorienanzahl aus und zeige seinen Namen und Kalorienwert an.

### Aufgabe 1.10
Ändere die Bezeichnung von Weißbier zu Hefeweizen und aktualisiere den Kalorienwert auf 240 kcal.

