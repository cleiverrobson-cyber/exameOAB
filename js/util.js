/* Utilitários gerais: DOM, datas e formatação. */
(function (global) {
  var OAB = global.OAB = global.OAB || {};
  var U = OAB.util = {};
  OAB.views = OAB.views || {};

  U.$ = function (sel, raiz) { return (raiz || document).querySelector(sel); };
  U.$$ = function (sel, raiz) { return Array.prototype.slice.call((raiz || document).querySelectorAll(sel)); };

  U.esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  /* Template com escape automático: html`<p>${texto}</p>`; use U.raw() para HTML confiável. */
  function Raw(v) { this.v = v; }
  U.raw = function (v) { return new Raw(v); };
  U.html = function (partes) {
    var out = partes[0];
    for (var i = 1; i < arguments.length; i++) {
      var v = arguments[i];
      if (v instanceof Raw) out += v.v;
      else if (Array.isArray(v)) out += v.map(function (x) { return x instanceof Raw ? x.v : U.esc(x); }).join('');
      else out += U.esc(v);
      out += partes[i];
    }
    return new Raw(out);
  };
  U.render = function (el, conteudo) { el.innerHTML = conteudo instanceof Raw ? conteudo.v : conteudo; };
  U.str = function (conteudo) { return conteudo instanceof Raw ? conteudo.v : U.esc(conteudo); };

  /* Datas — trabalhamos com "chaves de dia" AAAA-MM-DD no fuso local. */
  U.chaveDia = function (d) {
    d = d || new Date();
    var m = d.getMonth() + 1, dia = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (dia < 10 ? '0' : '') + dia;
  };
  U.hoje = function () { return U.chaveDia(new Date()); };
  U.deChave = function (k) { var p = k.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); };
  U.somarDias = function (k, n) { var d = U.deChave(k); d.setDate(d.getDate() + n); return U.chaveDia(d); };
  U.diffDias = function (a, b) { return Math.round((U.deChave(b) - U.deChave(a)) / 86400000); };
  U.diaSemana = function (k) { return U.deChave(k).getDay(); };

  var MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  var DIAS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  U.DIAS = DIAS;
  U.DIAS_LONGOS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  U.fmtData = function (k, comAno) {
    var d = U.deChave(k);
    return d.getDate() + ' ' + MESES[d.getMonth()] + (comAno ? ' ' + d.getFullYear() : '');
  };
  U.fmtDataLonga = function (k) {
    var d = U.deChave(k);
    return U.DIAS_LONGOS[d.getDay()].toLowerCase() + ', ' + d.getDate() + ' de ' + MESES[d.getMonth()] + '. de ' + d.getFullYear();
  };
  U.fmtMin = function (min) {
    min = Math.round(min || 0);
    var h = Math.floor(min / 60), m = min % 60;
    if (!h) return m + ' min';
    return h + 'h' + (m ? (m < 10 ? '0' : '') + m : '');
  };
  U.fmtRelogio = function (seg) {
    seg = Math.max(0, Math.floor(seg));
    var h = Math.floor(seg / 3600), m = Math.floor((seg % 3600) / 60), s = seg % 60;
    var mm = (m < 10 ? '0' : '') + m, ss = (s < 10 ? '0' : '') + s;
    return h ? h + ':' + mm + ':' + ss : mm + ':' + ss;
  };
  U.pct = function (a, b) { return b ? Math.round((a / b) * 100) : 0; };
  U.plural = function (n, s, p) { return n + ' ' + (n === 1 ? s : (p || s + 's')); };
  U.LETRAS = ['A', 'B', 'C', 'D'];

  U.embaralhar = function (arr, rnd) {
    rnd = rnd || Math.random;
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };
  U.uid = function (pref) { return (pref || 'id') + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); };
  U.normalizar = function (s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  };

  U.toast = function (msg, ms) {
    var box = document.getElementById('avisos');
    if (!box) return;
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    box.appendChild(t);
    setTimeout(function () { t.remove(); }, ms || 2600);
  };

  /* Confirmação dentro da própria página (o confirm() nativo é bloqueado em alguns ambientes). */
  U.confirmar = function (msg, aoConfirmar, op) {
    op = op || {};
    U.modal(U.raw('<p style="margin-top:0">' + U.esc(msg) + '</p><div class="linha" style="justify-content:flex-end;margin-top:16px">' +
      '<button class="botao" data-fechar>Cancelar</button>' +
      '<button class="botao ' + (op.perigo ? 'perigo' : 'primario') + '" id="confirmar-ok">' + U.esc(op.rotulo || 'Confirmar') + '</button></div>'),
      function (modal, fechar) {
        var ok = modal.querySelector('#confirmar-ok');
        ok.focus();
        ok.addEventListener('click', function () { fechar(); aoConfirmar(); });
      });
  };

  U.modal = function (conteudo, aoMontar) {
    var fundo = document.createElement('div');
    fundo.className = 'modal-fundo';
    fundo.innerHTML = '<div class="modal" role="dialog" aria-modal="true">' + U.str(conteudo) + '</div>';
    function fechar() { fundo.remove(); document.removeEventListener('keydown', esc); }
    function esc(e) { if (e.key === 'Escape') fechar(); }
    fundo.addEventListener('click', function (e) { if (e.target === fundo || e.target.closest('[data-fechar]')) fechar(); });
    document.addEventListener('keydown', esc);
    document.body.appendChild(fundo);
    if (aoMontar) aoMontar(fundo.querySelector('.modal'), fechar);
    return fechar;
  };

  U.baixar = function (nome, conteudo, tipo) {
    var blob = new Blob([conteudo], { type: tipo || 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = nome;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };

  U.bipe = function () {
    try {
      var Ctx = global.AudioContext || global.webkitAudioContext;
      var ctx = new Ctx();
      [0, 0.25, 0.5].forEach(function (t) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.frequency.value = 880; o.connect(g); g.connect(ctx.destination);
        g.gain.setValueAtTime(0.0001, ctx.currentTime + t);
        g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t + 0.2);
        o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + 0.22);
      });
    } catch (e) { /* sem áudio disponível */ }
  };
})(typeof window !== 'undefined' ? window : globalThis);
