////////////////////////////////////////////////////
// This file is just a draft for testing purposes.//
///////////////////////////////////////////////////

// const author = ["Anjad", "jorden"];

// const concat = author.join(" & ");

// console.log(concat);

// const extracts = [
//   {
//     id: 1,
//     text: "What you aim at determines what you see.",
//     author: "Jordan B. Peterson",
//     title: "12 Rules for life",
//     subtitle: "An Antidote to Chaos",
//     tags: [{ type: "jordan" }, { type: "shit" }],
//   },
//   {
//     id: 2,
//     text: "..while you are failing to define success (and the…en you fail you won't notice, and it won't hurt. ",
//     author: "Jordan B. Peterson",
//     title: "12 Rules for life",
//     subtitle: "An Antidote to Chaos",
//     tags: [{ type: "jordan" }, { type: "shit" }],
//   },
//   {
//     id: 5,
//     text: "What was really needed was a fundamental change in…from life, but rather what life expected from us.",
//     author: "Viktor E. Frankl",
//     title: "Man's Search For Meaning",
//     subtitle: null,
//     tags: [{ type: "z" }, { type: "t" }],
//   },
//   {
//     id: 8,
//     text: "Food is the single biggest controllable factor  short term enjoyment and long term reward.",
//     author: "Philip Marais",
//     title: "Low-carb thinking for regular people",
//     subtitle: null,
//     tags: [{ type: "z" }, { type: "rakan" }],
//   },
// ];
// const search = "rakan";

// const filtering = extracts.filter(
//   (ext) =>
//     ext.text.toLowerCase().includes(search.toLowerCase()) ||
//     ext.author.toLowerCase().includes(search.toLowerCase()) ||
//     ext.title.toLowerCase().includes(search.toLowerCase()) ||
//     JSON.stringify(ext.tags.map((t) => t.type)).includes(search.toLowerCase())

//   // ||ext.tags.filter((tag) => tag.type.includes(search.toLowerCase()))
// );

// // const trying = extracts.filter((exct) => {
// //   return exct.tags.filter((tag) => tag.type.includes(search));
// // });

// // const extractszonder = extracts.map((ext) => ({
// //   id: ext.id,
// //   text: ext.text,
// //   author: ext.author,
// //   title: `${ext.title} ${ext.subtitle}`,
// //   tags: ext.tags,
// // }));

// // // console.log(filtering);
// // // console.log(extractszonder);
// // console.log(filtering);

// // const tags = [{ type: "z" }, { type: "rakan" }];

// // const y = tags.map((t) => t.type);
// // // const stringie = JSON.stringify(tags);

// // console.log(y);

// const tags = "tag1,";
// const spliting = tags.split(/[\,;]+/);
// function check(str) {
//   if (str.slice(-1) === "," || str.slice(-1) === ";" || str.slice(-1) === ".") {
//     return str.substring(0, str.length - 1);
//   } else {
//     return str;
//   }
// }
// const working = check(tags);
// // const x = tags.split(",").map((t) => console.log(t));
// // console.log(x);
// console.log(working);

// // imageUrl:
// // "http://books.google.com/books/content?id=W3q8R4dRZTwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",

// const text={
//   text: "",
//   author: "Timothy Ferriss",
//   title: "Tribe of Mentors",
//   subtitle: "Short Life Advice from the Best in the World",
//   page: "62",
//   mediaType: "Book",
//   imageUrl: "https://books.google.nl/books/publisher/content?id=xTk8DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72X9ClSK06B4NTeiGU1FfF6MD1aTSuFpMm6OStGUcoQNUrJGqYBDnSB3Tb44TMAUxkf0m5uA4S0ij--3fVij00UNozFwTEFrUbMZkqe6q570zUBaz0CTbAwxQTjsTlrWbLBXhud",
//   link: "",
//   tags: "Attitude,Life,Chaos & Order",
// },

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
    text: [
      "What you aim at determines what you see.",
      "..while you are failing to define success (and thereby rendering it impossible) you are also refusing to define failure, to yourself, so that if and when you fail you won't notice, and it won't hurt. ",
    ],
    author: "Jordan B. Peterson",
    title: "12 Rules for life",
    subtitle: "An Antidote to Chaos",
    page: ["96", "276"],
    mediaType: "Book",
    imageUrl:
      "http://books.google.com/books/content?id=u8w_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    tags: ["Focus", "Defining Failure"],
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
// function combine(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].title === arr[i + 1].title) {
//       arr.push[
//         {
//           text: [...arr[i].text, arr[i + 1].text],
//           author: arr[i].author,
//           title: arr[i].title,
//           subtitle: arr[i].subtitle,
//           mediaType: arr[i].mediaType,
//           link: arr[i].link,
//           imageUrl: arr[i].imageUrl,
//           page: arr[i].page,
//           tags: [...arr[i].tags, arr[i + 1].tags],
//         }
//       ];
//       //   arr.splice(i);
//       //   arr.splice(i + 1);
//     }
//   }
// }
function combine(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].title === "Sapiens") {
      arr.pop[i];
    }

    //     if (arr[i].title === arr[i + 1].title) {
    //       console.log(true);
    //       //   // arr.push[
    //       //   //   {
    //       //   //     text: [...arr[i].text, arr[i + 1].text],
    //       //   //     author: arr[i].author,
    //       //   //     title: arr[i].title,
    //       //   //     subtitle: arr[i].subtitle,
    //       //   //     mediaType: arr[i].mediaType,
    //       //   //     link: arr[i].link,
    //       //   //     imageUrl: arr[i].imageUrl,
    //       //   //     page: arr[i].page,
    //       //   //     tags: [...arr[i].tags, arr[i + 1].tags],
    //       //   //   }
    //       //   // ];
    //       //   arr.pop(i);
    //       //   //   arr.splice(i + 1);
    //     } else {
    //       console.log(false);
    //     }
  }
}
// search = "12";

// const x = titles.filter((ext) =>
//   ext.title.toLowerCase().includes(search.toLowerCase())
// );
// console.log(x);

const bcrypt = require("bcrypt");

const APIkey = {
  type: "service_account",
  project_id: "senior-project-1623608431612",
  private_key_id: "b0e2817dfda161eb479bd0e6ab418fcaa33c9e79",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQQyiqgbfJAfgZ\ng4l1rRMGhPiuiJ1xqAXxrU4I3zmEE96ODcWYky10TNp71geQQsb4Og1g4iycydbD\nlHayuflYH29vYPTxSL6aQjAPVtqXdopROr1C+QTl4nqfvrnWErZnf3CKM9tbte3I\nTxuc7VRELb0K/vIWLHAYBu03yMT1yg9hzxRjfOPgCT5QqID/QoMYv2AwRDX2Dunb\nYMT5Kdl1OqdZmDp5nNZFnfdEh+OLEDkyi4QXv6mWxzLPtguP8Ji3BiXHsEiEwCJm\nvDD1BrnqP4WAfZF5m1ZiAwPO5FqjuH9CRn8S8NJLUl/rL/Fl3ksQaNc77gNJaTJR\nRNu/PskvAgMBAAECggEAWtIu1cyj/UCilV3LgEnt1hX+7P4eywXfMbnGIhBW4MZZ\nc9GFrjfgxqsNTJvVyI+WfYGze+CmW+mZgsknymFX35o12niJ2P9EP7lFhCr4QL0t\nLKdVCfPWsvnFSAzAth6K9S+aQGrE6oW4IHZ/MDw/V0wq+LSdlhXi/Fdo877WRekC\nvqIddc1KdZVZwDeAUDB8Wln+EsiM6ltVQzWd+7aGQMwZphQJGPUZGcVDU3QF/qAF\njthar72HOLszdquFf6QI5DUGAXznkZEE/Sc+tlimQGYQ6DHnBHxaQPiqqR6gEZia\nascVOiMiYHu9of/nAYaZRRPLX1/KF/+VIwgZgzDMIQKBgQDtDODZjFDsym/IXslI\n42Nd4/Tr7tOlCA8VC6IH0rqS2O9VbgFTfm7FZnNpr9w/9tSmCmn0QgtgoXBGibWN\novazDcCvnxt8pOrlVIJfD+RIpun2a6eOcgw04BoMW5bzu4OkYuQpRLFMGeViwdnv\n59n78RMnqp3+XQ7W7FT+9ulv5QKBgQDg6SYD4RJheLRyNFwdfZIktwuEKCgWFLqB\nTnuxEFLPTiEps0lgChC0DFyPlK0hfsDAIfOLGr7K0bQc8tnwKCcAWhJQOoqchZLl\nTk82DzQsLMJJ+3rDBGA931OZBjoB+VzXHbatXIXaN1GPgiSWmc5TPuQICZlQDyDO\nGJwNjXH7gwKBgQDe/ahevaI6vcwdvxy2VkFZR2FUuBucOVKGx6Sqm08raKrrwEm7\nE0p8o32aQ/Z6rWUotM8rGR2+zt7hXBXPoSdVFHDYRGIFBNZ62N6zMi3bMjkQuACs\n/RgCfXXDfj0oFpMlhml/cMEgB5RDLHwpM/9ZA1SzkcqCR2P4ReVG21qJCQKBgG4j\nHh+WLycWMd8fLuCuJkvea0BLXd36Rp6drUq3AKZNz0WZa1whca6JwyX4m5Oke4Va\n2uWKslWlvXrTnc/SCc9NTFyHXmtpqdaqs3V4mobrYDVUdfhcAzkpTMnJ18wxrboV\n7egVP+LtZf5Nr9cj+HqheI9LDA29asYiHQEx+9g7AoGAR+POta4aFGqDYIIfDQ6Z\nwv57Gg6WjIjZ9whmjxSO2H4cryDxJP0NGnzZZR4A4Ar6U+CD+z8DYSF9uefEs3ec\njo2ZtiE+XkDt/6xieKK5PQSm0X+rIt1BbkX0xo9me23JImrz9UAxN7KZKuh5BGKR\nnPNlUtRvn8S/3JntRk28Lkg=\n-----END PRIVATE KEY-----\n",
  client_email: "zeno-715@senior-project-1623608431612.iam.gserviceaccount.com",
  client_id: "109718740784681836810",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/zeno-715%40senior-project-1623608431612.iam.gserviceaccount.com",
};

const cryAPI = bcrypt.hashSync(APIkey, 10);

const stringAPI = JSON.stringify(APIkey);

console.log(cryAPI);
