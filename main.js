nombres_array = []

function ORDENAR ()
{
    var nombre_invitados_array = []

    for (var a = 1; a<= 4; a++)
    {
        var nombres_array = document.getElementById("Nombre_poner" +a).value;
        console.log(invitados_nombres);
        nombres_array.push(invitados_nombres)
    }

    console.log(nombres_array);

    var longitud_nombres_array = nombres_longitud_array.length;
    console.log(longitud_nombres_array; k++)

    for(var k = 0; k < longitud_nombres_array; k++)
    {
        nombre_invitados_array.push("<h4>NAME -"+ nombres_array[k] + "</h4>");
        console.log(nombre_invitados_array);
    }

    console.log(nombre_invitados_array);
    document.getElementById("mostrar_nombres_con_comas").innerHTML = nombre_invitados_array;+

    var remove_comas = nombre_invitados_array.join(" ");
    console.log(remove_comas)

    document.getElementById("mostrar_nombres_sin_comas").innerHTML = remove_comas;


    document.getElementById("ORDENAR").style.display = "none";
    document.getElementById("sorting").style.display = "inline-block";


}

function sorting()
{
    nombres_array.sort();
    console.log(nombres_array);

    var display_student_array_sorting = [];

    var longitud_nombres_array = nombres_longitud_array.length;
    console.log(longitud_de_nombres_array);

    for (var k = 0; k < longitud_nombres_array;k++)
    {
        display_student_array_sorting
    }
}