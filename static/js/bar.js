d3.json('/data').then(function(data){
    console.log(data);
    // define function to calculate total crime count
    function totalCrimeCount(cityRow){
        let sum=0;
        cityRow.slice(2, 12).forEach((crimeCount)=>sum+=parseInt(crimeCount));
        return sum;
    }
    // create new array of objects {'City': XXX, 'Crime Rate': YYY} for each city
    let totalCrime=[];
    data.forEach(function(row){
        let population=parseInt(row[1].replace(',', ''));
        totalCrime.push({'City': row[0], 'Crime Rate': totalCrimeCount(row)/population});
    });
    // sort array by crime rate
    let sortedCrime=totalCrime.sort(function(a, b){
        return b['Crime Rate']-a['Crime Rate']
    });
    // only take top 10
    let topCrimeRateCities=sortedCrime.slice(0, 10);
    // create plotly bar chart
    let trace={
        'type': 'bar', 
        'x': topCrimeRateCities.map((city)=>city['City']), 
        'y': topCrimeRateCities.map((city)=>city['Crime Rate'])
    }
    Plotly.newPlot('bar', [trace]);
    // console.log(topCrimeRateCities);
});