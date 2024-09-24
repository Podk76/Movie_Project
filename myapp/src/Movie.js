function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <li>
      <img src={medium_cover_image} alt={title} />
      <h2>{title}</h2>
      {genres && genres.length > 0 ? (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null}
      <h3>{summary}</h3> {/* Moved summary here */}
    </li>
  );
}

export default Movie;
