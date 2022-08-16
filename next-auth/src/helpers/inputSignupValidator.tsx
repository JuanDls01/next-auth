import { inputSignUp } from "../redux/actions/auth";

const validator = (input: inputSignUp) => {
    let errors = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    };
    if (!input.first_name) errors.first_name = 'El nombre es requerido';
    else if (input.first_name.length < 2) errors.first_name = 'El nombre debe contener 2 caracteres minimo';
    else if (input.first_name.length > 23) errors.first_name = 'El nombre debe contener 23 caracteres maximo';
    else if (input.first_name.match(/^[a-zA-Z ,.'-]+$/) === null) errors.first_name = 'El nombre solo puede contener letras';
    if (!input.last_name) errors.last_name = 'El apellido es requerido';
    else if (input.last_name.length < 2) errors.last_name = 'El apellido debe contener 2 caracteres minimo';
    else if (input.last_name.length > 23) errors.last_name = 'El apellido debe contener 23 caracteres maximo';
    else if (input.last_name.match(/^[a-zA-Z ,.'-]+$/) === null) errors.last_name = 'El apellido solo puede contener letras';
    if (!input.password) errors.password = 'La contraseña es requerido';
    else if (input.password.length < 8) errors.password = 'La contraseña debe contener 8 digitos minimo';
    else if (input.password.length > 20) errors.password = 'La contraseña debe contener 20 digitos maximo';
    if (!input.re_password) errors.re_password = 'La contraseña debe ser confirmada';
    else if (input.password !== input.re_password) errors.re_password = 'Las contraseñas no coinciden';
    if (!input.email) errors.email = 'El correo es requerido';
    return errors;
}

export default validator;