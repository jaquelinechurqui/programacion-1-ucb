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
