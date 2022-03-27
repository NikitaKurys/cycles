function prime_numbers(n) {
    const seive = []
    const primes = []
    let counter = 0

    for (let i = 2; i <= n * 100; i++){
        if (counter < n){
            if(!seive[i]) {
                counter ++
                primes.push(i);
                for(let j = i * 2; j <= n * 100; j += i){
                    seive[j] = true;
                }
            }
        }
        else{
            break;
        }
    }
    return console.log('Первые', n, 'простых чисел:', primes);
}


prime_numbers(process.argv[2])
