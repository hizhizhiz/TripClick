import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image style={styles.topImg} source={require('./img/back.png')} />
          <Text style={styles.topText}>TripClick</Text>
        </View>

        <ScrollView>

        <View style={styles.content}>
          <View style={styles.contentBox}>
            <Image style={styles.contentImgMyac} source={require('./img/myac.png')} />
            <Text style={styles.contentText}>Маяк(Бесплатно)</Text>
          </View>
          <View style={styles.contentLine}></View>
          <View style={styles.contentBox}>
            <Image style={styles.contentImg} source={require('./img/funik.png')} />
            <Text style={styles.contentText}>Фуникулер(Бесплатно)</Text>
          </View>
          <View style={styles.contentLine}></View>
          <View style={styles.contentBox}>
            <Image style={styles.contentImg} source={require('./img/lock.png')} />
            <Text style={styles.contentText}>Маршрут в разработке</Text>
          </View>
          <View style={styles.contentLine}></View>
          <View style={styles.contentBox}>
            <Image style={styles.contentImg} source={require('./img/lock.png')} />
            <Text style={styles.contentText}>Маршрут в разработке</Text>
          </View>
          <View style={styles.contentLine}></View>
          <View style={styles.contentBox}>
            <Image style={styles.contentImg} source={require('./img/lock.png')} />
            <Text style={styles.contentText}>Маршрут в разработке</Text>
          </View>
          <View style={styles.contentLine}></View>
          <View style={styles.contentBox}>
            <Image style={styles.contentImg} source={require('./img/lock.png')} />
            <Text style={styles.contentText}>Маршрут в разработке</Text>
          </View>
          <View style={styles.contentLine}></View>
        </View>

        </ScrollView>

        <View style={styles.bottom}>
          <View>
            <Image style={styles.bottomIconHome} source={require('./img/home.png')} />
            <Text style={styles.bottomText}>Маршруты</Text>
          </View>
          <View>
            <Image style={styles.bottomIconPortfolio} source={require('./img/portfolio.png')} />
            <Text style={styles.bottomText}>Купленное</Text>
          </View>
          <View>
            <Image style={styles.bottomIconFav} source={require('./img/fav.png')} />
            <Text style={styles.bottomText}>Избранное</Text>
          </View>
          <View>
            <Image style={styles.bottomIconSet} source={require('./img/set.png')} />
            <Text style={styles.bottomText}>Настройки</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99cdff',
  },
  top: {
    backgroundColor: '#3d81ee',
    height: '12%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImg: {
    position: 'absolute',
    top: 38,
    left: 15,
    height: 25,
    width: 25,
  },
  topText: {
    fontSize: 21,
    color: '#fff',
    paddingTop: 20,
    width: 110,
  },
  content: {
    height: '78%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  contentLine: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  },
  contentBox: {
    backgroundColor: '#c1dafe',
    borderRadius: 20,
    margin: 10,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentImg: {
    marginTop: 17,
    marginLeft: 15,
    height: 42,
    width: 35,
  },
  contentImgMyac: {
    marginTop: 17,
    marginLeft: 15,
    height: 42,
    width: 40,
  },
  contentText: {
    color: '#fff',
    fontSize: 18,
    width: 255,
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bottom: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    height: '10%',
    width: '100%',
  },
  bottomText: {
    color: '#767676',
    fontSize: 10,
  },
  bottomIconHome: {
    marginLeft: 14,
    marginTop: 4,
    marginBottom: -2,
    height: 27,
    width: 28,
  },
  bottomIconPortfolio: {
    marginLeft: 9,
    height: 30,
    width: 40,
  },
  bottomIconFav: {
    marginLeft: 7,
    height: 30,
    width: 46,
  },
  bottomIconSet: {
    marginLeft: 11,
    height: 30,
    width: 34,
  },
});
