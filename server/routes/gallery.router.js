const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
		
		const queryText = "UPDATE gallery_items SET likes = likes + 1 WHERE id=$1 RETURNING likes;";
		const queryValues = [req.params.id];

		pool.query(queryText, queryValues)
			.then((response) => {
				console.log("Successful put on id:", req.params.id);
				res.status(201).send(response.rows[0]);
			})
			.catch((error) => {
				console.log(error);
				res.sendStatus(500);
			})
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
	const queryText = "SELECT * FROM gallery_items ORDER BY id;";

	pool.query(queryText)
		.then((response) => {
			console.log("Successful get, rowCount:", response.rowCount);
			res.status(200).send(response.rows);
		})
		.catch((error) => {
			console.log(error);
			res.sendStatus(500);
		})
}); // END GET Route

module.exports = router;