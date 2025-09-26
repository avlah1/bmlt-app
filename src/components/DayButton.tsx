import {StyleSheet, Text, TouchableOpacity, View, GestureResponderEvent } from 'react-native';

type DayButtonProps = {
    callBack: GestureResponderEvent
}

const DayButton = (props: DayButtonProps) => {
    return (
        <TouchableOpacity style={styles.container}
        onPress={props.callBack}>
            <Text style={styles.titleText}>Sun</Text>
        </TouchableOpacity>
    )
}

export default DayButton;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: "#6F7375",
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 16,
        color: "#F5FAFC"
    }
});