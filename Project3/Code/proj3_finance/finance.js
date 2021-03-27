// https://rawgraphs.io

// DATA SET 
// Netflix closing price being pulled from my Github repo----------------------------------------------------------------

 var net = "https://raw.githubusercontent.com/jcbrown14/ITEC225/main/Project3/Financial_data/nflx/nflx_close_data_rev.csv"

 Plotly.d3.csv(net, function(err, rows){
   function unpack(rows, key) {
     return rows.map(function(row) { return row[key]; });
   }
   
   var t1 = {
     type: "scatter",
     mode: "lines",
     name: 'Netflix close',
     x: unpack(rows, 'date'),
     y: unpack(rows, 'close'),
     line: {color: '#ff0000'}
   }
  
   var data = [t1];
   var layout = {
     title: {
       text : 'Custom: Netflix close price'
     },
     xaxis: {
       title : {
        text : 'Dates' 
       }
     } ,
     yaxis : {
       title : {
         text : 'Close Price'
       }
     }
   };    
   Plotly.newPlot('myplot', data, layout);
 })