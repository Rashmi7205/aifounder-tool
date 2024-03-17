import getMetaData from "metadata-scraper"

export async function GET(){
  const url = 'https://about.meta.com/'
	const data = await getMetaData(url)
  return Response.json(data);
}