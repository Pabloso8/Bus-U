import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,
} from 'galio-framework';
import theme from '../theme';

const { height, width } = Dimensions.get('window');

class Register extends React.Component {
  state = {
    name: '-',
    email: '-',
    password: '-',
    confirmpass: '-'
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    const { name, email, password,confirmpass } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Recover you Password"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
          />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <ScrollView>    
          

          <Block flex={2} center space="evenly">
            <Block flex={2}>
              
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('email', text)}
              />
            </Block>
            <Block flex middle>
              <Button
                round
                shadowless
                color="warning"
                onPress={() =>{ 
//                   Alert.alert(
//                   'Sign up action',
//                   `
// Name: ${name}
// Email: ${email}
// Password: ${password}`,
//                 );
navigation.navigate('ForgotPassConfirmCode');
              }}
              >
                Recover Pass
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('Login')}>
                <Text center color={theme.COLORS.WARNING} size={theme.SIZES.FONT * 0.75}>
                  Go Back to Log In.
                </Text>
              </Button>
            </Block>
          </Block>
          </ScrollView>
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

export default Register;
