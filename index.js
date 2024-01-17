function searchFilm() {
  // Input elementini seç
  var searchInputName = document.getElementById('searchInput');

  // Inputa yazılan film adını al
  var searchFilmName = searchInputName.value.toLowerCase();

  // Nəticəni  göstərəcəyimiz div'i seç
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  // Bütün film kartlarını seç
  var filmCards = document.querySelectorAll('.col-md-3');

  // Hər bir film kartını yoxla
  for (var i = 0; i < filmCards.length; i++) {
    var filmCard = filmCards[i];
    var filmTitle = filmCard.querySelector('.filmTitle');

    // Əgər film adı bərabərləşirsə göstər
    if (filmTitle.innerText.toLowerCase().includes(searchFilmName)) {
      resultDiv.innerHTML += '<div class="card">' + filmCard.innerHTML + '</div>';
      alert("Yesss")
      return;
    }
  }

  if (resultDiv.innerHTML === '') {
    resultDiv.innerHTML = '<p> Film isnt find:(.</p>';
    alert("Film isn't find")
  }
}

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); 
  searchFilm();
});

