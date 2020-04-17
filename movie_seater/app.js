const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("select-movie");

let ticketPrice = +movieSelect.value;

//Get data from localstorage and populate UI
const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
};

populateUI();

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  //copy selected seats into array
  //Map through array
  //return a new array of indexes

  const seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

//Save selected movie index and price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
};

movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

const seatHandler = (e) => {
  //only selecting seat
  const target = e.target;
  if (
    target.classList.contains("seat") &&
    !target.classList.contains("occupied")
  ) {
    target.classList.toggle("selected");

    updateSelectedCount();
  }
};

container.addEventListener("click", seatHandler);

//Initial count and total set
updateSelectedCount();
