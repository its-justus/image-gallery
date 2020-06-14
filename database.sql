-- run these in a database name "react_gallery" before starting the server

CREATE TABLE gallery_items (
	id  			INTEGER GENERATED ALWAYS AS IDENTITY,
	path			TEXT NOT NULL,
	description		TEXT,
	likes 			INTEGER NOT NULL DEFAULT 0,
	created			TIMESTAMPTZ DEFAULT NOW()
	);
	
INSERT INTO gallery_items (path, description)
	VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.');
INSERT INTO gallery_items (path, description)
	VALUES ('https://cdn.geekwire.com/wp-content/uploads/2018/12/181204-spacex.jpg', 'haha rocket go BRRRRRRSSHSH');
INSERT INTO gallery_items (path, description)
	VALUES ('https://www.recipetineats.com/wp-content/uploads/2017/06/Pancakes-SQ.jpg', 'mmmmm... pancakes');
INSERT INTO gallery_items (path, description)
	VALUES ('https://myfirstshiba.com/wp-content/uploads/2017/11/AdobeStock_149297117.jpg', 'Shibas are so CUTE');