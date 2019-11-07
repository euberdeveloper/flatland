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
| X | sequenza di triangoli di lunghezza variabile e valore ignoto |
| Y | sequenza di triangoli di lunghezza variabile e valore ignoto |

## DEFINIZIONI

**TRIANGOLO**: Un oggetto cha può avere valore > (punta a destra) o < (punta a sinistra)

**PRIMO ELEMENTO**: In una sequenza di triangoli, si dice primo elemento il triangolo che non ha precedenti

**SECONDO ELEMENTO**: In una sequenza di triangoli, si dice secondo elemento il triangolo che non ha successivi

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

Dato un triangolo `?` appartenente ad un flatland, esso è soluzione del flatland se e solo se esiste una riduzione interna al suo ramo destro che lo faccia collassare ed esiste una riduzione interna al suo ramo sinistro lo faccia collassare

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

- Se l'ultimo triangolo di `X` (che è in posizione pari) ha valore `>`, per ipotesi anche il penultimo triangolo deve avere valore `>`.     Selezionandone quindi l'ultimo triangolo, si ottiene quindi

    `O < X' >`

    L'ultimo elemento diventa la testa, quindi

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
