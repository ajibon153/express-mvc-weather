const axios = require('axios');
const API_KEY = '68a61494e620cbc977a4da9152fbb726';

const Weather = require('../model/Weather');

exports.renderHomePage = (req, res) => {
  res.render('index');
};

exports.renderAboutPage = (req, res) => {
  res.render('about');
};

exports.getWeather = (req, res) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${API_KEY}&units=metric`;

  const weather = new Weather(req.body.city);
  weather.validateUserInput();

  if (weather.error.length) {
    res.render('index', {
      error: weather.error.toString(),
    });
  } else {
    axios
      .get(url)
      .then((response) => {
        const { temp: temperture } = response.data.main;
        const { name: location } = response.data;
        res.render('index', {
          weather: `It is currently ${temperture} in ${location}`,
        });
      })
      .catch((error) => console.log(error));
  }
  // res.send('Your form has been submitted!');
};
