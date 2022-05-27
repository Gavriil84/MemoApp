import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import AppBar from '../components/AppBar'
import CircleButton from '../components/CircleButton'

const MemoDetailScreen = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>Shop List</Text>
                <Text style={styles.memoDate}>2022/5/17 </Text>
            </View>

            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    Shop List
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam laudantium animi odio nulla alias, sapiente earum excepturi aspernatur ipsam ut id, repellendus dolores reiciendis corporis tempore voluptate tenetur architecto.
                </Text>
            </ScrollView>

            <CircleButton style={{ top: 160, bottom: 'auto' }} name="edit-2" />
        </View>
    )
}

export default MemoDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold'
    },
    memoDate: {
        color: '#FFFFFF',
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,

    }
})