import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FollowerTab from './followTab/FollowerTab';
import FollowTab from './followTab/FollowTab';
import SubscriptionTab from './followTab/SubscriptionTab';
import MarkedTab from './followTab/MarkedTab';

const Tab = createMaterialTopTabNavigator();

const FollowDetail = ({navigation, route}) => {
  const {user} = useSelector(state => state.auth);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            marginLeft: 30,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {user.username}
        </Text>
      </View>

      <View style={{flex: 1, marginTop: 10}}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarLabel: ({focused}) => {
              let tabName;
              if (route.name === 'Follower') {
                tabName = '0 Takipçi';
              } else if (route.name === 'Follow') {
                tabName = '0 Takip';
              } else if (route.name === 'Subscription') {
                tabName = '0 Abonelik';
              } else if (route.name === 'Marked') {
                tabName = 'İşaretlenenler';
              }
              return (
                <Text
                  style={{
                    color: focused ? '#000' : '#999',
                    fontSize: 14,
                    fontWeight: focused ? '600' : '400',
                  }}>
                  {tabName}
                </Text>
              );
            },
            tabBarIndicatorStyle: {
              backgroundColor: 'black',
              height: 1, // Added height to make indicator thinner
            },
            tabBarStyle: {
              shadowOpacity: 0.5,
            },
            tabBarScrollEnabled: true,
            tabBarItemStyle: {
              width: 114,
            },
          })}
          initialLayout={{width: Dimensions.get('window').width}}
          initialRouteName={route.params.tabToOpen}>
          <Tab.Screen name="Follower" component={FollowerTab} />
          <Tab.Screen name="Follow" component={FollowTab} />
          <Tab.Screen name="Subscription" component={SubscriptionTab} />
          <Tab.Screen name="Marked" component={MarkedTab} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default FollowDetail;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
  },
});
