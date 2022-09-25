import test from 'ava';
import i18next from 'i18next';
import postProcessor from './index.js';

test.before(() => {
	i18next.use(postProcessor).init({
		lng: 'fr',
		resources: {
			fr: {
				translation: {
					key: '&ccedil;a va bien. tr&#232;s bien.',
				},
			},
		},
	});
});

test('decodes html entities', (t) => {
	const expected = 'ça va bien. très bien.';
	const actual = i18next.t('key', {postProcess: 'decode'});

	t.is(expected, actual);
});

test('non-decodable', (t) => {
	const expected = "s'il vous plait aimez tous";
	const actual = i18next.t("s'il vous plait aimez tous", {
		postProcess: 'decode',
	});

	t.is(expected, actual);
});
