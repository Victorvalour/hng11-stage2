// services/getProductById.ts
import axios from 'axios';

const API_URL = 'https://api.timbu.cloud/products';


interface ProductParams {
  productId: string;

}

const getProductById = async ({ productId }: ProductParams) => {
  try {
    const response = await axios.get(`${API_URL}/${productId}`, {
      params: {
        organization_id: "dc816c783dc54960a99447b5c54de2ba",
        Appid: "VRC0CCV1JZ761VR",
        Apikey: "deba1662bd49493c926c3f7d17a9738920240712131318668544"
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw error;
  }
};

export default getProductById;