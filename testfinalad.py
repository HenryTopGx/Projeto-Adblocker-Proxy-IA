import numpy as np
import tensorflow as tf
from sklearn.feature_extraction.text import CountVectorizer
import os

# Função para carregar arquivos de uma pasta e retornar uma lista com o conteúdo dos arquivos
def load_files_from_folder(folder):
    files_data = []
    for filename in os.listdir(folder):
        if filename.endswith('.js'):  # Verifica se o arquivo é JavaScript
            with open(os.path.join(folder, filename), 'r', encoding='utf-8') as file:
                files_data.append(file.read())
    return files_data

# Carregar o modelo treinado
model = tf.keras.models.load_model("modelo_js_maliciosos.h5")

# Carregar os arquivos de treinamento originais para ajustar o vetorizer
malicious_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Maliciosos"
benign_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Nao_Maliciosos"

malicious_files_data = load_files_from_folder(malicious_folder)
benign_files_data = load_files_from_folder(benign_folder)

# Concatenar dados de treinamento originais
all_data = np.concatenate([malicious_files_data, benign_files_data])

# Ajustar o vetorizer com os dados de treinamento originais
vectorizer = CountVectorizer()
vectorizer.fit(all_data)
try:
    while True:
        
        # Carregar novos arquivos JavaScript para previsão
        new_files_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\test"
        new_files_data = load_files_from_folder(new_files_folder)

        # Vetorizar os novos dados
        X_new = vectorizer.transform(new_files_data).toarray()

        # Fazer previsões nos novos dados
        predictions = model.predict(X_new)
        predictions = (predictions > 0.5).astype(int)  # Converte previsões para 0 ou 1

        # Exibir resultados
        for i, prediction in enumerate(predictions):
            print(f"Arquivo: {os.listdir(new_files_folder)[i]}, Predição: {'Malicioso' if prediction == 1 else 'Não Malicioso'}")
        input("")
except: pass
