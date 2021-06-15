const { Command } = require('discord.js-commando');


module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'restart',
			aliases: ['reboot'],
			group: 'system',
			memberName: 'restart',
			description: 'Restarts the bot.',
      ownerOnly: true,
		});
	}

async run(msg) {
return	msg.say('Restarting.....');
    console.log('Restarting.....');
    process.exit();
	}
};