const order = {};

if (order.customer?.address) {
  console.log('City is required');
}



/*const order = {};

if (!order.customer?.address.city) {
  console.log('City is required');
}*/

//Dalla consegna non ho capito se è necessario che effettivamente risulti valido l'if per vrendere corretto l'esercizio
//In ogni caso ho messo la verifica della presenza di ".address" e come commento, la negazione dello stesso.
//Nel primo caso il risultato è analogo a quanto presente nella base in quanto order risulta vuoto e l'if non valido (togliendo la verifica dell' "?." risulta in errore)
//Nel secondo caso l'if risulta vuoto perché si nega il fatto che sia vuoto e la presenza o meno di "?." non sortisce effetti.