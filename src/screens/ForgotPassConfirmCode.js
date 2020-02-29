import * as React  from 'react';
import {useState} from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,
} from 'galio-framework';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import theme from '../theme';


const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFiledRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#FF830D',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: 'gray',
  },
});
 
const CELL_COUNT = 4;

// const {navigation} = this.props;
 
const Verification = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

 

 
  return (
   
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
         <NavBar
          title="Confirm Code"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
          />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <ScrollView>    
         
          <Block flex={2} center space="evenly">
            <Block flex={2}> 
              
            <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Enter Code: </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
              
            </Block>
            <Block flex middle style = {{padding : 20}}>

              <Button
                
                round
                shadowless
                color="warning"
                onPress={() =>{ 
                  Alert.alert(
                  'Confirm Action',
                  `Code received: ${value}`
                );
              }
              }              >
                Confirm
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('ForgotPass')}>
                <Text center color={theme.COLORS.WARNING} size={theme.SIZES.FONT * 0.75}>
                  Have not received it ? Check the Email.
                </Text>
              </Button>
            </Block>
          </Block>
          </ScrollView>
        </KeyboardAvoidingView>
        </Block>
  );
};
 
export default Verification;
