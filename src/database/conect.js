const { MongoClient } = require("mongodb");

const url = "mongodb+srv://<usuario>:<senha>@cluster0-al9z2.mongodb.net/test?retryWrites=true&w=majority";
const parser = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

const cliente = new MongoClient(url, parser);

module.exports = cliente;