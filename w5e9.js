function cariPelaku(str) {
    // you can only write your code here!
    var temp = str.replace(/abc/gi, 'x');
    var counter = 0
    for(var i = 0; i < str.length;i++){
        if(temp[i] === 'x'){
            counter++
        }
    }
    return counter
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2