# Sancho Tap Tap

Jeu web local pour enfant: on tape partout, des emojis apparaissent, avec un mode kiosque simple pour Raspberry ou vieux laptop.

## Lancer en local

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Ce que fait l'app

- fonctionne a la souris, au tactile, au clavier et a la manette
- passe en plein ecran quand on lance la partie
- propose un retour parent protege
- garde les emojis en local dans `assets/twemoji`
- fonctionne offline une fois chargee via le service worker

## Commandes utiles

- retour parent clavier: `Shift + M`
- retour parent manette: `LB + RB + Start`
- les touches systeme sont ignorees quand le navigateur les transmet, mais la touche Super/Windows ne peut pas etre bloquee de facon fiable depuis une page web. Pour une vraie borne, il faut aussi la desactiver cote OS ou configuration kiosque.

## Reglages memorises

Le navigateur garde automatiquement:

- minuteur
- univers
- rythme
- son

## Rythmes enfant

- `doux`: animations plus calmes, effets plus espaces
- `normal`: comportement classique
- `fete`: rythme plus dense et effets plus presents

## Univers

- `surprise`: melange de tous les emojis
- `animaux`: animaux et effets adaptes
- `bolides`: vehicules et parades
- `magie`: etoiles, lunes, licornes et effets doux

## Son

Le son est coupe par defaut. Le mode `doux` ajoute de petits sons courts sur les taps et les grands moments.

## Performance

Le mode de performance se choisit automatiquement selon la machine.

- machine recente: rendu complet
- machine faible / Raspberry: rendu allégé automatiquement

## Installer en PWA

### Chromium / Chrome / Edge

1. Ouvrir `http://localhost:8000`
2. Attendre que la page soit chargee une premiere fois
3. Ouvrir le menu du navigateur
4. Choisir `Installer Sancho Tap Tap` ou `Installer l'application`

La meme chose fonctionne aussi depuis un deploiement GitHub Pages, tant que le navigateur detecte bien la PWA.

### Android Chrome

1. Ouvrir le site
2. Menu navigateur
3. `Ajouter a l'ecran d'accueil`

### iPhone / iPad Safari

1. Ouvrir le site dans Safari
2. Bouton `Partager`
3. `Sur l'ecran d'accueil`

## Raspberry Pi

Pour un vrai usage borne, le plus simple est Chromium en kiosque:

```bash
chromium --kiosk --app=http://localhost:8000
```

Sur Raspberry Pi 3B, l'app bascule automatiquement sur un rendu plus leger si la machine est limitee.

## Notes techniques

- aucun framework ni dependance
- manifest PWA present
- service worker present
- fond change selon le contexte de jeu
