function excluirCurso() {
    alert("Curso excluído com sucesso!");
}

function editar() {
    alert("Curso editado com sucesso!");
    window.location.href = "index.html";
}

function cadastrar() {
    var validarNome = document.getElementById('nomeCurso').value;
    var validarCoordenador = document.getElementById('txtCoordenador').value;
    var validarArea = document.getElementById('txtArea').value;
    var validarTurno = document.getElementById('txtTurno').value;
    var validarPeriodo = document.getElementById('txtPeriodo').value;

    if (validarNome == "") {
        document.getElementById('errorNome').style.display = 'block';
    } else {
        document.getElementById('errorNome').style.display = 'none';
    }

    if (validarCoordenador == "") {
        document.getElementById('errorCoordenador').style.display = 'block';
    } else {
        document.getElementById('errorCoordenador').style.display = 'none';
    }

    if (validarArea == "") {
        document.getElementById('errorArea').style.display = 'block';
    } else {
        document.getElementById('errorArea').style.display = 'none';
    }

    if (validarTurno == "") {
        document.getElementById('errorTurno').style.display = 'block';
    } else {
        document.getElementById('errorTurno').style.display = 'none';
    }

    if (validarPeriodo == "") {
        document.getElementById('errorPeriodo').style.display = 'block';
    } else {
        document.getElementById('errorPeriodo').style.display = 'none';
    }

    if (validarNome !== "" && validarCoordenador !== "" && validarArea !== "" && validarTurno !== "" && validarPeriodo !== "") {
        alert("Curso cadastrado com sucessoooo!.");
        window.location.href = "index.html";
    }
}
