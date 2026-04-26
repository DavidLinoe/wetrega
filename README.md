# Wetrega

Aplicação web desenvolvida com [Angular](https://angular.dev/) 21, [TailwindCSS](https://tailwindcss.com/) 4 e [Vitest](https://vitest.dev/).

## Pré-requisitos

- Node.js compatível com Angular 21
- npm 11+

## Instalação

```bash
npm install
```

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento em `http://localhost:4200/` |
| `npm run build` | Gera o build de produção em `dist/` |
| `npm run watch` | Build em modo desenvolvimento com observação de arquivos |
| `npm test` | Executa os testes unitários com Vitest |

A aplicação recarrega automaticamente sempre que algum arquivo-fonte é modificado.

## Estrutura do projeto

```
wetrega/
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── app.config.ts        # Configuração da aplicação (providers)
│   │   ├── app.routes.ts        # Definição de rotas
│   │   ├── app.ts               # Componente raiz
│   │   ├── app.html             # Template do componente raiz
│   │   ├── app.css              # Estilos do componente raiz
│   │   └── app.spec.ts          # Testes do componente raiz
│   ├── index.html               # HTML principal
│   ├── main.ts                  # Bootstrap da aplicação
│   └── styles.css               # Estilos globais (Tailwind)
├── angular.json                 # Configuração do Angular CLI
├── package.json                 # Dependências e scripts
├── tsconfig.json                # Configuração TypeScript base
├── tsconfig.app.json            # Configuração TypeScript da aplicação
├── tsconfig.spec.json           # Configuração TypeScript dos testes
├── .postcssrc.json              # Configuração do PostCSS
├── .prettierrc                  # Configuração do Prettier
├── .editorconfig                # Padrões de editor
└── README.md
```

## Geração de código

O Angular CLI permite gerar novos artefatos (componentes, diretivas, pipes etc.):

```bash
ng generate component nome-do-componente
ng generate --help
```

## Testes

### Unitários

```bash
npm test
```

### End-to-end

O Angular CLI não inclui um framework de testes e2e por padrão. Configure o de sua preferência e execute com:

```bash
ng e2e
```

## Recursos adicionais

- [Documentação do Angular](https://angular.dev/)
- [Angular CLI – Referência de comandos](https://angular.dev/tools/cli)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Vitest](https://vitest.dev/)
