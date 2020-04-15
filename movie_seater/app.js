const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("select-movie");

const ticketPrice = +movieSelect.value;

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  console.log(selectedSeatsCount);
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

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
