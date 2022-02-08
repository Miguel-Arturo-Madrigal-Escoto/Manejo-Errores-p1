const retornoExplicito = () => ({ ok: false, error: 'Recurso no disponible'});
const { ok, error } = retornoExplicito();

console.log(`Ok: ${ ok }, Error: ${ error }`);