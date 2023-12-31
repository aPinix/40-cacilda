import { basePath } from '../configs/variables';
import { getJsonData } from './Convert';
import { removeDuplicateSlashes } from './String';

const fetchData = async () => {
  try {
    const response = await fetch(removeDuplicateSlashes(`${basePath}/data.txt`));
    const data = await response.text();
    const parsedData = JSON.parse(getJsonData(data));
    return parsedData;
  } catch (error) {
    console.error('Error fetching CSV data:', error);
    return null;
  }
};

export default fetchData;
