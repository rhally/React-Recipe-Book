import React from "react"
import { Text, StyleSheet, View } from "@react-pdf/renderer"

export default function RecipeExport(props) {
    const { name, cookTime, servings, instructions, ingredients } = props

    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
            fontSize: 14,
        },
        title: {
            fontSize: 14,
            textAlign: "left",
            fontFamily: "Helvetica",
        },
        text: {
            fontSize: 14,
            textAlign: "justify",
            fontFamily: "Helvetica",
        },
        image: {
            marginVertical: 15,
            marginHorizontal: 100,
        },
        header: {
            fontSize: 24,
            marginTop: 25,
            marginBottom: 20,
            textAlign: "center",
            color: "black",
        },
        pageNumber: {
            position: "absolute",
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "grey",
        },
    })

    return (
        <>
            <View style={{ margin: 30 }}>
                <Text style={styles.header} fixed>
                    {name}
                </Text>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "black",
                        padding: 10,
                        marginBottom: 20,
                    }}
                >
                    <Text style={styles.title}>Cook Time</Text>
                    <Text style={styles.body}>{cookTime}</Text>
                </View>
                <Text style={styles.title}>Instructions</Text>
                <Text style={styles.body}>{instructions}</Text>
            </View>
        </>
    )
}
