import express from 'express';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('homepage');
});

app.get('/game/:gameTitle/:gameCreator', (req, res) => {
  const title = req.params.gameTitle;
  const author = req.params.gameCreator;
  res.render('game', {
    title,
    author,
  });
});

app.get('/gamelist', (req, res) => {
  const games = [
    { title: 'Fortnite', author: 'Epic Games' },
    { title: 'Dirty Bomb', author: 'Splash Damage' },
    { title: 'Battle Field 5', author: 'EA' },
    { title: 'Madden', author: 'EA' },
  ];
  res.render('gamelist', {
    gamesList: games,
  });
});

app.listen(8080, () => {
  console.log('Illuminatti Productions website is now online');
});
