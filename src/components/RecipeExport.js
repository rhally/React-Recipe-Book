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
        content: {
            marginTop: 20,
            fontSize: 15,
        },
        title: {
            textAlign: "left",
            fontFamily: "Helvetica",
            fontWeight: 200,
        },
        ingredients: {},
        text: {
            textAlign: "justify",
            fontFamily: "Helvetica",
        },
        header: {
            fontSize: 24,
            marginTop: 25,
            marginBottom: 20,
            textAlign: "center",
            color: "black",
        },
    })

    const ingredientsContent = ingredients.map(function (ingredient, i) {
        return (
            <View
                key={i}
                style={[
                    styles.ingredients,
                    {
                        paddingTop: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        fontSize: 11,
                    },
                ]}
            >
                <View style={[styles.box, { flexDirection: "column" }]}>
                    <Text style={[styles.text, {}]}>{ingredient.name}</Text>
                </View>
                <View
                    style={[
                        styles.box,
                        { flexDirection: "column", alignItems: "right" },
                    ]}
                >
                    <Text style={[styles.text, {}]}>{ingredient.amount}</Text>
                </View>
            </View>
        )
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
                    <View
                        style={[
                            styles.ingredients,
                            {
                                fontSize: 13,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            },
                        ]}
                    >
                        <View style={[styles.box, { flexDirection: "column" }]}>
                            <Text style={[styles.text, {}]}>Cook Time</Text>
                        </View>
                        <View
                            style={[
                                styles.box,
                                {
                                    flexDirection: "column",
                                    alignItems: "right",
                                },
                            ]}
                        >
                            <Text style={[styles.text, {}]}>{cookTime}</Text>
                        </View>
                    </View>{" "}
                    <View
                        style={[
                            styles.ingredients,
                            {
                                fontSize: 13,
                                flexDirection: "row",
                                paddingTop: 5,
                                justifyContent: "space-between",
                            },
                        ]}
                    >
                        <View style={[styles.box, { flexDirection: "column" }]}>
                            <Text style={[styles.text, {}]}>Servings</Text>
                        </View>
                        <View
                            style={[
                                styles.box,
                                {
                                    flexDirection: "column",
                                    alignItems: "right",
                                },
                            ]}
                        >
                            <Text style={[styles.text, {}]}>{servings}</Text>
                        </View>
                    </View>{" "}
                    <Text
                        style={[
                            {
                                fontSize: 13,
                                fontWeight: 600,
                                marginBottom: 10,
                                marginTop: 30,
                            },
                        ]}
                    >
                        Ingredients
                    </Text>
                    {ingredientsContent}
                </View>
                <Text style={styles.title}>Instructions</Text>
                <Text style={styles.content}>{instructions}</Text>
            </View>
        </>
    )
}
