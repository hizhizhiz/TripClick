import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.topText}>TripClick</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentText}>Маяк(Бесплатно)</Text>
          <Text style={styles.contentText}>Фуникулер(Бесплатно)</Text>
          <Text style={styles.contentText}>Маршрут в разработке</Text>
          <Text style={styles.contentText}>Маршрут в разработке</Text>
          <Text style={styles.contentText}>Маршрут в разработке</Text>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Маршруты</Text>
          <Text style={styles.bottomText}>Купленное</Text>
          <Text style={styles.bottomText}>Избранное</Text>
          <Text style={styles.bottomText}>Настройки</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    backgroundColor: '#3d81ee',
    height: '12%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 23,
    color: '#fff',
    paddingTop: 20,
    width: 110,
  },
  content: {
    backgroundColor: '#99cdff',
    height: '78%',
    paddingLeft: 12,
    paddingRight: 12,
  },
  contentText: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    color: '#fff',
    fontSize: 20,
    paddingTop: 55,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bottom: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    height: '10%',
    width: '100%',
  },
  bottomText: {
    color: '#767676',
  }
});
