function validarNomeMusica(nome) { return nome.length > 0; }
function calcularDesconto(preco, cupom) { return cupom === 'PROMO10' ? preco * 0.9 : preco; }
function formatarTempo(segundos) { return Math.floor(segundos / 60) + ":" + (segundos % 60); }
function isVolumeValido(volume) { return volume >= 0 && volume <= 100; }
function gerarId() { return "ID-" + Math.random().toString(36).substr(2, 9); }

module.exports = { validarNomeMusica, calcularDesconto, formatarTempo, isVolumeValido, gerarId };