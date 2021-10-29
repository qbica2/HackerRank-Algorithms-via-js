
function birthdayCakeCandles(candles) {
    // candles dizisindeki en büyük değeri bulduk
    const max = Math.max(...candles)

    let maxCount = 0
    // candles dizisindeki her maxa eşit olan eleman için maxCount u 1 artırdık
    candles.filter(function(item){
        if(item== max){
            maxCount+=1
        }
    })
  return maxCount;
}
