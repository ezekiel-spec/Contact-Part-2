require('dotenv').config();
const mongoose = require('mongoose');

console.log('--- Debugging Connection ---');
console.log('URI:', process.env.MONGODB_URI);

async function runDiscovery() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const admin = mongoose.connection.db.admin();
    
    // 1. List ALL databases on this cluster
    const dbs = await admin.listDatabases();
    console.log('\n--- Step 1: Databases on Cluster ---');
    console.log(dbs.databases.map(d => d.name));

    // 2. List ALL collections in the CURRENT database
    console.log('\n--- Step 2: Collections in CURRENT Database ---');
    const collections = await mongoose.connection.db.listCollections().toArray();
    if (collections.length === 0) {
      console.log('!!! WARNING: No collections found in this database. It is empty.');
    } else {
      console.log('Found:', collections.map(c => c.name));
    }

    process.exit();
  } catch (err) {
    console.error('Connection failed:', err);
    process.exit(1);
  }
}

runDiscovery();