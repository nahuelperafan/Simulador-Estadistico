$(document).ready(function() {    
    $('#example').DataTable({        
        language: {
            // Se setean los valores iniciales
            "lengthMenu": "Mostrar _MENU_ registros",
            // "zeroRecords": "No se encontraron resultados",
            // "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            // "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            // "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            // "sSearch": "",
            // "oPaginate": {
            //     "sFirst": "Primero",
            //     "sLast":"Último",
            //     "sNext":"Siguiente",
            //     "sPrevious": "Anterior"
            //  },
            //  "sProcessing":"Procesando...",
        },
        //para usar los botones   
        responsive: "true",
        searching: false,
        //dom: 'Btl',       
        // buttons:[ 
		// 	{
		// 		// extend:    'excelHtml5',
		// 		text:      '<i class="fas fa-trash-alt"></i> ',
		// 		titleAttr: 'Limpiar datos',
		// 		className: 'btn btn-success'
		// 	},

		// ]	        
    });     
});
