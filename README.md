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

---

## Responsividade (Mobile-First)

O projeto foi desenvolvido seguindo a abordagem **Mobile-First**, garantindo uma experiência otimizada em todos os dispositivos.

### Breakpoints Utilizados

| Breakpoint | Tamanho | Dispositivos |
|------------|---------|--------------|
| Base | < 640px | Smartphones (iPhone SE, Android) |
| `sm` | ≥ 640px | Smartphones grandes, pequenos tablets |
| `md` | ≥ 768px | Tablets (iPad Mini, iPad) |
| `lg` | ≥ 1024px | Tablets landscape, laptops |
| `xl` | ≥ 1280px | Desktops |

### Características Responsivas

#### Mobile (< 640px)
- Menu hambúrguer com navegação em fullscreen
- Botões em largura total para facilitar toque
- Tipografia reduzida para melhor legibilidade
- Cards em coluna única
- Elementos decorativos simplificados
- Touch targets mínimos de 44px (recomendação Apple)
- Prevenção de zoom em inputs (font-size: 16px)

#### Tablet (640px - 1024px)
- Grid de 2 colunas para cards
- Navegação horizontal visível
- Imagens em tamanhos intermediários
- Espaçamentos ajustados

#### Desktop (> 1024px)
- Grid completo (3 colunas para serviços)
- Todos os elementos decorativos visíveis
- Hover effects habilitados
- Scrollbar customizada

### Recursos de Acessibilidade

- **Safe Area**: Suporte para dispositivos com notch (iPhone X+)
- **Prefers-reduced-motion**: Animações desativadas para utilizadores sensíveis
- **Focus visible**: Indicadores de foco para navegação por teclado
- **Contraste**: Cores com contraste adequado (WCAG 2.1)
- **Touch targets**: Áreas de toque mínimas de 44x44px
- **Semantic HTML**: Estrutura semântica com landmarks ARIA

### Testes de Responsividade

```bash
# Dispositivos testados:
- iPhone SE (375px)
- iPhone 12/13/14 (390px)
- iPhone 14 Pro Max (430px)
- Samsung Galaxy S21 (360px)
- iPad Mini (768px)
- iPad Pro (1024px)
- MacBook Air (1440px)
- Desktop Full HD (1920px)
```

---

## SEO (Search Engine Optimization)

O projeto inclui otimizações profissionais de SEO para melhor posicionamento nos motores de busca.

### Meta Tags Implementadas

#### Primary Meta Tags
- `title`: Título otimizado com palavras-chave
- `description`: Descrição de 150-160 caracteres
- `keywords`: Palavras-chave relevantes
- `robots`: index, follow
- `language`: Portuguese
- `geo.*`: Geolocalização (Lisboa, Portugal)

#### Open Graph (Facebook, LinkedIn)
- `og:type`: website
- `og:title`: Título para partilha
- `og:description`: Descrição para partilha
- `og:image`: Imagem 1200x630px
- `og:locale`: pt_PT
- `og:site_name`: Montessori All Around

#### Twitter Cards
- `twitter:card`: summary_large_image
- `twitter:title`: Título para Twitter
- `twitter:description`: Descrição para Twitter
- `twitter:image`: Imagem para partilha

### Structured Data (JSON-LD)

O projeto inclui três tipos de Schema.org:

1. **EducationalOrganization**: Informações da escola
2. **LocalBusiness**: Dados do negócio local
3. **FAQPage**: Perguntas frequentes

### Ficheiros SEO

| Ficheiro | Localização | Descrição |
|----------|-------------|-----------|
| `robots.txt` | `/public/robots.txt` | Instruções para crawlers |
| `sitemap.xml` | `/public/sitemap.xml` | Mapa do site |
| `og-image.svg` | `/public/og-image.svg` | Imagem para partilha social |

### Boas Práticas SEO Implementadas

- URL canónica definida
- Heading hierarchy correta (H1 > H2 > H3)
- Alt text em imagens (quando aplicável)
- Links com texto descritivo
- Tempo de carregamento otimizado
- Mobile-friendly (Google Mobile-First Index)
- HTTPS (via Vercel)

### Performance

- Lazy loading de imagens
- Preconnect para fontes externas
- CSS/JS minificado (produção)
- Tree shaking automático

---

## Estrutura do Projeto

```
projeto-montessori/
├── public/
│   ├── logo.svg              # Favicon/logo SVG
│   ├── og-image.svg          # Imagem Open Graph
│   ├── robots.txt            # Instruções para crawlers
│   └── sitemap.xml           # Mapa do site
├── src/
│   ├── components/
│   │   ├── ui/               # Componentes base reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Textarea.tsx
│   │   ├── Header.tsx        # Navegação sticky responsiva
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
│   └── index.css             # Estilos globais + Tailwind + Responsivo
├── index.html                # HTML principal + SEO
├── tailwind.config.js        # Configuração Tailwind + cores
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

---

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/leo-schlanger/montessori-all-around.git
cd montessori-all-around

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
vercel --prod
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

---

## Checklist de Qualidade

### Responsividade
- [x] Mobile (< 640px) - Layout em coluna
- [x] Tablet (640px - 1024px) - Grid adaptativo
- [x] Desktop (> 1024px) - Layout completo
- [x] Safe area para dispositivos com notch
- [x] Touch targets adequados (44px mínimo)
- [x] Prevenção de zoom em inputs iOS

### SEO
- [x] Meta tags completas
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured Data (JSON-LD)
- [x] robots.txt
- [x] sitemap.xml
- [x] URL canónica
- [x] Heading hierarchy

### Performance
- [x] Fonts otimizadas (preconnect)
- [x] CSS minificado
- [x] Tree shaking
- [x] Lazy loading preparado

### Acessibilidade
- [x] Semantic HTML
- [x] ARIA labels
- [x] Focus indicators
- [x] Reduced motion support
- [x] Contraste adequado

---

## Próximos Passos (Roadmap)

- [ ] Integrar backend para formulário de contacto
- [ ] Adicionar galeria de fotos reais
- [ ] Implementar blog/artigos
- [ ] Adicionar sistema de agendamento online
- [ ] Implementar área de membros
- [ ] Adicionar versão em inglês
- [ ] Gerar og-image.png (converter SVG)
- [ ] Adicionar Google Analytics
- [ ] Configurar Google Search Console

## Personalização

### Alterar Cores
Editar `tailwind.config.js` na seção `theme.extend.colors`

### Alterar Conteúdo
O conteúdo está nos respectivos componentes em `src/components/`

### Alterar SEO
Editar `index.html` para meta tags e structured data

### Adicionar Novas Seções
1. Criar componente em `src/components/`
2. Importar em `src/App.tsx`
3. Adicionar link de navegação no `Header.tsx`
4. Atualizar `sitemap.xml`

---

## Links

- **Live Demo**: https://projeto-montessori.vercel.app
- **Repositório**: https://github.com/leo-schlanger/montessori-all-around

## Licença

Todos os direitos reservados © Montessori All Around

---

Desenvolvido com dedicação para promover a educação Montessori em Portugal.
