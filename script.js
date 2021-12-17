function consultar() {
    let data = $(".data").val()
    const chave = 'dNNwrKhvOInpkMrKEmgsoja5JwVjMgnlOdiYIyDB'

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${chave}&date=${data}`,
        success: function (resultado) {
            mostrarResultado(resultado)
            $(".data").css({border: "2px solid black"})
            $("#texto").html(" ")
        },
        error: function () {
            $(".data").css({border: "2px solid red"})
            $("#texto").html("Please, enter a date from June 16th, 1995 to the current date (except for June 17th, 18th and 19th, 1995).").css({color: "red"})
        }
    })
}


function mostrarResultado(consulta) {
    const data = $("#data")
    const midia = $("#midia")
    const titulo = $("#titulo")
    const autor = $("#autor")
    const explicacao = $("#explicacao")


    data.html(moment(consulta.date).format('MMMM Do YYYY'))
    titulo.html(consulta.title)
    autor.html(`<strong>Media credit:</strong> ${consulta.copyright}`)
    explicacao.html(`<strong>Explanation:</strong> ${consulta.explanation}`)


    if (consulta.media_type == 'image') {
        midia.html(`<img id="midiaJS" src="${consulta.url}" width: "500"/>`)
    } else {
        midia.html(`<iframe width="500" height="300" id="midiaJS" src="${consulta.url}?autoplay=1&mute=1">
        </iframe>`)
    }
}