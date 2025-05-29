const getCurrentDate = () => {
  let currentDate =  new Date(Date.now()).toLocaleDateString("en-IN").split("/").reverse()
  return `${currentDate[0]}-${currentDate[1] - 1}-${currentDate[2]}`
}

const date = getCurrentDate()

export const fetchNews = async (topic) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=${date}&sortBy=publishedAt&apiKey=6c5e551e74da4ff3ba5b6b9f6f6c6acc`
  );
  console.log(response.data)
  const data = await response.json();
  return data.articles;
};
