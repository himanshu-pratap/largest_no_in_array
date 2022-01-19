const A= [2,5,33,26,79];

const largest=(item) => {
    let max=0;
    for(let i=0; i<A.length; i++) {
        if(item[i]>max) {
            max=item[i];
        }
    }
    return max;
}
console.log(largest(A));
