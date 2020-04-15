const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("select-movie");

const ticketPrice = +movieSelect.value;

const seatHandler = (e) => {
  //only selecting seat
  const target = e.target;
  if (
    target.classList.contains("seat") &&
    !target.classList.contains("occupied")
  ) {
    target.classList.toggle("selected");
  }
};

container.addEventListener("click", seatHandler);
