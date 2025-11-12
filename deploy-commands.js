import 'dotenv/config';
import { REST, Routes, SlashCommandBuilder } from 'discord.js';

const commands = [
  new SlashCommandBuilder().setName('play').setDescription('Play a song').addStringOption(o => o.setName('query').setDescription('YouTube/Spotify/keyword').setRequired(true)),
  new SlashCommandBuilder().setName('skip').setDescription('Skip current song'),
  new SlashCommandBuilder().setName('queue').setDescription('Show queue'),
  new SlashCommandBuilder().setName('pause').setDescription('Pause playback'),
  new SlashCommandBuilder().setName('resume').setDescription('Resume playback'),
  new SlashCommandBuilder().setName('volume').setDescription('Set volume (0-200)').addIntegerOption(o => o.setName('percent').setRequired(true)),
  new SlashCommandBuilder().setName('loop').setDescription('Set loop mode').addStringOption(o => o.setName('mode').addChoices(
    { name: 'off', value: 'off' },
    { name: 'song', value: 'song' },
    { name: 'queue', value: 'queue' }
  ).setRequired(true))
].map(c => c.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('Registering commands to guild', process.env.GUILD_ID);
    if (!process.env.APPLICATION_ID || !process.env.GUILD_ID) {
      throw new Error('APPLICATION_ID or GUILD_ID not set in .env');
    }
    await rest.put(
      Routes.applicationGuildCommands(process.env.APPLICATION_ID, process.env.GUILD_ID),
      { body: commands }
    );
    console.log('✅ Slash commands registered.');
  } catch (err) {
    console.error('Failed to register commands:', err);
    process.exit(1);
  }
})();
