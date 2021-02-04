# JAVASCRIPT IN DE FRONTEND

## Goals

- Wat is de DOM?
- Wat kan je ermee
  - Interactieve pagina maken! (gebruikers klikken op dingen)
  - Dynamische pagina's maken (andere content weergeven afhankelijk van de gebruiker)
- Welke methods heeft de dom
  - `document.getElementById` -> selecteer 1 enkel element op basis van id
  - `document.getElementsByClassName` -> selecteer meerdere elementen op basis van class
  - `document.addEventListener` ->
    - Laat de browser luisteren naar een event (vaak gebruikers interactie)
    - Je kan een functie meegeven die wordt uitgevoerd zodra de gebruiker iets doet
  - `document.createElement` -> maak element (niet te zien)
  - `document.appendChild` -> plak element op de pagina (nu wel te zien)
  - `document.setAttribute` -> een attribuut toevoegen (class, id, type)
  - `document.removeAttribute`
- Properties van elementen
  - `textContent` -> kan je veranderen met javascript
- Bonus
  - element.remove() -> haal een element weg
  - kleurtjes toevoegen / veranderen
    - class toevoegen -> in css class definieren
    - direct met JS -> element.style.backgroundColor = "orange"
