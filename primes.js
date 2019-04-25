function sortPrime(q) {
    var prime1 = [], prime2 = [];
    
    for ( var i = 0; i <= q; i++) {
        prime2.push(true);
    }
    for (var i = 2; i <= q; i++) {
        if (prime2[i]){
            prime1.push(i);
            for (var j = 1; i * j <= q; j++) {
                prime2[i * j] = false;
            }
        }
    }
    return prime1;
}

document.write(sortPrime(2000000));