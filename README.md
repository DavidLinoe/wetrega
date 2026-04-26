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

| Comando         | Descrição                                                        |
| --------------- | ---------------------------------------------------------------- |
| `npm start`     | Inicia o servidor de desenvolvimento em `http://localhost:4200/` |
| `npm run build` | Gera o build de produção em `dist/`                              |
| `npm run watch` | Build em modo desenvolvimento com observação de arquivos         |
| `npm test`      | Executa os testes unitários com Vitest                           |

A aplicação recarrega automaticamente sempre que algum arquivo-fonte é modificado.

## Estrutura do projeto

Cada feature (layout/_ e pages/_) segue a mesma arquitetura em camadas: `apis/`, `components/`, `containers/`, `facades/`, `mappers/`, `models/` e `stores/` (actions, effects, reducer, selectors).

```
wetrega/
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── app.config.ts                # Providers da aplicação
│   │   ├── app.routes.ts                # Definição de rotas
│   │   ├── app.ts / app.html / app.css  # Componente raiz
│   │   ├── app.spec.ts                  # Testes do componente raiz
│   │   │
│   │   ├── layout/                      # Componentes estruturais
│   │   │   ├── header/
│   │   │   │   ├── apis/        → explore.api.ts
│   │   │   │   ├── components/  → explore.component.{ts,html}
│   │   │   │   ├── containers/  → explore.container.component.{ts,html}
│   │   │   │   ├── facades/     → explore.facade.ts
│   │   │   │   ├── mappers/     → explore.mapper.ts
│   │   │   │   ├── models/      → explore.model.ts
│   │   │   │   └── stores/      → explore.{actions,effects,reducer,selectors}.ts
│   │   │   ├── footer/                  # (mesma estrutura)
│   │   │   └── navigation/              # (mesma estrutura)
│   │   │
│   │   ├── pages/                       # Páginas/rotas da aplicação
│   │   │   ├── home/                    # (mesma estrutura de feature)
│   │   │   ├── explore/                 # (mesma estrutura de feature)
│   │   │   ├── orders/                  # (mesma estrutura de feature)
│   │   │   └── profile/                 # (mesma estrutura de feature)
│   │   │
│   │   └── services/                    # Serviços compartilhados
│   │       ├── api/api.service.ts
│   │       ├── modal/modal.service.ts
│   │       └── toast/toast.service.ts
│   │
│   ├── index.html                       # HTML principal
│   ├── main.ts                          # Bootstrap da aplicação
│   └── styles.css                       # Estilos globais (Tailwind)
│
├── .vscode/                             # Configurações do VS Code
├── angular.json                         # Configuração do Angular CLI
├── package.json                         # Dependências e scripts
├── tsconfig.json                        # TypeScript base
├── tsconfig.app.json                    # TypeScript da aplicação
├── tsconfig.spec.json                   # TypeScript dos testes
├── .postcssrc.json                      # Configuração do PostCSS
├── .prettierrc                          # Configuração do Prettier
├── .editorconfig                        # Padrões de editor
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
