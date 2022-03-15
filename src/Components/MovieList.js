import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from "react-redux";
import { fetchTitlesFromAPI } from "../Actions/actions";

const MovieList = () => {

  const titles = useSelector(store => store.titles);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTitles() {
      console.log("dispatching fetch titles");
      await dispatch(fetchTitlesFromAPI("peter"));
      setIsLoading(false);
    }

    if (isLoading) loadTitles();

  }, [dispatch, isLoading]);

  if (isLoading) return (<b>Loading...</b>);

  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        {titles.map(m => <MovieCard id={m.id} title={m.title} img={m.posterUrl} plot={m.plot} key={m.id} />)}
      </Stack>
    </Container>
  );
}

export default MovieList;