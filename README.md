# ProjetoTeste

Teste desafio desenvolvedor

IMPORTANTE
"empresa-desafio" - É o FRONT
"DesafioEmpresa-control" - É o BACK

Neste projeto full stack, foram utilizados as seguintes tecnologias e linguagens
- Java
- Spring Boot e Spring Security (foi feita a criptografia de senhas para o banco)
- MySql
- ReactJS
- JavaScript
- Bootstrap
-HTML
-CSS

Como funciona?

Atendendo ao que foi solicitado, este sistema funciona desta maneira:

- 1º Deve se cadastrar na tela de login
(No momento que é enviado a senha e login ao Spring, o Security valida e realiza a criptografia da senha.)
- 2ª Deve se logar no sistema utilizando o email e senha cadastrados
(O Spring Security valida a senha e email)
- 3ª Assim que for realizado o login a parte de upload de arquivo sera apresentada clique nele
- 4 º Escolha um arquivo CSV
- 5º Depois click no botão “Enviar Arquivo”
(Neste momento o arquivo é enviado ao back e será salvo no banco)
  (Em sequencia é feita a realização do get para trazer os dados do arquivo salvo)
(Será apresentado uma tabela do Bootstrap com os dados do arquivo csv)
- 6º Repare que na a coluna “nome” veio ordenada conforma solicitado
- 7º Repare que os campos datas agora estão ok
- 8º Repare que a quantidade de Homens e mulheres são apresentadas
- 9ª  Repare que a média de idade é apresentada



OBS: Eu não foquei muito em css neste projeto por conta do tempo, foquei mais em desempenho e funcionalidade, por conta disso os campos e a tabela não são dos mais “Bonitos” rs
