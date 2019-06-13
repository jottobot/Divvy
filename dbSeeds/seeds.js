// Seed the database with test data

// How to use:
// 1. Create divvy_db in mySql Workbench
// 2. Start server
// 3. In another shell run this file, wait a few seconds, then kill it. (File doesn't end db connection automatically,
// so it has to be ended manually)

const seedDbFnc = require('./seedsExport');

seedDbFnc.seedDb();
