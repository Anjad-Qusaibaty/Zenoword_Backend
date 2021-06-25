const User = require("./models").user;
const Extract = require("./models").extract;

async function getExtracts() {
  const extract = await Extract.findAll({ where: { userId: 1 } });
  return extract.map((data) => data.get({ plain: true }));
}

getExtracts().then((data) => console.log(data));

// async function getExtracts() {
//   const extract = await Extract.findAll();
//   return console.log(extract.get({ plain: true }));
// }

// getExtracts();

// async function getExtracts() {
//   const extracts = await Extract.findAll();
//   console.log([...extracts.dataValues]);
// }
// getExtracts();

// async function getUsersWithTags() {
//   const userwithTags = await User.findOne({
//     where: { email: "tu@t.com" },
//     include: [{ model: extract }],
//   });
//   return userwithTags.get({ plain: true });
// }

// getUsersWithTags();

// async function getExtractswithTags() {
//   const extractwithTags = await Extract.findAll({ include: [Tag] });
//   return extractwithTags.map((data) => data.get({ plain: true }));
// }

// getExtractswithTags().then((data) => console.log(data));

// async function getTagswithExtract() {
//   const tagswithExtract = await Tag.findAll({ include: [Extract] });
//   return tagswithExtract.map((data) => data.get({ plain: true }));
// }

// getTagswithExtract().then((data) => console.log(data));
