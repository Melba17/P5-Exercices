function printNumbers(n) {
    // Déclare une variable pour stocker la chaîne de résultats.
    let result = '';
    // Boucle for qui itère de 1 jusqu'à n. 
    for (let i = 1; i <= n; i++) { 
        // Convertit le nombre en chaîne de caractère et l'ajoute à result.
        result += i.toString();
        // Vérifie si i est inférieur à n.
        if (i < n) { 
            // Ajoute un espace à la fin de chaque nombre, sauf pour le dernier.
            result += ' '; 
        }
    }
    // Retourne la chaîne de caractères résultante contenant les nombres séparés par des espaces.
    return result; 
}


export default printNumbers
