import fetcher from "./fetcher";

export const postComment  = async (payload) => {
    try {
      const response = await fetcher.post("/binh-luan", payload);
      return response.data?.content;
    } catch (error) {
      throw error.response.data?.content;
    }
  };