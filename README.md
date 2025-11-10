# Cathrine's Plugin

---
## Images

![Cathrines plugin](/img/cathrines_plugin.png "billede af Cathrines plugin")

**Plugin URI**:
https://portfolie.kjeldahldesign.com/plugin-side/
## Formålet med plugin’et


>Formålet med mit plugin er at give brugeren mulighed for at vise dynamisk indhold på en side via en shortcode. Pluginet viser en flot animeret popup-boks på WordPress-siden med et billede, tekst og en CTA-knap. Formålet er at fange brugerens opmærksomhed og lede dem videre til den udarbejdede side. Billedet har jeg selv produceret i Adobe Illustrator og givet en zoom-out-effekt ved hjælp af CSS.

---

## Hvordan mit plugin er opbygget
Mit plugin bruger en kombination af HTML, CSS, JAVASCRIPT og PHP:  

- **HTML**: Popup-boksen genereres via PHP-funktionen `bellis_popup_box()`. Den indeholder overskrift, billede, tekst, en luk-knap og en handlingsknap.  
- **CSS**: Styling og animationer ligger i `style.css`. Her styres popup-boxens placering, farver, skygger og rundede hjørner. Her er der også tilføjet en zoom-animation på billedet og glidende bevægelser (slide-top/slide-down) der gør at mit plugin ikke bare "popper" ud af ingenting, men slider fint ned fra toppen og slider pænt ud samme vej.  
- **JS**: `script.js` snakker sammen med ´styles.css´. i css'en indsætter jeg kode der beskriver hvordan animationerne og knapper skal virker og JavaScript bestemmer hvornår animationer skal gå i gang. 
- **PHP**:  
Denne PHP-fil er kernen i mit plugin. Den tilføjer de nødvendige CSS- og JavaScript-filer til siden, og genererer HTML-strukturen for popup-boksen via PHP-funktionen bellis_popup_box(). HTML indsættes på denne måde, fordi det gør det muligt at placere popup’en dynamisk hvor som helst på siden ved hjælp af shortcode [bellis_popup], uden at skulle skrive HTML direkte i hver side eller indlæg. 
---


## Shortcode

Pluginet aktiveres ved at indsætte shortcoden på en side i WordPress.  
Shortcoden er defineret i **index.php** og registreres med funktionen `add_shortcode()`.

### Shortcode til at sætte i WordPress
```plaintext
[bellis_popup]
```


## Filstruktur:
```plaintext
/cathrines_plugin
│
├── index.php          // Hovedfilen der registrerer plugin’et
├── assets/
│  ├── style.css          // Styling
│  └── script.js          // JavaScript-funktioner
│
├──README.md

```

## Validering af CSS
Jeg har udført valideringen ved hjælp af W3C’s Jigsaw Validator (https://jigsaw.w3.org/) 
Resultatet af valideringen fremgår på nedenstående screenshot.

![plugin validering ](/img/validering.png "billede af Cathrines validering af plugin")

## Validering af Javascript
Jeg har valideret mit JavaScript via konsollen i Google Chrome. Det betyder, at jeg har testet koden direkte i browserens udviklerværktøjer for at sikre, at der ikke opstår fejl eller advarsler, når scriptet kører. Valideringen bekræfter, at JavaScript-koden fungerer som forventet uden syntaksfejl, og at interaktionerne på siden udføres korrekt.


## Brug af AI
Jeg har gjordt brug afChatGPT til at hjælpe med at skabe den pulserende effekt på mit billede i mit plugin. Jeg beskrev mit ønske i en promten: *"Giv mig et eksempel på hvordan jeg kan skabe en pulserende effekt på en png i css"*. Derefter ændrede jeg blandt andet hastigheden så den passede helt perfekt til min side

