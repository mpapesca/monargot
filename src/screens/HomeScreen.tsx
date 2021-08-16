import React, { useState } from "react";
import Discover from "../components/sections/Discover";
import LeaderBoard from "../components/sections/LeaderBoard";
import RecentlyAdded from "../components/sections/RecentlyAdded";
import SearchResults from "../components/sections/SearchResults";
import BaseScreen from "./BaseScreen";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchResultsSection =
    searchResults.length > 0 ? <SearchResults /> : null;

  return (
    <BaseScreen>
      {searchResultsSection}
      <RecentlyAdded />
      <LeaderBoard />
      <Discover />
    </BaseScreen>
  );
};

export default HomeScreen;
