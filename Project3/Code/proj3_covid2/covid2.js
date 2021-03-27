// https://rawgraphs.io

// DATA SET 
// Covid cases in Italy being pulled from my Github repo----------------------------------------------------------------

var ita = "https://raw.githubusercontent.com/jcbrown14/ITEC225/main/Project3/covid_World_Data/italy/ita_case_data_rev.csv"

Plotly.d3.csv(ita, function(err, rows){
  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  
  var t1 = {
    type: "scatter",
    mode: "lines",
    name: 'Italy',
    x: unpack(rows, 'Dates'),
    y: unpack(rows, 'Case'),
    line: {color: '#ff0000'}
  }
 
  var data = [t1];
  var layout = {
    title: {
      text : 'Custom: Confirmed covid cases in Italy'
    },
    xaxis: {
      title : {
       text : 'Dates' 
      }
    } ,
    yaxis : {
      title : {
        text : 'Cases'
      }
    }
  };    
  Plotly.newPlot('myplot', data, layout);
})