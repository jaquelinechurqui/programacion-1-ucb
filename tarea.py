#CONVERTIR DE DECIMAL A BINARIO, OCTAL Y HEXADECIMAL
decimal = int(input("Ingrese un numero decimal:"))
#conversion a binario 
binario = bin(decimal) #el bin es una funcion que hay en python, al ocupar esa funcion me imprimira con 0b delante del numero binario
#conversion a octal
octal = oct(decimal)#sucedera al igual que el binario, solo que en este caso delante imprimira con 0o
#conversion a hexadecimal
hexadecimal = hex(decimal)# mismo destino que el octal y binario solo que el prefijo sera 0x

#eliminar el prefijo e imprimir
print ("BINARIO:", binario [2:])
print (f"OCTAL: {octal [2:]}")
print ("HEXADECIMAL:", hexadecimal [2:])

#-------------------------------------------------------------------

#SUMAR DOS NUMEROS  EN BINARIO Y  MOSTRAR EL RESULTADO EN DECIMAL
def suma_binario (bina_1,bina_2):
    dec_1 = int(bina_1, 2)
    dec_2 = int(bina_2, 2)
    result = dec_1 + dec_2
    return result
bina_1 = input ("Ingrese un numero binario: ")
bina_2 = input ("Ingrese otro  numero binario:")
#llamar a la funcion
resultado = suma_binario(bina_1,bina_2)
print( f"La suma de sus numeros binarios es: {resultado}")


#--------------------------------------------------------

#CONVERTIR UN NUMERO HEXADECIMAL A BINARIO
num_hexadecimal = input("Ingrese un numero hexadecimal:")
decimal = int(num_hexadecimal,16)
binario = bin(decimal)
print (f"Su numero binario es: {binario [2:]}")

#CONVERTIR DE BINARIO  A HEXADECIMAL
num_binario = input("Ingrese un numero binario:")
num_decimal = int(num_binario,2)
hexadecimal = hex(num_decimal)
print(f"Su numero hexadecimal es: {hexadecimal [2:]}")

#----------------------------------------------------------------
# REALIZAR OPERACIONES BASICAS COMO SUMA, RESTA, MULTIPLICACION, DIVISION EN BINARIO
def operaciones_binarias (bin_1,bin_2):
    #convertimos a decimal :
    dec_1 = int(bin_1, 2)
    dec_2 = int (bin_2, 2)
    #operaciones basicas
    sumas = dec_1 + dec_2
    restas = dec_1 - dec_2
    multi = dec_1 * dec_2
    division = dec_1 // dec_2 if dec_2 != 0  else None #si  mi divisor es 0 no puedo dividir
    #convertimos a binarios
    result_sumas = bin(sumas)[2:]
    result_restas = bin(restas)[2:]  if restas >= 0 else "-" + bin(abs(restas))[2:]
    result_multi = bin(multi)[2:]
    result_division = bin(division)[2:] if division is not None else "No se puede realizar la division"
    #creamos un diccionario
    return {
        "suma" : result_sumas,
        "resta": result_restas,
        "multiplicacion" : result_multi,
        "division": result_division
    }
#declaramos las variables y le pedimos al usuario que ingrese valores    
bin_1 = input("Ingrese un numero binario:")
bin_2 = input("Ingrese un numero binario:")

#llamamos a la funcion y la guardamos en resultados_1
resultados_1 = operaciones_binarias (bin_1,bin_2)

#imprimimos los resultados en binario
print(f" El resultado de la suma en binario es {resultados_1["suma"]}")
print(f" El resultado de la resta en binario es {resultados_1["resta"]}")
print(f" El resultado de la multiplicacion en binario es {resultados_1["multiplicacion"]}")
print(f" El resultado de la division en binario es {resultados_1["division"]}")

#-------------------------------------------------------------------------------------------------
#TABLA DE MULTIPLICAR USANDO WHILE
numero_tabla= int(input("Ingrese el numero para  la tabla: "))
factor = 1
while factor <= 10:
    resultado = numero_tabla * factor
    print(f"{numero_tabla} x {factor} = {resultado}")
    factor += 1


#-------------------------------------------------------------------------------------------
#ESCRIBIR UN PROGRAMA QUE CALCULE LOS NUMEROS PARES ENTRE  1 Y 50
suma_pares = 0
num  = 1
while num <= 50:
    if num % 2 == 0:
        suma_pares += num
        
    num +=1
print (f"La suma de los numeros pares son: {suma_pares}")

#-------------------------------------------------------------------------------------------------
##ESCRIBIR UN PROGRAMA QUE CALCULE LOS NUMEROS PRIMOS ENTRE  1 Y 100
for variable in range ( 2 ,101):
    es_primo = True

    for var in range (2 , variable):
        if variable % 2 == 0:
            es_primo = False
            break
    if es_primo:  # si sigue siendo primo, lo mostramos
        print(f"Los numeros primos entre 1 y 100 son: {variable}")
    
    