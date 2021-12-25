window.addEventListener('load', function(){
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let month = months[d.getMonth()];
  document.getElementById("months").innerHTML = month;


  const daysContainer = document.querySelector('#days-container');

  function renderContainer(date){
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const firstDayIndex = new Date(year,month,1).getDay();
    let noOfPrevDays
    if (firstDayIndex === 0){
       noOfPrevDays = 6;
    }else{
      noOfPrevDays = firstDayIndex - 1;
    }
    console.log(noOfPrevDays)
    const noOfDaysInMonth = new Date(year,month+1,0).getDate();
    const noOfPrevMonth = new Date(year,month,0).getDate();
    const noOfRows = Math.ceil((noOfPrevDays + noOfDaysInMonth)/7);
    const noOfNextDays = noOfRows * 7 -  noOfPrevDays - noOfDaysInMonth;
    console.log(noOfPrevMonth)

    daysContainer.innerHTML = '';

    for(i = 1 - noOfPrevDays; i <= noOfDaysInMonth + noOfNextDays; i++){
      const day = document.createElement('div');
      day.className = 'day-container';

      if (i < 1) {
				day.innerText = i + noOfPrevMonth;
			} else if (i > noOfDaysInMonth) {
				day.innerText = i - noOfDaysInMonth;
			} else {
				day.innerText = i;
			}

			daysContainer.appendChild(day);

    }
   
  }
  renderContainer(new Date());

});
