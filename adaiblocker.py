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

# Carregar arquivos de códigos JavaScript maliciosos e não maliciosos
malicious_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Maliciosos11_2"
benign_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Nao_Maliciosos11_2"

malicious_files_data = load_files_from_folder(malicious_folder)
benign_files_data = load_files_from_folder(benign_folder)

# Criar labels para os dados
malicious_labels = np.ones(len(malicious_files_data))
benign_labels = np.zeros(len(benign_files_data))

# Concatenar dados e labels
all_data = np.concatenate([malicious_files_data, benign_files_data])
all_labels = np.concatenate([malicious_labels, benign_labels])

# Vetorizar os dados usando o CountVectorizer
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(all_data).toarray()

# Dividir os dados em conjuntos de treinamento e teste
X_train, X_test, y_train, y_test = train_test_split(X, all_labels, test_size=0.2, random_state=42)

# Definir modelo de aprendizado de máquina (Rede Neural Simples)
model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(128, activation='relu', input_shape=(X_train.shape[1],)),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

# Compilar o modelo
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Treinar o modelo
model.fit(X_train, y_train, epochs=10, batch_size=64, validation_data=(X_test, y_test))

# Avaliar o modelo
loss, accuracy = model.evaluate(X_test, y_test)
print("Loss:", loss)
print("Accuracy:", accuracy)

# Salvar o modelo treinado
model.save("modelo_js_blockads_otimizado_11_2.h5")
print("Modelo salvo com sucesso!")
