# Examplo_build_node_docker
exemplo de build do node usando o docker


# Comandos para realizar o build 

$ docker build -t sample-express-app .

# Iniciando o container 
$ docker run -p 8080:8080 -d sample-express-app

# Testando o container pela linha de comando
$ curl localhost:8080
