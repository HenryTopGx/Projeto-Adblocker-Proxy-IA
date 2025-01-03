import os
import re
#ad10.js

def identify_script_type(script_content):
    # Definir padrões para cada tipo de script
    patterns = {
        'ads': [
            r'googletag\.cmd\.push',  # Google Ads
            r'adsbygoogle',  # Google Ads
            r'adroll',  # AdRoll
            r'var\s*ad',  # Generic ad pattern
        ],
        'analytics': [
            r'google-analytics\.com/analytics\.js',  # Google Analytics
            r'ga\(',  # Google Analytics
            r'gtag\(',  # Google Analytics
            r'_paq\.push',  # Piwik/Matomo
            r'var\s*_gaq',  # Google Analytics legacy
        ],
        'tracker': [
            r'hotjar\.com',  # Hotjar
            r'mixpanel\.com',  # Mixpanel
            r'intercom\.io',  # Intercom
            r'woopra\.com',  # Woopra
        ],
        'popup': [
            r'\.fancybox\(',  # Fancybox
            r'\.colorbox\(',  # Colorbox
            r'\.magnificPopup\(',  # Magnific Popup
            r'window\.open',  # Generic popup
            r'\.popup',  # Generic popup
        ]
    }

    # Verificar o conteúdo do script contra cada padrão
    for type_name, regex_patterns in patterns.items():
        for pattern in regex_patterns:
            if re.search(pattern, script_content, re.IGNORECASE):
                return type_name

    return 'unknown'  # Retorna 'unknown' se nenhum padrão for correspondido

def analyze_scripts_in_directory(directory):
    script_types = {}
    
    # Percorre todos os arquivos da pasta fornecida
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.js'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    script_content = f.read()
                    script_type = identify_script_type(script_content)
                    script_types[file_path] = script_type

    return script_types

# Diretório que contém os scripts.js
directory = r'C:\Users\henry\OneDrive\Documentos\Projeto Adblocker Proxy\Maliciosos11_2'

# Identificar os tipos de scripts na pasta
script_types = analyze_scripts_in_directory(directory)

# Exibir os resultados
for script_path, script_type in script_types.items():
    print(f'{script_path}: {script_type}')
