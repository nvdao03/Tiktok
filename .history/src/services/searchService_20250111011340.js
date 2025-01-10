import { getUsersSearch } from '../../../../utils/http';

export const searchService = async (query, type = 'less') => {
  try {
    const res = await getUsersSearch(`users/search`, {
      params: {
        q: query,
        type: type,
      },
    });
    return res.data;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    console.log(error);
  }
};
