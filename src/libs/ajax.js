/**
 * A simple Ajax lib 
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default async function ajax(url, options) {
  const response = await fetch(url, options);
  checkStatus(response);
  return await response.json();
}