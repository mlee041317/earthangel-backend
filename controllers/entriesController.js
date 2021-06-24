const db = require('../models');

const index = async (req, res, next) => {
    try {
        const foundEntries = await db.Entry.find({});
        if (foundEntries.length === 0) return res.json({ message: 'No entries in database' });
        res.json({ collections: foundEntries });
    } catch (err) {
        next(err);
    }
}

const show = async (req, res, next) => {
    try {
        const foundEntry = await db.Entry.findById({ _id: req.params.id });
        if (!foundEntry) return res.json({ message: 'Entry not found in database' });
        res.json({ collection: foundEntry });
    } catch (err) {
        next(err);
    }
}

const create = async (req, res, next) => {
    try {
        const newEntry = await db.Entry.create(req.body);
        res.status(201).json({ entry: newEntry });
    } catch (err) {
        next(err);
    }
}

const update = async (req, res, next) => {
    try {
        const updatedEntry = await db.Entry.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new:true },
        );
        if (!updatedEntry) return res.json({ message: 'Entry not found in database' });
        res.status(201).json({ collection: updatedEntry });
    } catch (err) {
        next(err);
    }
}

const destroy = async (req, res, next) => {
    try {
        const deletedEntry = await db.Entry.findByIdAndDelete({ _id: req.params.id });
        if (!deletedEntry) return res.json({ message: 'Entry not found in database' });
        res.json({ entry: deletedEntry });
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
