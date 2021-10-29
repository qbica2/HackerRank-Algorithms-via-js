
function timeConversion(s) {
    // verilen diziden saati yakaladık
    // 07:05:45PM verildiğini varsayalım 07:05:45P olarak yakalarız M ile ilgilenmiyoruz
    let time = s.match(/(\d+):(\d+):(\d+)(\w)/);
    // time ın grup elemanlarına ulaşıp
    let hours = Number(time[1]); 
    let minutes = Number(time[2]);
    let seconds = Number(time[3]);
    let pOrA = time[4];
    // PM ler için yeni saatimizi hesapladık
    if (pOrA == 'P' && hours < 12) {
      hours += 12;
    }
    // 12AM i "00" yaptık
    else if (pOrA == 'A' && hours == 12) {
      hours -= 12;
    }
    // 7:5:45  gibi gözükmesinin önüne geçtik => 07:05:45
    hours = hours <10 ? "0"+hours : hours ;
    minutes = minutes<10 ? "0"+minutes : minutes ;
    seconds = seconds<10 ? "0"+seconds : seconds ;
    
    let last = `${hours}:${minutes}:${seconds}`
    return last;

  }
