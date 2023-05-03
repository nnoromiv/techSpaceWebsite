import {BLOGURL, HEADERS} from './Constants'
export async function FetchBlogs(setBlogs, setBlogError) {
    try {
      const response = await fetch(`${BLOGURL}getAllPost`, {
        method: 'GET',
        headers: HEADERS,
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
}