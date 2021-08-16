import React, { FunctionComponent, ReactNode } from "react";
import { StyleSheet } from "react-native";
import Section from "../Section";

interface ILeaderBoardProps {}

const LeaderBoard: FunctionComponent<ILeaderBoardProps> = () => {
  const title = "Leader Board";

  return <Section title={title}></Section>;
};

const styles = StyleSheet.create({});

export default LeaderBoard;
