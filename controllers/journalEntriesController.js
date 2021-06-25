const db = require('../models');

const index = async (req, res, next) => {
    try {
        const foundJournalEntries = await db.Entry.find({});
        // if (foundJournalEntries.length === 0) return res.json({ message: 'No entries in database' });
        res.json({ entries: foundJournalEntries });
    } catch (err) {
        next(err);
    }
}

const show = async (req, res, next) => {
    try {
        const foundJournalEntry = await db.Entry.findById({ _id: req.params.id });
        if (!foundJournalEntry) return res.json({ message: 'Entry not found in database' });
        res.json({ entry: foundJournalEntry });
    } catch (err) {
        next(err);
    }
}

const create = async (req, res, next) => {
    try {
        const newJournalEntry = await db.Entry.create(req.body);
        res.status(201).json({ entry: newJournalEntry });
    } catch (err) {
        next(err);
    }
}

const update = async (req, res, next) => {
    try {
        const updatedJournalEntry = await db.Entry.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new:true },
        );
        if (!updatedJournalEntry) return res.json({ message: 'Entry not found in database' });
        res.status(201).json({ entry: updatedJournalEntry });
    } catch (err) {
        next(err);
    }
}

const destroy = async (req, res, next) => {
    try {
        const deletedJournalEntry = await db.Entry.findByIdAndDelete({ _id: req.params.id });
        if (!deletedJournalEntry) return res.json({ message: 'Entry not found in database' });
        res.json({ entry: deletedJournalEntry });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
  };
