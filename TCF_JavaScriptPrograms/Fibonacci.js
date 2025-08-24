function fibonacci(n) {
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i-1] + series[i-2]);
    }
    return series;
}
console.log("Fibonacci Series (10 terms):", fibonacci(10));
