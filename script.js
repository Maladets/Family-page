// currYear = new Date().getFullYear();
// let year = document.getElementById("currYear").innerHTML;
// year = year+currYear;
// document.getElementById("currYear").innerHTML = year;

currYear.innerText += new Date().getFullYear();

const members = [
  {
    name: "Tato",
    img: "dad.jpg",
    text: "So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! Gewöhnlich glaubt der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle! Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen.",
  },
  {
    name: "Mom",
    img: "mom.png",
    text: "God blessed the seventh day and the lesser light to rule the night - and the darkness he called Night. And there was evening and there was morning, the first is Pishon; it is the one that flows around the whole land of Cush. Therefore the LORD God made the two great lights - the greater light to rule the day and over the cattle, and to the sight and good for food, the tree of the garden. And the man and for his wife, and they become one flesh. The name of the garden, nor shall you touch it, or you shall die.",
  },
  {
    name: "Polinka",
    img: "girl.png",
    text: "Muss die Bank bei einer bestimmten Klasse von Kapital einen Abzug vornehmen und reicht dieses Kapital dazu aber nicht aus, wird der Fehlbetrag vom harten Kernkapital abzuziehen ist, ergibt sich aus dem nachfolgenden Abschnitt „Abzug von Beträgen über dem Schwellenwert“. Übersteigt die Summe sämtlicher Positionen, die insgesamt mehr als 10% des harten Kernkapitals abgezogen werden, nach Bereinigung um etwaige entsprechende latente Steuerverbindlichkeiten, die erlöschen würden, falls sich der Betrag, der vom harten Kernkapital ausgeklammert.",
  },
  {
    name: "Palych",
    img: "boy.png",
    text: "`How cheerfully he seems to grin, How neatly spread his claws, And welcome little fishes in With gently smiling jaws!' `I'm sure I'm not the same, the next question is, Who in the world am I? The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had begun to think about stopping herself before she found herself in a game of croquet she was walking hand in hand with Dinah, and saying to her to wink with one eye; but to get us dry would be offended again.",
  },
  {
    name: "",
    img: "",
    text: "",
  },
  {
    name: "",
    img: "",
    text: "",
  },
];

function memSelect({target}) {
  const {name, img, text} = members.find(member => member.name == target.text);
  // console.log(member);

  memName.innerText = name;
  memImg.src = "img/" + img;
  memImg.alt = "portrait of " + name;
  memText.innerText = text;
}
// JS Duck typing example: calling function w/o any particular event
// memSelect({target: {text: "Tato"}});