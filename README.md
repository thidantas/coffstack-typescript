# Coffstack TypeScript

Repositório de estudos do curso **TypeScript** da [Coffstack](https://coffstack.com), com exercícios e exemplos práticos organizados por módulo.

O objetivo é registrar o aprendizado ao longo do curso — da introdução à linguagem até utilitários de tipo e programação orientada a objetos.

## Sobre o curso

Este material acompanha o curso de TypeScript da Coffstack, focado em tipagem estática, generics, manipulação de tipos e padrões usados no dia a dia com TypeScript moderno.

## Estrutura

```text
typescript/
├── modulo-1-intro-typescript/
├── modulo-2-generics-e-manipulacao-de-tipos/
├── modulo-3-type-utilities/
└── typescript-poo/
```

### Módulo 1 — Introdução ao TypeScript

Fundamentos da linguagem e do sistema de tipos:

- Tipos primitivos e arrays
- Funções e type assertions
- Objects, `type` e `interface`
- `null`, `undefined` e `strictNullChecks`
- Literal types e enums

### Módulo 2 — Generics e manipulação de tipos

Tipagem reutilizável e operadores de tipo:

- Generics e generic constraints
- Interfaces e tipos genéricos
- Operadores `keyof` e `typeof`
- Indexed access types
- Consolidação dos conceitos

### Módulo 3 — Type utilities

Utility types nativos do TypeScript:

- `Pick` e `Omit`
- `Exclude` e `Extract`
- `Partial` e `Required`
- `Parameters`, `ReturnType` e `Awaited`
- `Record` e `Readonly`

### TypeScript POO

Prática de orientação a objetos com TypeScript (exemplo de domínio bancário): classes, composição, estratégias e tipagem aplicada.

## Como usar

Cada módulo contém arquivos `.ts` independentes, pensados para estudo e experimentação no editor.

Para checar tipagem em um módulo (quando houver `tsconfig.json`):

```bash
npx tsc --noEmit -p modulo-3-type-utilities
```

## Observação

Este repositório é pessoal e educacional. Não é um projeto de produção — serve como caderno de código do curso.
