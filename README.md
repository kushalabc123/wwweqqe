# McVerse Music Bot (package)

## Quick setup

1. Copy `.env.example` to `.env` and fill in `DISCORD_TOKEN`, `APPLICATION_ID`, `GUILD_ID`, `VOICE_CHANNEL_ID` and `SESSION_SECRET`.
   The dashboard username is already set to `Kushal` and the password is hashed for security.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Deploy slash commands (one-time):
   ```bash
   node deploy-commands.js
   ```
4. Start the bot (test):
   ```bash
   node src/index.js
   ```
5. To run 24/7 with PM2:
   ```bash
   pm2 start src/index.js --name "McVerse Music Bot" --node-args="--max-old-space-size=256"
   pm2 save
   pm2 startup
   ```

## Dashboard
- Visit http://YOUR_SERVER_IP:3000
- Login with username `Kushal` and your password.
- Use the buttons to skip/pause/resume/stop.

## Notes
- This uses ESM modules (Node 18+). Use Node 20 recommended.
- Keep `.env` secret.
