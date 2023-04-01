// data format
// ['City', 'Population', 'Violent\ncrime',
//  'Murder and\nnonnegligent\nmanslaughter', 'Rape', 'Robbery',
//  'Aggravated\nassault', 'Property\ncrime', 'Burglary', 'Larceny-\ntheft',
//  'Motor\nvehicle\ntheft', 'Arson', 'lat', 'lon']

d3.json('/data').then(function(data){
    console.log(data);
    
    var map = L.map('map').setView([36.7783, -119.4179], 5); 

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    
    for (let i=0; i<data.length; i++){
        let currentCity=data[i];
        lat=currentCity[12]; 
        lng=currentCity[13];
        if ((lat!==null) & (lng!==null)){
            L.marker([lat, lng]).addTo(map);
        };
    }
});