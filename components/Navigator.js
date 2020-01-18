import {  createAppContainer } from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import Announcement from "../screens/Announcement";
import Complaint from "../screens/Complaint";
import Chat from "../screens/Chat";
import MessMenu from "../screens/MessMenu";

const AppNavigator = createDrawerNavigator({
  Announcement: {
    screen: Announcement
  },
  Complaint: {
    screen: Complaint
  },
  Chat: {
    screen: Chat
  },
  MessMenu: {
    screen: MessMenu
  }
});

export default createAppContainer(AppNavigator);