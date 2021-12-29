const connectDB = function() {
    const MongoClient = require("mongodb").MongoClient;
    const userName = process.env.DBNAME || "alienba6y";
    const pwd = process.env.DBPASS || "vanya123";
    const uri = `mongodb+srv://${userName}:${pwd}@cluster0.rrhlw.mongodb.net/pajamas?retryWrites=true&w=majority`;
    // использовать новые фичи, если они есть
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectDB;