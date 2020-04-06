<?php
    
?>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <!--CSS-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.5.6/css/buttons.dataTables.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap.min.css">
        
        <!-- JS -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.5.6/js/dataTables.buttons.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.flash.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.html5.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.print.min.js"></script>
        <script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
        <script src="https://cdn.datatables.net/responsive/2.2.3/js/responsive.bootstrap.min.js"></script>

        <script src="../javascript/script.js"></script>
        <script src="https://kit.fontawesome.com/092b80762b.js" crossorigin="anonymous"></script>

        <title>Seu Histórico</title>
    </head>
    <body>
        <!-- Page Content  -->
        <div id="content" class="w-100">
        <table id="example" class="display" style="width:98%">
            <thead>
                <tr>
                    <th>Id</th>                    
                    <th>Data da Partida</th>
                    <th>Vencedor</th>
                    <th>Placar</th>
                    <th>Houve desistência?</th>                                        
                </tr>
            </thead>            
            <tbody>
                <?php
                    $totalizador=array();
                    $cont=0;
                    while ($row=mysql_fetch_assoc($rescombo)) {
                        $cont++;
                        echo "<tr id='".$row['id']."'>";
                            echo "<td>".$row['data']."</td>";
                            echo "<td>".$row['vencedor']."</td>";                            
                            echo "<td>".$row['placar']."</td>";
                            echo "<td>".$row['desistencia']."</td>";                            
                        echo "</tr>";                        
                    }                
                ?>    
            </tbody>
        </table>

                <?php 
                    echo "<h6>TOTAL: ".$cont."</h6>";                    
                ?>
        </div>
    </body>
</html>