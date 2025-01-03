from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    pass

def response(flow: http.HTTPFlow) -> None:
    if flow.error and "certificate verify failed" in flow.error.msg:
        original_response = flow.response.copy()  # Copiar a resposta original
        flow.response = http.HTTPResponse.make(499, "Certificate expired or invalid",
                                               original_response.headers, original_response.content)

if __name__ == "__main__":
    # Altere o endereço e a porta do proxy
    options = [
        '-s', __file__,
        '--listen-host', '127.0.0.1',  # Altere o endereço IP
        '--listen-port', '8080'  # Altere a porta
    ]
    from mitmproxy.tools.main import mitmdump
    mitmdump(options)
