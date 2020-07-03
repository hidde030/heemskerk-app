# DOCUMENTATIE

DE OPDRACHT: MEDIADEVELOPMENT VOOR VOETBALTAFEL APP

https://github.com/hidde030/heemskerk-app/
We hebben het opgedeeld in twee delen front/back-end van de app:

Front-end = De native app zelf die de scores laten zien.     
Back-end = Sensoren die registreren wie de goal heeft gemaakt.
Uiteindelijk aan jullie de taak om de output van de sensoren in de app te weergeven de front-end staat er al dus daar hoef je niks mee te doen.
De users worden op geslagen in een firebase database. Het is misschien handig om ook daar de scores in op te slaan omdat de users er al in worden opgeslagen maar, dat is aan jullie.
# FRAMEWORKS
Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
https://docs.expo.io/
Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.
https://firebase.google.com/docs
# CONFIGURATIE APP:
Het is handig om de app te forken dan heb je het in je eigen github repos staan.

## Create a Firebase Project
Maak een nieuw project aan
![alt text](https://cdn.discordapp.com/attachments/689518618274431148/728541483338301481/18ljVirzyESb2-YlcXTs91w.png)
![alt text](https://cdn.discordapp.com/attachments/689518618274431148/728541556855799859/1EY_yx-cFCXC0jGJJAS9-MA.png)
Je wordt doorgestuurd naar het dashboard.    
Klik in het menu aan de linkerkant op het instellingenpictogram en ga vervolgens naar Projectinstellingen.
Kopieer de credentials van de app en zet ze in example.firebaseConfig.js
![alt text](https://cdn.discordapp.com/attachments/689518618274431148/728541890554888233/1BgwacmMBupYjZY-OMnBR5w.png)
Om de verificatiestrategie in te schakelen, gaat je naar het zijbalkmenu naar Authentication> tabblad  Sign-in method  en schakel je de e-mail / wachtwoordstrategie in zoals hieronder weergegeven.
![alt text](https://cdn.discordapp.com/attachments/689518618274431148/728542096235036742/1dLREwBP29Vo5Ea0p5G_YXw.png)
## TERMINAL:
- rename the file `example.firebaseConfig.js` to `firebaseConfig.js`
- en zorg ervoor dat u uw eigen Firebase-configuratie toevoegt in dit bestand:

```js
// Rename this file to "firebaeConfig.js" before use
// Replace all X with real Firebase API keys

export default {
  apiKey: 'XXXX',
  authDomain: 'XXXX',
  databaseURL: 'XXXX',
  projectId: 'XXXX',
  storageBucket: 'XXXX',
  messagingSenderId: 'XXXX',
  appId: 'XXXX'
}
```
```sh
git clone https://github.com/hidde030/heemskerk-app/

npm install -g expo-cli
npm install --save
npm start of expo start
installeer expo op je telefoon.
Scan de barcode op je telefoon
De app laad op je telefoon.

```



# KLANT CONTACTGEGEVENS
Ronald | Heemskerk - Play it!    
email:ronald@playheemskerk.com
Voor eventuele vragen over de app 530643@student.glu.nl