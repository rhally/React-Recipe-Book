import React from "react"
import RecipeExport from "./RecipeExport"
import {
    PDFDownloadLink,
    StyleSheet,
    Text,
    Document,
    Page,
} from "@react-pdf/renderer"
import Button from "react-bootstrap/Button"

export default function DownloadButton({ recipes }) {
    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
            fontSize: 14,
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

    const MyDoc = () => (
        <Document>
            {recipes.map((recipe) => {
                return (
                    <Page key={recipe.id} size="A4">
                        <RecipeExport key={recipe.id} {...recipe} />
                        <Text
                            style={styles.pageNumber}
                            render={({ pageNumber, totalPages }) =>
                                `${pageNumber} / ${totalPages}`
                            }
                            fixed
                        />
                    </Page>
                )
            })}
        </Document>
    )
    return (
        <>
            <PDFDownloadLink
                className=""
                document={<MyDoc />}
                fileName="recipes.pdf"
            >
                {({ blob, url, loading, error }) =>
                    loading ? (
                        <Button
                            style={{
                                borderBottomLeftRadius: "0px",
                                borderTopLeftRadius: "0px",
                                cursor: "pointer",
                            }}
                            className="border-left-0"
                        >
                            Download
                        </Button>
                    ) : (
                        <Button
                            style={{
                                borderBottomLeftRadius: "0px",
                                borderTopLeftRadius: "0px",
                                cursor: "pointer",
                            }}
                        >
                            Download
                        </Button>
                    )
                }
            </PDFDownloadLink>
        </>
    )
}
