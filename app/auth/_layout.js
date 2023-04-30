import React from 'react';
import { View } from 'react-native';
import { Router, Route, Link, useRouter } from 'expo-router';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import Register from './src/screens/Register';

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <Router>
                <Route path="/" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/register" component={Register} />
            </Router>
        </View>
    );
}
