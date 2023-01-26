const express = require("express");
const Note = require('../models/note');
const router = new express.Router();

// Get note
router.get('/notes', async (req, res) => {
    try{
        const notes = await Note.find({});
        res.status(200).send(notes);
    }catch(error) {
        res.status(500).send(error);
    }
})

// Create note
router.post('/notes', async (req, res) => {
    const note = new Note(req.body);
    try {
        await note.save();
        res.status(201).send(note);
    } catch (error) {
        res.status(500).send(error);
    }
})

// Update note
router.put('/:id', async (req, res, next) => {
    note = await Note.findById(req.params.id);
    note.title = req.body.title;
    note.description = req.body.description;
    note.save(()=>{
        res.json(note);
    })
})

// Delete note
router.delete('/:id', (req, res, next) => {
    Note.findByIdAndDelete(req.params.id,(err)=>{
        res.json({'message':"deleted"})
    })
})

module.exports = router;
