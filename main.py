from langchain_community.document_loaders import PyPDFLoader
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import OllamaEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_ollama import ChatOllama
from langchain_core.output_parsers import StrOutputParser
from langchain.prompts import PromptTemplate
from operator import itemgetter


#PDF Path 
PDF_FILE = "Exoplanets.pdf"


loader = PyPDFLoader(PDF_FILE)
pages = loader.load()

splitter = RecursiveCharacterTextSplitter(chunk_size=1500, chunk_overlap=100)

chunks = splitter.split_documents(pages)

template = """
You are an assistant that provides answers to questions. 

Answer the question and also provide the links in the context if the question is related. 

Be as concise as possible and go straight to the point.

Context: {context}

Question: {question}
"""

class Model():
    def __init__(self):
        MODEL = "llama3.1"
        embeddings = OllamaEmbeddings(model=MODEL)
        vectorstore = FAISS.from_documents(chunks, embeddings)

        retriever = vectorstore.as_retriever()

        model = ChatOllama(model=MODEL, temperature=0)
        
        parser = StrOutputParser()
        
        prompt = PromptTemplate.from_template(template)

        self.chain = prompt | model | parser

        self.chain = (
            {
                "context": itemgetter("question") | retriever,
                "question": itemgetter("question"),
            }
            | prompt
            | model
            | parser
        )
    
    def chat(self, question):
        return self.chain.invoke({'question': question})

#RUN 

#Initialization function
chatbot = Model()

#Questioning function
response = chatbot.chat('What is an exoplanet?')

#Print the response
print(response)