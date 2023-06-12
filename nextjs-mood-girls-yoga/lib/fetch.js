async function fetchAPI(query, { variables } = {}, read) {
  const url = read
    ? process.env.NEXT_PUBLIC_WEBINY_API_READ_URL
    : process.env.NEXT_PUBLIC_WEBINY_API_MANAGE_URL;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WEBINY_API_SECRET}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
