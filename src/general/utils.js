let valorPassado = '';
export function validarEFormatarTelefone(event) {
  const inputTelefone = event.target;
  const valorAtual = inputTelefone.value;
  let numero = inputTelefone.value.replace(/[^\d()-\s]/g, '');

  numero = numero.substring(0, 15);
  if (valorAtual.length < valorPassado.length) {
    valorPassado = valorAtual;

    return;
  }

  if (numero.length >= 2 && !numero.includes(')')) {
    numero = `(${numero.substring(0, 2)}) ${numero.substring(2)}`;
  }

  if (numero.length >= 10 && !numero.includes('-')) {
    numero = `${numero.substring(0, 10)}-${numero.substring(10)}`;
  }

  inputTelefone.value = numero;
  valorPassado = valorAtual;
}

export function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regexEmail.test(email);
}

export function validarInput(element) {
  if (element?.required) {
    if (element?.type === 'email' && element?.value !== '') {
      return { resp: validarEmail(element?.value), tipo: 'notemail' };
    }

    if (element?.type === 'tel' && element?.value !== '') {
      return { resp: element?.value.length === 15, tipo: 'notcomplete' };
    }

    return { resp: element?.value !== '', tipo: 'textVoid' };
  }

  return { resp: true };
}