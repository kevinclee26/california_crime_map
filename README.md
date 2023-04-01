### California Crime Rate Map ###

To run the app: 
1. `git clone` `https://github.com/kevinclee26/california_crime_map.git`
2. cd into directory `california_crime_map`
3. start Flask app with `python app.py`
4. visit `localhost:5000` in a browser

This repository demonstrates: 
* `ETL.ipynb` - perform ETL, which includes: 
	* Reading from a csv
	* Merging data from data acquired externally
	* Writing to a SQLite database
* index.html
	* Using separate JavaScript files to render different visualizations - this might be useful for collaborating
* app.py - two end points, which include: 
	* `/data` endpoint that reads from a local SQLite database and returning a jsonified result
	* `/` endpoint that returns the rendered `index.html`
* bar.js
	* fetch data from `/data` endpoint and various data manipulation for Plotly to consume
* logic.js - map with Leaflet
