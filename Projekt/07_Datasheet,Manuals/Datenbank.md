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
- Work_category

### Vorgang
Es gibt mehrere Kategorien, wobei es mehrere Werke gibt. In den Werken können mehrere Medien von Usern gespeichert werden. Übersicht: 

- User: Kategorien --> Werke/Projekte --> Medien


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

## Beispielhafte Befehle:
### SELECT
Wähle User mit der ID 1 aus.
```sql
SELECT username FROM `users` WHERE user_id=1;
```

Finde alle Schüler in der User-Tabelle und zeige ihre ID's und Usernamen.
```sql
SELECT username,user_id FROM `users` WHERE role='Schüler';
```
Zeige ein Werk eines bestimmten Schülers:
```sql
SELECT 
    w.work_id,
    w.title,
    w.description,
    u.username
FROM Works w
JOIN Users u ON w.created_by = u.user_id
WHERE u.username = 'schueler1';
```
Zeige Werke aller Schüler:
```sql
SELECT 
    w.work_id,
    w.title,
    w.description,
    u.username
FROM Works w
JOIN Users u ON w.created_by = u.user_id
WHERE u.role = 'Schüler';
```
Zeige alle Schüler an, die Fotos hochgeladen haben:
```sql
SELECT DISTINCT
    u.username,
    u.role
FROM Users u
JOIN Works w ON u.user_id = w.created_by
JOIN Media m ON w.work_id = m.work_id
WHERE u.role = 'Schüler'
AND m.media_type = 'Foto';
```

### UPDATE

Ändere den Titel von einem bestimmten Werk:
```sql
UPDATE Works 
SET title = 'Neuer Titel Name' 
WHERE work_id = 2;
```

Ändere den Titel eines Werks basierend auf Schüler-Username.
```sql
UPDATE Works 
SET title = 'Neuer Titel für Schüler1' 
WHERE created_by = (SELECT user_id FROM Users WHERE username = 'schueler1')
AND work_id = 2;
```

Ändere den Titel und Beschreibung eines Werks.
```sql
UPDATE Works 
SET title = 'Aktualisierter Titel', 
    description = 'Neue Beschreibung des Werks' 
WHERE work_id = 5;
```

Ändere den Medientyp basierend auf die Medien-ID. 
```sql
UPDATE media SET media_type='Audio' WHERE media_id=1;
```

Ändere den Pfad von einer bestimmten Datei.
```sql
UPDATE media SET file_path='/path/to/animation1.zip' WHERE media_id=1;
```

### ALTER
Ändere die Tabellenstruktur von der Tabelle Media und füge zusätzlich Animation zu Foto, Video und Audio hinzu.
```sql
ALTER TABLE media MODIFY COLUMN media_type ENUM('Audio', 'Video', 'Foto', 'Animation') NOT NULL;
```


### INSERT 
Füge einen neuen Schüler mit dem Usernamen "schueler15" und Passwort "123456" hinzu und.

```sql
INSERT INTO users (username,password,role) VALUES ('schueler15','123456','Schüler');
```



