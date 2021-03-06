# Hoothoot
[![Het gerealiseerde eindproduct op desktop](https://hoothoot.css-art.nl/img/hoothoot.png)](https://hoothoot.css-art.nl/video/promo.mp4) 
<i>Klik op de video hierboven voor een demo!</i>

Hoothoot voor de lol nagemaakt in HTML en CSS. Met interactie wanneer je op Hoothoot klikt.  Hoothoot is gemaakt zonder enig winstoogmerk.

<b>Alle rechten van Hoothoot en andere Pokémon behoren tot de rechtmatige eigenaars.</b>
<b>All rights of Hoothoot and other Pokémon belong to the rightfull owners. </b>

## Intro
Bij het vak "Flex CSS-Art" leren studenten van de opleiding Software Developer op het Mediacollege (Ma) kleine kunstwerkjes maken met HTML en CSS. In week 6 (6e les) leren studenten één van mijn favoriete Pokémon, Hoothoot, maken. In eerste instantie met een animatie die afspeelt wanneer je over Hoothoot "hovered". Voor de studenten die wat extra willen is er een animatie gerealiseerd die aan- en uitgezet kan worden door op het figure te klikken. Dit allemaal in HTML en CSS. Het afspelen van de audio gebeurd in Javascript (ook extra).

## Dingen die ik heb geleerd
1. Opnieuw gebruik gemaakt van een checkbox en label voor het aan en uitzetten van een transitie. 
2. Opnieuw een label over een figure heengezet met position absolute voor het aan en uitzetten van een checkbox (en daarbij een click-effect simuleren).
3. Hoe je met clip-path een complexere vorm kan uitsnijden.
4. Hoe een hele kleine blur, bijvoorbeeld 1px, een kleur meer kan lijken op een vacht (door de blur).
5. Hoe een kleine border-bottom op een circle, zonder andere borders, op een ooglid lijkt.
6. Hoe je met een transition-delay beter op een muziekje kan aansluiten, zoals bij Hoothoot zijn/haar "cry".
7. Dat -webkit- nodig is voor clip-path voor safari.
8. Dat en container met fixed height en width (.hoothoot in mijn geval) ervoor kan zorgen dat de responsiviteit breekt. Dit heb ik nu meerdere malen meegemaakt met het programmeren van CSS-Art. Een auto height en width is vele malen beter. 
9. Niet echt "geleerd" maar wel opnieuw gemerkt hoe makkelijk CSS variables zijn om dingen aan te passen. Binnen een paar seconden was Hoothoot omgetoverd naar zijn shiny variant.
10. Geleerd hoe je met een kleine gradient met transparantie een gaaf "dof" effect kan geven. Zie de clip-path figuren op hoothoot zijn wenkbrauwen!
11. Geleerd dat de Safari Browser (zucht...) geen %-teken in scale() accepteert waardoor de scale niet werkte.
12. Geleerd dat je voor de Safari Browser naast appereance: none ook andere properties moet gebruiken om een checkbox weg te halen. Width en Height dienen op 0 gezet te worden om het te laten werken op Safari browsers. Getest op Iphone 7, Safari.

## Screenshots
Verschillende screenshots van Hoothoot op desktop. Ook heb ik de <i>shiny</i> variant van Hoothoot toegevoegd!

### Hoothoot
![Het gerealiseerde eindproduct op desktop: Hoothoot met animatie, gerealiseerd in HTML, CSS en Javascript](https://hoothoot.css-art.nl/img/hoothoot.png "Hoothoot wakker")

![Het gerealiseerde eindproduct op desktop: Hoothoot met animatie, gerealiseerd in HTML, CSS en Javascript. Hij/Zij slaapt op deze foto!](https://hoothoot.css-art.nl/img/hoothoot--sleeping.png "Hoothoot slapend")

### Shiny Hoothoot
![Het gerealiseerde eindproduct op desktop: Shiny Hoothoot met animatie, gerealiseerd in HTML, CSS en Javascript](https://hoothoot.css-art.nl/img/hoothoot--shiny.png "Shiny Hoothoot wakker")

![Het gerealiseerde eindproduct op desktop: Shiny Hoothoot met animatie, gerealiseerd in HTML, CSS en Javascript. Hij/Zij slaapt op deze foto!](https://hoothoot.css-art.nl/img/hoothoot--shiny-sleeping.png "Shiny Hoothoot slapend")

## Live demo
https://hoothoot.css-art.nl

## Resources
1. W3C-validator, voor het checken van mijn code => https://validator.w3.org/
2. Afbeelding gemaakt ter inspiratie voor Hoothoot => https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.geekno.com%2Fwp-content%2Fuploads%2F2017%2F02%2Fhoothoot.png&f=1&nofb=1 
3. OpenGraph, een site voor het makkelijk genereren van Open Graph Protocol (OGP) meta-tags => https://opengraph.xyz
4. Video geconverteerd naar MP3 voor het afspelen van Hoothoot zijn/haar "cry" => https://www.youtube.com/watch?v=0V-YC7Ty1FM
5. Dé site voor alle informatie over welke Pokémon dan ook. In dit geval Hoothoot => https://bulbapedia.bulbagarden.net/wiki/Hoothoot_(Pok%C3%A9mon) 
6. Dé applicatie voor het testen van je code op oudere en andere browsers => https://browserstack.com 