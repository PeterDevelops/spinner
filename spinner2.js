const spinner = "|/-\\|/-\\|";
let delay = 0;

for (const e of spinner) {
setTimeout(() => {
  process.stdout.write('\r' + e + '   ');
}, delay);
delay += 200;
}