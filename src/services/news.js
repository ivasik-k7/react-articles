const _apiKEY = "b92d32b5d8624034b46b9a7c68c1e39d";
const _apiURL = `http://newsapi.org/v2/everything?q=Ukraine&from=2020-07-25&sortBy=popularity&apiKey=${_apiKEY}`;

export default class NewsService {
    getUkrainianNews = async () => {
        const res = await fetch(_apiURL);
        if (!res.ok) {
            throw new Error("Fetch Error...");
        }
        return await res.json();
    };
}
