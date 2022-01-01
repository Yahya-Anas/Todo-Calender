window.addEventListener('load', function(){

  // Creat the Modal
  // Get Modal Element
  const modal = document.getElementById('simple-modal');

  // Get Open Modal
  const modalBtn = document.getElementById('days-container');

  // Get Close Modal
  const closeModalBtn = document.getElementsByClassName('close-btn')[0];

  // Modal Event
  modalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', outSideClick);

  function openModal(){
    modal.style.display = 'block';
  }

  function closeModal(){
    modal.style.display = 'none';
  }

  function outSideClick(e){
    if(e.target == modal){
      closeModal();
    }
  }





  // Event
  
  document.getElementById("prevMonth").addEventListener("click", thePrevMonth);
  document.getElementById("nextMonth").addEventListener("click", theNextMonth);

  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const daysContainer = document.querySelector('#days-container');
  //let noOfMonth= months.length;
  
  
  let dateState = new Date(); 
  getMonth();

  function thePrevMonth (){
    dateState.setMonth(dateState.getMonth() - 1);
    getMonth()
    getYear()
  }

  function theNextMonth (){
    dateState.setMonth(dateState.getMonth() + 1);
    getMonth()
    getYear()
}

  function getMonth() {
    let isMonth = months[dateState.getMonth()];
    document.getElementById('months').innerText = isMonth;
    console.log(isMonth);
    renderContainer(dateState);
    getYear()
  } 

  function getYear(){
    let isYear = dateState.getFullYear();
    document.getElementById('year').innerText =  isYear
    console.log(isYear);
    renderContainer(dateState);
  }

  function currentDayColro(){
    const currentDate = new Date();
    if(dateState.getFullYear() !== currentDate.getFullYear() && dateState.getMonth() !== currentDate.getMonth()){
      return;
     }
      document.getElementById('the-day-' + currentDate.getDate() ).style.color = 'red';
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
      day.id = 'the-day-' + i ;

      if (i < 1) {
				day.innerText = i + noOfPrevMonth;

			} else if (i > noOfDaysInMonth) {
				day.innerText = i - noOfDaysInMonth;
        
			} else {
				day.innerText = i;
			}
			daysContainer.appendChild(day);

    } 
    currentDayColro()
  
   
   
  }

});
