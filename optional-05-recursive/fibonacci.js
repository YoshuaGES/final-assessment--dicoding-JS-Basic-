function fibonacci(n) {
    // Basis kasus: jika n == 0 atau n == 1
    if (n === 0) {
      return [0];
    } else if (n === 1) {
      return [0, 1];
    }
    // Kasus rekursif: gabungkan hasil fibonacci(n-1) dengan fibonacci(n-2)
    const fib = fibonacci(n - 1);
    fib.push(fib[n - 1] + fib[n - 2]); // Menambahkan elemen Fibonacci yang baru
    return fib;
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;
  