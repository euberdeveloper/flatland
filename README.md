# Index

* Introduzione
* Problema
* Metodo di risoluzione
* Soluzione
* Verifica dell'efficienza
* Dimostrazione della soluzione
* Un inganno

# Introduzione

Questa repository è stata creata per descrivere come è stato risolto in modo ottimale **Flatland** un esercizio assegnato dal corso **Algoritmi e Strutture Dati** durante il percorso di studi di **Informatica** all'**Università degli Studi di Trento**.

Esiste un sito del corso in cui vengono pubblicati degli esercizi; gli studenti accedono al sito e inviano i programmi che risolvono gli esercizi, ricevendo una valutazione automatica in base a correttezza ed efficienza della soluzione.

# Problema

Uno degli esercizi assegnati si chiama **Flatland**.

Il problema è il seguente:

* Si ha un input consistente in un'**insieme ordinato** di triangoli, che possono essere rivolti verso sinistra `<` o verso destra `>`

* Il numero degli elementi dell'insieme è sempre **dispari**

* Tutti i triangoli che non sono il primo (**coda**) e l'ultimo (**testa**) possono essere selezionati

* Quando un triangolo è **selezionato**, esso ed il triangolo verso cui è rivolto vengono **rimossi** dalla lista

* Si continuano a selezionare triangoli finchè non ne rimarrà **uno solo**

* **Quali sono tutti i possibili triangoli che possono rimanere per ultimi?**

L'input si trova in un file di testo:

* Nella prima riga si trova il **numero di elementi** dell'insieme

* Nella seconda i triangoli rappresentati da lettere **s** (punta a sinistra) e **d** (punta a destra)

* **1 ≤ N ≤ 200**, dove N è il numero di elementi

Un esempio di input è:

```text
9
ssddssdsd
```

L'output dovrà essere scritto in un file di testo:

* La prima riga deve contenere il numero di elementi che appartengono alla soluzione del problema

* La seconda gli indici degli elementi che appartengono alla soluzione (partendo da 0)

Ad esempio, l'output corretto per l'input precedente è:

```text
2
2 8
```

I file originali della consegna si trovano [qui](https://github.com/euberdeveloper/flatland/tree/master/assignment).

# Metodo di risoluzione

Il programma inviato doveva essere scritto in **C**/**C++**.

Tuttavia, per trovare la soluzione e fare esperimenti, ho avuto la necessità di usare un linguaggio ad alto livello per comodezza e velocità di sviluppo.

Ho scelto quindi di cercare la soluzione programmando in **Typescript**, la versione tipizzata di Javascript.

Per eseguire i test scritti in Typescript:

* Installare **Node.js** sul proprio computer

* Aprire il prompt dei comandi ed andare nella cartella **ts** di questa repository

* Eseguire `npm i` per scaricare le dependencies

* Eseguire `npm run build` per transpilare typescript in javascript

* Eseguire `npm run start N`, dove **N è il numero del test da eseguire**

* *In alternativa, eseguire `npm run serve N` per fare la transpilazione e poi eseguire il test N*

## Test 1

La prima cosa che ho fatto è stata quella di generare una funzione che dato un **array di simboli**, ritornasse tutte le possibili **permutazioni** di quei simboli

## Test 2

La seconda cosa che ho fatto è stata definire come sarebbe stato rappresentato un input del problema.

Ho pensato di rappresentare ogni triangolo come un oggetto, le cui chiavi sono:

* **value**: Una stringa di valori `<` o `>`

* **index**: Una numero rappresentante l'indice dell'elemento

Ho fatto una funzione che data una stringa ritorna l'input corrispondente.

Ad esempio:

```text
======> SECOND TEST: generate data from string
===> TEST
input:  ><>
result:  [
  { value: '>', index: 0 },
  { value: '<', index: 1 },
  { value: '>', index: 2 }
]
```

## Test 3

La terza cosa che ho fatto è stata quella di creare una funzione che dato un numero, ritorna un array contenente **tutti i possibili input** che hanno quella lunghezza.

Ad esempio:

```json
[
  [
    {
      "value": ">",
      "index": 0
    },
    {
      "value": ">",
      "index": 1
    },
    {
      "value": ">",
      "index": 2
    }
  ],
  ...
]
```

## Test 4

La quarta cosa che ho fatto è stata quella di creare una funzione molto simile, solo che dato un numero mi ritorna tutti i possibili input di **tutte le dimensioni dispari** minori o uguali a quel numero. Ciò che viene ritornato è quindi un array di array di array.

## Test 5

La quinta cosa che ho fatto è stata quella di creare una funzione che risolve il problema utilizzando il **brute force**.

Per accertarmi che funzionasse, l'ho implementata anche in C++ ed inviata. Il risultato era di **50 / 100** ed i punti persi erano solo causati dalla lentezza del programma.

![Brute force result](https://github.com/euberdeveloper/flatland/blob/master/images/brute_force_result.png)

![Brute force details](https://github.com/euberdeveloper/flatland/blob/master/images/brute_force_details.png)

Il test utilizza la funzione del *test 4* per creare tutti gli input possibili e poi li dà in pasto al brute force, per stampare **gli input ed i relativi output** in questo modo:

```text
======> FIFTH TEST: main problem, brute force
====> TEST: n = 3
input:  > > >
result:  [ 0 ]
input:  > > <
result:  [ 0 ]
input:  > < >
result:  [ 2 ]
input:  > < <
result:  [ 2 ]
input:  < > >
result:  [ 0 ]
input:  < > <
result:  [ 0 ]
input:  < < >
result:  [ 2 ]
input:  < < <
result:  [ 2 ]
====> TEST: n = 5
input:  > > > > >
result:  [ 0 ]
...
```

### Osservazioni

Qui ho iniziato ad osservare gli input e gli output per cercare di trovare una **relazione** che li collegasse.

Ho notato che:

* Tutte le soluzioni sono **pari**

* Tutti i triangoli che **non sono puntati** da nessuno (`< ? >`, dove `?` è il triangolo in questione) fanno parte della soluzione

*La seconda osservazione sarà quella che mi avrà permesso di completare la vera relazione che risolve il problema.*

Ho creato un programma in C++ che risolveva il problema in questo modo, ma quando l'ho inviato ho ottenuto un punteggio di **70 / 100**: la soluzione era solo **parziale**.

![Partial solution result](https://github.com/euberdeveloper/flatland/blob/master/images/partial_solution_result.png)

![Partial solution details](https://github.com/euberdeveloper/flatland/blob/master/images/partial_solution_details.png)

## Test 6

La sesta cosa che ho fatto è stata quindi crearne la funzione analoga in typescript, che mi ritornava la *soluzione ipotizzata* ed ho confrontato i suoi risultati con quella utilizzante il bruteforce.

In questo test:

* Vengono creati tutti gli input possibili con dimensione minore di 7

* Si stampano gli input per cui la soluzione ipotizzata contiene elementi che non ci sono nella soluzione reale

* Si stampano gli input per cui nella soluzione ipotizzata mancano degli elementi che sono presenti in quella reale

Ad esempio:

```text
======> SIXTH TEST: main problem, first hypothesis compared to brute force
===> Are there in the obtained solution elements which should not be in the solution? (false positives)
====> N:  3
====> N:  5
====> N:  7
===> Gives the obtained solution all the elements it should? (is it complete)
====> N:  3
====> N:  5
===> CASE
input:  > < > > >
expected:  [ 2, 4 ]
obtained:  [ 2 ]
===> CASE
input:  > < > > <
expected:  [ 2, 4 ]
obtained:  [ 2 ]
===> CASE
input:  > < < > >
expected:  [ 2, 0 ]
obtained:  [ 2 ]
```

### Osservazioni

Le mie osservazioni sono state:

1. La soluzione ipotizzata non contiene elementi sbagliati

2. La soluzione ipotizzata è solo parziale

Osservando i casi in cui la soluzione era solo parziale non sono riuscito a trovare altre relazioni.

## Test 7

La settima cosa che ho fatto è stata quindi iniziare a ragionare in modo diverso per risolvere il problema.

Partendo dal fatto che tutte le soluzioni sono pari sono arrivato ad una conclusione: **un elemento può rimanere per ultimo se esiste una sequenza di selezioni per cui tutti gli elementi alla sua sinistra e tutti gli elementi alla sua destra vengono rimossi**.

Ho quindi deciso di riutilizzare il metodo empirico di prima su un nuovo problema:

**Dato un insieme pari di elementi, può esso collassare?**

Questo test genera una funzione analoga a quella del test 4, con la differenza che gli input sono di dimensione pari.

## Test 8

L'ottava cosa che ho fatto è stata quindi una funzione che, tramite il **bruteforce**, dato un input **pari** ritornasse **true** se esiste un modo per farlo collassare e **false** altrimenti. In realtà le funzioni erano **due**, una per il ramo destro e l'altra per il ramo sinistro.

Questo test è molto simile al test 5:

```text
======> EIGHT TEST: secondary problem, brute force
====> TEST: n = 2
input:  > >
left:  false
right:  true
input:  > <
left:  true
right:  true
input:  < >
left:  false
right:  false
input:  < <
left:  true
right:  false
====> TEST: n = 4
input:  > > > >
left:  false
right:  true
...
```

## Test 9

La nona cosa che ho fatto è stata quella di verificare che il problema secondario avesse senso.

Ho quindi creato una funzione che, usando i bruteforce del test precedente, risolvesse il problema controllando per ogni elemento se gli elementi a sinistra e quelli a destra potevano collassare.

Il risultato è stato questo:

```text
======> NINTH TEST: another check to left and right bruteforce
===> Are there in the obtained solution elements which should not be in the solution? (false positives)
====> N:  3
====> N:  5
====> N:  7
====> N:  9
===> Gives the obtained solution all the elements it should? (is it complete)
====> N:  3
====> N:  5
====> N:  7
====> N:  9
======> END NINTH TEST
```

### Osservazioni

Il ragionamento sembrava funzionare.

Anche qui ho quindi cercato di trovare una relazione osservando il test 8, ma dopo un paio d'ore ho mollato.

Stavo pensando addirittura di creare una rete neurale ed allenarla in modo che trovasse la relazione con un'approssimazione decente, ma non l'ho implementata.

Alla fine dopo altri tentativi ho ottenuto la relazione che lega gli input con gli output, che è scritta nella sezione: **Soluzione**.

## Test 10

La decima cosa che ho fatto è stata quella di scrivere una funzione che utilizzasse la relazione trovata per dire se un insieme pari di elementi potesse collassare.

L'ho confrontata con il bruteforce ed il risultato è stato questo:

```text
======> TENTH TEST: secondary problem, hypothesis compared to expected
=====> LEFT TESTS
====> N:  2
====> N:  4
====> N:  6
====> N:  8
====> N:  10
====> N:  12
=====> RIGHT TESTS
====> N:  2
====> N:  4
====> N:  6
====> N:  8
====> N:  10
====> N:  12
======> END TENTH TEST
```

La soluzione funzionava!!! **(almeno empiricamente)**

## Test 11

L'undicesima cosa che ho fatto è stata quella di creare una funzione che come nel *test 9* risolvesse il problema originario con il ragionamento dei rami destro e sinistro, ma stavolta utilizzando la relazione trovata.

Il risultato è stato questo:

```text
======> ELEVENTH TEST: another check to left and right bruteforce
===> Are there in the obtained solution elements which should not be in the solution? (false positives)
====> N:  3
====> N:  5
====> N:  7
====> N:  9
===> Gives the obtained solution all the elements it should? (is it complete)
====> N:  3
====> N:  5
====> N:  7
====> N:  9
======> END ELEVENTH TEST
```

### Osservazioni

Anche qui funzionava!!! Ho preso l'assunzione che se funzionava con tutti gli input di lunghezza minore o uguale a 9, funzionasse per tutti.

La soluzione era **O(N²)** e già bastava per prendere il massimo del punteggio.

Ma questo non mi bastava e con uno stratagemma spiegato nella sezione **Soluzione** sono riuscito a renderla **O(N)**.

## Test 12

La dodicesima ed ultima cosa che ho fatto è stata quella di rifare il *test 11* con la funzione *O(N)*.

Questa volta, grazie all'efficienza della soluzione, l'ho testata su tutti gli input con dimensione minore o uguale ad 11.

Il risultato è stata questo:

```text
======> TWELFTH TEST: main problem, linear hypothesis compared to brute force
===> Are there in the obtained solution elements which should not be in the solution? (false positives)
====> N:  3
====> N:  5
====> N:  7
====> N:  9
====> N:  11
===> Gives the obtained solution all the elements it should? (is it complete)
====> N:  3
====> N:  5
====> N:  7
====> N:  9
====> N:  11
======> END TWELFTH TEST
```

Ho quindi trascritto la funzione in C++ ed inviato il programma, ottenendo il massimo del punteggio **100 / 100**.

![Final solution result](https://github.com/euberdeveloper/flatland/blob/master/images/final_solution_result.png)

![Final solution details](https://github.com/euberdeveloper/flatland/blob/master/images/final_solution_details.png)

# Soluzione

La soluzione si basa sul fatto che **un elemento fa parte della soluzione se e solo se tutti gli elementi alla sua sinistra e tutti gli elementi alla sua destra possono essere rimossi**.

Il ramo destro di un elemento, ovvero l'insieme di tutti gli elementi alla sua destra, può collassare se e solo se si verifica almeno una delle seguenti condizioni:

1. **Il primo elemento del ramo è `>`**
2. **In una posizione pari partendo da 0, si trovano prima un `<` e poi un `>`, ovvero una coppia `<>`**

Specularmente:

Il ramo sinistro di un elemento, ovvero l'insieme di tutti gli elementi alla sua sinistra, può collassare se e solo se si verifica almeno una delle seguenti condizioni:

1. **L'ultimo elemento del ramo è `<`**
2. **In una posizione pari partendo da 0, si trovano prima un `<` e poi un `>`, ovvero una coppia `<>`**

La prima condizione è il motivo per cui all'inizio mi ero accorto che ogni elemento non puntato era parte della soluzione, la seconda il motivo per cui la soluzione era solo parziale.

## O(N²)

Basta quindi verificare queste condizioni nei rami destro e sinistro di ogni elemento, per trovare una soluzione O(N²).

## O(N)

Con un piccolo stratagemma si può trovare una soluzione O(N):

* Con un for si trovano la prima e l'ultima coppia `<>` in posizioni pari partendo da 0 e se ne memorizzano gli indici.

* Con un altro for, per ogni elemento, si controllano gli elementi adiacenti per vedere se è puntato:

    * Se è puntato è nella soluzione

    * Se non lo è, si controlla se il suo indice è compreso fra i due indici memorizzati e se lo è vuol dire che fa parte della soluzione.

Utilizzando solo due for, uno al di fuori dell'altro, questa solouzione è **lineare** rispetto al numero di elementi.

Nella cartella **c++/solution** si può compilare il file **flatland.cpp** con il comando `g++ flatland.cpp` e verificarne la correttezza.

# Verifica dell'efficienza

Nella cartella **c++/test** si può compilare il file **test.cpp** con il comando `g++ flatland.cpp`.

Per eseguirlo basta eseguire il comando: `./a.out N PRINT`, dove **N** è la dimensione (dispari) di un input che verrà generato casualmente e **PRINT** è 1 se si vuole scrivere la soluzione trovata su un file di testo, 0 altrimenti. (Consiglio di usare 0 perchè per scrivere su file di testo ci vuole molto tempo).

Ho utilizzato questo programma per verificare empiricamente che la soluzione fosse veramente lineare e farmi un'idea dei tempi impiegati per trovare una soluzione nel mio computer (Thinkpad T410).

I risultati sono stati i seguenti:

```bash

$ ./a.out 10001 0
N: 10001
---> Generating input
---> Processing input
TIME: 0

$ ./a.out 100001 0
N: 100001
---> Generating input
---> Processing input
TIME: 4

$ ./a.out 1000001 0
N: 1000001
---> Generating input
---> Processing input
TIME: 50

$ ./a.out 10000001 0
N: 10000001
---> Generating input
---> Processing input
TIME: 413

$ ./a.out 100000001 0
N: 100000001
---> Generating input
---> Processing input
TIME: 4133

$ ./a.out 1000000001 0
N: 1000000001
---> Generating input
---> Processing input
TIME: 63133
```

Dove il tempo è misurato in millisecondi e che è preso solo dopo che l'input è stato generato. Non si poteva andare oltre a quell'ordine di grandezza perche il tipo int andava in overflow.

Si può osservare che aumentando l'input di 10 volte, la soluzione è ottenuta in un tempo approssimativamente 10 volte maggiore, il che fa vedere (fino ad un certo punto)che la soluzione **è lineare**.

# Dimostrazione della soluzione

Tutto ciò è stato però trovato solo in **modo empirico**.

**Chi mi dice che oltre una certa dimensione, la soluzione smetta di funzionare?**

Ecco perchè ho deciso di **dimostrare in modo matematico** che la soluzione funziona sempre.

**Di seguito c'è la dimostrazione.**

## NOTAZIONE

| simbolo | significato   |
|---|---|
| > | triangolo che punta a destra |
| < | triangolo che punta a sinistra|
| T | testa del flatland |
| O | triangolo di posizione pari |
| ? | triangolo di verso ignoto |
| P | triangolo di posizione pari |
| D | triangolo di posizione dispari |
| X | sequenza di triangoli di lunghezza variabile e valore ignoto |
| Y | sequenza di triangoli di lunghezza variabile e valore ignoto |

## DEFINIZIONI

**TRIANGOLO**: Un oggetto cha può avere valore > (punta a destra) o < (punta a sinistra)

**PRIMO ELEMENTO**: In una sequenza di triangoli, si dice primo elemento il triangolo che non ha precedenti

**ULTIMO ELEMENTO**: In una sequenza di triangoli, si dice ultimo elemento il triangolo che non ha successivi

**FLATLAND**: Una sequenza di triangoli di lunghezza N, con N dispari e maggiore di 1

**CODA**: Primo triangolo del flatland

**TESTA**: Ultimo triangolo del flatland

**POSIZIONE**: Dato un flatland, indicizzandone i triangoli partendo da zero, si dice posizione di un triangolo l'indice associato a quel triangolo

**SEQUENZA VUOTA**: Una sequenza di triangoli di lunghezza nulla

**SOTTOSEQUENZA**: Si dice sottosequenza di un flatland una porzione di triangoli appartenenti ad esso in cui la relazione di successivo e precedente è rimasta invariata

**SOTTOSEQUENZE INDIPENDENTI**: Due sottosequenze si dicono indipendenti fra loro se qualunque selezione ad una delle due sottosequenze non modifica l'altra sottosequenza

**SELEZIONE**: Quando un triangolo viene selezionato, lui e il triangolo a cui esso punta vengono rimossi dal flatland. La coda e la testa di un flatland non possono essere selezionati

**RIDUZIONE**: Data una sequenza di triangoli, si dice riduzione una sequenza di selezioni tale che alla sequenza di triangoli risultante non può essere applicata nessuna ulteriore selezione

**SELEZIONE INTERNA**: Data una sottosequenza di un flatland, si dice selezione interna una qualunque selezione che rimuove solo triangoli appartenenti alla sottosequenza

**RIDUZIONE INTERNA**: Data una sottosequenza di un flatland, si dice riduzione interna una qualunque sequenza di selezioni interne ad essa tali che alla risultante non possano essere applicate altre selezioni interne

**COLLASSARE**: Quando la risultante di una riduzione è una sequenza vuota, si dice che essa è collassata

**RAMO DESTRO**: Dato un triangolo di un flatland, la sequenza di tutti i triangoli ad esso successivi sono un ramo destro

**RAMO SINISTRO**: Dato un triangolo di un flatland, la sequenza di tutti i triangoli ad esso precedenti sono un ramo sinistro

**SOLUZIONI DI UN FLATLAND**: Dato un flatland, si dicono soluzioni tutti i triangoli appartenenti ad esso tali che siano la risultante di almeno una delle possibili riduzioni applicabili a quel flatland

## LEMMA DELL'INDIPENDENZA

Date due sottosequenze, la non adiacenza, ovvero il fatto di non avere estremi adiacenti, è condizione sufficiente perchè siano indipendenti fra loro

Infatti l'unica selezione non interna ad una sottosequenza può essere quella di un estremo, se esso ha il valore giusto. Da una selezione di quel tipo si può modificare un elemento adiacente alla sottosequenza, quindi nessun triangolo dell'altra sottosequenza è modificabile da una selezione di un triangolo della sottosequenza se essa non è adiacente

## TEOREMA DEI DUE RAMI

### ENUNCIATO

Dato un triangolo `?` appartenente ad un flatland, esso è soluzione del flatland se e solo se esiste una riduzione interna al suo ramo destro che lo faccia collassare ed esiste una riduzione interna al suo ramo sinistro che lo faccia collassare

### DIMOSTRAZIONE

1. Se i due rami possono collassare allora il triangolo `?` è soluzione del flatland, infatti se i due rami collassano, tutti gli elementi precedenti ad `O` e tutti i suoi successivi non appartengono più al flatland e quindi `?` è l'unico elemento rimasto

2. Se `?` rimane come ultimo elemento, allora i due rami destro e sinistro di `?` sono collassati, perchè essi non appartengono più al flatland. Per il LEMMA DELL'INDIPENDENZA, i due rami destro e sinistro sono indipendenti, quindi l'unico modo per farli collassare è tramite riduzioni interne ad essi

*C.V.D.*

## LEMMA DEL NON COLLASSAMENTO

Una sottosequenza di lunghezza N dispari di triangoli non può collassare tramite una riduzione interna. Inoltre esiste sempre una riduzione interna applicabile ad essa

Infatti:

- N = 1

    Quindi è già ridotta ad un unico triangolo e non può collassare

- N ≥ 3

    N > 2, quindi c'è almeno un elemento che non è nè il primo nè l'ultimo della sottosequenza
    Allora selezionando quell'elemento, non essendo nè il primo nè l'ultimo, verrano rimossi due elementi dalla sottosequenza. Quindi dopo una selezione, la sequenza avrà ancora una lunghezza dispari. Continuando a selezionare in questo modo finchè N ≥ 3, si otterà una sequenza con un unico elemento

## TEOREMA DELLA POSIZIONE PARI

### ENUNCIATO

Dato un triangolo `?` appartenente ad un flatland, condizione necessaria affinchè `?` sia soluzione del flatland è che `?` sia in posizione pari

### DIMOSTRAZIONE

Se `?` è in posizione dispari, allora entrambi i suoi rami destro e sinistro hanno lunghezza dispari, quindi per il LEMMA DEL NON COLLASSAMENTO non possono collassare e per il TEOREMA DEI DUE RAMI `?` non può essere soluzione del flatland

Quindi se `?` è soluzione del flatland, non può che essere in posizione pari

## TEOREMA DEL RAMO DESTRO

### ENUNCIATO

Dato il ramo destro di un triangolo in posizione pari `O`, esso può collassare se e solo se si verifica una delle seguenti condizioni:

- Il ramo inizia con `>`
- Esiste almeno un triangolo in posizione pari `<` seguito da un triangolo `>`

### ESEMPI

- `> < < < <`&nbsp;&nbsp;**`> < < < < <`**

    Considerando l'elemento in posizione 4, si ha il ramo destro

    **`>`**&nbsp;&nbsp;`< < < < <`

    Esso inizia con `>`, quindi il ramo può collassare

- `> > < < <`&nbsp;&nbsp;**`< < > < > <`**

    Considerando l'elemento in posizione 4, si ha il ramo destro

    `<`&nbsp;&nbsp;**`< >`&nbsp;&nbsp;**`< > <`

    Partendo dalla posizione pari 6, vedo che c'è una coppia `<`&nbsp;`>`, quindi il ramo può collassare

- `> > < < <`&nbsp;&nbsp;**`< < < > > <`**

    Considerando l'elemento in posizione 4, si ha il ramo destro

    `< < > > <`

    Esso non inizia con `>` e non ha coppie `<`&nbsp;`>` in posizione pari. Quindi esso non può collassare

### DIMOSTRAZIONE

#### Se almeno una delle due condizioni si verifica, allora il ramo può collassare

Tenendo conto del triangolo che precede il ramo (`O`) e del ramo stesso (`X`), la sequenza è:

`O`&nbsp;&nbsp;**`X`**

in cui `X` ha lunghezza pari

1. Se inizia con `>`, allora il ramo collassa

    Infatti per ipotesi la sequenza si può scrivere come

    `O >`&nbsp;&nbsp;**`Y`**

    essendo `Y` di lunghezza dispari, per il LEMMA DEL NON COLLASSAMENTO, esso può collassare in un elemento `?`.

    Quindi ottengo

    `O`&nbsp;&nbsp;**`> ?`**

    L'unico elemento selezionabile è quello in mezzo, quindi infine ottengo

    `O`

    E' rimasto solo `O`, mentre il ramo destro è collassato

2. Se in una posizione pari trovo la coppia `< >`, allora il ramo collassa

    Per ipotesi la sequenza si può scrivere come

    `O`&nbsp;&nbsp;**`X`**&nbsp;&nbsp;`< >`&nbsp;&nbsp;**`Y`**

    in cui sia `X` che `Y` hanno lunghezza dispari.

    Per il LEMMA DEL NON COLLASSAMENTO, essi collassano in un unico triangolo `?`

    Quindi ottengo

    `O`&nbsp;&nbsp;**`?`**&nbsp;&nbsp;`< >`&nbsp;&nbsp;**`?`**

    Posso selezionare entrambi i triangoli della coppia `< >`, eliminando i due `?`

    Quindi ottengo

    `O`

    E' rimasto solo `O`, mentre il ramo destro è collassato

#### Se il ramo può collassare, allora almeno una delle due condizioni si verifica

Equivalentemente, dimostro che se nessuna delle due condizioni si verifica, allora il ramo non può collassare

La sequenza del triangolo che precede il ramo (`O`) e del ramo stesso `Y` si può scrivere come

`O`&nbsp;&nbsp;**`Y`**

Per ipotesi, il primo triangolo del ramo destro non può essere `>`, quindi è `<`. Considerando anche la testa del flatland `T`, la sequenza si può scrivere come

`O < X T`

Noto che:

- Se il primo triangolo di `X` (che è in posizione pari) ha valore `<`, per ipotesi anche il secondo triangolo deve avere valore `<`. Selezionando quindi il primo triangolo, si ottiene quindi

    `O < X' T`

    In cui `X'` o è voto perchè `X` aveva solo due elementi o è una sequenza con le stesse proprietà di `X` solo che con due elementi in meno, quindi ci si riconduce in un caso analogo a quello precedente

- Se l'ultimo triangolo di `X` (che è in posizione dispari) ha valore `>`, per ipotesi anche il penultimo triangolo deve avere valore `>`.     Selezionandone quindi l'ultimo triangolo, si ottiene quindi

    `O < X' >`

    Il nuovo ultimo elemento diventa la testa, quindi

    `O < X' T`

    In cui `X'` o è voto perchè `X` aveva solo due elementi o è una sequenza con le stesse proprietà di `X` solo che con due elementi in meno, quindi ci si riconduce in un caso analogo a quello precedente

- Noto che `X` non può essere modificato in alcun modo selezionando elementi ad esso esterno. Infatti `T` non si può selezionare perchè è la testa del flatland mentre `O` non si può selezionare perchè esterno al ramo. Quindi `X` si può modificare solo tramite selezioni interne

Si può quindi supporre che si possano fare solo selezioni interne ad `X`, perchè nel caso se ne faccia una non interna, ci si riconduce ad un caso analogo

Se `X` collassa, ottengo

`O < T`

Potendo selezionare solo `<`, non si può che finire per ottenere

`T`

`O`&nbsp;&nbsp;non è rimasto ed il ramo non può collassare

Per dimostrare il teorema basta quindi dimostrare che `X` collassa sempre

Noto che `X` comincia con un elemento in posizione pari `P` e finisce con un elemento in posizione dispari `D`, quindi si può scrivere come una sequenza di questo tipo

`P D P D P D P D P D P D P D P D`

Per ipotesi nessuna coppia `PD` può essere `< >`

Ad ogni passo di una riduzione interna, posso selezionare:

- Un triangolo `P`, che può avere i valori `>` e `<`

    - Se è `>`, allora verrà rimosso assieme al suo successivo `D`, quindi verrà rimossa una coppia `PD` e non verranno generate coppie `PD` con valore `< >`

    - Se è `<`, allora verrà rimosso assieme al suo precedente `D`. Si otterrà quindi o il collassamento di `X` o una nuova coppia `P'D'` formata da `P'`, precedente del `D` eliminato e da `D'`, successivo del `P` eliminato. Siccome per ipotesi non esistevano coppie `PD` di valore `< >`, essendo il `P`selezionato di valore `<`, allora il suo successivo `D'` non poteva assumere come valore `>`, quindi la nuova coppia `P'D'` si può scrivere come `? <` e non può essere `< >`. Quindi anche in questo caso non vengono generate nuove coppie `PD` con valore `< >`

        `P D P`&nbsp;&nbsp;**`D <`**&nbsp;&nbsp;`< P D P D P D P D P D`

        `P D`&nbsp;&nbsp;**`P <`**&nbsp;&nbsp;`P D P D P D P D P D`

- Un triangolo `D`, che può avere i valori `>` e `<`

    Con un ragionamento analogo, si dimostra che per ognuna di queste selezioni non si genera nessuna coppia `PD` con valore `< >`

Continuando a selezionare elementi, si arriverà ad un punto in cui si avrà una sola coppia di elementi `PD`, che non potrà avere valori `< >` e quindi non potrà fare altro che collassare

Quindi `X` può solo collassare ed il teorema è dimostrato

*C.V.D.*

## TEOREMA DEL RAMO SINISTRO

### ENUNCIATO

Dato un ramo sinistro di un triangolo in posizione pari `O`, esso può collassare se e solo se si verifica una delle seguenti condizioni:

- Il ramo finisce con `<`
- Esiste almeno un elemento in posizione pari `<` seguito da un elemento `>`

### DIMOSTRAZIONE

Analoga a quella del TEOREMA DEL RAMO DESTRO

# Un inganno

A dire il vero ero riuscito a prendere il punteggio pieno ancora prima di trovare la soluzione O(N²), grazie ad un piccolo inganno, uno stratagemma furbo o stupido (dipende dai punti di vista) passatomi da un altro compagno di corso di cui il correttore automatico non può accorgersi.

L'idea si basa su un fatto **probabilistico** ed è piuttosto banale:

* C'è un for che viene eseguito un po' più di N² volte: questo numero è tirato a caso e deriva da vari tentativi

* Ad ogni ciclo di questo for c'è un while: viene creata una copia dell'input e finchè non rimane solo un elemento, viene selezionato a caso un elemento dell'insieme e rimosso assieme a quello che punta.

* L'elemento rimanente viene aggiunto alla soluzione

Per **probabilità**, la soluzione verrà trovata in un tempo **"decente"** per il correttore automatico, che assegna il punteggio massimo anche per le **soluzioni cubiche**.

Il programma, che **non è affatto affidabile o corretto**, viene sottoposto più volte finchè non si ottiene **100 / 100**.

![Inganno results](https://github.com/euberdeveloper/flatland/blob/master/images/inganno_results.png)

Si può trovare nella cartella **c++/inganno** e compilare con `g++ inganno.cpp`.
