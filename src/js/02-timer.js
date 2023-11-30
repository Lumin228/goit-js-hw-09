// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const date = document.querySelector('#datetime-picker');
const refs = {
    day: document.querySelector('.value[data-days]'),
    hour: document.querySelector('.value[data-hours]'),
    minute: document.querySelector('.value[data-minutes]'),
    second: document.querySelector('.value[data-seconds]'),
    button: document.querySelector('button[data-start]')
}
const nowDate = new Date();
let realTimeDifference = null;
let intervalID = null;

    // refs.button.addEventListener('click', flatpickr())

flatpickr(date, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(nowDate.getTime() <= selectedDates[0].getTime())
       { refs.button.disabled = false;
        clearInterval(intervalID);
        refs.button.addEventListener('click', () => {
            clearInterval(intervalID); // Очистка предыдущего интервала
           
        if (nowDate.getTime() <= selectedDates[0].getTime()) {
            
            let futureTime = selectedDates[0].getTime();
            intervalID = setInterval(() => {
               
                futureTime -= 1000;
                realTimeDifference = futureTime - nowDate;
                refs.day.textContent = convertMs(realTimeDifference).days;
                refs.minute.textContent = convertMs(realTimeDifference).minutes;
                refs.hour.textContent = convertMs(realTimeDifference).hours;
                refs.second.textContent = convertMs(realTimeDifference).seconds;
            }, 1000);
        }
        else { 
        clearInterval(intervalID);
        
    }
        })
    }
    else{
        refs.button.disabled = true;
        alert("choos")
        clearInterval(intervalID);
    }
    },
});

// Вызов clearInterval() теперь вне блока if
// clearInterval(intervalID);




// console.log(selectedDates[0].getTime());
// console.log(newDate)

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }


