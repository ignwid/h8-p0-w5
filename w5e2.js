function changeVocals (str) {
    //code di sini
    if(str.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        
    }
    var vokalKecil = 'abcdefghijklmnopqrstuvwxyz'
    var vokalBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result1 = ''
    for(var i = 0; i < str.length; i++){
        var check = false
        for(var j = 0; j < vokalKecil.length; j++){
            if(str[i] === vokalKecil[j]){
                if(str[i] === 'a' || str[i] === 'i' ||str[i] === 'u' ||str[i] === 'e' ||str[i] === 'o'){
                result1 = result1 + vokalKecil[j+1]
                check = true
                }                
            }

            else if(str[i] === vokalBesar[j]){
                if(str[i] === 'A' || str[i] === 'I' ||str[i] === 'U' ||str[i] === 'E' ||str[i] === 'O'){
                    result1 = result1 + vokalBesar[j+1]
                    check = true
                    }  
            }
           
        }
        if(check === false){
            result1 = result1 + str[i]
        }
    }
    return result1
}
  
  function reverseWord (str) {
    //code di sini
    var result2 = ''
    for(var i = str.length-1; i >= 0; i--){
        result2 = result2 + str[i]
    }
    return result2
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    result3 = ''
    var hurufKecil = 'abcdefghijklmnopqrstuvwxyz'
    var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(var i = 0; i < str.length; i++){
        var check = false
        for(var j = 0 ; j < hurufKecil.length; j++){
            if(str[i] === hurufKecil[j]){
                result3 = result3 + hurufBesar[j]
                check = true
            }

            else if(str[i] === hurufBesar[j]){
                result3 = result3 + hurufKecil[j]
                check = true
            }
        }
        if(check === false){
            result3 = result3 + str[i]
        }
    }
    return result3
  }
  
  function removeSpaces (str) {
    //code di sini
    var result4 = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] != ' '){
            result4 = result4 + str[i]
        }
    }
    return result4
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
    var first = changeVocals(name)
    var second = reverseWord(first)
    var third = setLowerUpperCase(second)
    var fourth = removeSpaces(third)
    

    return fourth

    }
    
  }
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'