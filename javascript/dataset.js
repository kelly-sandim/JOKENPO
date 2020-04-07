var dataSet = [];
dataSet.push(JSON.parse(localStorage.getItem('historico')));
console.log(dataSet);

$(document).ready(function() {    
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Id" },
            { title: "Data da Partida" },
            { title: "Vencedor" },
            { title: "Placar (Você x Computador)" },
            { title: "Houve desistência?" }            
        ]
    } );
} );