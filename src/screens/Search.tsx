import { moviesApi } from "@/api";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";

const Container = styled.ScrollView``;
const SearchBar = styled.TextInput`
  background-color: white;
  padding: 10px 15px;
  border-radius: 15px;
  width: 90%;
  margin: 20px auto;
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const {
    isLoading: isMoviesLoading,
    data: moviesData,
    refetch: searchMovies,
  } = useQuery(["searchMovies", query], moviesApi.search, { enabled: false });
  const {
    isLoading: isTvLoading,
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
    </Container>
  );
};

export default Search;
