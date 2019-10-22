# FLATLAND

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
| X Y | sequenza di triangoli di lunghezza variabile e valore ignoto |

## DEFINIZIONI

**FLATLAND**: Una sequenza di lunghezza N di triangoli, con N dispari e maggiore di 1

**CODA**: Primo triangolo del flatland

**TESTA**: Ultimo triangolo del flatland

**POSIZIONE**: Dato un flatland, indicizzandone i triangoli partendo da zero, un qualunque triangolo appartenente al flatland si dice che è in posizione pari se il suo indice è pari ed in posizione dispari se il suo indice è dispari

**SELEZIONE**: Quando un triangolo viene selezionato, lui e il triangolo che punta vengono rimossi dal flatland. La coda e la testa non possono essere selezionati

**COLLASSARE**: Quando dopo una serie di selezioni in una sequenza di triangoli non rimangono più triangoli, si dice che essa è collassata

**RAMO DESTRO**: Dato un triangolo in posizione pari di un flatland, la sequenza di tutti i triangoli ad esso successivi sono un ramo destro

**RAMO SINISTRO**: Dato un triangolo in posizione pari di un flatland, la sequenza di tutti i triangoli ad esso precedenti sono un ramo sinistro

## TEOREMA DEI DUE RAMI

### ENUNCIATO

Dato un triangolo in posizione pari `O` appartenente ad un flatland, esiste una sequenza di selezioni che fanno sì che esso rimanga come unico elemento se e solo se esiste una sequenza di selezioni interna al suo ramo destro che lo fa collassare ed esiste una sequenza di selezioni interna al suo ramo sinistro lo fa collassare

### DIMOSTRAZIONE

1. Se i due rami possono collassare allora il triangolo `O` può rimanere come unico elemento, infatti se i due rami collassano, tutti gli elementi precedenti ad `O` e tutti i suoi successivi non appartengono più al flatland e quindi `O` è l'unico elemento rimasto

2. Se `O` rimane come ultimo elemento, allora i due rami destro e sinistro di `O` sono collassati, perchè essi non appartengono più al flatland. Quindi esistono due sequenze di selezioni che possono far collassare i due rami

## LEMMA DEL NON COLLASSAMENTO

Una sottosequenza di lunghezza N dispari di triangoli può sempre ridursi in un unico triangolo.

Infatti:

- N = 1

    Quindi è già ridotta ad un unico triangolo

- N ≥ 3

    N > 2, quindi c'è almeno un elemento che non è nè il primo nè l'ultimo.
    Allora selezionando quell'elemento, non essendo nè il primo nè l'ultimo, verrano rimossi 2 elementi dalla sottosequenza. Quindi dopo una selezione, la sequenza avrà ancora una lunghezza dispari. Continuando a selezionare in questo modo finchè N ≥ 3, si otterà una sequenza con un unico elemento

Se non inizia per `<` o non ha triangoli precedenti e non finisce per `>` o non ha triangoli successivi, si riduce sempre in un unico triangolo

Infatti:

- Se non inizia per `<`, anche selezionando il primo triangolo verranno rimossi due elementi dalla sottosequenza

- Se non ha precedenti è la coda di un flatland e non può essere selezionato

- Se non finisce per `>`, anche selezionando l'ultimo triangolo verranno rimossi due elementi dalla sottosequenza

- Se non ha successivi è la testa di un flatland e non può essere selezionato

## TEOREMA DELLA POSIZIONE PARI

### ENUNCIATO

Dato un triangolo `?` appartenente ad un flatland, esiste una sequenza di selezioni che fanno sì che `?` rimanga come unico elemento se e solo se `?` è in posizione pari

### DIMOSTRAZIONE

Se `?` è in posizione dispari, per il TEOREMA DEI DUE RAMI esiste una sequenza di selezioni che può far sì che `?` rimanga come ultimo elemento se e solo se i suoi rami destro e sinistro possono collassare. 

Se `?` è in posizione dispari, allora entrambi i suoi rami destro e sinistro hanno lunghezza dispari, quindi per il LEMMA DEL NON COLLASSAMENTO non possono collassare.

Quindi se `?` rimane come unico elemento `?` non può che essere in posizione pari

## TEOREMA DEL RAMO DESTRO

### ENUNCIATO

Dato un ramo destro di un triangolo in posizione pari `O`, esso può collassare se e solo se si verifica una delle seguenti condizioni:

* Il ramo inizia con `>`
* Esiste almeno un elemento in posizione pari `<` seguito da un elemento `>`

### ESEMPI

* `> < < < < > < < < < <` Considerando l'elemento in posizione 4, si ha il ramo destro `> < < < < <`. Esso inizia con `>`, quindi il ramo può collassare

* `> > < < < < < > < > <` Considerando l'elemento in posizione 4, si ha il ramo destro `< < > < > <`. Partendo dalla posizione pari 6, vedo che c'è una coppia `<>`, quindi il ramo può collassare

* `> > < < < < < < > > <` Considerando l'elemento in posizione 4, si ha il ramo destro `< < > > <`. Esso non inizia con `>` e non ha coppie `<>` in posizione pari. Quindi esso non può collassare

### DIMOSTRAZIONE

#### Se almeno una delle due condizioni si verifica, allora il ramo può collassare

Tenendo conto del triangolo a sinistra del ramo e del ramo stesso, la sequenza è:

`O X`

in cui `X` ha lunghezza pari

1. Se inizia con `>`, allora il ramo collassa

    Infatti per ipotesi la sequenza si può scrivere come

    `O > Y`

    essendo `Y` di lunghezza dispari, per il LEMMA DEL NON COLLASSAMENTO, esso può collassare in un elemento `?`.

    Quindi ottengo

    `O > ?`

    L'unico elemento selezionabile è quello in mezzo, quindi infine ottengo

    `O`

    E' rimasto solo `O`, mentre il ramo destro è collassato

2. Se in una posizione pari trovo la coppia `< >`, allora il ramo collassa

    Per ipotesi la sequenza si può scrivere come

    `O X < > Y`

    in cui sia `X` che `Y` hanno lunghezza dispari.

    Per il LEMMA DEL NON COLLASSAMENTO, essi collassano in un unico triangolo `?`

    Quindi ottengo

    `O ? < > ?`

    Posso selezionare entrambi i triangoli della coppia `< >`, eliminando i due `?`

    Quindi ottengo

    `O`

    E' rimasto solo `O`, mentre il ramo destro è collassato

C.V.D.

#### Se il ramo può collassare, allora almeno una delle due condizioni si verifica

Equivalentemente, dimostro che se nessuna delle due condizioni si verifica, allora il ramo non può collassare

Per ipotesi, il primo elemento del ramo destro non può essere `>`, quindi è `<`.

Allora la sequenza del triangolo che precede il ramo e del ramo stesso si può scrivere come

`O < X T`

Dove `T` è la testa del flatland e X ha lunghezza pari

Noto che `X` non può essere modificato in alcun modo selezionando elementi ad esso esterno. Infatti `T` non si può selezionare perchè è la testa del flatland mentre `O` non si può selezionare perchè esterno al ramo.

Se `X` collassa, ottengo

`O < T`

Potendo selezionare solo `<`, non si può che finire per ottenere

`T`

`O` non è rimasto ed il ramo non è collassare

Per dimostrare il teorema basta quindi dimostrare che `X` collassa sempre

Noto che `X` comincia con un elemento in posizione pari `P` e finisce con un elemento in posizione dispari `D`, sarà una sequenza come ad esempio

`P D P D P D P D P D`

Per ipotesi nessuna coppia `PD` può essere `<>`

Ad ogni selezione posso selezionare

* Un triangolo `P`, che può avere i valori `>` e `<`

    * Se è `>`, allora verrà rimosso assieme al suo successivo `D`, quindi verrà rimossa una coppia `PD` e la sequenza rimmarrà priva di coppie `PD` con valore `<>`

    * Se è `<`, allora verrà rimosso assieme al suo precedente `D`. Si otterrà quindi o il collassamento di `X` o una nuova coppia `P'D'` formata da `P'`, precedente del `D` eliminato e da `D'`, successivo del `P` eliminato. Siccome per ipotesi non esistevano coppie `PD` di valore `<>`, essendo il `P`selezionato di valore `<`, allora il suo successivo `D'` non poteva assumere come valore `>`, quindi la nuova coppia `P'D'` si può scrivere come `?<` e non può essere `<>`. Quindi anche in questo caso la selezione non genererà nuove coppie `PD` con valore `<>`

* Un triangolo `D`, che può avere i valori `>` e `<`

    Con un ragionamento analogo, si dimostra che per ognuna di queste selezioni non si genera nessuna coppia `PD` con valore `<>`

Continuando a selezionare elementi, arriverà ad un punto in cui ho una sola coppia di elementi `PD`, che non potrà avere valori `<>` e quindi non potrà fare altro che collassare

Quindi `X` può solo collassare ed il teorema è dimostrato

*C.V.D.*

## TEOREMA DEL RAMO SINISTRO

### ENUNCIATO

Dato un ramo sinistro di un triangolo in posizione pari `O`, esso può collassare se e solo se si verifica una delle seguenti condizioni:

* Il ramo finisce con `<`
* Esiste almeno un elemento in posizione pari `<` seguito da un elemento `>`

### DIMOSTRAZIONE

Analoga a quella del TEOREMA DEL RAMO DESTRO

