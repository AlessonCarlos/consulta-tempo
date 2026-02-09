

````md
# 🌤️ App de Clima – Vanilla JavaScript

Aplicação web moderna, responsiva e didática para consulta do **clima atual** a partir do nome de uma cidade, utilizando a **Open-Meteo API** e **JavaScript puro (Vanilla JS)**.

O projeto foi desenvolvido com foco em **boas práticas**, **organização de código** e **separação de responsabilidades**, servindo como base de estudo e portfólio.

---

## 🎯 Objetivo do Projeto

Permitir que o usuário:
- Digite o nome de uma cidade
- Pressione **Enter** ou clique no botão **Buscar**
- Visualize:
  - Temperatura atual
  - Condição do clima
  - Ícone representando o clima
  - Nome da cidade pesquisada

---

## ✨ Funcionalidades

- 🔎 Busca de cidade via geocoding
- 🌡️ Exibição da temperatura atual
- 🌥️ Ícones representando o clima
- ⏳ Estado de loading durante a requisição
- ❌ Tratamento de erros:
  - Cidade não encontrada
  - Falha na API
- ⌨️ Navegação por teclado (Enter)
- 📱 Layout responsivo (mobile first)
- ♿ Boas práticas de acessibilidade

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Open-Meteo API
- Fetch API + async/await

> Projeto desenvolvido sem frameworks ou bibliotecas externas.

---

## 📂 Estrutura de Pastas

```txt
/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── icons/
│   │   └── weather/
│   └── images/
├── css/
│   ├── reset.css
│   └── styles.css
├── js/
│   ├── api/
│   │   └── weatherService.js
│   ├── ui/
│   │   └── renderWeather.js
│   ├── utils/
│   │   └── helpers.js
│   └── main.js
````

---

## 🧠 Organização do Código

### `weatherService.js`

Responsável exclusivamente pelas chamadas à API.

**Funções:**

* `buscarCoordenadas(cidade)`
* `buscarClima(latitude, longitude)`

---

### `helpers.js`

Funções utilitárias reutilizáveis.

**Responsabilidades:**

* Formatação de temperatura
* Mapeamento de códigos climáticos para ícones

---

### `renderWeather.js`

Responsável pela manipulação do DOM.

**Funções:**

* Renderizar dados do clima
* Exibir mensagens de erro
* Mostrar estado de loading

---

### `main.js`

Arquivo principal da aplicação.

**Responsabilidades:**

* Captura eventos (submit e Enter)
* Controle do fluxo da aplicação
* Integração entre API, UI e utilidades

---

## 🎨 Layout e UX

* Layout centralizado
* Visual limpo e moderno
* Input de cidade em destaque
* Botão com feedback visual
* Tipografia moderna
* Ícones representativos de clima
* Totalmente responsivo

---

## ♿ Acessibilidade

* Input com `label`
* Placeholder claro e descritivo
* Navegável por teclado
* Feedback visual e textual para erros

---

## ▶️ Como Rodar o Projeto Localmente

### Opção 1 – Abrir no navegador

1. Baixe ou clone o repositório
2. Abra o arquivo `index.html`

### Opção 2 – Live Server (recomendado)

1. Abra o projeto no VS Code
2. Instale a extensão **Live Server**
3. Clique com o botão direito em `index.html`
4. Selecione **Open with Live Server**

---

## 📡 API Utilizada

**Open-Meteo API**

* Geocoding: conversão de cidade para latitude e longitude
* Weather: dados do clima atual

Documentação oficial:
[https://open-meteo.com/](https://open-meteo.com/)

---

## 🚀 Possíveis Evoluções

* Previsão do clima para os próximos dias
* Sensação térmica
* Persistência da última cidade pesquisada (`localStorage`)
* Dark / Light Mode
* Animações suaves
* Testes automatizados

---

## 👨‍💻 Público-Alvo

* Estudantes de JavaScript
* Desenvolvedores iniciantes e júnior
* Projetos de estudo
* Portfólio frontend

---

## 📄 Licença

Projeto livre para uso educacional e pessoal.

```

---

Se quiser, posso:
- adaptar esse README para **inglês**
- deixar com linguagem mais **corporativa**
- ou escrever uma versão **enxuta** para repositório público

É só falar 🔥
```
