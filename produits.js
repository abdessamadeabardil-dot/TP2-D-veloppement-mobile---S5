const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];
console.log("Catalogue des produits :");
for (const p of produits) {
  console.log(`${p.nom} - ${p.prix} MAD`);
}
const prod_dis = produits.filter((p) => {
  return p.stock > 0;
});
console.log("Produits disponibles :", prod_dis.length);
const valeurStock = produits.reduce((total, p) => {
  return total + p.prix * p.stock;
}, 0);
console.log("Valeur totale du stock :", valeurStock, "MAD");
if (prod_dis.length > 0) {
  const produitMoinsCher = prod_dis.reduce((moinsCher, p) => {
    return p.prix < moinsCher.prix ? p : moinsCher;
  });
  console.log("Produit disponible le moins cher :", produitMoinsCher.nom,"-",produitMoinsCher.prix,"MAD");
} else {
  console.log("Aucun produit disponible.");
}
const lignes = produits.map((p) => {
  return `${p.nom} - ${p.prix} MAD - ${p.stock} unités`;
});
console.log("Résumé des produits :");
for (const ligne of lignes) {
  console.log(ligne);
}