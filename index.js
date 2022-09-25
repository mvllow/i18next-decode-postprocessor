import {decode} from 'html-entities';

const plugin = {
	name: 'decode',
	type: 'postProcessor',
	process(value) {
		return decode(value);
	},
};

export default plugin;
