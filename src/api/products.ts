import axios from 'axios';

const API_BASE_URL = 'https://api.timbu.cloud';
/* const appId = process.env.VITE_APP_ID; */
/* const apiKey = process.env.VITE_TIMBU_API_KEY;
const organizationId = process.env.VITE_ORGANIZATION_ID; */

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`, {
            params: {
                organization_id: "dc816c783dc54960a99447b5c54de2ba",
                Appid: "VRC0CCV1JZ761VR",
                Apikey: "deba1662bd49493c926c3f7d17a9738920240712131318668544"
            }
        });
        return response.data;
        
    } catch (error) {
        console.error('Error fetching example data:', error);
        throw error;
    }
};
