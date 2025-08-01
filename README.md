# Weather App

##Demo
https://weatherapp-9a89.onrender.com

## ���️ Description
A dynamic weather application built using Node.js, Express.js, and EJS templating. It fetches real-time weather data from the OpenWeatherMap API based on user input and displays current temperature, weather conditions, and more in a clean, responsive UI.

## ��� Installation

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
```

## ⚙️ Setup

1. Create a file named `.env` in the root directory.
2. Add your OpenWeatherMap API key:
```
API_KEY=your_openweathermap_api_key
```

## ��� Usage

```bash
npm start
```

Then open your browser and go to:

```
http://localhost:3000
```

## �� Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- OpenWeatherMap API
- dotenv (for environment variables)
- HTML & CSS (for UI styling)

## ��� Features

- Search weather by city name.
- Display current temperature, weather condition, humidity, and feels like temperature.
- Responsive and user-friendly interface.
- Error handling for invalid city names or API issues.

## ��� Folder Structure

```
weather-app/
├── public/
│   └── css/
│       └── style.css
├── views/
│   ├── index.ejs
├── .env
├── app.js
└── package.json
```

## ��� License

This project is licensed under the [MIT License](LICENSE).

