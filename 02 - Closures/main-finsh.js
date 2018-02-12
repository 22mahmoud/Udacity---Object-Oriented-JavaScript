function aHero() {
  return "Spider-Man";
}

function aFoil() {
  return "Cow";
}

function aDeed() {
  return "Eyes";
}

var hero = aHero();
var sagas = [];
var newSaga = function() {
  var foil = aFoil();
  sagas.push(function() {
    var deed = aDeed();
    console.log(hero + " " + deed + " " + foil);
  });
};

newSaga();
sagas[0]();
sagas[0]();
newSaga();
sagas[0]();
sagas[1]();
sagas[0]();
