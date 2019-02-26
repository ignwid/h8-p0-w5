function totalDigitRekursif(angka) {
    // you can only write your code here!
    if(angka < 10){
        return angka
    } else {
        var angkaStr = angka.toString()
        if(angkaStr.length === 1){
            return 0
        } else {
            var firstNum = Number(angkaStr[0])
            var newNum = angkaStr.slice(1)
            return firstNum + totalDigitRekursif(Number(newNum))
        }
    }
    //return angkaStr
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5