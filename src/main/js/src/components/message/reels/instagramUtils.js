// instagramUtils.js
import axios, {AxiosResponse} from "axios";
import cheerio from "cheerio";
const {REQUEST_METHOD} = require("../../../api/ApiCaller");

async function getReelInfoFromLink(link) {
    try {
        let config = {
            url: "https://jsonlink.io/api/extract?url="+link,
            method: REQUEST_METHOD.GET,
        }

        const response = await axios(config);

        const html = response.data
        const $ = cheerio.load(html);

        const title = html.title
        const description = html.description
        const previewImage = html.images[0]

        return {
            title,
            description,
            previewImage,
            reelLink: link,
        };
    } catch (error) {
        console.error('Error fetching Instagram reel information:', error);
        return null;
    }
}

export const ReelsService = {
    getReelInfoFromLink,
}
