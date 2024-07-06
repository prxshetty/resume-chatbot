import fs from 'fs/promises';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { createClient } from '@supabase/supabase-js';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import dotenv from 'dotenv'
dotenv.config()
try{
    const text=await fs.readFile('scrimba-info.txt','utf-8')
    const splitter=new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        separators: ['/n/n','/n',' ',''],
        chunkOverlap:50
    })
    const output=await splitter.createDocuments([text])
    
    const sbApiKey=process.env.SUPABASE_API_KEY
    const sbUrl=process.env.SUPABASE_URL_LC_CHATBOT
    const openAIApiKey= process.env.OPENAI_API_KEY
    
    const client = createClient(sbUrl, sbApiKey)


    await SupabaseVectorStore.fromDocuments(
        output,
        new OpenAIEmbeddings({openAIApiKey}),
        {
            client,
            tablename: 'documents',
        }
    )
    
    // console.log(output)
} catch(err){
    console.log(err)
}