import React from "react";
import { Header } from "react-native-elements";

import Menu from "./Menu";

const AppHeader = props => {
  return (
    <Header
      leftComponent={<Menu navigation={props.navigation} />}
      centerComponent={{
        text: props.title,
        style: { color: "#fff", fontWeight: "bold", fontSize: 20 }
      }}
      statusBarProps={{ barStyle: "light-content" }}
    />
  );
};

export default AppHeader;