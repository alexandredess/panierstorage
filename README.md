# 🛒 Panier d'Achat - PC Gamer MSI

## 📋 Description

Ce projet est une application web de vente de PC gamer permettant aux utilisateurs de :
- Visualiser un produit avec un carousel d'images
- Sélectionner une quantité à acheter
- Ajouter le produit au panier
- Consulter le récapitulatif du panier avec le calcul automatique du total

## 🛠️ Technologies Utilisées

- **HTML5** - Structure des pages
- **CSS3** - Styles personnalisés
- **JavaScript ES6** - Logique métier et interactions
- **Bootstrap 5.3.2** - Framework CSS pour le design responsive
- **localStorage** - Stockage local des données du panier

## 📁 Structure du Projet

```
Exo Panier/
├── index.html          # Page principale de présentation du produit
├── Panier.html         # Page du panier d'achat
├── README.md           # Documentation du projet
├── css/
│   └── style.css       # Styles personnalisés
├── js/
│   ├── script.js       # Logique de la page produit
│   └── panier.js       # Logique de la page panier
└── media/
    ├── pc1.webp        # Images du produit
    ├── pc2.webp
    ├── pc3.webp
    ├── pc4.webp
    ├── pc5.webp
    └── pc6.webp
```

## 🚀 Fonctionnalités

### Page Produit (`index.html`)
- **Carousel d'images** : Affichage rotatif des images du produit
- **Sélection de quantité** : Input permettant de choisir le nombre d'articles
- **Validation du panier** : Bouton pour ajouter au panier
- **Navigation** : Lien vers la page panier

### Page Panier (`Panier.html`)
- **Récapitulatif produit** : Affichage des informations du produit
- **Quantité sélectionnée** : Récupération depuis le localStorage
- **Calcul automatique** : Prix total = Quantité × Prix unitaire
- **Bouton d'achat** : Finalisation de la commande

## 💻 Installation et Utilisation

1. **Cloner ou télécharger le projet**
   ```bash
   git clone [URL_DU_REPO]
   ```

2. **Ouvrir le projet**
   - Naviguer vers le dossier du projet
   - Ouvrir `index.html` dans un navigateur web

3. **Utilisation**
   - Parcourir les images du produit avec le carousel
   - Saisir la quantité désirée
   - Cliquer sur "Valider le panier"
   - Consulter le récapitulatif sur la page panier

## 📊 Produit Présenté

**PC Gamer MSI MEG Vision X AI 2NVZ9-060FR**
- Prix unitaire : 6 999,99 €
- Images haute qualité au format WebP
- Présentation professionnelle avec carousel

## 🔧 Détails Techniques

### JavaScript - Fonctionnalités Principales

#### `script.js` - Gestion de la page produit
- Récupération de l'élément input quantité
- Gestion de l'événement clic sur validation
- Sauvegarde dans localStorage
- Prévention du rechargement de page

#### `panier.js` - Gestion de la page panier
- Récupération des données depuis localStorage
- Calcul du prix total
- Mise à jour dynamique du DOM
- Affichage formaté avec devise

### CSS - Styles Personnalisés
- Navigation responsive avec hauteur minimum
- Images redimensionnées automatiquement
- Bouton centré pour l'achat
- Intégration avec Bootstrap

## 🐛 Problèmes Connus

⚠️ **Erreurs de variables détectées :**
- Dans `script.js` : `quant` utilisé au lieu de `quantity`
- Dans `panier.js` : `quant` utilisé au lieu de `quantity`
- Ces erreurs peuvent causer des dysfonctionnements dans les console.log

## 🔄 Améliorations Possibles

- [ ] Correction des erreurs de variables
- [ ] Ajout de validation des données saisies
- [ ] Gestion de plusieurs produits
- [ ] Sauvegarde persistante en base de données
- [ ] Système de gestion des stocks
- [ ] Interface d'administration
- [ ] Système de paiement intégré

## 📱 Compatibilité

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Responsive design pour mobiles et tablettes

## 📄 Licence

Ce projet est à des fins éducatives et de démonstration.

## 👥 Contributeurs

- Développeur principal : [Votre nom]
- Framework : Bootstrap Team
- Design : Interface moderne et responsive

---

*Dernière mise à jour : Juillet 2025*
