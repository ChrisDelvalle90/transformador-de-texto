function maiuscula() 
{
    let frase = document.getElementById("frase").value
    if(frase == 0)
    {
        alert("Campo vazio!")
    }
    else
    {
        alert(frase.toUpperCase())
    }
}

function minuscula()
{
    let frase = document.getElementById("frase").value
    if(frase == 0)
    {
        alert("Campo vazio!")
    }
    else
    {
        alert(frase.toLowerCase())
    }
}

function contador()
{
    let frase = document.getElementById("frase").value
    if(frase == 0)
    {
        alert("Campo vazio!")
    }
    else
    {
        let frase = document.getElementById("frase").value
        let texto = frase.length
        alert(texto + " caracteres")
    }
}