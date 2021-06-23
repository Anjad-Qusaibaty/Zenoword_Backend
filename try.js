// const author = ["Anjad", "jorden"];

// const concat = author.join(" & ");

// console.log(concat);

const extracts = [
  {
    id: 1,
    text: "What you aim at determines what you see.",
    author: "Jordan B. Peterson",
    title: "12 Rules for life",
    subtitle: "An Antidote to Chaos",
    tags: [{ type: "jordan" }, { type: "shit" }],
  },
  {
    id: 2,
    text: "..while you are failing to define success (and the…en you fail you won't notice, and it won't hurt. ",
    author: "Jordan B. Peterson",
    title: "12 Rules for life",
    subtitle: "An Antidote to Chaos",
    tags: [{ type: "jordan" }, { type: "shit" }],
  },
  {
    id: 5,
    text: "What was really needed was a fundamental change in…from life, but rather what life expected from us.",
    author: "Viktor E. Frankl",
    title: "Man's Search For Meaning",
    subtitle: null,
    tags: [{ type: "z" }, { type: "t" }],
  },
  {
    id: 8,
    text: "Food is the single biggest controllable factor  short term enjoyment and long term reward.",
    author: "Philip Marais",
    title: "Low-carb thinking for regular people",
    subtitle: null,
    tags: [{ type: "z" }, { type: "rakan" }],
  },
];
const search = "rakan";

const filtering = extracts.filter(
  (ext) =>
    ext.text.toLowerCase().includes(search.toLowerCase()) ||
    ext.author.toLowerCase().includes(search.toLowerCase()) ||
    ext.title.toLowerCase().includes(search.toLowerCase()) ||
    JSON.stringify(ext.tags.map((t) => t.type)).includes(search.toLowerCase())

  // ||ext.tags.filter((tag) => tag.type.includes(search.toLowerCase()))
);

// const trying = extracts.filter((exct) => {
//   return exct.tags.filter((tag) => tag.type.includes(search));
// });

// const extractszonder = extracts.map((ext) => ({
//   id: ext.id,
//   text: ext.text,
//   author: ext.author,
//   title: `${ext.title} ${ext.subtitle}`,
//   tags: ext.tags,
// }));

// // console.log(filtering);
// // console.log(extractszonder);
console.log(filtering);

const tags = [{ type: "z" }, { type: "rakan" }];

const y = tags.map((t) => t.type);
// const stringie = JSON.stringify(tags);

console.log(y);
