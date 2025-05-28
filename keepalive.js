const interval = 100; // 1 second

setInterval(() => {
  process.stdout.write(`Keepalive message at ${new Date().toISOString()}\n`);
}, interval);
