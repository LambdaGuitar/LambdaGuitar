const express = require('express');

const ugs = require('ultimate-guitar-scraper');

const tabsRouter = express.Router();

const db = require('../configuration/db.js');

tabsRouter.get('/artist/:artist', (req, res) => {
	// /api/tabs/artist/:artist

    const { artist } = req.params;

    ugs.advanceSearch({
		bandName: artist,
		page: 1,
		type: ['tabs', 'chords']
	  }, (error, tabs) => {
		if (error) {
		  res.status(500).json(error);
		} else {
		  res.status(200).json(tabs);
		}
	});
});

module.exports = tabsRouter;