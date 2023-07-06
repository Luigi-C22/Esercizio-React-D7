Continuiamo a lavorare su EPICBOOKS!
1. Oggi devi modificare il layout dell'applicazione: crea due colonne, quella di sinistra continuerà a mostrare le copertine dei libri, mentre quella sulla destra mostrerà SEMPRE un componente CommentArea. Infine rimuovi l'altra istanza di CommentArea, quella presente all'interno di SingleBook.

2. Al caricamento dell'applicazione, CommentArea non riceverà più immediatamente un libro per effettuare la fetch delle recensioni;
Fai in modo che CommentArea non provochi un crash dell'intera applicazione quando ancora non possiede dati da mostrare. (ricordi i valori iniziali dello state?)

3. Se non lo hai fatto, cambia il modo in cui viene salvato "selected".
Non deve più essere salvato in SingleBook, ma in LatestRelease e non deve più contenere un booleano, ma l'asin del libro su cui si è cliccato.
Per farlo, implementa lo state lifting e modifica SingleBook di conseguenza.

4. Passa il valore di "selected" sia a SingleBook che a CommentArea.
Quando cambia il valore di "selected", CommentArea deve eseguire una nuova fetch con il nuovo valore di 'selected', e le recensioni nella colonna di destra devono riflettere il libro selezionato nella colonna di sinistra.
Utilizza componentDidUpdate e non dimenticarti di sfruttare le sue prop per non imbatterti in un loop infinito.

5. Assicurati che l'asin del libro (nella prop "selected") arrivi anche a AddComment in modo da mantenere aggiornata la sua proprietà elementId (necessaria per la richiesta POST) con il libro attualmente selezionato.



API e Autenticazione
Il tuo endpoint per tutto il CRUD si trova su:

https://striveschool-api.herokuapp.com/api/comments/

Ciò significa che puoi effettuare operazioni di GET, DELETE, POST e PUT.

!! IMPORTANTE !!
Per utilizzare l'endpoint avrai bisogno di un header di autenticazione. Puoi ottenerne uno, insieme ad un esempio su come implementarlo, su https://strive.school/studentlogin 


API - Struttura di un commento + AVVERTENZA!

{
    "comment": string //testo della recensione
    "rate": string, //valore compreso tra 1 e 5
    "elementId": string //l'identificativo ASIN del libro
}

ATTENZIONE!!
Facendo un'operazione di GET su https://striveschool-api.herokuapp.com/api/comments/
riceverai TUTTE le recensioni presenti nel database.
Probabilmente quello che a te interessa maggiormente sono le recensioni relative ad un singolo libro: puoi ottenerli aggiungendo l'ASIN del libro al tuo endpoint:

https://striveschool-api.herokuapp.com/api/comments/:elementId

ES: https://striveschool-api.herokuapp.com/api/comments/0316438960


ENDPOINT COPIAINCOLLABILE:

https://striveschool-api.herokuapp.com/api/comments/