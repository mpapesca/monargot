import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp
};