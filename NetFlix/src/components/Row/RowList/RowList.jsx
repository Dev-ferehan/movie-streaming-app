import React from "react";
import Row from "../Row/Row";
import requists from "../../../utils/requist";
const RowList = () => {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requists.fetchNetflixOriginals}
        islargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requists.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requists.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requists.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requists.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requists.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requists.fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={requists.fetchTV} />
      <Row title="Documentaries" fetchUrl={requists.fetchDocumentaries} />
    </div>
  );
};

export default RowList;
