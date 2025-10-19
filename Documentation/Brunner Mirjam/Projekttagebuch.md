# Projekttagebuch

## Donnerstag, 18.09.2025

### ABA-Portal:
- ABA-Portal fertiggestellt und eingereicht

### Datenbank:

#### Datenbankstruktur:
- Entwurf mit: https://dbdiagram.io/d 
- Code Für Website:

```sql
Table users {
  user_id int [pk, increment]
  username varchar(255) [not null]
  password varchar(255) [not null]
  role enum('Administrator', 'Schüler', 'Lehrer') [not null]
}

Table works {
  work_id int [pk, increment]
  title varchar(255) [not null]
  description text
  created_by int [ref: > users.user_id]
}

Table media {
  media_id int [pk, increment]
  work_id int [ref: > works.work_id]
  media_type enum('Audio', 'Video', 'Foto') [not null]
  file_path varchar(255) [not null]
  created_at timestamp [default: 'CURRENT_TIMESTAMP']
}

Table categories {
  category_id int [pk, increment]
  name varchar(255) [not null]
}

Table work_category {
  work_id int [ref: > works.work_id]
  category_id int [ref: > categories.category_id]
  primary key(work_id, category_id)
}
```

![bild](img/dbdiagramm.png)




#### Datenbank erstellen
Erste Schritte von Chat GPT erstellen lassen - Anforderungen an Chat GPT:
```txt 
Ich möchte ein Datenbankdesign für eine relationale Datenbank machen. Verschiedene Benutzer haben verschiedene Rollen, wie zum Beispiel Administrator, Schüler oder Lehrer. Alle Benutzer können Werke anlegen. Ein Werk kann aus mehreren Medien bestehen. Die Werke lassen sich in Kategorien, wie zb Audio, Video oder Fotografie einteilen.
```

Code von Chat GPT: SQL Code

```sql
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

- Quelle: https://chatgpt.com/
#### SQL-Datenbank:

![Bild](img/SQL_Datenbank_Anfang.png)









## Donnerstag, 25.09.2025

Keine reine Beschreibung, was gemacht wurde. Festhalten der Ergebnisse inklusive:

- Quellen
- Prototypen
- Probleme, die aufgetaucht sind
- Quelltext
- **Bilder**

### Fortsetzung des Udemy Kurses: API & JSON

Umgang mit API und JSON erlernen:

- API in Verwendung mit HTTPS Protpkollen (GET, POST, PATCH, DELETE, PUT)
- Beispiel: Satellitstandort erkennen mit Postman (https://www.postman.com/) und mit "Where the iss at?" (https://wheretheiss.at/w/developer)
- Beispiel: Informationen von anderen Servern holen: https://secrets-api.appbrewery.com/  &  https://bored-api.appbrewery.com/

#### Unterschied zur öffentlichen und privaten API:
![Bild](img/API.jpg)
(gestaltet mit Miro --> https://miro.com/app/board/uXjVJDb5gaY=/)

### AXIOS:

Mit Axios kann man besser und in Verwendung von weniger Code mit eigenen Server mit Hilfe von API auf Daten eines anderen Servers zugreifen.
Mit Axios holt man sich die Daten, die man dann auch weiterverwenden kann. 

##### Wichtige Befehle:
 - axios.get
 - axios.delete
 - axios.request
 - axios.head
 - axios.options
 - etc.

Anwendung von AXIOS (Codeausschnitt):
- Es werden Daten von einem Server geholt
- Falls ein Fehler auftritt oder die Daten nicht vorhanden sind wird eine Fehlermeldung ausgegeben
- (Code von Beispielübung erlernt --> Udemy)

 ```javascript
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
 ```

### API Authentication:
- 0: keine Authentication --> Jeder hat zugriff darauf (unsicher)
- 1: Basic Authentication --> Login mit Username und Passwort (sicherer)
- 2: API Key Authorisation --> dem Benutzer ist es nur erlaubt, den Server mti API Key zu nutzen
- 3: Token Based Authentication --> Identitätsbestätigung & Autorisierung

![Bild](img/Token_miro.jpg)
(gestaltet mit Miro --> https://miro.com/app/board/uXjVJDb5gaY=/)



### JSON
#### JSON -> Javascript Datei
```javascript
const data = JSON.parse(data);
```

#### Javascript Datei -> JSON
```javascript
const jsonData = JSON.stringfy(data);
```

#### Übersichtlichere JSON Datei:
JSON Dateien übersichtlicher darstellen mit https://jsonviewer.stack.hu/

Beispiel: Bei diesesm Code... (Code von Beispielübung -> Udemy)
```javascript
[
  {
    "id": "0001",
    "type": "taco",
    "name": "Chicken Taco",
    "price": 2.99,
    "ingredients": {
      "protein": {
        "name": "Chicken",
        "preparation": "Grilled"
      },
      "salsa": {
        "name": "Tomato Salsa",
        "spiciness": "Medium"
      },
      "toppings": [
        {
          "name": "Lettuce",
          "quantity": "1 cup",
          "ingredients": ["Iceberg Lettuce"]
        },
        {
          "name": "Cheese",
          "quantity": "1/2 cup",
          "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]
        },
        {
          "name": "Guacamole",
          "quantity": "2 tablespoons",
          "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]
        },
        {
          "name": "Sour Cream",
          "quantity": "2 tablespoons",
          "ingredients": ["Sour Cream"]
        }
      ]
    }
  },
  {
    "id": "0002",
    "type": "taco",
    "name": "Beef Taco",
    "price": 3.49,
    "ingredients": {
      "protein": {
        "name": "Beef",
        "preparation": "Seasoned and Grilled"
      },
      "salsa": {
        "name": "Salsa Verde",
        "spiciness": "Hot"
      },
      "toppings": [
        {
          "name": "Onions",
          "quantity": "1/4 cup",
          "ingredients": ["White Onion", "Red Onion"]
        },
        {
          "name": "Cilantro",
          "quantity": "2 tablespoons",
          "ingredients": ["Fresh Cilantro"]
        },
        {
          "name": "Queso Fresco",
          "quantity": "1/4 cup",
          "ingredients": ["Queso Fresco"]
        }
      ]
    }
  },
  {
    "id": "0003",
    "type": "taco",
    "name": "Fish Taco",
    "price": 4.99,
    "ingredients": {
      "protein": {
        "name": "Fish",
        "preparation": "Battered and Fried"
      },
      "salsa": {
        "name": "Chipotle Mayo",
        "spiciness": "Mild"
      },
      "toppings": [
        {
          "name": "Cabbage Slaw",
          "quantity": "1 cup",
          "ingredients": [
            "Shredded Cabbage",
            "Carrot",
            "Mayonnaise",
            "Lime Juice",
            "Salt"
          ]
        },
        {
          "name": "Pico de Gallo",
          "quantity": "1/2 cup",
          "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]
        },
        {
          "name": "Lime Crema",
          "quantity": "2 tablespoons",
          "ingredients": ["Sour Cream", "Lime Juice", "Salt"]
        }
      ]
    }
  }
]

```

...bekommt man diese Übersicht:

![Bild](img/JSON_übersicht.png)

### Zusammenfassung Quellen:
- https://www.postman.com/
- https://wheretheiss.at/w/developer
- https://miro.com/app/board/uXjVJDb5gaY=/
- https://jsonviewer.stack.hu/
- https://secrets-api.appbrewery.com/ 
- https://bored-api.appbrewery.com/

## Donnerstag, 02.10.2025

### Aktualisierung der Datenbank: Gruppen/Teams hinzugefügt:
Datenbank-Übersicht mit dbdiagram.io (https://dbdiagram.io/d):
```sql
// Einfache Version für dbdiagram.io

Table users {
  user_id int [primary key]
  username varchar(255)
  password varchar(255)
  role varchar(50)
}

Table categories {
  category_id int [primary key]
  name varchar(255)
}

Table works {
  work_id int [primary key]
  title varchar(255)
  description text
  created_by int
}

Table media {
  media_id int [primary key]
  work_id int
  media_type varchar(50)
  file_path varchar(255)
  created_at datetime
}

Table work_category {
  work_id int
  category_id int
}

Table groups {
  group_id int [primary key]
  group_name varchar(255)
  description text
  category_id int
  created_by int
  created_at datetime
  max_members int
}

Table group_members {
  group_id int
  user_id int
  joined_at datetime
  is_leader bool
}

Table group_works {
  group_work_id int [primary key]
  group_id int
  work_id int
  assigned_at datetime
}

// Relationships
Ref: works.created_by > users.user_id
Ref: media.work_id > works.work_id
Ref: work_category.work_id > works.work_id
Ref: work_category.category_id > categories.category_id
Ref: groups.category_id > categories.category_id
Ref: groups.created_by > users.user_id
Ref: group_members.group_id > groups.group_id
Ref: group_members.user_id > users.user_id
Ref: group_works.group_id > groups.group_id
Ref: group_works.work_id > works.work_id
```
![Bild](img/Datenbank_Erweiterung_Gruppen.png)

SQL-Code -> Gruppen werden hinzugefügt mit nötige Funktionen:
```sql
-- 6. Groups Tabelle (NEU) 
CREATE TABLE Groups (
    group_id INT PRIMARY KEY AUTO_INCREMENT,
    group_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_id INT,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    max_members INT DEFAULT 3,
    FOREIGN KEY (category_id) REFERENCES Categories(category_id),
    FOREIGN KEY (created_by) REFERENCES Users(user_id)
);

-- 7. Group_Members Tabelle (NEU)
CREATE TABLE Group_Members (
    group_id INT,
    user_id INT,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_leader BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (group_id, user_id),
    FOREIGN KEY (group_id) REFERENCES Groups(group_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- 8. Group_Works Tabelle (NEU)
CREATE TABLE Group_Works (
    group_work_id INT PRIMARY KEY AUTO_INCREMENT,
    group_id INT,
    work_id INT,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (group_id) REFERENCES Groups(group_id),
    FOREIGN KEY (work_id) REFERENCES Works(work_id)
);
```

![Bild](img/SQL_Datenbank_Erweiterung_Gruppen.png)


### Erster Versuch: die Daten der Datenbank am Frontend anzeigen lassen
Es werden alle Gruppen angezeigt, die bis jetzt in der Datenbank gespeichert wurden. Dabei werden noch zusätzlich die Mitgliederanzahl und der "Leader" des Teams angezeigt.

![Bild](img/Gruppen_anzeigen_lassen.png)

Andere Version mit Anzeige der einzelnen Teilnehmern:
![Bild](img/Gruppen_anzeigen_lassen_mit_user.png)


## Änderungen:

Datenbankaufbau bis jetzt zu komplex! Wir konzentrieren sich jetzt auch einen einfacheren Aufbau.
Unser Fokus liegt jetzt auf eine einzelne Datenbank die auf mehreren Schritte beruht:
- 1. Challenges
Es wird erstmal NUR möglich gemacht, dass Challenges hochgeladen werden.
- 2. Kategorien
Der zweite Schritt ist die Kategorien festzulegen, wobei die Challenges zugeordnet werden.
- 3. Workshops

Datenbankstruktur:
```sql
CREATE DATABASE multimedia_challenge;
USE multimedia_challenge;

-- Kategorien Tabelle
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(50),
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Challenges Tabelle
CREATE TABLE challenges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    example_images JSON, -- Speichert Pfade zu Beispielbildern
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```
Einträge:
```sql
USE multimedia_challenge;

-- Standard-Kategorien einfügen
INSERT INTO multimedia_challenge.categories (symbol, name, description, reference) VALUES
('📷', 'Foto', 'Fotografie Challenges', 'FOT-01'),
('🎥', 'Video', 'Video Production Challenges', 'VID-01'),
('⚙️', 'Metall', 'Metallbearbeitung Challenges', 'MET-01'),
('🎬', 'Animation', 'Animation und Motion Graphics', 'ANIM-01'),
('🎵', 'Audio', 'Audio Production Challenges', 'AUD-01');

-- Beispiel-Challenges einfügen
INSERT INTO multimedia_challenge.challenges (category_id, name, description, example_images) VALUES
(1, 'Porträt Fotografie', 'Erstelle ausdrucksstarke Porträtaufnahmen', '["/images/portrait1.jpg", "/images/portrait2.jpg"]'),
(1, 'Landschaftsfotografie', 'Fange die Schönheit der Natur ein', '["/images/landscape1.jpg", "/images/landscape2.jpg"]'),
(2, 'Kurzfilm Challenge', 'Erstelle einen 3-minütigen Kurzfilm', '["/videos/shortfilm1.mp4"]'),
(3, 'Metall Skulptur', 'Gestalte eine künstlerische Metallskulptur', '["/images/sculpture1.jpg"]'),
(4, '2D Animation', 'Animierte eine kurze 2D Geschichte', '["/animations/2d-sample.mp4"]'),
(5, 'Sound Design', 'Designe den Sound für eine Filmszene', '["/audio/sample1.mp3"]');
```

## Donnerstag, 09.10.2025

### Fortsetzung von der Erstellung eines Prototyps:
Admin Ansicht:
- Kategorie
- Challenge

### Erste Erfolge:

Startseite:
![Bild](img/Prototyp_startseite.png)

Kategorien:
![Bild](img/Prototyp_kategorien.png)

Kategorien bearbeiten:
![Bild](img/Prototyp_kategorien_bearbeiten.png)

Neue Kategorie:
![Bild](img/Prototyp_kategorien_neu.png)

Challenges:
![Bild](img/Prototyp_challenges.png)

Neue Challenge:
![Bild](img/Prototyp_challenges_neu.png)

### Datenbank und Programmierung:
Durch mysql2 kann man auf die Datenbank zugreifen. Die Website läuft Local auf dem Rechner und kann per "nodemon index.js" gestartet werden. Es ist Grundlegend eine sehr einfache Website, die die Funktionen klar und deutlich darstellen soll: Kategorien und Challenges verwalten.
- Datenbank: mysql2
- Programmierung: Node.js, Express.js, etc.

### Neuer Prototyp - Erstellt von Herr Hanl
Der Prototyp, den uns Herr Hanl zur verfügung gestellt hat bringt folgende Funktionen mit sich:
- Kategorie Ansicht
- Kategorie hinzufügen
- Kategorie bearbeiten
- Kategorie löschen

Der nächste Schritt ist, die Funktionen der Challenges hinzuzufügen. Im Grunde werden dort die gleichen Funktionen wie bei den Kategorien möglich sein: Bearbeiten, löschen, hinzufügen.

Ansicht der Kategorien:
![Bild](img/Hanl_Prototyp.png)


Auf die Datenbankstruktur der Website kann man durch folgende Website zugreifen: https://sqliteviz.com/app/#/workspace

- 1. data.sqlite einfügen
- 2. Tabellen werden angezeigt

![Bild](img/Datenbankstruktur_Prototyp.png)

## Donnerstag, 17.10.2025

### *Krank*