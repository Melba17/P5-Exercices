function add(num1, num2) {
    if (num1 === undefined && num2 === undefined) {
        return 0;  // Retourne 0 si 'num1' et 'num2' sont indéfinis. 
        // Selon les besoins, ils peuvent être définis au moment de l'appel/activation de la fonction.
    } else if (num2 === undefined) {
        return Number(num1);  // Retourne la valeur numérique de 'num1' si c'est une chaîne de caractère entre '' et si 'num2' est indéfini.
    } else {
        return Number(num1) + Number(num2);  // Convertit 'num1' et 'num2' en nombres si ce sont des chaînes caractères et retourne leur somme.
    }
}

 export default add;
