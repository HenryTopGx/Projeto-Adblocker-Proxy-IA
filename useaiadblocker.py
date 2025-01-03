import os
import numpy as np
import tensorflow as tf
from sklearn.feature_extraction.text import CountVectorizer

# Função para carregar arquivos de uma pasta e retornar uma lista com o conteúdo dos arquivos
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
model = tf.keras.models.load_model("modelo_js_blockads_otimizado_multiclasse.h5")

# Carregar e vetorizar os dados de novos arquivos para classificação
new_data_folder = r"C:\caminho\para\novos\arquivos"
new_files_data = load_files_from_folder(new_data_folder)

# Carregar o vetorizador treinado
# (Nota: você deve salvar o vetorizer durante o treinamento e carregá-lo aqui)
import pickle
with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

# Vetorizar os novos dados
X_new = vectorize_data(vectorizer, new_files_data)

# Fazer previsões nos novos dados
predictions = model.predict(X_new)

# Mapear previsões para categorias
categories = ["Benign", "Ads", "Popup", "Tracker", "MaliciousTool"]
predicted_categories = [categories[np.argmax(pred)] for pred in predictions]

# Exibir os resultados
for i, file in enumerate(new_files_data):
    print(f"Arquivo {i + 1}: {predicted_categories[i]}")

# Salvar os resultados em um arquivo
output_file = "resultados_classificacao.txt"
with open(output_file, "w", encoding='utf-8') as f:
    for i, file in enumerate(new_files_data):
        f.write(f"Arquivo {i + 1}: {predicted_categories[i]}\n")

print(f"Resultados salvos em {output_file}")
