// put all data loader, processor in this file

var raw_data, clean_data=[];

//Read the data
function readData(){
    d3.csv("data/COVID-19.csv",
        function(d){
            raw_data = d;
            cleanData();
        }
    )
}

function cleanData(){
    raw_data.forEach(
        function(d){
            // console.log(d);
            // When reading the csv, I must format variables:
            clean_data.push({date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value});
        })

    // here the data reading and cleaning is finished
    console.log(clean_data);
}