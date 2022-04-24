const apiKey = "6f26fd536dd6192ec8a57e94141f8b20";

export const getMovies = async () => {
  let destacado;
  let movie;

  await fetch(
    `https://api.themoviedb.org/3/tv/71446?api_key=${apiKey}&language=en-US`
  )
    .then((response) => response.json())
    .then((result) => {
      destacado = result;
    });

  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then((response) => response.json())
    .then((result) => {
      movie = result;
    });
  return { destacado, movie };
};
