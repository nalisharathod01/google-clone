import axios from "axios";

const URL =
'https://google-search72.p.rapidapi.com/imagesearch';

export const getImageResults = async (search) => {
  try {
    const response = await axios.get(URL, {
        params: {
            q: search,
            num: '20',
          },
            headers: {
                'X-RapidAPI-Key': '2c94fdfb12msh251ba9647ea634dp156981jsn227cc101c964',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
          },
    });
    return response;
 
  } catch (error) {
    console.log(error);
  }
};
