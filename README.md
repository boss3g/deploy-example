## Descrição

Esta é uma aplicação simples de uma calculadora científica desenvolvida utilizando HTML, TailwindCSS e JavaScript. O objetivo deste projeto é demonstrar como realizar o deploy contínuo utilizando GitHub Actions para GitHub Pages.

## Funcionalidades

- **Operações matemáticas básicas:** adição, subtração, multiplicação e divisão.
- **Funções científicas avançadas:** seno, cosseno, tangente, logaritmo, exponencial e mais.
- **Interface responsiva e amigável:** estilizada com TailwindCSS.
- **Deploy contínuo e automatizado:** utilizando GitHub Actions.

## Tecnologias Utilizadas

- **HTML5:** Estrutura do aplicativo.
- **TailwindCSS:** Estilização rápida e responsiva.
- **JavaScript:** Lógica de funcionamento da calculadora.
- **GitHub Actions:** CI/CD para deploy automatizado no GitHub Pages.

## Estrutura do Projeto

```
calculadora-cientifica/
├── public/
│   ├── index.html
│   ├── app.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── README.md
└── LICENSE
```

## Deploy Contínuo com GitHub Actions

Este projeto utiliza GitHub Actions para realizar deploy contínuo para GitHub Pages. Sempre que há um push para a branch `main`, o workflow é acionado, realizando o deploy dos arquivos da pasta `public` para a branch `gh-pages`.

### Configuração do Workflow

O arquivo de configuração do GitHub Actions (`.github/workflows/deploy.yml`) está configurado da seguinte maneira:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.ACTIONS_DEPLOY_TOKEN }}
        publish_branch: gh-pages
        publish_dir: ./public

    - name: Notify deployment success
      run: echo "Deployment to GitHub Pages was successful!"
      if: success()
```
