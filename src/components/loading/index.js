import React from 'react'
import { View, Text, ActivityIndicator, Modal } from 'react-native'
import styles from "./style"
export default function Loading() {
    return (
        <Modal style={styles.container}>

        <View style={styles.container}>
            <ActivityIndicator size="large" color="tomato" />
            <View>
                <Text style={styles.pleaseWait}>Please Wait</Text>
            </View>
        </View>
        </Modal>
    )
}
