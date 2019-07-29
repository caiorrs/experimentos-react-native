/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ProgressBarAndroid,
  SectionList,
  Dimensions,
  Switch,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';

import Slider from '@react-native-community/slider';
import ViewPager from "@react-native-community/viewpager";

const {height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={{flex:1}}>
    {/* <KeyboardAvoidingView behavior="padding" enabled> */}
      <ScrollView 
        //contentContainerStyle={[styles.scrollView]}
        style={[styles.scrollView]}
        alwaysBounceVertical={true}
        decelerationRate="normal"
        indicatorStyle="black"
      >
        <View style={[styles.section]}>
          <Text style={[styles.text]}>Activity Indicator</Text>
          <ActivityIndicator size="large" color="#1255FF"/>
          {/* tambem tem a propriedade animating=bool */}
        </View>
        <View style={[styles.section]}>
          <Text style={[styles.text]}>Button</Text>
          <Button
            style={[styles.button]}
            // onPress={funcao}
            title="Click Me!"
            color="#841584"
            accessibilityLabel="Click this purple button"
            // disabled=bool
            // nextFocusDown/Forward/Left/Right/Up=number -Android
            // testID // usado para testes
            // touchSoundDisabled=bool
          />
        </View>
        <View style={[styles.section]}>
          <Text style={[styles.text]}>FlatList</Text>
          <FlatList
            data={[{key:'a'}, {key:'b'}]}
            renderItem={({item}) => <Text style={[styles.text]}>{item.key}</Text>}
          />
        </View>
        <View style={[styles.section]}>
          <Text style={[styles.text]}>Image</Text>
            <Image 
              source={{uri:'https://img-9gag-fun.9cache.com/photo/aYYz0Pq_700bwp.webp'}}
              //source={require('/react-native/img/favicon.png')}
              // ou source={{uri:'data:image/png;base64,hash'}}
              style={{width:100, height:100, alignSelf: "center"}}
            />
        </View>
        <View style={[styles.section]}>
          <ImageBackground 
          source={{uri:'https://img-9gag-fun.9cache.com/photo/aYYz0Pq_700bwp.webp'}} 
          style={[styles.backgroundImage]}>
            <Text style={[styles.text]}>ImageBackground</Text>
          </ImageBackground>
        </View>

        {/* Daqui pra baixo não aparece */}
        <View style={[styles.section]}>
          <Text>ProgressBarAndroid</Text>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            color="#2196F3"
          />
        </View>
        <View style={[styles.section]}>
        {/* Example 1 (Homogeneous Rendering) */}
          <SectionList
            renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
            renderSectionHeader={({section: {title}}) => (
              <Text style={{fontWeight: 'bold'}}>{title}</Text>
            )}
            sections={[
              {title: 'Title1', data: ['item1', 'item2']},
              {title: 'Title2', data: ['item3', 'item4']},
              {title: 'Title3', data: ['item5', 'item6']},
            ]}
            keyExtractor={(item, index) => item + index}
          />
        </View>
        <View style={[styles.section]}>
          <Text style={[styles.text]}>Slider</Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FF0000"
            maximumTrackTintColor="#000000"
          />
        </View>
        <View style={[styles.section]}>
            <Text style={[styles.text]}>StatusBar</Text>
            <StatusBar // altera as propriedades da statusBar
              backgroundColor="#0000FF"
              barStyle="light-content"
              hidden={false}
              translucent={true}
            />
            {/* <View>
              <Text style={[styles.text]}>StatusBar Hidden</Text>
              <StatusBar
                hidden={route.statusBarHidden}
              />
            </View> */}
        </View>
        <View style={[styles.section]}>
          <Text style={[styles.text]}>Switch</Text>
          <Switch
            trackColor="#FFFF55"
            //value={true}
            disabled={false}
            //onValueChange=
          />
        </View>
        <View style={[styles.section]}>
          <Text style={[styles.text]}>Text</Text>
          <Text>
            <Text>Text interno 1</Text>
            <Text
              //onLongPress={funcao()}
              //onPress={funcao()}
              selectable={true}
              selectionColor="#123456"
            >Text interno 2</Text>
            {/* se texts estão envoltos por um text -> considera como se fosse
            um texto corrido */}
            {/* Porém, se cada text estiver envolto por uma view, eles serão
            mostrados de forma independente */}
            {/* Forma aconselhada para criar texts de diferentes propriedades
            criar componentes exclusivos (<MyHeader>, <MyFooter>, <MyComponent>) */}
          </Text>
        </View>
        <View style={[styles.section]}>
          <Text style={[styles.text]}>TextInput</Text>
          <TextInput
            placeholder="Name"
            keyboardType="default"
            editable={true}
            maxLength={100}
            defaultValue="João da Silva"
            autoCapitalize="words"
            placeholderTextColor="#45F2BB"
            clearButtonMode="always"
            disableFullscreenUI={true}
            //inlineImageLeft // imagem deve estar em android/app/src/main/res/drawable
            //inlineImagePadding
            returnKeyType="next"
            underlineColorAndroid="#000000"
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Phone"
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Age"
            keyboardType="phone-pad" //"numeric", phone parece melhor nesse caso
          />
        </View>
        <View style={[styles.section]}>
          <Text style={[styles.text]}>TouchableHighlight</Text>
          <TouchableHighlight
            style={[styles.buttonTouch]}
            activeOpacity = {0.5}
            underlayColor="#FFFFFF"
            //source={require('./mybutton.png')}
          >
            <Text style={[styles.text]}>CLICK ME</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.section]}>
          <Text style={[styles.text]}>TouchableNativeFeedback</Text>
          <TouchableNativeFeedback
            style={[styles.buttonTouch]}
            // activeOpacity = {0.5}
            // underlayColor="#FFFFFF"
          >
            <Text style={[styles.text]}>CLICK ME</Text>
          </TouchableNativeFeedback>
        </View>
        <View style={[styles.section]}>
          <Text style={[styles.text]}>TouchableOpacity</Text>
          <TouchableOpacity
            style={[styles.buttonTouch]}
            // activeOpacity = {0.5}
            // underlayColor="#FFFFFF"
            //source={require('./mybutton.png')}
          >
            <Text style={[styles.text]}>CLICK ME</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={[styles.section]}>
          <Text style={[styles.text]}>ViewPager</Text>
          <ViewPager
            initialPage={0}>
            <View key="1">
              <Text>First page</Text>
            </View>
            <View key="2">
              <Text>Second page</Text>
            </View>
          </ViewPager>
        </View> */}
        
      </ScrollView>
    {/* </KeyboardAvoidingView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#AAAAAA",
    flex: 1,
    
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderRadius: 10,
    margin: 50,
  },
  text: {
    textAlign: "center",
  },
  backgroundImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  buttonTouch: {
    backgroundColor: "#777777",
    padding: 30

  }
});

export default App;
