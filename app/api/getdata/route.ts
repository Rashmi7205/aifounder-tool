import getMetaData from "metadata-scraper";

export async function POST(request: Request) {
  const {url} = await request.json();
  try{
    const metaData = await getMetaData(url);
    return Response.json({ metaData })
  }catch{
    return Response.json({ message:"Internal server error",url })
  } 
}