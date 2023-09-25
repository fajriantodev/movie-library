const fetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

export default fetcher;
