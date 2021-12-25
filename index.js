window.addEventListener('load', function(){

  // Event
  document.getElementById("prevMonth").addEventListener("click", thePrevMonth);
  document.getElementById("nextMonth").addEventListener("click", theNextMonth);

  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const daysContainer = document.querySelector('#days-container');

  let dateState = new Date(); 
  getMonth();

  function thePrevMonth (){
    dateState.setMonth(dateState.getMonth() - 1);
    getMonth()
  }

  function theNextMonth (){
    dateState.setMonth(dateState.getMonth() + 1);
    getMonth()
}

  function getMonth() {
    let prevMonth = months[dateState.getMonth()];
    document.getElementById('months').innerText = prevMonth;
    renderContainer(dateState);
  }



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
    
    const noOfDaysInMonth = new Date(year,month+1,0).getDate();
    const noOfPrevMonth = new Date(year,month,0).getDate();
    const noOfRows = Math.ceil((noOfPrevDays + noOfDaysInMonth)/7);
    const noOfNextDays = noOfRows * 7 -  noOfPrevDays - noOfDaysInMonth;
    

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

});
