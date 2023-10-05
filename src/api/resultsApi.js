import axios from "axios";

const URL =
'https://real-time-web-search.p.rapidapi.com/search';

export const getResults = async (search) => {
  try {
    const response = await axios.get(URL, {
        params: {
            q: search,
            limit: '20',
          },
            headers: {
                'X-RapidAPI-Key': '2c94fdfb12msh251ba9647ea634dp156981jsn227cc101c964',
                'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
          },
    });
    // console.log(response);
    return response;
 
  } catch (error) {
    console.log(error);
  }
};
