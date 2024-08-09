import { useQuery } from "@apollo/client";
import { getHistory, getImage } from "./queries";
import { HistoryType } from "../types/history.type";

export function useGetImage({
  width,
  height,
  greyscale,
  young,
  id,
}: {
  width: string;
  height: string | null;
  greyscale: boolean;
  young: boolean;
  id: string | null;
}) {
  const { data, loading, error } = useQuery(getImage, {
    variables: {
      width: Number(width),
      height: Number(height),
      greyscale,
      young,
      historyId: id,
    },
  });
  return { url: data?.keanuImage?.url, loading, error };
}

export function useGetHistory(limit?: number) {
  const { data, loading, error } = useQuery<{ getHistory: HistoryType[] }>(
    getHistory,
    {
      variables: {
        limit,
      },
      fetchPolicy: "network-only",
    }
  );

  return { data: data?.getHistory || [], loading, error };
}
