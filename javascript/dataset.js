var dataSet = [];
 
function updateDataSet()
{
    
}


$(document).ready(function() {    
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Id" },
            { title: "Data da Partida" },
            { title: "Vencedor" },
            { title: "Placar" },
            { title: "Houve desistência?" }            
        ]
    } );
} );