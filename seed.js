const db = require('./models')
const collectionData = require('./entryData/entryData.json')

entryData = async () => {
    try{
        const deletedEntries = await db.Entry.deleteMany({})
        console.log(deletedEntries.deletedCount,'entry deleted');
        const seededEntries = await db.Entry.create(entryData.entries);
        console.log(seededEntries.length, 'entries created successfully');
        console.log('YOU GOT ENTRY DATA!')

        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
}

seedData();