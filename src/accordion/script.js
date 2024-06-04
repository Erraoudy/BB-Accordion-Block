document.addEventListener('DOMContentLoaded', function() {
	const accordions = document.querySelectorAll('.wp-block-bb-accordion');

	accordions.forEach(accordion => {
		const defaultState = accordion.getAttribute('data-default-state');

		const accordionItems = accordion.querySelectorAll('.wp-block-bb-accordion-item');

		accordionItems.forEach(item => {
			const button = item.querySelector('.wp-block-bb-accordion-item-header-button');
			const panel = item.querySelector('.wp-block-bb-accordion-item-panel');

			if (defaultState === 'expanded') {
				button.setAttribute('aria-expanded', 'true');
				panel.hidden = false;
				panel.classList.add('open');
			} else {
				button.setAttribute('aria-expanded', 'false');
				panel.hidden = true;
				panel.classList.remove('open');
			}

			button.addEventListener('click', () => {
				const expanded = button.getAttribute('aria-expanded') === 'true';
				button.setAttribute('aria-expanded', !expanded);
				panel.hidden = expanded;
				panel.classList.toggle('open', !expanded);
			});

			button.addEventListener('keydown', (event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault();
					const expanded = button.getAttribute('aria-expanded') === 'true';
					button.setAttribute('aria-expanded', !expanded);
					panel.hidden = expanded;
					panel.classList.toggle('open', !expanded);
				}
			});
		});
	});
});