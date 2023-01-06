import axios from 'axios';

const searchImages = async (term = 'bitcoin') => {
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=Iu6vPciw46vieGuT_aKcQQJ_Jjrj5slkDpKHFRJKSI0', { 
        
            query: term,
        },
    );

    console.log(response);
    return response.data.results;
};

export default searchImages;