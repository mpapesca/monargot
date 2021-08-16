import { Button, Text } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Discover from "../components/sections/Discover";
import LeaderBoard from "../components/sections/LeaderBoard";
import RecentlyAdded from "../components/sections/RecentlyAdded";
import SearchResults from "../components/sections/SearchResults";
import { HomeScreenProps, RootStackParamList } from "../navigation/home-screen";
import BaseScreen from "./BaseScreen";

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchResultsSection =
    searchResults.length > 0 ? <SearchResults /> : null;

  return (
    <BaseScreen>
      <Button onPress={() => navigation.navigate("About")}>
        <Text>Press Me</Text>
      </Button>
      {searchResultsSection}
      <RecentlyAdded />
      <LeaderBoard />
      <Discover />
    </BaseScreen>
  );
};

export default HomeScreen;
