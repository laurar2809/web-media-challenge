# Prototyp

## Backend
###  Datenbank erweitert: Challenges
Die bereits bestehende Datenbank wurde mit Challenges erweitert. Der Code wurde mit der Datenbank in Verbindung gebracht, es wird direkt auf die Datenbank zugegriffen. 

### Tabelle "Challenges" hinzufügen:
db.js:
```javascript
 const challengesExists = await db.schema.hasTable('challenges');
  
  if (!challengesExists) {
    // NEUE Tabelle erstellen 
    await db.schema.createTable('challenges', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.string('icon');
      table.string('kategorie').notNullable();
      table.date('start_date');
      table.date('end_date');
      
    });
    console.log("Tabelle 'challenges' erstellt (ohne difficulty)");

    // Beispiel-Challenge einfügen
    await db('challenges').insert([
      { 
        title: 'Video Challenge', 
        description: 'Erstelle einen 1-minütigen Kurzfilm', 
        kategorie: 'Video',
        icon: '🎬'
      }
    ]);
    console.log("Beispiel-Challenge eingefügt");
  } 
```

### Verwendung der Daten der Challenge-Tabelle:
server.js:
```javascript
// ----- Web Views (Server-rendered) -----
app.get('/', async (req, res) => {
  const items = await db('items').select('*').orderBy('title', 'asc');
  res.render('index', { items, isUrl, isUploadPath, activePage:'kategorien' });
});




// Datensatz aus Datenbank:
app.get('/challenges', async (req, res) => {
   try {
    const challenges = await db('challenges').select('*').orderBy('title', 'asc');
    res.render('challenges', { 
      challenges: challenges,  
      activePage: 'challenges' 
    });
  } catch (error) {
    console.error("Fehler beim Laden der Challenges:", error);
    res.render('challenges', { 
      challenges: [],  //Leere Array falls Fehler
      activePage: 'challenges' 
    });
  }
});




app.get('/challenges/new', async (req, res) => {
   const kategorien = await db('items').select('*').orderBy('title', 'asc');
  res.render('formChallenges', { 
    item: {}, 
    kategorien,
    action: '/challenges',
    title: 'Neue Challenge anlegen', 
    activePage: 'challenges'
  });
});




// Challenge speichern
app.post('/challenges', upload.single('iconFile'), async (req, res) => {
  let { kategorie, description, icon, title } = req.body;
  
  if (!kategorie || !description || !title) {
    req.flash('error', 'Titel, Kategorie und Beschreibung sind Pflichtfelder.');
    return res.redirect('/challenges/new');
  }

  if (req.file) {
    icon = '/uploads/' + req.file.filename;
  }

  await db('challenges').insert({ 
    title: title.trim(), 
    description: description.trim(), 
    kategorie: kategorie.trim(),
    icon: icon ? icon.trim() : null
  });

  req.flash('success', 'Challenge erfolgreich angelegt.');
  res.redirect('/challenges');
});
```


### Anzeigen der Challenges
challenges.ejs:
```html
 <tbody>
         <!--  ECHTE DATEN AUS DER DATENBANK -->
           <%if(locals.challenges){%>
              <% if (challenges.length === 0) { %>
                <tr>
                  <td colspan="4" class="text-center py-4 text-muted">Noch keine Challenges</td>
                </tr>
              <% } %>
              
              <% challenges.forEach(challenge => { %>
                <tr>
                  <td class="text-center"><%= challenge.kategorie %></td>
                  <td class="fw-medium"><%= challenge.title %></td>
                  <td class="text-body-secondary"><%= challenge.description %></td>
                  <td class="text-end">
                    <a href="/challenges/<%= challenge.id %>" class="btn btn-link">Details</a>
                    <a href="/challenges/<%= challenge.id %>/edit" class="btn btn-link">Bearbeiten</a>
                    <button class="btn btn-link" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal" data-id="<%= challenge.id %>">Löschen</button>
                  </td>
                </tr>
              <% }) }%>
      </tbody>
```