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
  //  {
  //    // extend:    'excelHtml5',
  //    text:      '<i class="fas fa-trash-alt"></i> ',
  //    titleAttr: 'Limpiar datos',
  //    className: 'btn btn-success'
  //  },

  // ]          
  });     
});

var miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", function() {

  // aquí va la función que se ejecutará cuando se haga clic en el botón
  function sumarValores() {
    var input = document.getElementById('miInput').value;
    var tabla = $('#example').DataTable();
    var celda = tabla.cell(0, 1);
    var valorActual = parseInt(celda.data());
    var resultado = valorActual + parseInt(input);
    celda.data(resultado).draw();
}
  sumarValores();
});

var miBoton2 = document.getElementById("miBoton2");
miBoton.addEventListener("click", function() {

  // aquí va la función que se ejecutará cuando se haga clic en el botón
  function restarValores() {
    var input = document.getElementById('miInput2').value;
    var tabla = $('#example').DataTable();
    var celda = tabla.cell(0, 2);
    var valorActual = parseInt(celda.data());
    var resultado = valorActual - parseInt(input);
    celda.data(resultado).draw();
}
  restarValores();
})

var miBoton3 = document.getElementById("miBoton3");
miBoton.addEventListener("click", function() {

  // aquí va la función que se ejecutará cuando se haga clic en el botón
  function multiplicarValores() {
    var input = document.getElementById('miInput3').value;
    var tabla = $('#example').DataTable();
    var celda = tabla.cell(0, 3);
    var valorActual = parseInt(celda.data());
    var resultado = valorActual * parseInt(input);
    celda.data(resultado).draw();
}
multiplicarValores();
});

var miBoton4 = document.getElementById("miBoton4");
miBoton.addEventListener("click", function() {

  // aquí va la función que se ejecutará cuando se haga clic en el botón
  function dividirValores() {
    var input = document.getElementById('miInput4').value;
    var tabla = $('#example').DataTable();
    var celda = tabla.cell(0, 4);
    var valorActual = parseInt(celda.data());
    var resultado = valorActual % parseInt(input);
    celda.data(resultado).draw();
}
  dividirValores();
});