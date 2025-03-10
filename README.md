# QR Code Generator

Este é um projeto simples de **Gerador de QR Code**, onde o usuário pode inserir uma URL ou texto para gerar um QR Code dinâmico. O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript**, consumindo uma API externa para gerar os códigos.

## 🚀 Tecnologias Utilizadas
- **HTML5** (Estrutura do projeto)
- **CSS3** (Estilização responsiva e dinâmica)
- **JavaScript** (Lógica de geração do QR Code)
- **API QR Server** (Para criar os QR Codes)

## 📦 Como Rodar o Projeto

1. **Clone o repositório**
```sh
  git clone https://github.com/loez97/gerador-qrcode.git
  cd gerador-qrcode
```

2. **Abra o arquivo `index.html`** em qualquer navegador moderno. Não é necessário configurar um servidor.

## 🛠 Funcionalidades
- **Gerar QR Code** a partir de um texto ou URL.
- **Aperte Enter** para gerar um QR Code rapidamente.
- **Limpeza automática** do QR Code quando o campo de entrada estiver vazio.
- **Interface simples e intuitiva** com design responsivo.

## 📌 Como Funciona?
1. O usuário digita uma URL ou texto no campo de entrada.
2. Clica no botão **"Gerar QR Code"** ou pressiona **Enter**.
3. O QR Code é gerado dinamicamente usando a API `https://api.qrserver.com/v1/create-qr-code/`.
4. O QR Code aparece na tela e pode ser escaneado.
5. Se o campo de entrada for apagado, o QR Code desaparece automaticamente.

## 🔗 API Utilizada
A API utilizada para gerar os QR Codes:
```
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SEU_TEXTO_AQUI
```

## 📝 Autor
Desenvolvido por Luiz Gonzaga

