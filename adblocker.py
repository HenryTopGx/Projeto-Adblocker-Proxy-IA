from mitmproxy import http
import re
import numpy as np
import tensorflow as tf
from sklearn.feature_extraction.text import CountVectorizer
import os
def load_files_from_folder(folder):
    files_data = []
    for filename in os.listdir(folder):
        if filename.endswith('.js'):  # Verifica se o arquivo é JavaScript
            with open(os.path.join(folder, filename), 'r', encoding='utf-8') as file:
                files_data.append(file.read())
    return files_data

# Função para vetorizar novos dados
def vectorize_data(vectorizer, data):
    return vectorizer.transform(data).toarray()

# Carregar o modelo treinado
model = tf.keras.models.load_model("modelo_js_blockads_otimizado_multiclasse_2.h5")



# Carregar o vetorizador treinado
# (Nota: você deve salvar o vetorizer durante o treinamento e carregá-lo aqui)
import pickle
with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)



def is_malicious(content: str):
    new_files_data = [content]
    # Vetorizar os novos dados
    X_new = vectorize_data(vectorizer, new_files_data)

    # Fazer previsões nos novos dados
    predictions = model.predict(X_new)

    # Mapear previsões para categorias
    categories = ["Benign", "Ads", "Popup", "Tracker", "MaliciousTool"]
    predicted_categories = [categories[np.argmax(pred)] for pred in predictions]

    return predicted_categories[0]
def request(flow: http.HTTPFlow) -> None:
    pass

def response(flow: http.HTTPFlow) -> None:
    content_type = flow.response.headers.get("Content-Type", "")
    if("javascript" in content_type or "application/x-javascript" in content_type or "application/javascript" in content_type):
        print("** Verificando **")
        v = is_malicious(flow.response.content.decode())
        if v != "Benign":
            flow.response.status_code = 200
            flow.response.content = b"console.log('"+flow.request.url.encode("utf-8")+b" Bloqueado Pelo AIAdblock -> "+v.encode("utf-8")+b"');"
            print("** Alterado **")
        else:
            print("** Não Alterado **")
    pass


if __name__ == "__main__":
    # Execute o proxy com o certificado raiz
    # Certifique-se de definir o navegador ou aplicativo para usar o proxy localhost na porta 8080
    from mitmproxy.tools.main import mitmdump
    mitmdump(['-s', __file__])
