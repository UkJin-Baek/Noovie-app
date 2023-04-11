import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Slide from "@/components/Slide";
import HMedia from "@/components/HMedia";
import VMedia from "@/components/VMedia";
import { moviesAPI } from "@/api";
import { useQuery, useQueryClient } from "react-query";

const Container = styled.FlatList``;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const ListTitle = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TrendingScroll = styled.FlatList`
  margin-top: 20px;
`;

const ListContainer = styled.View`
  margin-bottom: 40px;
`;

const ComingSoonTitle = styled(ListTitle)`
  margin-bottom: 30px;
`;

const VSeparator = styled.View`
  width: 20px;
`;
const HSeparator = styled.View`
  height: 20px;
`;

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = () => {
  const queryClient = useQueryClient();

  const {
    isLoading: nowPlayingLoading,
    data: nowPlayingData,
    isRefetching: isRefetchingNowPlaying,
  } = useQuery(["movies", "nowPlaying"], moviesAPI.nowPlaying);
  const {
    isLoading: upcomingLoading,
    data: upcomingData,
    isRefetching: isRefetchingUpcoming,
  } = useQuery(["movies", "upcoming"], moviesAPI.upcoming);
  const {
    isLoading: trendingLoading,
    data: trendingData,
    isRefetching: isRefetchingTrending,
  } = useQuery(["movies", "trending"], moviesAPI.trending);

  // useQuery API 호출로부터 받아온 Loading boolean 값
  const loading = nowPlayingLoading || upcomingLoading || trendingLoading;

  // useQuery API 호출로부터 받아온 isRefetching boolean 값
  const refreshing =
    isRefetchingNowPlaying || isRefetchingUpcoming || isRefetchingTrending;

  const onRefresh = async () => {
    queryClient.refetchQueries(["movies"]);
  };
  const movieKeyExtractor = (item: any) => item.id;

  const renderVMedia = ({ item }: any) => (
    <VMedia
      posterPath={item.poster_path}
      originalTitle={item.original_title}
      voteAverage={item.vote_average}
    />
  );

  const renderHMedia = ({ item }: any) => (
    <HMedia
      posterPath={item.poster_path}
      originalTitle={item.original_title}
      releaseDate={item.release_date}
      overview={item.overview}
    />
  );

  useEffect(() => {}, []);

  return loading ? (
    <Loader>
      <ActivityIndicator size={"large"} />
    </Loader>
  ) : (
    <Container
      onRefresh={onRefresh}
      refreshing={refreshing}
      keyExtractor={movieKeyExtractor}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={HSeparator}
      ListHeaderComponent={
        <>
          <Swiper
            horizontal
            loop
            autoplay
            autoplayTimeout={3.5}
            showsButtons={false}
            showsPagination={false}
            containerStyle={{
              marginBottom: 30,
              width: "100%",
              height: SCREEN_HEIGHT / 4,
            }}
          >
            {nowPlayingData.results.map((movie: any) => (
              <Slide
                key={movie.id}
                backdropPath={movie.backdrop_path}
                posterPath={movie.poster_path}
                originalTitle={movie.original_title}
                overview={movie.overview}
                voteAverage={movie.vote_average}
              ></Slide>
            ))}
          </Swiper>

          <ListContainer>
            <ListTitle>Trending movies</ListTitle>
            <TrendingScroll
              horizontal
              keyExtractor={movieKeyExtractor}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 30 }}
              ItemSeparatorComponent={VSeparator}
              data={trendingData.results}
              renderItem={renderVMedia}
            />
          </ListContainer>

          <ComingSoonTitle>Coming Soon</ComingSoonTitle>
        </>
      }
      data={upcomingData.results}
      renderItem={renderHMedia}
    />
  );
};

export default Movies;
