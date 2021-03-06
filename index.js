window.addEventListener('load', function(){

  // Creat the Modal
  // Get Modal Element
  const modal = document.getElementById('simple-modal');

  // Get Open Modal
  
  
  // Get Close Modal
  const closeModalBtn = document.getElementsByClassName('close-btn')[0];

  // Modal Event
  
 
  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', outSideClick);

  function openModal(){
    modal.style.display = 'block';
  }

  function closeModal(){
    modal.style.display = 'none';
  }

  function outSideClick(event){
    if(event.target == modal){
      closeModal();
    }
  }


  //Get Picker field value
  

  function getSelectormonth(){
    const pickerDate = document.getElementById("picker-date");

    if(pickerDate){
      const currentDate = new Date()
      pickerDate.value = currentDate.toLocaleDateString('en-CA');
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
    renderContainer(dateState);
    getYear()
  } 

  function getYear(){
    let isYear = dateState.getFullYear();
    document.getElementById('year').innerText =  isYear
    renderContainer(dateState);
  }

  function currentDayColor(){
    const currentDate = new Date();
    if(dateState.getFullYear() !== currentDate.getFullYear() || dateState.getMonth() !== currentDate.getMonth()){
       return;
     
    }document.getElementById('the-day-' + currentDate.getDate()).style.color = 'red';
    
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
				day.innerHTML = '<div class="day">' + (i + noOfPrevMonth) + '</div>';

			} else if (i > noOfDaysInMonth) {
        day.innerHTML = '<div class="day">' + (i - noOfDaysInMonth) + '</div>';

			} else {
        day.classList.add("active");
        day.innerHTML = '<div class="day">' + i + '</div>';

			}
			daysContainer.appendChild(day);
    } 

     const modalBtn = document.querySelectorAll('.day-container.active');

      for(i = 0; i < modalBtn.length; i++){
          modalBtn [i].addEventListener('click', openModal);        
      }
    currentDayColor()
    getSelectormonth()
   
  }

});
