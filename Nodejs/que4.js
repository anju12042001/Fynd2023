let principal = 10000, rate = 5,
        time = 2;
 
    /* Calculate compound interest */
    let A = principal *
        (Math.pow((1 + rate / 100), time));
    let CI = A - principal;
 
    console.log("Compound interest is " + CI);