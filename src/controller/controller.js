const API_KEY = '68a61494e620cbc977a4da9152fbb726';

exports.renderHomePage = (req, res) => {
  res.render('index');
};

exports.renderAboutPage = (req, res) => {
  res.render('about');
};

exports.getWeather = (req, res) => {
  console.log(req.body);
  res.send('Your form has been submitted!');
};
