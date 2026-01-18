const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function queryStrapi(endpoint: string) {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    next: { revalidate: 60 }, // Har 1 minute baad naya data check karega
  });

  if (!res.ok) throw new Error("Failed to fetch data from Strapi");
  
  return res.json();
}