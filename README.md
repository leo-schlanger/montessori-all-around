# Montessori All Around

Landing page profissional para "Montessori All Around" - uma plataforma educativa baseada na metodologia Montessori.

## Visão Geral

Este projeto é uma landing page moderna e responsiva desenvolvida para promover os serviços educacionais Montessori, incluindo:
- Turmas Montessori para crianças
- Consultoria para pais
- Formação para educadores

## Stack Tecnológica

- **Framework**: [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- **Linguagem**: TypeScript
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Utilitários**: clsx, tailwind-merge, class-variance-authority

## Paleta de Cores (Branding)

| Cor | Código Hex | Uso |
|-----|------------|-----|
| Azul Suave | `#AFC6D1` | Elementos primários, destaques |
| Coral | `#F4A28C` | CTAs, acentos, botões |
| Amarelo | `#F2C66D` | Elementos decorativos |
| Verde Pastel | `#B7CBA3` | Elementos secundários |
| Bege Fundo | `#E9E1D8` | Fundos de seções |
| Cinza Texto | `#6E7377` | Texto principal |

## Tipografia

- **Títulos**: Playfair Display (serif)
- **Corpo**: Inter (sans-serif)

## Estrutura do Projeto

```
projeto-montessori/
├── public/
│   └── logo.svg              # Favicon/logo SVG
├── src/
│   ├── components/
│   │   ├── ui/               # Componentes base reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Textarea.tsx
│   │   ├── Header.tsx        # Navegação sticky
│   │   ├── Hero.tsx          # Seção principal
│   │   ├── About.tsx         # Sobre a educadora
│   │   ├── Methodology.tsx   # Metodologia Montessori
│   │   ├── Services.tsx      # Cards de serviços
│   │   ├── Testimonials.tsx  # Depoimentos
│   │   ├── Contact.tsx       # Formulário de contacto
│   │   ├── Footer.tsx        # Rodapé
│   │   └── Logo.tsx          # Logo SVG vetorizado
│   ├── lib/
│   │   └── utils.ts          # Utilitários (cn function)
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Ponto de entrada
│   └── index.css             # Estilos globais + Tailwind
├── index.html                # HTML principal
├── tailwind.config.js        # Configuração Tailwind
├── vite.config.ts            # Configuração Vite
├── tsconfig.json             # Configuração TypeScript
└── package.json
```

## Seções da Landing Page

1. **Header** - Navegação sticky com menu mobile responsivo
2. **Hero** - Logo, headline principal e CTAs
3. **Sobre** - Apresentação da educadora e valores
4. **Metodologia** - 4 pilares do método Montessori
5. **Serviços** - 3 cards com detalhes dos serviços
6. **Testemunhos** - Depoimentos de famílias
7. **Contacto** - Formulário e informações de contacto
8. **Footer** - Links rápidos e redes sociais

## Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd projeto-montessori

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Pré-visualizar build
npm run preview
```

## Deploy na Vercel

### Opção 1: Via Dashboard Vercel
1. Aceder a [vercel.com](https://vercel.com)
2. Importar o repositório do GitHub
3. Configurações automáticas serão detectadas
4. Clicar em "Deploy"

### Opção 2: Via CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Configurações de Build (Vercel)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run preview` | Pré-visualiza a build localmente |
| `npm run lint` | Executa linting do código |

## Funcionalidades

- Design totalmente responsivo (mobile, tablet, desktop)
- Navegação suave entre seções (smooth scroll)
- Menu mobile com animações
- Formulário de contacto interativo
- Logo SVG vetorizado com círculos sobrepostos
- Animações subtis em hover
- Header sticky com blur no scroll

## Próximos Passos (Roadmap)

- [ ] Integrar backend para formulário de contacto
- [ ] Adicionar galeria de fotos
- [ ] Implementar blog/artigos
- [ ] Adicionar sistema de agendamento online
- [ ] Implementar área de membros
- [ ] Adicionar versão em inglês

## Personalização

### Alterar Cores
Editar `tailwind.config.js` na seção `theme.extend.colors`

### Alterar Conteúdo
O conteúdo está nos respectivos componentes em `src/components/`

### Adicionar Novas Seções
1. Criar componente em `src/components/`
2. Importar em `src/App.tsx`
3. Adicionar link de navegação no `Header.tsx`

## Licença

Todos os direitos reservados © Montessori All Around

---

Desenvolvido com dedicação para promover a educação Montessori em Portugal.
