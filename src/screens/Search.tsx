import React, { useState } from "react";
import { View, Text } from "react-native";
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
  const onChangeText = (text: string) => setQuery(text);
  console.log(query);
  return (
    <Container>
      <SearchBar
        placeholder="영화나 TV 프로그램을 검색하세요."
        placeholderTextColor={"grey"}
        returnKeyType="search"
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Search;
