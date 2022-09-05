export const options: RequestInit = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_APIKEY || "",
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST || "",
  },
};