

// Require the necessary discord.js classes
const Discord = require('discord.js');
//idk what this is... might delete later
//const gatewayIntentBits = Discord.GatewayIntentBits;GUILDS
//creating client
const client = new Discord.Client({ 
	intents: [
		Discord.GatewayIntentBits.Guilds,
		Discord.GatewayIntentBits.GuildMessages,
		Discord.GatewayIntentBits.MessageContent,
		Discord.GatewayIntentBits.GuildVoiceStates
	]
 });
//creating events listener
const events = Discord.Events;
//gets bot token from the configuration JSON
const { token } = require('./config.json');
//setting prefix used for commands
const cmdPrefix = "*";

//don't think i need this
// Create a new client instance
//const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//when the client is ready, notify ready in console
client.once(events.ClientReady, readyClient => {
	console.log(`Beep Boop ${readyClient.user.tag} powering up!`);
});


client.on('messageCreate', message => {
	//This checks to see if a message starts with the prefix or is from a bot
	if (!message.content.startsWith(cmdPrefix) || message.author.bot) {
		if (message.content.toLowerCase().includes("hucklebot")){
			message.channel.send({ files: [{ attachment: "./Resources/guesswhat.JPG" }] });
			//message.channel.send("fack you!", { tts: true, files: [{ attachment: "./Resources/guesswhat.jpg" }] }); //TTS and file attachment no go
			//message.channel.send("fack you!", {tts: true});		//TTS not working
		} return;
	}

	if (message.content.startsWith(cmdPrefix)) {
		//remove first part of command
		//This should eventually turn command into an array to accept multiple arguments
		let command = message.content.slice(cmdPrefix.length).split(" ");
		command[0] = command[0].toLowerCase();
		console.log(command[1]);
		if (command[0] === "ping"){
			return message.channel.send("Pong!");
		}
		if (command[0] === "pong"){
			return message.channel.send("Ping!");
		}
	} return;
});


// Log in to Discord with your client's token
client.login(token);
