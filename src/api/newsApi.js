import axios from 'axios';

const apiKey = '1afaabbf40d007597342cc44a808d3ba'
const baseURL = 'https://gnews.io/api/v4'

//Fetch news articles based on a specific category.
export const fetchNews = async (category) => {
    const url = `${baseURL}/top-headlines?category=${category}&lang=en&country=in&max=100&sortby=publishedAt&apikey=${apiKey}`;

    try {
        const response = await axios.get(url);
        console.log('NEWS Response')
        return response;
    } catch (error) {
        console.log(`Error fetching news for category ${category}: ${error.message}`);
    }
};

//Search news articles based on a search term.
export const searchNews = async (searchTerm) => {
    const url = `${baseURL}/search?q=${searchTerm}&lang=en&country=in&max=100&sortby=publishedAt&apikey=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(`Error searching news for term ${searchTerm}: ${error.message}`);
    }
};

