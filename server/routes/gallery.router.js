const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// DELETE Route
// POST Route
router.delete('/:id', (req, res) => {
	const queryValues = [Number(req.params.id)];
	const queryText = `DELETE FROM gallery_items WHERE id=$1;`;

	pool.query(queryText, queryValues)
			.then((response) => {
				console.log("Successful DELETE");
				res.sendStatus(204);
			})
			.catch((error) => {
				console.log(error);
				res.sendStatus(500);
			})
})

// POST Route
router.post('/', (req, res) => {
	const queryValues = [req.body.path, req.body.description];
	const queryText = `INSERT INTO gallery_items (path, description) VALUES ($1, $2);`;

	pool.query(queryText, queryValues)
			.then((response) => {
				console.log("Successful POST");
				res.status(201).send(response.rows[0]);
			})
			.catch((error) => {
				console.log(error);
				res.sendStatus(500);
			})
})

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