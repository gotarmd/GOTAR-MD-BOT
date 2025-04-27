const { default: makeWASocket } = require('@whiskeysockets/baileys');

async function startBot() {
  const sock = makeWASocket();

  sock.ev.on('messages.upsert', ({ messages }) => {
    const msg = messages[0];
    if (!msg.key.fromMe && msg.message) {
      sock.sendMessage(msg.key.remoteJid, { text: 'Hello! I am a Bot!' });
    }
  });
}

startBot();
