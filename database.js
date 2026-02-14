const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://kodavatisudheer:9063840611%40@namasthenode.h8epfwc.mongodb.net/";
const client = new MongoClient(url);

const dbName = "Test";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstname: "Harshitha",
    lastname: "Kodavati",
    age: 24,
    city: "Chidipi",
    country: "India",
  };

  const insertResult = await collection.insertOne(data);
  console.log("Inserted documents =>", insertResult);

  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  // const countResult = await collection.countDocuments({});
  // console.log(countResult, "Count of documents in user collection");

  //Find all documents with a filter of first name: chaitanya

  const result = await collection.find({ firstname: "Chaitanya" }).count();
  console.log("result is", result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
