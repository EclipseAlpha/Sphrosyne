const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
commandprefix: '-',
owner: '665457266711068694',
invite: 'https://discord.gg/dBUPkdg6yA'

});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['fun', 'fun Commands'],
		['system', 'system Commands'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(`${client.user.tag} is locked and loaded.`)
client.user.setActivity('with firewalls');

client.login(process.env.token).catch(() => console.log("Invalid token."))
});