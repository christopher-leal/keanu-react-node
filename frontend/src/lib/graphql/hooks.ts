import { useQuery } from "@apollo/client";
import { getImage } from "./queries";

export function useGetImage(
  width: string,
  height: string |null,
  greyScale: boolean,
  young: boolean
) {
  const { data, loading, error } = useQuery(getImage, {
    variables: {
      width,
      height,
      greyScale,
      young,
    },
  });
  return { url: data?.keanuImage?.url, loading, error };
}
