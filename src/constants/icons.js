import { AntDesign, Entypo, Feather } from "@expo/vector-icons";

export const icons = {
    home: (props)=> <AntDesign name="home" size={26} {...props} />,
    analysis: (props)=> <Feather name="compass" size={26} {...props} />,
    alarm: (props)=> <Entypo name="stopwatch" size={26} {...props} />,
    profile: (props)=> <AntDesign name="pluscircleo" size={26} {...props} />,
    settings: (props)=> <AntDesign name="user" size={26} {...props} />,
}