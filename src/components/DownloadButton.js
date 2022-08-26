import React from "react"
import RecipeExport from "./RecipeExport"
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer"

export default function DownloadButton({ recipes }) {
    const MyDoc = () => (
        <Document>
            {recipes.map((recipe) => {
                return (
                    <Page key={recipe.id} size="A4">
                        <RecipeExport key={recipe.id} {...recipe} />
                    </Page>
                )
            })}
        </Document>
    )
    return (
        <>
            <PDFDownloadLink
                className="btn btn--download"
                document={<MyDoc />}
                fileName="recipes.pdf"
            >
                {({ blob, url, loading, error }) =>
                    loading ? "Download" : "Download"
                }
            </PDFDownloadLink>
        </>
    )
}
