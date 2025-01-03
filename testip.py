from cryptography import x509
import ipaddress
import idna

def _ip_or_dns_name(val) -> x509.GeneralName:
    """Convert a string into either an x509.IPAddress or x509.DNSName object."""
    try:
        # Verifica se o valor é uma string
        if isinstance(val, str):
            # Tenta decodificar a string como punycode
            decoded_val = idna.decode(val)
            # Codifica novamente para A-label
            encoded_val = idna.encode(decoded_val).decode('ascii')
            return x509.DNSName(encoded_val)
        else:
            # Se não for uma string, retorna None
            return None
    except UnicodeError:
        # Se a conversão para punycode falhar, retornar o valor original como DNSName
        return x509.DNSName(val)

# Teste
print(_ip_or_dns_name("デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の標識-バレウドットウクグトットズヒ.セール"))
