'use strict';

const Tip = require('../classes/tip');

module.exports = function (nodecg, nucleus) {
	const streamlabs = nodecg.extensions['nodecg-streamlabs'];
	streamlabs.on('donation', dono => {
		nucleus.emitNote(new Tip({
			name: dono.name,
			amount: parseFloat(dono.amount.amount),
			comment: dono.message
		}));
	});
};
