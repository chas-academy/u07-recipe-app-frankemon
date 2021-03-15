///////////////////////////////////////////////////////////////////////////////////////////////////

# u07-recipe-app-frankemon
u07-recipe-app-frankemon created by GitHub Classroom

How to get started with my recipe app:



///////////////////////////////////////////////////////////////////////////////////////////////////

Inlämning
Uppgiften ska lämnas in via: 
https://classroom.github.com/a/0a735O_9 (Länkar till en externa sida.)Länkar till en externa sida.
Samt med länk till GitHub i LMS

///////////////////////////////////////////////////////////////////////////////////////////////////

Mål
Som användare ska du:

Kunna få en förslagslista med recept
Kunna filtrera förslagen av recept på måltidstyp och allergener:
Förrätt, huvudrätt eller dessert (minimum, fler måltidstyper får implementeras)
Allergener och dietval (t.ex. gluten, nötter, vegetarian osv.), minst tre ytterligare filtreringar ska finnas med förutom förrätt, huvudrätt och dessert  
Kunna klicka på ett recept för att se dess information (egen route)
Kunna spara recept i en lista (recepten behöver finnas tillgängliga så länge användaren är på webbplatsen, dock ej sparas i t ex localstorage)
Kunna visa sparade recept (egen route)
Kunna ta bort sparade recept ur listan

///////////////////////////////////////////////////////////////////////////////////////////////////

Krav
Frontend måste implementeras i ramverket Angular (version 11)
Nyttja ett externt API för att hämta recept-information vilken visas i applikationen, förslagsvis:
https://developer.edamam.com/edamam-recipe-api (Länkar till en externa sida.)Länkar till en externa sida.
https://www.themealdb.com/api.php (Länkar till en externa sida.)Länkar till en externa sida.
Måste fungera på en mobil enhet, det vill säga målen ovan måste gå att utföra även på en mobil enhet
Denna uppgift har inget krav på backend utan data hämtas från externt api, men  filtreringar och sparade recept skall finnas tillgängliga i applikationen under tiden användaren använder appen utan att stänga webbläsaren. Den användardata som genereras har inga krav på att sparas efter att användaren lämnar appen.
Extra utmaning
Om du vill påvisa djupare förståelse och kompetens inom Angular kan du även lägga till några eller alla av följande funktioner:

Användaren kan få recept från flera olika källor (API:er)
Användaren kan skapa egna recept
Användaren kan lägga till ingredienser från API
Användaren kan lägga till tillagningsinstruktioner
Vänligen notera
Observera att du inte bedöms på estetik eller design. Prioritera därför inte denna del innan målen för uppgiften är klara. Du bedöms endast på koden och implementation av mål och krav.

///////////////////////////////////////////////////////////////////////////////////////////////////
 
Angående versionshantering på GitHub och API-nycklar i Angular:

TL;DR: spara inte API-nycklar i filer ni versionshanterar

https://javascript.plainenglish.io/setup-dotenv-to-access-environment-variables-in-angular-9-f06c6ffb86c0 (Länkar till en externa sida.)