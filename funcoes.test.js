const { validarNomeMusica, calcularDesconto, formatarTempo, isVolumeValido, gerarId } = require('./funcoes');

test('Nome da música não pode ser vazio', () => { expect(validarNomeMusica("Musica 1")).toBe(true); });
test('Deve aplicar 10% de desconto com cupom PROMO10', () => { expect(calcularDesconto(100, 'PROMO10')).toBe(90); });
test('Deve formatar 125 segundos para 2:5', () => { expect(formatarTempo(125)).toBe("2:5"); });
test('Volume 101 deve ser inválido', () => { expect(isVolumeValido(101)).toBe(false); });
test('ID gerado deve começar com ID-', () => { expect(gerarId()).toMatch(/^ID-/); });