function meleeRangedGrouping (str) {
    //your code here
    var result = []
    var rangedGroup = []
    var meleeGroup = []
    var heroes = str.split(',')
    var nameHero = []
    for(var i = 0; i < heroes.length; i++){
        for(var j = 0; j < heroes[i].length; j++){
            if(heroes[i][j] === '-'){
                var strip = heroes[i].indexOf('-')
                var onlyNameHero = heroes[i].slice(0,strip)
                if(heroes[i][j] === '-'){
                    if(heroes[i][strip + 1] === 'R'){
                        rangedGroup.push(onlyNameHero)
                    } else if (heroes[i][strip + 1] === 'M'){
                        meleeGroup.push(onlyNameHero)
                    }
                }
                nameHero.push(onlyNameHero)
            }

        }
    }
    result.push(rangedGroup)
    result.push(meleeGroup)

    if(result[0].length === 0 && result[1].length === 0) {
        return []
    } else {
        return result
    }

    
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []