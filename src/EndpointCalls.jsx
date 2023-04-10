export const BLOGURL = 'https://techspace-website-production.up.railway.app/blog/'
export const headers = new Headers({
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json; charset=utf-8',
});

export async function FetchBlogs(setBlogs, setBlogError) {
    try {
      const response = await fetch(`${BLOGURL}getAllPost`, {
        method: 'GET',
        headers,
      });
      if (!response.ok) {
        setBlogError(response.status);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      setBlogError(500);
      console.error(`Error fetching data: ${error}`);
    }
  };
  


  