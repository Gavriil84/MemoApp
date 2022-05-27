import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import AppBar from '../components/AppBar'

const LogInScreen = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input} value="Email Address" />
                <TextInput style={styles.input} value="Password" />

                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonLabel}>
                        Submit
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <Text style={styles.footerLink}>Sign Up here!</Text>
                </View>


            </View>
        </View>
    )
}

export default LogInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    input: {
        fontSize: 16,
        height: 48,
        backgroundColor: '#FFFFFF',
        borderColor: "#DDDDDD",
        borderWidth: 1,
        paddingHorizontal: 8,
        marginBottom: 16
    },
    buttonContainer: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 32,
        color: '#FFFFFF',
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3',
        marginLeft: 8
    },
    footer: {
        flexDirection: 'row'
    }
})