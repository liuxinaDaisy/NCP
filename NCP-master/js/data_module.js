// put all data loader, processor in this file

var raw_data, clean_data=[];

//Read the data
function readData(){
    d3.csv("OverAll2020-02-16.csv",
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
    function(data) {
        console.log(data);
        // List of groups (here I have one group per column)
        var allGroup = ["valueA", "valueB", "valueC", "valueD"]
        // Reformat the data: we need an array of arrays of {x, y} tuples
        var dataReady = allGroup.map(function (grpName) { // .map allows to do something for each element of the list
            return {
                name: grpName,
                values: data.map(function (d) {
                    return {date: d.date, value: +d[grpName]};
                })
            };
        });
    }
}

// I strongly advise to have a look to dataReady with
// console.log(dataReady)

