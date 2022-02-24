var n=parseInt(document.getElementById("txt1"));
var k=parseInt(document.getElementById("txt2"));

document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById("b1").addEventListener('click', oddsOfWinning(n,k)); 
      });
   


    
    
  function oddsOfWinning(n,k){
    var nFactor = factorialize(n);
    var kFactor = factorialize(k); 
    var nMinusK = factorialize(n-k); 
    if (n >=k){
      var odds = nFactor/(kFactor * nMinusK); 
      odds = Math.floor(odds);
      odds = odds.toLocaleString(); 
    }
    var message = ("Your odds of winning are 1 in " + odds);
    document.getElementById("txt1").innerHTML = message 
  }



function factorialize(num){
    var result = num;
    if(num == 0|| num ==1){
      return 1; 
    }
    while (num > 1){
      num--; 
      result *= num; 
    }
    return (result); 
  }

document.getElementById("startButton").onclick = oddsOfWinning; 

  
  