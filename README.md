# Gioco del Memory

## Descrizione del progetto

Il **Gioco del Memory** è un progetto interattivo creato con HTML, CSS e JavaScript. Il giocatore deve trovare tutte le coppie di carte uguali, girandole e ricordandone la posizione. Ogni volta che il giocatore abbina correttamente due carte, queste restano scoperte; altrimenti, vengono rigirate dopo un breve intervallo. Quando tutte le coppie sono state abbinate, il giocatore vince e può riavviare la partita.

## Obiettivi di apprendimento

- Imparare a manipolare dinamicamente il DOM con JavaScript.
- Usare gli eventi in JavaScript per gestire l'interattività.
- Comprendere le basi del layout e delle animazioni CSS.
- Implementare logica di gioco e gestione dello stato con JavaScript.

## Tecnologie utilizzate

- **HTML**: Struttura la pagina e definisce gli elementi fondamentali.
- **CSS**: Gestisce lo stile e le animazioni delle carte.
- **JavaScript**: Gestisce la logica del gioco, gli eventi e la manipolazione del DOM.

---

## Istruzioni

### 1. Clona il progetto

Per ottenere una copia locale del progetto, puoi clonare questo repository:

```bash
git clone https://github.com/tuo-repository/memory-game.git
```

### 2. Aprire il file `index.html`

Una volta clonato il progetto, apri il file `index.html` nel tuo browser preferito per giocare.

---

## Funzionalità del progetto

- **Generazione dinamica delle carte**: Le carte vengono create programmaticamente con JavaScript e distribuite casualmente in una griglia.
- **Interattività**: Le carte si girano al clic, e il gioco controlla se le due carte selezionate sono uguali.
- **Messaggio di vittoria**: Quando tutte le coppie sono abbinate correttamente, viene visualizzato un messaggio di vittoria.
- **Pulsante "Riavvia"**: Il gioco può essere riavviato in qualsiasi momento, mescolando nuovamente le carte.

---

## Struttura del progetto

- `index.html`: La struttura della pagina, contiene il contenitore per la griglia di gioco e il pulsante di riavvio.
- `styles.css`: Il foglio di stile per definire l'aspetto delle carte, della griglia e delle animazioni.
- `script.js`: La logica del gioco, la creazione dinamica delle carte, la gestione degli eventi di clic e il controllo della vittoria.

---

## Dettagli sugli oggetti HTML, CSS e JavaScript utilizzati

### **HTML**

- `<div>`: Elemento base per costruire la griglia del gioco e le singole carte.
  - Viene utilizzato per contenere sia il lato frontale che quello posteriore di ogni carta, e per creare la struttura del gioco.
- `<button>`: Pulsante utilizzato per riavviare la partita.
- `<h1>`, `<h2>`: Titoli utilizzati per dare contesto e per il messaggio di vittoria.

### **CSS**

---

# Spiegazione del file `styles.css` del Gioco del Memory

Di seguito è riportata una spiegazione approfondita dei vari comandi CSS utilizzati per stilizzare il gioco del Memory.

---

## **Stile Generale del Corpo (`body`)**

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
}
```

### Spiegazione:

- **`font-family: Arial, sans-serif;`**: Definisce il font principale del testo. In questo caso si utilizza `Arial` come primo font, e `sans-serif` come opzione di fallback.
- **`display: flex;`**: Applica il layout **flexbox** al corpo della pagina. Questo permette di allineare facilmente gli elementi figli (titolo, griglia e pulsante).
- **`flex-direction: column;`**: Dispone gli elementi figli in una **colonna** (uno sotto l’altro), piuttosto che in una riga.
- **`align-items: center;`**: Allinea gli elementi figli **orizzontalmente al centro** della pagina.
- **`justify-content: center;`**: Allinea gli elementi figli **verticalmente al centro** della pagina.
- **`height: 100vh;`**: Imposta l'altezza della pagina a **100% dell'altezza del viewport** (l'altezza della finestra del browser).
- **`background-color: #f0f0f0;`**: Imposta lo sfondo del corpo della pagina a un colore grigio chiaro (#f0f0f0).

---

## **Stile del Titolo (`h1`)**

```css
h1 {
    margin-bottom: 20px;
}
```

### Spiegazione:

- **`margin-bottom: 20px;`**: Aggiunge uno spazio di **20px** sotto il titolo (`h1`). Questo serve per creare una separazione tra il titolo e la griglia di gioco.

---

## **Griglia del Gioco (`.memory-game`)**

```css
.memory-game {
    display: grid;
    grid-template-columns: repeat(4, 150px);
    grid-gap: 10px;
    margin-bottom: 20px;
}
```

### Spiegazione:

- **`display: grid;`**: Definisce la disposizione degli elementi all'interno della `.memory-game` come una **griglia CSS**. Questo rende facile creare una struttura a più colonne per le carte.
- **`grid-template-columns: repeat(4, 150px);`**: Crea una griglia con **4 colonne**, ciascuna di **150px** di larghezza. Il comando `repeat(4, 150px)` è un modo compatto per definire che ci saranno 4 colonne di dimensione fissa.
- **`grid-gap: 10px;`**: Imposta una distanza di **10px** tra ogni carta (sia orizzontalmente che verticalmente).
- **`margin-bottom: 20px;`**: Aggiunge uno spazio di **20px** sotto la griglia, creando una separazione tra la griglia e altri elementi, come il pulsante di riavvio.

---

## **Stile delle Carte (`.memory-card`)**

```css
.memory-card {
    width: 150px;
    height: 150px;
    background-color: #2c3e50;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.5s;
}
```

### Spiegazione:

- **`width: 150px;`**: Imposta la larghezza di ogni carta a **150px**.
- **`height: 150px;`**: Imposta l'altezza di ogni carta a **150px** (quindi le carte saranno quadrate).
- **`background-color: #2c3e50;`**: Imposta il colore di sfondo delle carte a un **blu scuro/grigio**.
- **`color: white;`**: Imposta il colore del testo all'interno delle carte a **bianco**.
- **`display: flex;`**: Usa il layout **flexbox** per centrare il contenuto della carta (testo o icona) al suo interno.
- **`justify-content: center;`**: Allinea il contenuto della carta orizzontalmente al centro.
- **`align-items: center;`**: Allinea il contenuto della carta verticalmente al centro.
- **`font-size: 32px;`**: Imposta la dimensione del testo a **32px** per renderlo chiaramente visibile.
- **`cursor: pointer;`**: Cambia il cursore del mouse a **pointer** (mano), segnalando all'utente che la carta è cliccabile.
- **`transform-style: preserve-3d;`**: Imposta lo stile di trasformazione su **preserve-3d** per consentire l'effetto 3D durante la rotazione delle carte.
- **`transition: transform 0.5s;`**: Applica una transizione fluida di **0,5 secondi** per la proprietà `transform`, rendendo la rotazione delle carte fluida e naturale quando vengono girate.

---

## **Effetto di "Flip" delle Carte (`.memory-card.flipped`)**

```css
.memory-card.flipped {
    background-color: #1abc9c;
    transform: rotateY(180deg);
}
```

### Spiegazione:

- **`background-color: #1abc9c;`**: Cambia il colore di sfondo della carta quando è girata a un colore verde acqua chiaro.
- **`transform: rotateY(180deg);`**: Ruota la carta di **180 gradi** lungo l'asse Y, girando la carta (creando l'effetto "flip").

---

## **Front Face e Back Face della Carta (`.front-face`, `.back-face`)**

```css
.memory-card .front-face, .memory-card .back-face {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
}
```

### Spiegazione:

- **`position: absolute;`**: Posiziona il fronte e il retro della carta in modo assoluto all'interno della carta, permettendo di sovrapporre i due lati.
- **`width: 100%;`**: Imposta la larghezza del fronte e del retro al **100%** della larghezza della carta.
- **`height: 100%;`**: Imposta l'altezza del fronte e del retro al **100%** dell'altezza della carta.
- **`display: flex;`**: Utilizza **flexbox** per centrare il contenuto del fronte e del retro della carta.
- **`justify-content: center;`**: Allinea il contenuto orizzontalmente al centro.
- **`align-items: center;`**: Allinea il contenuto verticalmente al centro.
- **`backface-visibility: hidden;`**: Nasconde la faccia posteriore della carta durante la rotazione. Questo significa che quando una carta viene girata, il lato opposto non sarà visibile fino a quando non avrà completato la rotazione.

---

## **Front Face della Carta (`.front-face`)**

```css
.memory-card .front-face {
    background-color: #e74c3c;
    transform: rotateY(180deg);
}
```

### Spiegazione:

- **`background-color: #e74c3c;`**: Imposta il colore di sfondo del fronte della carta a un **rosso vivo**.
- **`transform: rotateY(180deg);`**: Ruota il fronte della carta di **180 gradi**, in modo che sia inizialmente nascosto (mostrando invece il retro della carta).

---

## **Back Face della Carta (`.back-face`)**

```css
.memory-card .back-face {
    background-color: #3498db;
}
```

### Spiegazione:

- **`background-color: #3498db;`**: Imposta il colore di sfondo del retro della carta a un **blu acceso**. Questo è il lato che sarà visibile prima che la carta venga girata.

---

## **Stile per il Messaggio di Vittoria (`#win-message`)**

```css
#win-message {
    background-color: #27ae60;
    color: white;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    text-align: center;
}
```

### Spiegazione:

1. **`background-color: #27ae60;`**: Imposta il **colore di sfondo** dell'elemento a un verde brillante (#27ae60). Questo colore viene utilizzato per indicare il successo, visto che il messaggio appare quando il giocatore vince.

2. **`color: white;`**: Imposta il colore del **testo** all'interno del messaggio a **bianco**, creando un buon contrasto con lo sfondo verde.

3. **`padding: 10px;`**: Aggiunge **spaziatura interna** di 10px intorno al contenuto del messaggio, creando più spazio tra il bordo dell'elemento e il testo al suo interno. Questo rende il messaggio più leggibile e visivamente gradevole.

4. **`margin-bottom: 20px;`**: Aggiunge **spaziatura esterna** sotto l'elemento di 20px, separando visivamente il messaggio dagli altri elementi che potrebbero trovarsi sotto di esso, come il pulsante di riavvio.

5. **`border-radius: 5px;`**: Arrotonda i bordi dell'elemento con un **raggio di curvatura** di 5px, conferendo un aspetto più morbido e moderno rispetto ai bordi squadrati.

6. **`text-align: center;`**: Allinea il **testo al centro** dell'elemento, migliorando la leggibilità e la presentazione del messaggio.

---

## **Stile del Pulsante di Riavvio (`#restart-button`)**

```css
#restart-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
```

### Spiegazione:

1. **`padding: 10px 20px;`**: Aggiunge spaziatura interna attorno al testo del pulsante:
   - **10px** di spazio verticale (sopra e sotto il testo).
   - **20px** di spazio orizzontale (a sinistra e a destra del testo).  
   Questo crea un pulsante di dimensioni comode e facilmente cliccabile.

2. **`font-size: 16px;`**: Imposta la **dimensione del testo** del pulsante a 16px. Questa è una dimensione ideale per rendere il testo ben visibile senza essere troppo grande o troppo piccolo.

3. **`background-color: #e74c3c;`**: Imposta il **colore di sfondo** del pulsante a un **rosso acceso** (#e74c3c). Questo rosso richiama attenzione e segnala chiaramente che si tratta di un pulsante importante, come quello per riavviare la partita.

4. **`color: white;`**: Imposta il **colore del testo** a **bianco** per creare un contrasto chiaro e rendere il testo facilmente leggibile sullo sfondo rosso.

5. **`border: none;`**: Rimuove il **bordo predefinito** del pulsante. Senza questa proprietà, il pulsante potrebbe avere un bordo visibile diverso a seconda del browser.

6. **`border-radius: 5px;`**: Arrotonda i bordi del pulsante, conferendo un aspetto più morbido e moderno rispetto ai pulsanti con bordi rettangolari netti.

7. **`cursor: pointer;`**: Cambia il **cursore** del mouse a un'icona a forma di **mano** (indicativa di cliccabilità) quando si passa sopra il pulsante. Questo fornisce un segnale visivo all'utente che il pulsante è interattivo.

---

## **Stile per l'Effetto Hover del Pulsante (`#restart-button:hover`)**

```css
#restart-button:hover {
    background-color: #c0392b;
}
```

### Spiegazione:

1. **`#restart-button:hover`**: Questa è una **pseudo-classe** che viene attivata quando l'utente passa il mouse sopra il pulsante (`hover` significa appunto "passare sopra"). Le regole all'interno di questa dichiarazione si applicano solo mentre il mouse si trova sopra il pulsante.

2. **`background-color: #c0392b;`**: Cambia il **colore di sfondo** del pulsante a un **rosso più scuro** (#c0392b) quando l'utente lo passa sopra con il mouse. Questo crea un **effetto visivo di interazione**, segnalando all'utente che il pulsante può essere cliccato. È una buona pratica per migliorare l'usabilità e l'accessibilità dell'interfaccia utente.

---

## Menzione speciale: Flexbox

## **Che cos'è Flexbox?**

Flexbox (o **Flexible Box Layout Module**) è un sistema di layout unidimensionale, cioè funziona in **una direzione alla volta**: **orizzontale** (asse principale, `main axis`) o **verticale** (asse secondario, `cross axis`). Gli elementi all'interno di un contenitore "flex" possono essere disposti in riga o in colonna e adattarsi dinamicamente alle dimensioni dello schermo o del contenitore.

Flexbox è utile per:
- Distribuire uniformemente lo spazio tra gli elementi.
- Allineare gli elementi al centro, a sinistra, a destra o in basso.
- Creare layout flessibili che si adattano a schermi di dimensioni diverse senza dover ricorrere a media queries complesse.

---

## **Proprietà principali di Flexbox**

### 1. **Il Contenitore Flex**

Per iniziare a usare Flexbox, bisogna dichiarare un contenitore come **flex container**. Questo si fa applicando la proprietà `display: flex` all'elemento che conterrà i suoi figli disposti in modo flessibile.

```css
.container {
    display: flex;
}
```

Una volta che un elemento è dichiarato come `display: flex`, i suoi figli diventano automaticamente **elementi flessibili** e si allineano secondo le regole di Flexbox.

### 2. **Direzione del layout: `flex-direction`**

La proprietà **`flex-direction`** specifica la direzione principale in cui gli elementi saranno disposti all'interno del contenitore. Può essere in **riga** (orizzontale) o in **colonna** (verticale).

```css
.container {
    display: flex;
    flex-direction: row; /* Dispone gli elementi in orizzontale (default) */
}

.container-verticale {
    display: flex;
    flex-direction: column; /* Dispone gli elementi in verticale */
}
```

- **`row`** (predefinito): Dispone gli elementi in una riga, da sinistra a destra.
- **`row-reverse`**: Dispone gli elementi in una riga, ma da destra a sinistra.
- **`column`**: Dispone gli elementi in una colonna, dall'alto verso il basso.
- **`column-reverse`**: Dispone gli elementi in una colonna, ma dal basso verso l'alto.

### 3. **Distribuire lo spazio: `justify-content`**

La proprietà **`justify-content`** controlla l'allineamento degli elementi lungo l'asse principale (orizzontale per `flex-direction: row` e verticale per `flex-direction: column`).

```css
.container {
    display: flex;
    justify-content: center; /* Allinea gli elementi al centro dell'asse principale */
}
```

Valori principali:

- **`flex-start`** (default): Allinea gli elementi all'inizio dell'asse principale.
- **`flex-end`**: Allinea gli elementi alla fine dell'asse principale.
- **`center`**: Allinea gli elementi al **centro** dell'asse principale.
- **`space-between`**: Distribuisce gli elementi con **spazio uniforme tra di loro**.
- **`space-around`**: Aggiunge uno **spazio uguale attorno** ad ogni elemento.
- **`space-evenly`**: Distribuisce lo spazio **equamente** tra gli elementi e attorno a loro.

### 4. **Allineare lungo l'asse secondario: `align-items`**

La proprietà **`align-items`** gestisce l'allineamento degli elementi lungo l'asse secondario (che è perpendicolare all'asse principale). Per esempio, in una disposizione in riga (`flex-direction: row`), l'asse secondario è **verticale**.

```css
.container {
    display: flex;
    align-items: center; /* Allinea gli elementi al centro dell'asse secondario */
}
```

Valori principali:

- **`flex-start`**: Allinea gli elementi all'inizio dell'asse secondario (in alto).
- **`flex-end`**: Allinea gli elementi alla fine dell'asse secondario (in basso).
- **`center`**: Allinea gli elementi al centro dell'asse secondario.
- **`baseline`**: Allinea gli elementi lungo la loro linea di base del testo.
- **`stretch`** (default): Estende gli elementi per riempire l'asse secondario.

### 5. **Gestire il comportamento degli elementi flex: `flex-wrap`**

La proprietà **`flex-wrap`** determina se gli elementi all'interno del contenitore dovrebbero **andare su una nuova riga** quando non c'è abbastanza spazio sul loro asse principale.

```css
.container {
    display: flex;
    flex-wrap: wrap; /* Permette agli elementi di andare su più righe */
}
```

Valori principali:

- **`nowrap`** (default): Tutti gli elementi rimangono su una singola riga, anche se escono dal contenitore.
- **`wrap`**: Gli elementi vanno su una nuova riga se non c'è abbastanza spazio.
- **`wrap-reverse`**: Come `wrap`, ma gli elementi vanno su una nuova riga dall'alto verso il basso.

### 6. **Allineare il contenitore quando si usa `flex-wrap`: `align-content`**

Se i tuoi elementi sono suddivisi su più righe (con `flex-wrap`), puoi controllare lo **spazio tra le righe** con la proprietà **`align-content`**. Questo allinea le righe stesse, non i singoli elementi.

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between; /* Spazio tra le righe */
}
```

Valori principali:

- **`flex-start`**: Le righe sono tutte posizionate verso l'inizio del contenitore.
- **`flex-end`**: Le righe sono tutte posizionate verso la fine del contenitore.
- **`center`**: Le righe sono allineate al centro del contenitore.
- **`space-between`**: Spazio uguale tra le righe.
- **`space-around`**: Spazio uguale attorno a ciascuna riga.
- **`stretch`** (default): Le righe vengono estese per riempire lo spazio verticale disponibile.

---

## **Proprietà per gli Elementi Flessibili**

Oltre a definire il comportamento del **contenitore** flex, Flexbox permette anche di controllare il comportamento dei **singoli elementi flessibili** all'interno del contenitore.

### 1. **`flex-grow`**

**`flex-grow`** specifica quanto un elemento dovrebbe crescere rispetto agli altri elementi all'interno del contenitore, in base allo spazio disponibile.

```css
.item {
    flex-grow: 1; /* L'elemento crescerà per riempire lo spazio disponibile */
}
```

Valori principali:

- **`0`** (default): L'elemento non cresce e rimane alla sua dimensione di base.
- **`1`** (o più): L'elemento cresce in proporzione agli altri elementi che hanno `flex-grow` settato. Se due elementi hanno `flex-grow: 1` e uno ha `flex-grow: 2`, l'ultimo crescerà il doppio rispetto agli altri.

### 2. **`flex-shrink`**

**`flex-shrink`** controlla quanto un elemento dovrebbe restringersi se lo spazio è limitato.

```css
.item {
    flex-shrink: 1; /* L'elemento si restringe per adattarsi allo spazio disponibile */
}
```

Valori principali:

- **`1`** (default): L'elemento può restringersi se lo spazio è limitato.
- **`0`**: L'elemento non si restringe, manterrà la sua dimensione originale.

### 3. **`flex-basis`**

**`flex-basis`** definisce la dimensione di base di un elemento prima che venga distribuito lo spazio rimanente. È simile a impostare la `width` o `height`, ma è specifica per Flexbox.

```css
.item {
    flex-basis: 200px; /* Imposta la dimensione di base dell'elemento a 200px */
}
```

### 4. **`order`**

**`order`** cambia l'ordine visuale degli elementi senza modificare l'ordine HTML. Gli elementi flex hanno un ordine predefinito di `0`, ma possono essere riordinati con valori positivi o negativi.

```css
.item {
    order: 1; /* Mostra questo elemento dopo gli altri che hanno order 0 (default) */
}
```

---

## **Esempio pratico**

Ecco un esempio completo che combina molte delle proprietà di Flexbox:

```html
<div class="container">
   

 <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

<style>
.container {
    display: flex;
    flex-direction: row; /* Dispone gli elementi in riga */
    justify-content: space-around; /* Spazio attorno a ciascun elemento */
    align-items: center; /* Allinea gli elementi verticalmente al centro */
    height: 100vh; /* L'altezza del contenitore è l'altezza della finestra */
}

.item {
    background-color: lightcoral;
    padding: 20px;
    font-size: 24px;
    flex-grow: 1; /* Ogni elemento crescerà per riempire lo spazio disponibile */
    margin: 10px;
}
</style>
```

In questo esempio:

- Gli elementi sono disposti in una riga, con **spazio attorno** a ciascuno.
- Gli elementi crescono per riempire lo spazio disponibile grazie a `flex-grow`.
- Gli elementi sono centrati verticalmente.

---

## **Conclusioni**

Flexbox è un layout estremamente potente che semplifica l'organizzazione e l'allineamento degli elementi su una pagina. È particolarmente utile per creare layout dinamici e responsivi, gestendo automaticamente lo spazio disponibile. Con le proprietà Flexbox, puoi centrare facilmente gli elementi, distribuire lo spazio uniformemente, far crescere o restringere gli elementi in base allo spazio e molto altro ancora, senza dover usare `float` o complicate griglie fisse.

## **JavaScript**

- **Manipolazione del DOM**:
  - Il gioco crea dinamicamente le carte utilizzando `document.createElement` per costruire gli elementi `div` delle carte e appenderli alla griglia di gioco.
- **Eventi**:
  - Ogni carta ha un `addEventListener('click', flipCard)` per rilevare il clic e girare la carta.
- **Controllo delle coppie**:
  - La funzione `checkForMatch()` confronta i valori delle due carte selezionate e gestisce il comportamento in caso di match o mismatch.
- **Riavvio del gioco**:
  - Il pulsante di riavvio è collegato alla funzione `createCards()`, che mescola le carte e riavvia la partita.
- **Messaggio di vittoria**:
  - Viene mostrato un messaggio quando tutte le coppie sono abbinate correttamente, utilizzando `style.display = 'block'` per rendere visibile il messaggio.

---

## Dettagli aggiuntivi

### Funzioni JavaScript principali

- **`createCards()`**: Genera la griglia di carte e le mescola.
- **`flipCard()`**: Gira una carta al clic, mantenendo il controllo dello stato del gioco.
- **`checkForMatch()`**: Controlla se due carte selezionate formano una coppia.
- **`resetBoard()`**: Resetta le variabili di controllo del gioco per continuare a giocare.
- **`shuffle()`**: Mescola casualmente l'array delle carte per garantire che ogni partita sia unica.

---

# Spiegazione del file `script.js` del Gioco del Memory

## **Selezione degli Elementi dal DOM**

```javascript
const gameContainer = document.getElementById('memory-game');
const restartButton = document.getElementById('restart-button');
const winMessage = document.getElementById('win-message');
```

### Spiegazione:

- **`document.getElementById()`**: Questa funzione consente di selezionare un elemento dal DOM (il documento HTML) in base al suo **id**. Ecco gli elementi selezionati:
  - **`gameContainer`**: Seleziona il contenitore della griglia di gioco con id `memory-game`, che è l'elemento HTML dove verranno aggiunte le carte.
  - **`restartButton`**: Seleziona il pulsante con id `restart-button`, che verrà utilizzato per riavviare il gioco.
  - **`winMessage`**: Seleziona il messaggio di vittoria con id `win-message`, che inizialmente è nascosto e verrà mostrato solo quando il giocatore trova tutte le coppie di carte.

---

## **Creazione dell'Array delle Carte**

```javascript
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let cardsArray = [...cardValues, ...cardValues];
```

### Spiegazione:

- **`const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];`**: Qui viene definito un array contenente le lettere da **A** a **H**. Ogni valore rappresenta il contenuto di una **singola carta** nel gioco.
- **`let cardsArray = [...cardValues, ...cardValues];`**: Duplica l'array `cardValues` utilizzando l'operatore **spread** (`...`) per creare una versione estesa che contiene **due copie** di ciascun valore (due carte per ogni lettera). Questo array sarà usato per costruire le coppie di carte da abbinare.

---

## **Variabili di Stato del Gioco**

```javascript
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchesFound = 0;
```

### Spiegazione:

- **`hasFlippedCard`**: Questa variabile booleana tiene traccia se una **prima carta è già stata girata**. Se è `true`, significa che il giocatore ha già girato una carta e sta scegliendo la seconda.
- **`lockBoard`**: Un'altra variabile booleana che blocca temporaneamente il gioco. Quando è `true`, nessuna carta può essere girata. Serve per prevenire che il giocatore giri più di due carte alla volta.
- **`firstCard, secondCard`**: Variabili che memorizzano le **due carte selezionate** dal giocatore per poterle confrontare.
- **`matchesFound`**: Un contatore che tiene traccia del numero di **coppie trovate**. Viene incrementato ogni volta che il giocatore abbina correttamente una coppia.

---

## **Funzione per Mescolare le Carte**

```javascript
function shuffle(array) {
    array.sort(() => 0.5 - Math.random());
}
```

### Spiegazione:

- **`array.sort()`**: La funzione `sort()` ordina gli elementi di un array in base a una funzione di confronto. Qui, la funzione di confronto ritorna un numero casuale.
- **`0.5 - Math.random()`**: **`Math.random()`** genera un numero casuale tra 0 e 1. Sottraendo 0.5, otteniamo un numero positivo o negativo casuale, che simula un ordinamento casuale degli elementi nell'array, mescolando così le carte.

---

## **Funzione per Creare le Carte**

```javascript
function createCards() {
    gameContainer.innerHTML = '';
    matchesFound = 0;
    winMessage.style.display = 'none';

    shuffle(cardsArray);
    
    cardsArray.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.framework = value;

        const frontFace = document.createElement('div');
        frontFace.classList.add('front-face');
        frontFace.textContent = value;

        const backFace = document.createElement('div');
        backFace.classList.add('back-face');
        backFace.textContent = '?';

        card.appendChild(frontFace);
        card.appendChild(backFace);
        gameContainer.appendChild(card);

        card.addEventListener('click', flipCard);
    });
}
```

### Spiegazione:

- **`gameContainer.innerHTML = '';`**: Svuota il contenitore della griglia di gioco rimuovendo tutte le carte. Serve per resettare il gioco ogni volta che si riavvia la partita.
- **`matchesFound = 0;`**: Resetta il contatore delle coppie abbinate.
- **`winMessage.style.display = 'none';`**: Nasconde il messaggio di vittoria, in modo che venga mostrato solo quando il giocatore completa il gioco.
- **`shuffle(cardsArray);`**: Chiama la funzione `shuffle()` per mescolare l'array delle carte prima di generare una nuova griglia.
- **`cardsArray.forEach(value => {...})`**: Per ogni elemento (lettera) nell'array mescolato `cardsArray`:
  - **`document.createElement('div');`**: Crea dinamicamente un nuovo elemento `div` per ogni carta.
  - **`card.classList.add('memory-card');`**: Aggiunge la classe `memory-card` alla nuova carta creata.
  - **`card.dataset.framework = value;`**: Assegna il valore (lettera) alla proprietà `data-framework` della carta, che sarà utile per confrontare le carte.
  - **`frontFace.textContent = value;`**: Aggiunge il testo (la lettera) al lato frontale della carta.
  - **`backFace.textContent = '?';`**: Aggiunge un punto interrogativo al lato posteriore della carta.
  - **`card.addEventListener('click', flipCard);`**: Assegna un **event listener** alla carta, che chiama la funzione `flipCard()` quando viene cliccata.

---

## **Funzione per Girare le Carte**

```javascript
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}
```

### Spiegazione:

- **`if (lockBoard) return;`**: Impedisce al giocatore di girare altre carte se `lockBoard` è impostato su `true`. Questo è utile per bloccare l'interazione mentre si aspetta che due carte non corrispondenti si rigirino.
- **`if (this === firstCard) return;`**: Impedisce che il giocatore possa cliccare due volte sulla stessa carta per abbinarla a se stessa.
- **`this.classList.add('flipped');`**: Aggiunge la classe CSS `flipped` alla carta cliccata, che attiva l'effetto visivo di "flip" per girare la carta.
- **`if (!hasFlippedCard) {...}`**: Se nessuna carta è stata girata, memorizza la prima carta selezionata in `firstCard` e imposta `hasFlippedCard` su `true`. A questo punto, la funzione termina.
- **`secondCard = this;`**: Quando una seconda carta è stata girata, memorizza la seconda carta selezionata in `secondCard` e poi chiama la funzione `checkForMatch()` per controllare se le due carte corrispondono.

---

## **Funzione per Controllare se le Carte Corrispondono**

```javascript
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}
```

### Spiegazione:

- **`firstCard.dataset.framework === secondCard.dataset.framework;`**: Confronta i valori `data-framework` delle due carte selezionate per verificare se sono uguali. Se i valori corrispondono, le carte formano una coppia.
- **`isMatch ? disableCards() : unflipCards();`**: Utilizza l'**operatore ternario** per decidere quale funzione eseguire:
  - Se `isMatch` è `true` (le carte corrispondono), chiama `disableCards()` per disabilitare le carte.
  - Se `isMatch` è `false` (le carte non corrispondono), chiama `unflipCards()` per rigirarle.

---

## **Funzione per Disabilitare le Carte

**

```javascript
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchesFound++;

    if (matchesFound === cardValues.length) {
        setTimeout(() => {
            winMessage.style.display = 'block';
        }, 500);
    }

    resetBoard();
}
```

### Spiegazione:

- **`firstCard.removeEventListener('click', flipCard);`** e **`secondCard.removeEventListener('click', flipCard);`**: Disabilita le carte corrette rimuovendo l'event listener `click` che permette di girarle. Questo impedisce al giocatore di interagire nuovamente con le carte già abbinate.
- **`matchesFound++;`**: Incrementa il contatore delle coppie abbinate (`matchesFound`).
- **`if (matchesFound === cardValues.length) {...}`**: Verifica se tutte le coppie di carte sono state trovate. Se il numero di coppie trovate (`matchesFound`) è uguale al numero totale di coppie (`cardValues.length`), il giocatore ha vinto.
  - **`setTimeout(() => {...}, 500);`**: Mostra il messaggio di vittoria (`winMessage.style.display = 'block';`) con un leggero ritardo di 500ms per rendere l'esperienza più fluida.
- **`resetBoard();`**: Chiama la funzione `resetBoard()` per resettare le variabili che tengono traccia delle carte girate.

---

## **Funzione per Rigirare le Carte**

```javascript
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1500);
}
```

### Spiegazione:

- **`lockBoard = true;`**: Imposta `lockBoard` su `true` per impedire al giocatore di girare altre carte mentre le carte non corrispondenti vengono rigirate.
- **`setTimeout(() => {...}, 1500);`**: Usa un ritardo di 1,5 secondi (1500ms) prima di rigirare le carte, in modo che il giocatore abbia il tempo di vedere entrambe le carte prima che si rigirino.
  - **`firstCard.classList.remove('flipped');`** e **`secondCard.classList.remove('flipped');`**: Rimuove la classe `flipped` dalle carte, facendole tornare nella posizione iniziale.
  - **`resetBoard();`**: Chiama la funzione `resetBoard()` per resettare le variabili di stato.

---

## **Funzione per Resettare le Variabili**

```javascript
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
```

### Spiegazione:

- **`[hasFlippedCard, lockBoard] = [false, false];`**: Resetta sia `hasFlippedCard` che `lockBoard` a `false`, indicando che il giocatore può girare nuovamente le carte.
- **`[firstCard, secondCard] = [null, null];`**: Resetta le variabili `firstCard` e `secondCard` a `null`, pronte per essere assegnate a nuove carte.

---

## **Riavvio del Gioco**

```javascript
restartButton.addEventListener('click', () => {
    createCards();
});
```

### Spiegazione:

- **`restartButton.addEventListener('click', () => {...})`**: Assegna un **event listener** al pulsante di riavvio. Quando viene cliccato, viene chiamata la funzione `createCards()`, che mescola nuovamente le carte e ripristina il gioco.

---

## **Inizializzazione del Gioco**

```javascript
createCards();
```

### Spiegazione:

- **`createCards();`**: Chiama la funzione `createCards()` una prima volta quando la pagina viene caricata, generando le carte mescolate e iniziando il gioco.

---

### **Conclusioni**

Questo file JavaScript gestisce l'intero flusso del gioco del Memory, dalla creazione e mescolamento delle carte fino al controllo delle coppie e alla gestione della vittoria. Le funzioni di controllo dello stato del gioco, l'uso di eventi e la manipolazione dinamica del DOM sono centrali per l'interattività del gioco.

## Come giocare

1. Clicca su una carta per girarla.
2. Clicca su una seconda carta e verifica se corrisponde alla prima.
3. Se le carte corrispondono, resteranno scoperte; altrimenti, verranno rigirate.
4. Continua fino a trovare tutte le coppie.
5. Quando tutte le coppie sono trovate, verrà visualizzato un messaggio di vittoria.
6. Clicca sul pulsante "Riavvia la partita" per iniziare una nuova partita con le carte mescolate.

---

## Conclusioni

Questo progetto è un ottimo esercizio per imparare a utilizzare insieme HTML, CSS e JavaScript per creare un gioco interattivo. Il gioco del Memory fornisce una panoramica completa sulla manipolazione del DOM, la gestione degli eventi e le animazioni CSS, offrendo agli studenti la possibilità di esplorare concetti chiave in modo divertente e pratico.

---

Spero che questo `README.md` possa essere utile per spiegare il progetto agli studenti e dar loro le informazioni necessarie per comprendere meglio i concetti di HTML, CSS e JavaScript utilizzati nel gioco.