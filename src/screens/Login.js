import React from 'react';
import {
  Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform,Image
} from 'react-native';

// galio component
import {
  Block, Button, Input, NavBar, Text
} from 'galio-framework';
import theme from '../theme';

const { height, width } = Dimensions.get('window');

class Login extends React.Component {
  state = {
    email: '-',
    password: '-',
    casoAlterno:""
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    const { email, password,casoAlterno} = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Sign In"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <Block flex center style={{ marginTop: theme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}>
            
            <Block row center space="between" style={{ marginVertical: theme.SIZES.BASE * 1.875 }}>
             
              <Block flex middle center>
                <Image
                source={require('../../assets/icon2.png')}
                
                style={{width: 100, height:100 , resizeMode: 'stretch'}}
                />
              </Block>  
            </Block>
          </Block>
          <Block flex={2} center space="evenly">
            <Block flex={2}>
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => {this.handleChange('email', text) 
              }}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.9 }}
                onChangeText={text => {this.handleChange('password', text);
              }}
              />
              <Text
                color={theme.COLORS.WARNING}
                size={theme.SIZES.FONT * 0.75}
                onPress={() => navigation.navigate('ForgotPass')}
                style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}
              >
                Forgot your password?????
              </Text>
            </Block>
            <Block flex middle>
              <Button
                round
                color="warning"
                onPress={() =>{ Alert.alert(
                  'Sign in action',
                  `Email: ${email} Pass: ${password}`
                );
                this.handleChange('casoAlterno', "Try again ...");
              }}
              >
                Sign in
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('Register')}>
                <Text center color={theme.COLORS.WARNING} size={theme.SIZES.FONT * 0.75}>
                  {"Don't have an account? Sign Up"}
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default Login;
