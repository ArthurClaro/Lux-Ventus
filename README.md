![lux](https://github.com/ArthurClaro/Lux-Ventus/assets/124170421/e33ad244-56bb-481a-baeb-0e277b78dde8)

<h1 align="left">
 <a href="https://front-end-coral-nine.vercel.app/">Lux-Ventus</a>
</h1>

<div align="left">
  <a href="https://lux-ventus.vercel.app/">
    <img src="https://img.shields.io/badge/LINK%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a href="https://lux-ventus.onrender.com/">
    <img src="https://img.shields.io/badge/Database-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
   <a href="https://www.figma.com/design/0UiAfFIjZcWqgoge3knkC1/Lux-Ventus-Blog-(Community)?node-id=0-1&t=WmDwN38nnWubwXOv-0">
    <img src="https://img.shields.io/badge/Figma-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
</div>

<div align="left">
 <h3>
 <a href="#front-end-nextjs">☑️ Front-End</a>
   <a href="#back-end-nestjs">☑️ Back-End</a>
  </h3>
</div>

#### Introdução
Bem-vindos à Lux-Ventus, uma plataforma única que combina moda, estilo de vida, espiritualidade e saúde mental. Nosso objetivo é inspirar, educar e proporcionar bem-estar aos nossos leitores, oferecendo conteúdo de alta qualidade e relevância. Desenvolvemos esta página web com tecnologias de ponta para garantir uma experiência de usuário superior.

# Tecnologias Utilizadas
## <span id="front-end-nextjs">Front-End: Next.js</span>
- ![Next.js](https://img.shields.io/badge/Next.js-%E2%9C%94-blue?style=for-the-badge) - Um framework React para a construção de aplicações web server-side.
- ![TypeScript](https://img.shields.io/badge/TypeScript-%E2%9C%94-blue?style=for-the-badge) - Um superset de JavaScript que adiciona tipagem estática ao código.
- ![@hookform/resolvers](https://img.shields.io/badge/%40hookform%2Fresolvers-%E2%9C%94-blue?style=for-the-badge) - Uma biblioteca para resolver validações de formulários em React.
- ![cookies-next](https://img.shields.io/badge/cookies--next-%E2%9C%94-blue?style=for-the-badge) - Uma biblioteca para gerenciar cookies no Next.js.
- ![embla-carousel-react](https://img.shields.io/badge/embla--carousel--react-%E2%9C%94-blue?style=for-the-badge) - Uma biblioteca de carrossel para React.
- ![PrimeReact](https://img.shields.io/badge/PrimeReact-%E2%9C%94-blue?style=for-the-badge) - Uma coleção de componentes de interface do usuário para React.
- ![rc-slider](https://img.shields.io/badge/rc--slider-%E2%9C%94-blue?style=for-the-badge) - Um componente de controle deslizante para React.
- ![react-toastify](https://img.shields.io/badge/react--toastify-%E2%9C%94-blue?style=for-the-badge) - Uma biblioteca para exibir notificações em React.
- ![transition-style](https://img.shields.io/badge/transition--style-%E2%9C%94-blue?style=for-the-badge) - Uma biblioteca para adicionar transições e animações elegantes em CSS.
- ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%E2%9C%94-blue?style=for-the-badge) - Uma biblioteca para formulários em React, com suporte a hooks.
- ![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL%2016-%E2%9C%94-blue?style=for-the-badge) - Um sistema de gerenciamento de banco de dados relacional avançado e de código aberto.
- ![Sass](https://img.shields.io/badge/Sass-%E2%9C%94-blue?style=for-the-badge) - Um pré-processador CSS que adiciona funcionalidades como variáveis, aninhamento e mixins ao CSS.

## Rotas Disponíveis

- **`/`** : Página inicial do projeto.
- **`/searchResults/[name]`** : Área de resultados pesquisados.
- **`/public/[id]`** : Página de publicação.
- **`/category/[category]`** : Página de categorias relacionadas.
- **`/contactUs`** : Página para contato.

### 1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```
ou
```shell
npm install
```

### 2. Rodar

Para incializar run dev com o comando:

```
npm run dev
```

## <span id="back-end-nestjs">Back-end: Nest.js</span>
- ![NestJs](https://img.shields.io/badge/NestJs-%E2%9C%94-red?style=for-the-badge) - Um framework para construir aplicações server-side eficientes e escaláveis em Node.js.
- ![Prisma](https://img.shields.io/badge/Prisma-%E2%9C%94-red?style=for-the-badge) - Um ORM (Object-Relational Mapping) para Node.js e TypeScript.
- ![class-validator](https://img.shields.io/badge/class--validator-%E2%9C%94-red?style=for-the-badge) - Uma biblioteca para validação de objetos e suas propriedades em TypeScript.
- ![cloudinary](https://img.shields.io/badge/cloudinary-%E2%9C%94-red?style=for-the-badge) - Uma biblioteca para integrar e gerenciar uploads e transformações de imagens na nuvem usando Cloudinary.
- ![moment](https://img.shields.io/badge/moment-%E2%9C%94-red?style=for-the-badge) - Uma biblioteca para manipulação e formatação de datas em JavaScript.

### 1. Instalando Dependências

Instale as dependências com o comando:

```shell
yarn
```
ou
```shell
npm install
```
### 2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3. Migrations

Execute as migrations com o comando:

```
npx prisma migrate dev
```
### 4. Rodar

Para incializar run dev com o comando:

```
npm run start:dev
```

# Todas as Rotas

### `/publish`

### Exemplo de Request:
```
GET /publish
Host: 'http://localhost:3000/
Authorization: None
Content-type: application/json
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "0755ceab-53e0-43ea-860c-eac6798d01dc",
		"createdAt": "April 29th, 2024",
		"title": "The Latest Trends from the Moon Fashion Week.",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.",
		"image": "https://res.cloudinary.com/drc7lgcmn/image/upload/v1711363918/qo6hpcqpclw4c2zoxcrz.jpg",
		"publiHot": true,
		"category": "fashion",
		"host": "9",
		"imgHost": "9",
		"DetailPublish": [
			{
				"id": "c4d5c4c9-2670-442d-b661-b96815b46451",
				"title": "1. Gilly Forn",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem imperdiet augue. Vestibulum Vitae.",
				"publishId": "0755ceab-53e0-43ea-860c-eac6798d01dc"
			},
 ...
 ]
]
```

### `/publish/category/:category`

### Exemplo de Request:
```
GET /publish/category/:category
Host: 'http://localhost:3000/
Authorization: None
Content-type: application/json
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "ab4ffae9-9038-41bb-a6fa-08c7a050d2c8",
		"createdAt": "April 23th, 2024",
		"title": "The Latest Trends from the Moon Fashion Week.",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.",
		"image": "https://res.cloudinary.com/drc7lgcmn/image/upload/v1711363918/qo6hpcqpclw4c2zoxcrz.jpg",
		"publiHot": true,
		"category": "fashion",
		"host": "9",
		"imgHost": "9",
		"DetailPublish": []
	},
	{
		"id": "793ba69b-080a-451a-b4cb-d490e5cfa6d9",
		"createdAt": "April 23th, 2024",
		"title": "Things to avoid before starting your collections.",
		"description": "Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet sapien fringilla, mattis mattis tellus. Nullam quis imperdiet augue. Vestibulum.",
		"image": "https://res.cloudinary.com/drc7lgcmn/image/upload/v1712320036/jirperv158ibpu7cpoea.jpg",
		"publiHot": false,
		"category": "fashion",
		"host": "9",
		"imgHost": "9",
		"DetailPublish": []
	}
]
```

### `/publish/unic/:id`

### Exemplo de Request:
```
GET /publish/unic/:id
Host: 'http://localhost:3000/
Authorization: None
Content-type: application/json
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "5118d61b-0d5a-4066-8820-a3bbfef6dc80",
	"createdAt": "April 23th, 2024",
	"title": "Time travel with these 5 crazy couturiers.",
	"description": "Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet sapien fringilla, mattis mattis tellus. Nullam quis imperdiet augue. Vestibulum.",
	"image": "https://res.cloudinary.com/drc7lgcmn/image/upload/v1712319959/n5v1plz14m83uxk31dvu.jpg",
	"publiHot": false,
	"category": "ensembles",
	"host": "9",
	"imgHost": "9",
	"DetailPublish": [
		{
			"id": "467b2be4-0ce4-4691-b027-28f7aab6ccc7",
			"title": "1. Gilly Forn",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem imperdiet augue. Vestibulum Vitae.",
			"publishId": "5118d61b-0d5a-4066-8820-a3bbfef6dc80"
		},
	],
	"comments": [
		{
			"id": "37c42e3c-8187-4b98-b103-e551adcd9349",
			"name": "Bufflo 69",
			"createdAt": "2024-04-23T13:33:14.248Z",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel Vitae.",
			"likes": 0,
			"publishId": "5118d61b-0d5a-4066-8820-a3bbfef6dc80"
		},
	]
}
```

### `/detail-publish/:id`

### Exemplo de Request:
```
GET /detail-publish/:id
Host: 'http://localhost:3000/
Authorization: None
Content-type: application/json
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "c4d5c4c9-2670-442d-b661-b96815b46451",
		"title": "1. Gilly Forn",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem imperdiet augue. Vestibulum Vitae.",
		"publishId": "0755ceab-53e0-43ea-860c-eac6798d01dc",
		"ImagesDetail": []
	},
	{
		"id": "f5e1f1bc-dee3-42db-bb3e-89888483c267",
		"title": "2. Mary Bolt",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem imperdiet augue. Vestibulum Vitae.",
		"publishId": "0755ceab-53e0-43ea-860c-eac6798d01dc",
		"ImagesDetail": []
	}
]
```

### `/comments/:id`

### Exemplo de Request:
```
GET /comments/:id
Host: 'http://localhost:3000/
Authorization: None
Content-type: application/json
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "37c42e3c-8187-4b98-b103-e551adcd9349",
		"createdAt": "2024-04-23T13:33:14.248Z",
		"name": "Bufflo 69",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel Vitae.",
		"likes": 0,
		"publishId": "5118d61b-0d5a-4066-8820-a3bbfef6dc80"
	},
	{
		"id": "8b1f761f-d64e-4b11-ba2c-c4815438946e",
		"createdAt": "2024-04-23T13:33:39.695Z",
		"name": "Makie Trifle",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel Vitae.",
		"likes": 2,
		"publishId": "5118d61b-0d5a-4066-8820-a3bbfef6dc80"
	}
]
```

### Exemplo de Request:
```
POST /comments/:id
Host: 'http://localhost:3000/
Authorization: None
Content-type: application/json
```
### Corpo da Requisição:
```json
{
		"id": "37c42e3c-8187-4b98-b103-e551adcd9349",
		"name": "Bufflo 69",
		"createdAt": "2024-04-23T13:33:14.248Z",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel Vitae.",
		"likes": 0,
		"publishId": "5118d61b-0d5a-4066-8820-a3bbfef6dc80"
	}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "20afdec1-6467-4843-8cd8-f12b6c335d0e",
	"name": "Bufflo 69",
	"createdAt": "April 29th, 2024",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel Vitae.",
	"likes": 0,
	"publishId": "0755ceab-53e0-43ea-860c-eac6798d01dc"
}
```


## Conclusão
A Lux-Ventus é mais do que um blog ou revista; é um destino digital para quem busca inspiração e bem-estar. Combinando moda, estilo de vida, espiritualidade e saúde mental, oferecemos um espaço onde cada visita se transforma em uma experiência enriquecedora. A escolha de Next.js para o front-end e Nest.js para o back-end nos permite fornecer um produto de alta qualidade, seguro e escalável. Esperamos que você desfrute tanto de visitar nossa página quanto nós desfrutamos de criá-la para você.

Visite-nos em [Lux-Ventus](https://front-end-coral-nine.vercel.app/)


