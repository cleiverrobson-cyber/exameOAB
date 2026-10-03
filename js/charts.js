/* Gráficos SVG simples, sem dependências. */
(function (global) {
  var OAB = global.OAB = global.OAB || {};
  var U = OAB.util;
  var C = OAB.charts = {};

  /* Barras horizontais. itens: [{ rotulo, valor (0..1 ou número), cor, texto }] */
  C.barrasH = function (itens, op) {
    op = op || {};
    var larg = 640, altLinha = 24, esq = op.esquerda || 150, dir = 56;
    var alt = itens.length * altLinha + 10;
    var max = op.max || Math.max.apply(null, itens.map(function (i) { return i.valor || 0; }).concat([1]));
    var util = larg - esq - dir;
    var s = '<svg viewBox="0 0 ' + larg + ' ' + alt + '" role="img" aria-label="' + U.esc(op.titulo || 'Gráfico de barras') + '">';
    if (op.linha != null) {
      var xl = esq + util * (op.linha / max);
      s += '<line x1="' + xl + '" x2="' + xl + '" y1="0" y2="' + alt + '" stroke="currentColor" stroke-dasharray="4 4" opacity=".45"/>';
    }
    itens.forEach(function (it, i) {
      var y = i * altLinha + 5;
      var w = Math.max(0, util * ((it.valor || 0) / max));
      s += '<text x="' + (esq - 8) + '" y="' + (y + 14) + '" text-anchor="end">' + U.esc(it.rotulo) + '</text>';
      s += '<rect x="' + esq + '" y="' + (y + 3) + '" width="' + util + '" height="14" rx="4" fill="currentColor" opacity=".08"/>';
      if (it.valor != null) s += '<rect x="' + esq + '" y="' + (y + 3) + '" width="' + w + '" height="14" rx="4" fill="' + (it.cor || '#2f55c8') + '"><title>' + U.esc(it.rotulo + ': ' + (it.texto || it.valor)) + '</title></rect>';
      s += '<text x="' + (larg - dir + 8) + '" y="' + (y + 14) + '">' + U.esc(it.texto != null ? it.texto : it.valor) + '</text>';
    });
    return '<div class="grafico">' + s + '</svg></div>';
  };

  /* Linha. pontos: [{ rotulo, valor }], valores entre 0 e max */
  C.linha = function (pontos, op) {
    op = op || {};
    var larg = 640, alt = 220, m = { t: 16, r: 16, b: 30, l: 36 };
    var max = op.max || Math.max.apply(null, pontos.map(function (p) { return p.valor; }).concat([1]));
    var w = larg - m.l - m.r, h = alt - m.t - m.b;
    var x = function (i) { return m.l + (pontos.length <= 1 ? w / 2 : (w * i) / (pontos.length - 1)); };
    var y = function (v) { return m.t + h - (h * v) / max; };
    var s = '<svg viewBox="0 0 ' + larg + ' ' + alt + '" role="img" aria-label="' + U.esc(op.titulo || 'Gráfico de linha') + '">';
    [0, 0.25, 0.5, 0.75, 1].forEach(function (f) {
      var yy = y(max * f);
      s += '<line class="eixo" x1="' + m.l + '" x2="' + (larg - m.r) + '" y1="' + yy + '" y2="' + yy + '"/>';
      s += '<text x="' + (m.l - 6) + '" y="' + (yy + 4) + '" text-anchor="end">' + Math.round(max * f) + '</text>';
    });
    if (op.meta != null) {
      s += '<line x1="' + m.l + '" x2="' + (larg - m.r) + '" y1="' + y(op.meta) + '" y2="' + y(op.meta) + '" stroke="#15803d" stroke-dasharray="6 4" stroke-width="1.5"/>';
      s += '<text x="' + (larg - m.r) + '" y="' + (y(op.meta) - 5) + '" text-anchor="end" style="fill:#15803d">' + U.esc(op.rotuloMeta || 'meta') + '</text>';
    }
    if (pontos.length) {
      var d = pontos.map(function (p, i) { return (i ? 'L' : 'M') + x(i) + ' ' + y(p.valor); }).join(' ');
      s += '<path d="' + d + '" fill="none" stroke="' + (op.cor || '#2f55c8') + '" stroke-width="2.5" stroke-linejoin="round"/>';
      pontos.forEach(function (p, i) {
        s += '<circle cx="' + x(i) + '" cy="' + y(p.valor) + '" r="4" fill="' + (op.cor || '#2f55c8') + '"><title>' + U.esc(p.rotulo + ': ' + p.valor) + '</title></circle>';
        if (pontos.length <= 12 || i % Math.ceil(pontos.length / 12) === 0) {
          s += '<text x="' + x(i) + '" y="' + (alt - 10) + '" text-anchor="middle">' + U.esc(p.rotulo) + '</text>';
        }
      });
    }
    return '<div class="grafico">' + s + '</svg></div>';
  };

  /* Anel de progresso */
  C.anel = function (frac, op) {
    op = op || {};
    var r = op.raio || 54, esp = op.espessura || 10, tam = (r + esp) * 2;
    var circ = 2 * Math.PI * r;
    var f = Math.max(0, Math.min(1, frac || 0));
    return '<svg class="anel" width="' + tam + '" height="' + tam + '" viewBox="0 0 ' + tam + ' ' + tam + '" role="img" aria-label="' + Math.round(f * 100) + '%">' +
      '<circle cx="' + tam / 2 + '" cy="' + tam / 2 + '" r="' + r + '" fill="none" stroke="currentColor" opacity=".1" stroke-width="' + esp + '"/>' +
      '<circle cx="' + tam / 2 + '" cy="' + tam / 2 + '" r="' + r + '" fill="none" stroke="' + (op.cor || '#2f55c8') + '" stroke-width="' + esp + '" stroke-linecap="round" stroke-dasharray="' + circ + '" stroke-dashoffset="' + circ * (1 - f) + '" transform="rotate(-90 ' + tam / 2 + ' ' + tam / 2 + ')"/>' +
      (op.texto ? '<text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" style="font-size:' + (op.tamanhoTexto || 22) + 'px;font-weight:700;fill:currentColor">' + U.esc(op.texto) + '</text>' : '') +
      '</svg>';
  };
})(typeof window !== 'undefined' ? window : globalThis);
