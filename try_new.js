const titles = [
  {
    text: "What you aim at determines what you see.",
    author: "Jordan B. Peterson",
    title: "12 Rules for life",
    subtitle: "An Antidote to Chaos",
    page: "96",
    mediaType: "Book",
    imageUrl:
      "http://books.google.com/books/content?id=u8w_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    tags: "Focus",
    link: "",
  },
  {
    text: "..while you are failing to define success (and thereby rendering it impossible) you are also refusing to define failure, to yourself, so that if and when you fail you won't notice, and it won't hurt. ",
    author: "Jordan B. Peterson",
    title: "12 Rules for life",
    subtitle: "An Antidote to Chaos",
    page: "276",
    mediaType: "Book",
    imageUrl:
      "http://books.google.com/books/content?id=u8w_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    tags: "Defining Failure",
    link: "",
  },
  {
    text: "All human activities and industries put together consume about 500 exajoules annually, equivalent to the amount of energy earth receives from the sun in just ninety minutes.",
    author: "Yuval Noah Harari",
    title: "Sapiens",
    subtitle: "A Brief History of Humankind",
    page: "380",
    mediaType: "Book",
    imageUrl:
      "http://books.google.com/books/content?id=1EiJAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "",
    tags: "Energy Consumption,Solar Energy",
  },
  {
    text: "There is poetic justice in the fact that a quarter of the world, and two of its seven continents, are named after a little-known Italian whose sole claim to fame is that he had the courage to say, 'We don't know.'",
    author: "Yuval Noah Harari",
    title: "Sapiens",
    subtitle: "A Brief History of Humankind",
    page: "321",
    mediaType: "Book",
    imageUrl:
      "http://books.google.com/books/content?id=1EiJAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "",
    tags: "Justice,Amerigo Vespucci,America",
  },
  {
    text: "What was really needed was a fundamental change in our attitude toward life. We had to learn ourselves and, furthermore, we had to teach the despairing men, that it did not really matter what we expected from life, but rather what life expected from us.",
    author: "Viktor E. Frankl",
    title: "Man's Search For Meaning",
    subtitle: "",
    page: "85",
    mediaType: "Book",
    imageUrl: "",
    link: "",
    tags: "Attitude,Life",
  },
  {
    text: "This is how it is with insomnia. Everything is so far away, a copy of a copy of a copy. The insomnia distance of everything, you can't touch anything and nothing can touch you.",
    author: "Chuck Palahniuk",
    title: "Fight Club",
    subtitle: "",
    page: "21",
    mediaType: "Book",
    imageUrl:
      "http://books.google.com/books/content?id=YgtQHP6srPAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "",
    tags: "Insomnia,CopyOfaCopy",
  },
  {
    text: "list.sort((a, b) => (a.color > b.color) ? 1 : -1)",
    author: "Flavio Copes",
    title: "How to sort an array of objects by a property value in JavaScript",
    subtitle: "",
    mediaType: "Online Article",
    link: "https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/",
    imageUrl: "",
    page: "",
    tags: "Sorting Arrays,JavaScript",
  },
  {
    text: "Food is the single biggest controllable factor that determines how much we enjoy our lives. What we eat is a persistent, nuanced balance between short term enjoyment and long term reward.",
    author: "Philip Marais",
    title: "Low-carb thinking for regular people",
    subtitle: "",
    mediaType: "Online Article",
    link: "https://medium.com/@finmn/low-carb-thinking-for-regular-people-c82354266beb",
    imageUrl: "",
    page: "",
    tags: "Keto,Diet,Food",
  },
];
function turnToBook(titles) {
  var dict = {};
  for (i = 0; i < titles.length; i++) {
    var bookTitle = titles[i].title;
    if (dict.hasOwnProperty(bookTitle)) {
      if (titles[i].text.length != 0) {
        var bookText = dict[titles[i].title].text;
        bookText.push(titles[i].text);
        dict[titles[i].title].text = bookText;
      }
      if (titles[i].page.length != 0) {
        var pageNum = dict[titles[i].title].page;
        pageNum.push(titles[i].page);
        dict[titles[i].title].page = pageNum;
      }
      if (titles[i].tags.length != 0) {
        var bookTags = dict[titles[i].title].tags;
        bookTags.push(titles[i].tags);
        dict[titles[i].title].tags = bookTags;
      }
    } else {
      dict[titles[i].title] = {
        text: [],
        author: titles[i].author,
        title: titles[i].title,
        subtitle: titles[i].subtitle,
        mediaType: titles[i].mediaType,
        link: titles[i].link,
        imageUrl: titles[i].imageUrl,
        page: [],
        tags: [],
      };
      if (titles[i].text.length != 0) {
        var bookText = dict[titles[i].title].text;
        bookText.push(titles[i].text);
        dict[titles[i].title].text = bookText;
      }
      if (titles[i].page.length != 0) {
        var pageNum = dict[titles[i].title].page;
        pageNum.push(titles[i].page);
        dict[titles[i].title].page = pageNum;
      }
      if (titles[i].tags.length != 0) {
        var bookTags = dict[titles[i].title].tags;
        bookTags.push(titles[i].tags);
        dict[titles[i].title].tags = bookTags;
      }
    }
  }
  return dict;
}

const results = turnToBook(titles);

console.log(results["12 Rules for life"]);
