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
var newSaga = function() {
  var foil = aFoil();
  var saga = function() {
    var deed = aDeed();
    console.log(hero + " " + deed + " " + foil);
  };

  saga();
  saga();
};

newSaga();
newSaga();
