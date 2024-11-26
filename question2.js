// 2. Bokstävers position i strängar (3p)
// Skriv en funktion equalLetterPositions som räknar ut hur många bokstäver som
// är på samma position i två strängar. Funktionen ska räkna stor och liten bokstav
// som samma bokstav.

// Exempel:
// equalLetterPositions("go", "DO") // Returnerar 1 (o och O är på samma position i båda strängarna)
// equalLetterPositions("hello", "world") // Returnerar 1 (l är på samma position i båda strängarna)
// equalLetterPositions("detsamma", "detta") // Returnerar 4 (d, e, t, a är på samma position i båda strängarna)
let commonPositions = 0;
function equalLetterPositions(str1, str2) {
  const letters = str1.split("").toUpperCase();
  const letters2 = str2.toUpperCase();
  for (let i = 0; i < letters.length; i++) {
    if (letters2.indexOf(letters[i]) == [i]) {
      commonPositions += 1;
    }
  }
  return commonPositions;
}
console.log(equalLetterPositions("detsamma", "detta"));
console.log(equalLetterPositions("go", "DO"));

module.exports = equalLetterPositions;
