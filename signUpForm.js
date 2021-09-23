import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    };
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View>
          <Text style={styles.signuptext}>Sign up</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            placeholder="Username"
            placeholderTextColor="grey"
            value={this.state.username}
            onChangeText={(username) => {
              this.setState({ username });
            }}
          />
          <TextInput
            style={styles.input}
            autoCorrect={false}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => {
              this.setState({ email });
            }}
          />
          <TextInput
            style={styles.input}
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({ password });
            }}
          />
          <TextInput
            style={styles.input}
            autoCorrect={false}
            placeholder="Password again"
            secureTextEntry={true}
            value={this.state.cpassword}
            onChangeText={(cpassword) => {
              this.setState({ cpassword });
            }}
          />
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.acc}>
          <Text style={styles.acctext}>You already have account?</Text>
          <Text style={styles.logintext}>Log in</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 50,
    paddingTop: 50,
  },
  signuptext: {
    fontSize: 50,
    alignSelf: "flex-start",
    color: "#7027A0",
    marginVertical: 50,
  },
  input: {
    lineHeight: 30,
    fontSize: 16,
    height: 50,
    borderBottomWidth: 2,
    marginVertical: 15,
  },
  btn: {
    height: 50,
    backgroundColor: "#7027A0",
    marginVertical: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 25,
    color: "white",
  },
  acc: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logintext: {
    color: "#7027A0",
    marginLeft: 10,
    fontSize: 16,
  },
  acctext: {
    fontSize: 16,
  },
});
