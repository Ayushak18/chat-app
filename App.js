import { ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Login from "./pages/login";
import SignUp from "./pages/signup";
import ChatHome from "./pages/chatHome";
import ChatWindow from "./pages/individualChat";

export default function App() {
  return (
    <>
      <ScrollView>
        <Login />
        <SignUp />
        <ChatHome />
        <ChatWindow />
      </ScrollView>
    </>
  );
}
