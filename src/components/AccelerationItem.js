import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
//import withoutphoto from "../../assets/semfoto.jpeg";

const noimage = {uri: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"}

export default function AccelerationItem({ item }) {
  handleData = () => {
    const data = new Date(item.subscription_finish_at);
    dia = data.getDate().toString();
    diaF = dia.length == 1 ? "0" + dia : dia;
    mes = (data.getMonth() + 1).toString();
    mesF = mes.length == 1 ? "0" + mes : mes;
    anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  };

  return (
    <View style={styles.container}>
      <Image
        source={item.banner_url ? { uri: item.banner_url } : noimage}
        style={styles.banner}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>

        <Text style={styles.date}>{handleData()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 10,
    borderColor: "#EFF0F0",
    borderWidth: 2
  },
  banner: {
    width: 110,
    height: 110
  },
  content: {
    margin: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 5
  },
  location: {
    color: "#7800ff",
    fontSize: 16,
    marginBottom: 5
  },
  date: {
    fontSize: 15
  }
});
