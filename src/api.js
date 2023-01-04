import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID dPoZL5Xc0BTClnQx1vRM0kFuud4KSimCK3r8YqRFaho',
        }, 
        params: {
            query: term,
        },
    });

    console.log(response);
    return response.data.results;
};

export default searchImages;