document.querySelectorAll('.expandir-detalhes').forEach(span => {
	span.addEventListener('click', () => {
		const p = span.closest('.descricao');
		const expandido = p.classList.contains('expandido');

		if (!expandido) {
			// Expandindo com animação
			p.classList.add('expandido');
			const textoCompleto = p.dataset.completo;
			p.childNodes[0].nodeValue = textoCompleto;
			span.textContent = ' - detalhes';
		} else {
			// Inicia animação de fechamento
			p.classList.add('fechando');

			// Espera a transição terminar antes de trocar o texto
			p.addEventListener('transitionend', function handler(e) {
				if (e.propertyName === 'max-height') {
					p.classList.remove('expandido', 'fechando');
					const textoResumo = p.dataset.resumo;
					p.childNodes[0].nodeValue = textoResumo;
					span.textContent = ' + detalhes';
					p.removeEventListener('transitionend', handler);
				}
			});
		}
	});
});
