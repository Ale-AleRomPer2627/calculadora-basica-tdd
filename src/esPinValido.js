function esPinValido(pin) {
    if (typeof pin !== 'string' || pin.length < 4 || pin.length > 6) {
        return false;
    }

    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }

    if (pin.match(/[^0-9]/)) {
        return false;
    }

    if (/^(\d)\1+$/.test(pin)) {
        return false;
    }

    return true;

}   //ABRP2627

export { esPinValido };