import http.server
import socketserver 
import socket 

PORT = 8002
Handler = http.server.SimpleHTTPRequestHandler 

hostname = socket.gethostname() 
local_ip = socket.gethostbyname(hostname) 

with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd: 
    print(f"Serving at http://localhost:{PORT}") 
    print(f"Or on local network: http://{local_ip}:{PORT}") 
    httpd.serve_forever() 
    


