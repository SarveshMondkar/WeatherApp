import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import dotenv from 'dotenv';

const app = express();
const PORT = 3000;
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',(req, res) => {
    res.render('index.ejs', {
        city: null,
        country: null,
        list: null,
        error: null
    });
})

app.post('/weather', async (req, res)=>{
    const city = req.body['city']
    const apikey = process.env.API_KEY;
    const apiUrl = process.env.API_URL;
    try {
        const responseTemp = await axios.get(`${apiUrl}forecast?q=${city}&appid=${apikey}&units=metric`);
        const weatherData = responseTemp.data;


        console.log(weatherData);
        
        if (weatherData.cod === "200") {     
            res.render('index.ejs', {
                city: weatherData.city.name,
                country: weatherData.city.country,
                list : weatherData.list,
                error: null
            });
        } else {
            res.render('index.ejs', {
                city: null,
                error: 'City not found. Please try again.'
            });
        }
    } catch (error) {
        res.render('index.ejs', {
            city: null,
            error: 'City not found. Please try again.'
        });
        
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});