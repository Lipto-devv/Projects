let days = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"] 
    function obtenerDia(n) {
        if (n<1 || n>7){
            throw new Error ("No es válido padrin@")
        }
        return days[n-1];
    }
console.log(obtenerDia(1));