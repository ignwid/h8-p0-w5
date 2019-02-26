function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka < 10){
        return angka
    } else {
        var angkaStr = angka.toString()
        if(angkaStr.length > 1){
            var kali = 1
            for(var i = 0; i < angkaStr.length; i++){
                kali *= Number(angkaStr[i])
            }

            var cekDigit = kali.toString()
            if(cekDigit.length > 1){
                //var newNum = Number(cekDigit.slice(1))
                return kaliTerusRekursif(cekDigit)
            } else {
                return Number(cekDigit)
            }       
        }
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6