import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import * as dotenv from 'dotenv'
import path from 'path'
import { createClient } from '@supabase/supabase-js'
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { fileURLToPath } from 'url'
dotenv.config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pdfPath = path.join(__dirname, 'docs/PranamShettyF_Resume.pdf')
// console.log('Current directory:', __dirname)
// console.log('Resolved PDF path:', pdfPath)
async function main() {
    try {
        const loader = new PDFLoader(pdfPath)
        const docs = await loader.load()
        // console.log('Extracted PDF Documents:', docs)

        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 100,
            chunkOverlap: 10,
            separators: ['\n\n', '\n', '.', '']
        })
        const splitDocs = await splitter.splitDocuments(docs)
        // console.log('Split Documents:', splitDocs)
        const sbApiKey = process.env.SUPABASE_API_KEY
        const sbUrl = process.env.SUPABASE_URL_LC_CHATBOT
        const openAIApiKey = process.env.OPENAI_API_KEY
        const client = createClient(sbUrl, sbApiKey)

        await SupabaseVectorStore.fromDocuments(
            splitDocs,
            new OpenAIEmbeddings({ openAIApiKey }),
            {
                client,
                tableName: 'documents',
            }
        )

        console.log('Documents have been successfully added to the vector store.')
    } catch (err) {
        console.log('Error:', err)
    }
}
main()