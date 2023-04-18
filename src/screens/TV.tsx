import { tvApi } from "@/api";
import Loader from "@/components/Loader";
import VMedia from "@/components/VMedia";
import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { useQuery } from "react-query";

const TV = () => {
  const { isLoading: todayLoading, data: todayData } = useQuery(
    ["tv", "today"],
    tvApi.airingToday
  );
  const { isLoading: topRatedLoading, data: topRatedData } = useQuery(
    ["tv", "topRated"],
    tvApi.topRated
  );
  const { isLoading: trendingLoading, data: trendingData } = useQuery(
    ["tv", "trending"],
    tvApi.trending
  );

  const loading = todayLoading || topRatedLoading || trendingLoading;
  if (loading) {
    return <Loader />;
  }
  return (
    <ScrollView>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={trendingData.results}
        renderItem={({ item }) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.original_name}
            voteAverage={item.vote_average}
          />
        )}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={todayData.results}
        renderItem={({ item }) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.original_name}
            voteAverage={item.vote_average}
          />
        )}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={topRatedData.results}
        renderItem={({ item }) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.original_name}
            voteAverage={item.vote_average}
          />
        )}
      />
    </ScrollView>
  );
};

export default TV;
