document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-contacto');

    formulario.addEventListener('submit', function (e) {
        let esValido = true;

        // Limpiar errores previos
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

        // --- VALIDAR NOMBRE ---
        const nombre = document.getElementById('nombre');
        if (nombre.value.trim() === '') {
            mostrarError('error-nombre', 'O nome es obrigatorio');
            esValido = false;
        }

        // --- VALIDAR EMAIL (RegEx) ---
        const email = document.getElementById('email');
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.value)) {
            mostrarError('error-email', 'Introduce un email válido (ej: nome@empresa.com)');
            esValido = false;
        }

        // --- VALIDAR TELÉFONO (RegEx opcional pero con formato) ---
        const telefono = document.getElementById('telefono');
        const telRegex = /^[6789]\d{8}$/; // 9 dígitos que empiezan por 6,7,8 o 9
        if (telefono.value !== '' && !telRegex.test(telefono.value.replace(/\s/g, ''))) {
            // Solo valida si el usuario ha escrito algo (ya que no es obligatorio)
            alert('O formato do teléfono non é válido (deben ser 9 números)');
            esValido = false;
        }

        // --- VALIDAR ASUNTO ---
        const asunto = document.getElementById('asunto');
        if (asunto.value === '') {
            mostrarError('error-asunto', 'Selecciona un asunto');
            esValido = false;
        }

        // --- VALIDAR OBXECTIVO ---
        const obxectivo = document.getElementById('obxectivo');
        if (obxectivo.value.trim().length < 10) {
            mostrarError('error-obxectivo', 'O obxectivo debe ter polo menos 10 caracteres');
            esValido = false;
        }

        // Bloquear el envío si hay errores
        if (!esValido) {
            e.preventDefault();
        }
    });

    function mostrarError(id, mensaje) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.textContent = mensaje;
            elemento.style.color = "#d32f2f"; // Rojo para visibilidad
        }
    }
});