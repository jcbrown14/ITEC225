// https://rawgraphs.io

// DATA SET 
// Covid cases in Germany being pulled from my Github repo----------------------------------------------------------------

var ger = "https://raw.githubusercontent.com/jcbrown14/ITEC225/main/Project3/covid_World_Data/germany/deu_case_data_rev.csv"

Plotly.d3.csv(ger, function(err, rows){
  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  
  var t1 = {
    type: "",
    mode: "lines",
    name: 'Germany',
    x: unpack(rows, 'Dates'),
    y: unpack(rows, 'Case'),
    line: {color: '#ff0000'}
  }
 
  var data = [t1];
  var layout = {
    title: {
      text : 'Custom: Confirmed covid cases in Germany'
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