const fs = require('fs');
fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const reversedString = data.split('').reverse().join('');
  fs.writeFile('text.txt', reversedString, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Файл успешно записан');
  });
});
