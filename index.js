document.getElementById("vote-button").addEventListener("click", () => {
  // get all the radio button options
  const options = document.getElementsByName("poll");
  let selectedOption;

  for (let option of options) {
    if (option.checked) {
      selectedOption = option.value;
      break;
    }
  }

  if (selectedOption) {
    const pollResults = JSON.parse(localStorage.getItem("pollResults")) || {};

    pollResults[selectedOption] = (pollResults[selectedOption] || 0) + 1;

    localStorage.setItem("pollResults", JSON.stringify(pollResults));

    displayResults(pollResults);
  } else {
    alert("please select an option before voting.");
  }
});

// Function to display poll results
const displayResults = (results) => {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = "";

  for (let [option, votes] of Object.entries(results)) {
    const result = document.createElement("div");
    result.innerHTML = `<strong>${option}:</strong> ${votes} vote(s)`;
    resultsContainer.appendChild(result);
  }

  // show the result container
  document.getElementById("results").classList.remove("hidden");
};

// check if there are stored poll results & display them
const storedresults = JSON.parse(localStorage.getItem("pollResults"));
if (storedresults) {
  displayResults(storedresults);
}
