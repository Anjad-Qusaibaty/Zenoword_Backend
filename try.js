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
