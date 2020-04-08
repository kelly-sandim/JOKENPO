var dataSet = JSON.parse(localStorage.getItem('historico'));

$(document).ready(function() {    
    var table = $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Id" },
            { title: "Data da Partida" },
            { title: "Vencedor" },
            { title: "Placar (Você x Computador)" },
            { title: "Houve desistência?" },
            { title: "Deletar partida?"}            
        ],
        order: [[ 0, "asc" ]],
        pageLength: 10,
            language: {
                lengthMenu: "Mostrar _MENU_ registros por página.",
                zeroRecords: "Nenhum registro encontrado",
                info: "Pagina <b>_PAGE_</b> de <b>_PAGES_</b> de um total de <b>_MAX_</b> registros.",
                infoEmpty: "Visualizando: <b>_MAX_</b> registros.",
                infoFiltered: "(buscando em <b>_MAX_</b> registros)",
                search: "Buscar em todas as colunas",
                paginate: {
                    first:    "Primeira",
                    last:     "Última",
                    next:     "Próx",
                    previous: "Ant"
                }
            },
        responsive: true,
        pagingType: "full_numbers",
        dom: 'Bfrtip',
        buttons: [
            'csv', 'excel', 'pdf', 'print'
        ]
    } );
    
    $('#example tbody').on( 'click', 'button', function () {
        var data = table.row( $(this).parents('tr') ).data();        
        //data[0] contém o id, então seria id-1
        var newArrayData = JSON.parse(localStorage.getItem('historico'));
        var position = newArrayData.indexOf(data[0], 0);        
        newArrayData.splice(position, 1);
        localStorage.setItem('historico', JSON.stringify(newArrayData));

        document.location.reload(true);
    } );
} );