from langchain_groq import ChatGroq
from langchain_experimental.agents import create_pandas_dataframe_agent
from langchain.agents import tool
from langchain.prompts import ChatPromptTemplate
from langchain.memory import ConversationBufferMemory
from langchain.agents import AgentExecutor,create_react_agent
import requests
from flask import Flask,request,jsonify
from flask_cors import CORS #type:ignore
from bs4 import BeautifulSoup
import dotenv
import os
import pandas as pd

dotenv.load_dotenv()

app = Flask(__name__)
CORS(app)

llm_api_key = os.getenv("groq") 


try:
    df = pd.read_csv("artigos.csv")
except FileNotFoundError:
    print("ERRO: O arquivo 'artigos.csv' não foi encontrado.")
    df = pd.DataFrame() 

if llm_api_key:
    llm = ChatGroq(model="meta-llama/llama-4-scout-17b-16e-instruct", api_key=llm_api_key)
else:
    raise ValueError("A chave da API Groq não foi encontrada. Verifique seu arquivo .env.")


@tool
def pesquisa_artigo_nasa(link):
    """ Function to make requests to websites and return only the text content of the site."""
    try:
        response = requests.get(link, timeout=10)
        response.raise_for_status() 
        soup = BeautifulSoup(response.text, 'html.parser')
        
        return soup.get_text(separator=' ', strip=True)[:4000]
    except requests.exceptions.RequestException as e:
        return f"Erro ao acessar o link {link}: {e}"

memory = ConversationBufferMemory(memory_key="history", return_messages=True)


system_instructions = (
    "You are an AI assistant specialized in data analysis."
    "Your goal is to identify the user's research topic."
    "Whenever possible, use the available tools to obtain the necessary information."
    "If the user requests a specific research topic, look up the link in the dataframe and use the `pesquisa_artigo_nasa` tool."
    "After retrieving the information, return a concise summary and the source link."
    "Do not ask questions or provide options unless it is strictly necessary to obtain the answer."
    
    "\n\nAvailable tools: {tools}"
    "\n\nTool names: {tool_names}"
)


prompt = ChatPromptTemplate.from_messages([
    ("system", system_instructions),
    ("system","{agent_scratchpad}"),
    ("human", "{input}"),
])

tools = [pesquisa_artigo_nasa]


pandas_agent = create_pandas_dataframe_agent(llm, df, verbose=True, allow_dangerous_code=True,extra_tools=tools,prompt=prompt)

@app.route("/ask", methods=["POST"])
def chat():
    user_input = request.get_json()

    pergunta = user_input.get("text")
    
    if not user_input:
        return jsonify({"output": "Please provide an input."}), 400

    try:
        
        response = pandas_agent.invoke({"input": pergunta})
        print(f"Agent response: {response.get('output')}")
        return jsonify({"message": response["output"]})
    except Exception as e:
        
        print(f"Agent execution error: {e}")
        return jsonify({"output": f"Sorry, an error occurred during analysis: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)