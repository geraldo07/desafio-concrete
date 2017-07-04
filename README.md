# desafio-concrete

API RESTful de criação de sign up/sign in.

# Requisitos
- Persitência de dados
- Sistema de build Gestão de dependências via gerenciador de pacotes Utilizar um task runner para realização de build
- Padronização de estilo de código em tempo de build - sugestão: jsHint/jsLint
- API: Express

# Requisitos desejáveis
- JWT como token
- Testes unitários
- Criptogafia não reversível (hash) na senha e no toke

```sh
POST
/signin/
```

```sh
POST
/signup/
```

```sh
GET
/searchUser/:user_id
HEADER
'authorization': 'Bearer <token>'
```
