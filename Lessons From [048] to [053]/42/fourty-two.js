let start = 1;
let end = 6;
let breaker = 2;

for(i=start; i<=end; i++){
    console.log(i)
    for(j=breaker; j<=breaker*breaker; j+=breaker ){
        console.log(`-- ${j}`)
    }
}