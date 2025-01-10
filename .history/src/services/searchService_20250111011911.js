import { getUsersSearch } from '../utils/http';

export const searchService = async (query, type = 'less') => {
  try {
    const res = await getUsersSearch(`users/search`, {
      params: {
        q: query,
        type: type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
