const _apiKEY = "zzGkxuwaxfEemzmbHmtiWDROAFMCWDCgM35Nuvq6nJc";

export default class ImageService {
    getUkrainianImages = async (start, count, query = "Ukraine") => {
        const res = await fetch(`https://api.unsplash.com/photos?count=${count}&start=${start}&query=${query}&client_id=${_apiKEY}`);
        if (!res.ok) {
            throw new Error(`Fetch Error ${res.url}`);
        }
        return await res.json();
    };
}
