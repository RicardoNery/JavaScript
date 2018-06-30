//Usando try


function Divisao(a, b) {
    try {
        return (a / b);
    }
    catch (error) {
        console.error(error);
    }
}

console.log(Divisao({}));