import { moviesApi } from "@/api";
import HList from "@/components/HList";
import Loader from "@/components/Loader";
import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";

const Container = styled.ScrollView``;
const SearchBar = styled.TextInput`
  background-color: white;
  padding: 10px 15px;
  border-radius: 15px;
  width: 90%;
  margin: 10px auto;
  margin-bottom: 20px;
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const {
    isLoading: moviesLoading,
    data: moviesData,
    refetch: searchMovies,
  } = useQuery(["searchMovies", query], moviesApi.search, { enabled: false });
  const {
    isLoading: tvLoading,
    data: tvData,
    refetch: searchTv,
  } = useQuery(["searchTv", query], moviesApi.search, { enabled: false });

  const onChangeText = (text: string) => setQuery(text);
  const onSubmit = () => {
    if (query === "") return;
    searchMovies();
    searchTv();
  };

  return (
    <Container>
      <SearchBar
        placeholder="영화나 TV 프로그램을 검색하세요."
        placeholderTextColor={"grey"}
        returnKeyType="search"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
      {moviesLoading || tvLoading ? <Loader /> : null}
      {moviesData && <HList title="Movie Results" data={moviesData.results} />}
      {tvData && <HList title="TV Results" data={tvData.results} />}
    </Container>
  );
};

export default Search;
