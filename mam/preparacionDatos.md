




[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)
- Convertir a Excel con Foxit.
- Abrir fichero Excel.
- Grabar como xlsm para permitir usar macros.
¿Cómo seleccionar todas las imágenes de una hoja de Excel?
Resultado de imagen de excel borrar imagenes en hoja
Seleccionar todos los objetos de la hoja

Primero debes seleccionar 1 solo y luego presionar CTRL+SHIFT +BARRA ESPACIADORA y quedarán todos seleccionados!
- En Vista ->Macros->Ver macros-> Borrar el codigo que existe. Grabar nueva macros con todo el código siguiente:


Sub concatenarNew()
primero = True
contador = 0
Do While contador < 3000
    salto = 0
    If primero Then
        primero = False
        ActiveCell.Offset(salto, -1).Activate
    Else
        ActiveCell.Offset(0, 1).Activate
    End If
    
    previo = CStr(ActiveCell.Value)
    ActiveCell.Offset(0, 1).Activate
    ActiveCell.Value = previo
    ActiveCell.Offset(1, -2).Activate
    salto = salto + 1
      
    If ActiveCell.Value = Empty Then
        ActiveCell.Offset(0, 1).Activate
        previo1 = CStr(ActiveCell.Value)
        ActiveCell.Value = ""
        ActiveCell.Offset(-1, 1).Activate
        ActiveCell.Value = previo + " " + previo1
        salto = salto + 1
        ActiveCell.Offset(salto, -2).Activate
                  
          If ActiveCell.Value = Empty Then
               ActiveCell.Offset(0, 1).Activate
               previo2 = CStr(ActiveCell.Value)
               ActiveCell.Value = ""
               ActiveCell.Offset(-2, 1).Activate
               ActiveCell.Value = previo + " " + previo1 + " " + previo2
               salto = salto + 1
               ActiveCell.Offset(salto, -2).Activate
               
                If ActiveCell.Value = Empty Then
                   ActiveCell.Offset(0, 1).Activate
                   previo3 = CStr(ActiveCell.Value)
                   ActiveCell.Value = ""
                   ActiveCell.Offset(-1, 1).Activate
                   ActiveCell.Value = previo + " " + previo1 + " " + previo2 + " " + previo3
                   salto = salto + 1
                   ActiveCell.Offset(salto, -2).Activate
                End If
               
          End If
          
    End If
    contador = contador + 1
Loop
End Sub


Sub tresDatosCentro()
' Posicionarse en primera fila de las tres a tratar
previo = CStr(ActiveCell.Value)
ActiveCell.Offset(1, 0).Activate
previo1 = CStr(ActiveCell.Value)
ActiveCell.Offset(1, 0).Activate
previo2 = CStr(ActiveCell.Value)
ActiveCell.Offset(-1, 0).Activate
ActiveCell.Value = previo + " " + previo1 + " " + previo2
ActiveCell.Offset(-1, 0).Activate
ActiveCell.EntireRow.Delete
ActiveCell.Offset(1, 0).Activate
ActiveCell.EntireRow.Delete
End Sub


Sub dosDatos()
' Posicionarse en primera fila de las tres a tratar
previo = CStr(ActiveCell.Value)
ActiveCell.Offset(1, 0).Activate
previo1 = CStr(ActiveCell.Value)
ActiveCell.Offset(-1, 0).Activate
ActiveCell.Value = previo + " " + previo1
' ActiveCell.Offset(1, 0).Activate
' ActiveCell.EntireRow.Delete
End Sub







\***\*\*\*\*\***\*\***\*\*\*\*\*** GENERAR JSON ****\*\*****\*\*****\*\*****\*\*\*****\*\*****\*\*****\*\*****
- https://www.csvjson.com/csv2json
- Options: Parse numbers y array.
- Download.
- Si esta abierto VS Code lo abre en el..
- Tambien lo pone en C>:...Download
- Lo genera con el nombre csvjson.json
- Guardar como desde VS Code.
- Le cambio el nombre = al csv
- Copiarlo a src/assets de la app
- 