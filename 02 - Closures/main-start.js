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
var newSega = function() {
  var foil = aFoil();
  var sega = function() {
    var deed = aDeed();
    console.log(hero + " " + deed + " " + foil);
  };

  sega();
  sega();
};

newSega();
newSega();
