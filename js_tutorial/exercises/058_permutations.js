//58. Permutations in which n people can occupy r seats in a theatre

const permutation = (people ,seats) => {
    let factorialForPeople = 1;
    let factorialForSeats = 1;
    for (let i = 1; i <= people; i++) {
        factorialForPeople = i * factorialForPeople;
    }
    for (let j = 1; j <= (people - seats); j++) {
        factorialForSeats = j * factorialForSeats;
    } 
    console.log(`${people} people for ${seats} seats can occupy ${seatsOccupied  = factorialForPeople/factorialForSeats} seats`);
}

permutation(9 ,4);

/*Output:

9 people for 4 seats can occupy 3024 seats*/