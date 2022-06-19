import React from 'react';
import Typography from '../DesignSystem/Typography';
import {Colors} from '../DesignSystem/Colors';
import LightTheme from '../DesignSystem/LightTheme';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={[styles.header, styles.flex]}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: Colors.Primary1,
    paddingVertical: 10,
    height: 60,
  },
});

export default Header;
