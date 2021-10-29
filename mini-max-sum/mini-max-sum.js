
function miniMaxSum(arr) {
    // dizideki en büyük ve en küçük değerleri bulduk
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    // en büyük ve en küçük değerin indexini (hangi sırada olduğunu bulduk)
    const minIndex = arr.indexOf(min)
    const maxIndex = arr.indexOf(max)

    // console.log(minIndex)
    // console.log(maxIndex)

     // diziden en küçük karakteri(sadece bir karakter sildik testlerde her karakterin aynı olduğu durum var) sildik. Böylece elimizde en büyük toplamı verecek dizi kaldı 
     arr.splice(minIndex,1)
     let maxSum =0
     for(let i=0 ; i<arr.length ; i++){
        maxSum = maxSum + arr[i]
    }
    // console.log(arr) 
    // sildiğimiz en küçük karakteri yerine koyduk
     arr.splice(minIndex,0,min)
    //  console.log(arr)
     //bu sefer en büyük karakteri sildik ve en küçük toplamı bulduk
      arr.splice(maxIndex,1)
    // console.log(arr)
     let minSum =0

    for(let i=0 ; i<arr.length ; i++){
        minSum = minSum + arr[i]
    }
     console.log(minSum,maxSum)
}