import { View, TouchableOpacity, Text } from "react-native";
import { estilos } from "../styles/StylesHome";

pressButton = () => {
  alert("Eu não funciono *carinha triste*");
};

mensagem = () => {
  alert("Miau");
};

export default function BodyComponent() {
  return (
    <View style={estilos.secondaryContainer}>

      <TouchableOpacity onPress={() => Navigation.navigate("Home")}>
        <Text style={estilos.button}>Ir para Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Navigation.navigate("Login")}>
        <Text style={estilos.button}>Ir para Login</Text>
      </TouchableOpacity>

    </View>
  );
}
