const { Router } = require('express');
const router = Router();
const Note = require('../model/Note');

router.get('/', (req, res) => {
    res.send('Hello welcome to my API');
});

// Show all the notes
router.get('/v1/notes', async ( req, res) => {
    
    const limit = parseInt( req.query.limit || 4 );
    const page  = parseInt( req.query.page || 1 );
    const forceCountFn  = parseInt( req.query.forceCountFn || true );
    const notes = await Note.paginate( {}, { limit, page, forceCountFn } );
    res.json( notes );

    
});

// Insert new note
router.post('/v1/notes', async ( req, res) => {
    
    const newNote = new Note( req.body );
    const notes =  await newNote.save();
    res.send( notes );

});

// Export routes
module.exports = router;






