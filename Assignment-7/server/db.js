const { MongoClient } = require('mongodb');


const client = new MongoClient(`mongodb+srv://basil:${process.env.ATLAS_PASSWORD}@cluster0.buict.mongodb.net/assignment4`, {
  useUnifiedTopology: true,
});


let inventory; let
  counter;
client.connect((err, cl) => {
  const db = cl.db();
  inventory = db.collection('inventory');
  counter = db.collection('counter');
});

function getInventory() { return inventory; }
function getCounter() { return counter; }

module.exports = { getCounter, getInventory };
