# VerzelMotors
Repositório para aplicação VerzelMotors: TypeScript - API NodeJS + MongoDB Atlas + React Native

## Construído com

- TypeScript
- 💙 React Native
- API Rest Node.JS
- [Expo](https://expo.dev/)
- MongoDB (Atlas) para persistência de dados 
- VS code
- Git

# Iniciando o Projeto

## 👉 Pré-requisitos:

- Necessário possuir um emulador iOS ou [Android](https://developer.android.com/studio) ou uma conta [Expo](https://expo.dev/) e o aplicativo **Expo Go** no seu aparelho celular

- Utilize o Git Bash ou outro prompt de comando

- Utilize uma IDE de sua preferência como [VS Code](https://code.visualstudio.com/download).

## Passo a Passo:

- Clone [esse repositório](https://github.com/brunogroth/VerzelMotors) para sua máquina local 
- ```
  git clone https://github.com/brunogroth/VerzelMotors.git
  ```

- Navegue ao diretório `cd VerzelMotors`.
### API Node

- Para configurar e inicializar a API, navegue até o diretório `cd APIVerzelMotors`

- Para instalar todas as dependências do projeto, rode:
- ```
  npm install
  ``` 
- Para buildar o projeto e disponibilizar a API em ambiente localhost e acessá-la utilizando alguma plataforma de testes de API (Postman, Insomnia) bem como a aplicação Mobile, rode os seguintes comandos:
- ```
  npm run build
  npm run dev
  ```
- O resultado esperado é o seguinte:
![image](https://user-images.githubusercontent.com/96024737/202929994-3a55000c-c207-4770-a928-76de81003197.png)

- :tada: Você já pode testar as requisições HTTP utilizando a porta 3001.

### App React Native
- Para instalar todas as dependências do projeto, opte por utilizar o [yarn](https://yarnpkg.com/) que foi utilizado no desenvolvimento deste projeto:
- ```
  yarn install
  ```
- 🥁 Agora, para **inicializar o Aplicativo**, basta rodar:
- ```
  yarn start
  ```
- :tada: Pronto! O resultado esperado é o seguinte:

![image](https://user-images.githubusercontent.com/96024737/202930657-97b18d1b-8a63-4ea6-8483-7e201f33ce40.png)

- Para utilizar o aplicativo, basta ler o QR Code com o seu celular ou inicializar o emulador utilizando `a` para Android ou `i` para iOS.

**IMPORTANTE: Copie o IP onde o Metro está disponibilizando a aplicação, marcado em VERMELHO na imagem acima.**
- Caso o IP seja diferente do que está no projeto, procure por todas as ocorrências do endereço `http://192.168.0.104:3001` e substitua pelo seu IP:PORTA que foi disponibilizado pelo Metro, conforme mostra a imagem abaixo:

![image](https://user-images.githubusercontent.com/96024737/202932295-4fc432ab-58f7-4d71-8664-4db85b0c2be3.png)

- :tada: Sinta-se livre para navegar no App! :tada: (spoiler:)

![image](https://user-images.githubusercontent.com/96024737/202933622-bc218fab-174e-437f-b689-c7362213395b.png)

# Author

:man: **Bruno Groth**
- [GitHub](https://github.com/brunogroth)
- [LinkedIn](https://linkedin.com/in/bruno-groth/)
- [Portfolio](https://brunogroth.github.io/Portfolio-React-Website)

## 🤝 Contributing
- Contribuições, report de problemas e feature requests são bem vindas!
- Sinta-se livre para conferir a [issues page](https://github.com/brunogroth/VerzelMotors/issues).
