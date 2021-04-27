let activeSeats = 0;
let admissionFee = 15;
const seatEl = document.getElementsByClassName('seat');

const fetchAPI = async () => {
  try {
    const movieData = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=62157c10c2f3f945ca640aea2fc9b617");
    console.log(movieData);
  }
  catch(e) {
    console.log(`Error detected. ${e}`);
  }
};

const renderTotal = (userSelection) => {
  document.getElementById('seats-num').innerText = userSelection ? userSelection.activeSeats : 0;
  document.getElementById('total').innerText = userSelection ? userSelection.activeSeats * userSelection.admissionFee : 0;
};

const recordSeatsStatus = () => {
  let seatStatus = [];
  for(let i = 0; i < seatEl.length; i++) {
    if (seatEl[i].classList.contains('active')) {
      seatStatus.push(1);
    } else if (seatEl[i].classList.contains('reserved')) {
      seatStatus.push(2);
    } else {
      seatStatus.push(0);
    }
  }
  return seatStatus;
};

const seatActive = (element) => {
  if (element.classList.contains('reserved')) return;
  element.classList.toggle('active');
  activeSeats = document.getElementsByClassName('active').length;
  const userSelection = { activeSeats, admissionFee };
  renderTotal(userSelection);
  userSelection.seatsStatus = recordSeatsStatus();
  localStorage.setItem('userSelection', JSON.stringify(userSelection));
};

const renderSeatsStatus = (seatsStatus) => {
  for(let i = 0; i < seatsStatus.length; i++) {
    switch(seatsStatus[i]) {
      case 1 :
        seatEl[i].classList.add('active');
        break;
      case 2 :
        seatEl[i].classList.add('reserved');
        break;
      default :
        continue;
    }
  }
};

window.addEventListener('load', () => {
  fetchAPI();
  const userSelection = JSON.parse(localStorage.getItem('userSelection'));
  // take datum from localstorage
  renderTotal(userSelection);
  let seatsStatus;
  if (userSelection.seatsStatus) {
    seatsStatus = userSelection.seatsStatus;
  } else {
    seatsStatus = recordSeatsStatus();
  }
  renderSeatsStatus(seatsStatus);
});
