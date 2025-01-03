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

# Carregar arquivos de códigos JavaScript maliciosos por tipo
ads_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Maliciosos_Multiclass\Ads"
popup_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Maliciosos_Multiclass\Popup"
tracker_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Maliciosos_Multiclass\Trackers"
malicioustool_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Maliciosos_Multiclass\MaliciousTools"
benign_folder = r"C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Nao_Maliciosos11"

ads_files_data = load_files_from_folder(ads_folder)
popup_files_data = load_files_from_folder(popup_folder)
tracker_files_data = load_files_from_folder(tracker_folder)
malicioustool_files_data = load_files_from_folder(malicioustool_folder)
benign_files_data = load_files_from_folder(benign_folder)

# Criar labels para os dados
ads_labels = np.full(len(ads_files_data), 1)
popup_labels = np.full(len(popup_files_data), 2)
tracker_labels = np.full(len(tracker_files_data), 3)
malicioustool_labels = np.full(len(malicioustool_files_data), 4)
benign_labels = np.full(len(benign_files_data), 0)

# Concatenar dados e labels
all_data = np.concatenate([ads_files_data, popup_files_data, tracker_files_data, malicioustool_files_data, benign_files_data])
all_labels = np.concatenate([ads_labels, popup_labels, tracker_labels, malicioustool_labels, benign_labels])

# Vetorizar os dados usando o CountVectorizer
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(all_data).toarray()

# Dividir os dados em conjuntos de treinamento e teste
X_train, X_test, y_train, y_test = train_test_split(X, all_labels, test_size=0.2, random_state=42)

# Transformar labels em one-hot encoding para classificação multi-classe
y_train = tf.keras.utils.to_categorical(y_train, num_classes=5)
y_test = tf.keras.utils.to_categorical(y_test, num_classes=5)

# Definir modelo de aprendizado de máquina (Rede Neural Simples) para classificação multi-classe
model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(128, activation='relu', input_shape=(X_train.shape[1],)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(5, activation='softmax')  # 5 classes no total
])

# Compilar o modelo
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Treinar o modelo
model.fit(X_train, y_train, epochs=10, batch_size=64, validation_data=(X_test, y_test))

# Avaliar o modelo
loss, accuracy = model.evaluate(X_test, y_test)
print("Loss:", loss)
print("Accuracy:", accuracy)

# Salvar o modelo treinado
model.save("modelo_js_blockads_otimizado_multiclasse_2.h5")
print("Modelo salvo com sucesso!")

import pickle

# Vetorizar os dados usando o CountVectorizer
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(all_data).toarray()

# Salvar o vetorizer treinado
with open("vectorizer.pkl", "wb") as f:
    pickle.dump(vectorizer, f)
