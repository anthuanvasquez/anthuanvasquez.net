export const useGetFetch = async (path: string) => {
  const config = useRuntimeConfig();

  const { data, pending, error } = await useFetch(path, {
    baseURL: config.public.BASE_URL,
  });

  return { data, pending, error };
};
