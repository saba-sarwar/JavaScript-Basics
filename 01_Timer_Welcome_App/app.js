// To display timer for clock
function clockTime() 
{
  var date = new Date();
  var msg;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var prepand = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? '0'+hours : hours;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds : seconds;

  if(hours < 12 && prepand === 'AM')
  {
    msg = "Morning";
  }
  else if((hours >=12 && prepand === 'PM') && (hours < 5 && prepand === 'PM'))
  {
    msg = "Afternoor";
  }
  else if((hours >= 5 && prepand === 'PM') && (hours < 8 && prepand === 'PM'))
  {
    msg = "Evening";
  }
  else
  {
    msg = "Night";
  }
  
  var strTime = hours + ':' + minutes + ':' + seconds + " " + prepand;
  document.getElementById("clock").innerHTML = strTime;
  document.getElementById("msg").innerHTML = msg;
  
  var timeout = setTimeout(function(){
    clockTime();
  }, 1000);
}
clockTime();

// To display formatted date
function clockDate()
{
  var date = new Date();
  var dd = date.getDate();
  var mm = date.toLocaleString('default', {month: 'short'})
  var yy = date.getFullYear();

  dd = dd < 10 ? '0'+dd : dd;

  var strDate = dd + " " + mm + " " + yy;
  document.getElementById("time").innerHTML = strDate;
  // console.log(dd + " " + mm + " " + yy);
}

clockDate();