const Tag = require("./models").tag;
const User = require("./models").user;
const Extract = require("./models").extract;

// async function getExtracts() {
//   const extract = await Extract.findAll();
//   return extract.map((data) => data.get({ plain: true }));
// }

// getExtracts().then((data) => console.log(data));

// async function getUsersWithTags() {
//   const userwithTags = await User.findAll({ include: [Tag] });
//   return userwithTags.map((data) => data.get({ plain: true }));
// }

// getUsersWithTags().then((data) => console.log(data));

async function getExtractswithTags() {
  const extractwithTags = await Extract.findAll({ include: [Tag] });
  return extractwithTags.map((data) => data.get({ plain: true }));
}

getExtractswithTags().then((data) => console.log(data));

// async function getTagswithExtract() {
//   const tagswithExtract = await Tag.findAll({ include: [Extract] });
//   return tagswithExtract.map((data) => data.get({ plain: true }));
// }

// getTagswithExtract().then((data) => console.log(data));
