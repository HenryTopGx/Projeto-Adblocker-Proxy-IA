import os
import numpy as np
import tensorflow as tf
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split

# Função para carregar arquivos de uma pasta e retornar uma lista com o conteúdo dos arquivos
def load_files_from_folder(folder):
    files_data = []
    for filename in os.listdir(folder):
        if filename.endswith('.js'):  # Verifica se o arquivo é JavaScript
            with open(os.path.join(folder, filename), 'r', encoding='utf-8') as file:
                files_data.append(file.read())
    return files_data

# Carregar o modelo pré-treinado
model = tf.keras.models.load_model("modelo_js_maliciosos.h5")

# Caminhos para as pastas de scripts originais e novos
original_malicious_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Maliciosos"
original_benign_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Nao_Maliciosos"
new_malicious_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\v2\Maliciosos"
new_benign_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\v2\Nao_Maliciosos"

# Carregar dados originais e novos
original_malicious_files_data = load_files_from_folder(original_malicious_folder)
original_benign_files_data = load_files_from_folder(original_benign_folder)
new_malicious_files_data = load_files_from_folder(new_malicious_folder)
new_benign_files_data = load_files_from_folder(new_benign_folder)

# Criar labels para os dados originais e novos
original_malicious_labels = np.ones(len(original_malicious_files_data))
original_benign_labels = np.zeros(len(original_benign_files_data))
new_malicious_labels = np.ones(len(new_malicious_files_data))
new_benign_labels = np.zeros(len(new_benign_files_data))

# Concatenar dados e labels
all_data = np.concatenate([original_malicious_files_data, original_benign_files_data, new_malicious_files_data, new_benign_files_data])
all_labels = np.concatenate([original_malicious_labels, original_benign_labels, new_malicious_labels, new_benign_labels])

# Ajustar o vetorizador com os dados originais de treinamento
vectorizer = CountVectorizer()
vectorizer.fit(np.concatenate([original_malicious_files_data, original_benign_files_data]))

# Vetorizar todos os dados usando o vetorizador ajustado
X = vectorizer.transform(all_data).toarray()


# Dividir os dados em conjuntos de treinamento e teste
X_train, X_test, y_train, y_test = train_test_split(X, all_labels, test_size=0.2, random_state=42)

# Re-treinar o modelo
model.fit(X_train, y_train, epochs=15, batch_size=32, validation_data=(X_test, y_test))

# Avaliar o modelo
loss, accuracy = model.evaluate(X_test, y_test)
print("Loss:", loss)
print("Accuracy:", accuracy)

# Salvar o modelo atualizado
model.save("modelo_js_maliciosos_atualizado.h5")
print("Modelo atualizado salvo com sucesso!")
