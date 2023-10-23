import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://kkyubrother0:rMp1gdv3nEVPHTuP@nextcluster.9blgv6g.mongodb.net/?retryWrites=true&w=majority";

const OPTIONS = { useNewUrlParser: true };

let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(URL, OPTIONS).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(URL, OPTIONS);
}

export { connectDB };
