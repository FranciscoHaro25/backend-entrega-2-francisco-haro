# Entrega 2 - WebSockets# Entrega 2 - WebSockets# 🚀 Backend Professional - Entrega 2 Coderhouse# ENTREGA-2 - Coderhouse Backend

## Descripción## Descripción## 📋 DescripciónServidor en Node.js + Express para gestionar productos y carritos.

Proyecto backend con WebSockets y Handlebars según consigna de Coderhouse.

Proyecto backend con WebSockets y Handlebars según consigna de Coderhouse.

## Instalación

```bashProyecto backend con **WebSockets**, **Handlebars** y **arquitectura profesional**. Implementa gestión de productos en tiempo real con persistencia JSON y estructura modular escalable.

npm install

npm start## Instalación

```

`````bash## Instalación y Ejecución

## Desarrollo

```bashnpm install

npm run dev  # Usa node --watch para recarga automática

```npm start## 🏗️ Estructura del Proyecto



## Rutas```

- `/` - Vista home.handlebars con lista de productos

- `/realtimeproducts` - Vista realTimeProducts.handlebars con WebSockets````bash

- `/api/products` - API REST para productos

## Rutas

## Funcionalidades

- ✅ Motor de plantillas Handlebars configurado- `/` - Vista home.handlebars con lista de productos```npm install

- ✅ Servidor Socket.IO integrado

- ✅ Vista home.handlebars con lista de productos- `/realtimeproducts` - Vista realTimeProducts.handlebars con WebSockets

- ✅ Vista realTimeProducts.handlebars con tiempo real

- ✅ WebSocket actualiza automáticamente al crear/eliminar productos- `/api/products` - API REST para productos📦 proyecto/npm start

- ✅ Formulario en realTimeProducts.handlebars

- ✅ Conexión HTTP con Socket emits en rutas POST/DELETE



## Tecnologías## Funcionalidades├── 📋 package.json                 # Configuración y dependencias```

- Node.js + Express

- Socket.IO- ✅ Motor de plantillas Handlebars configurado

- Handlebars

- Bootstrap 5- ✅ Servidor Socket.IO integrado  ├── 🚀 src/                         # Código fuente principal



## Scripts- ✅ Vista home.handlebars con lista de productos

- `npm start` - Inicia el servidor

- `npm run dev` - Desarrollo con node --watch (sin nodemon)- ✅ Vista realTimeProducts.handlebars con tiempo real│   ├── 🎯 app.js                  # Servidor principalEl servidor corre en `http://localhost:3000`

- ✅ WebSocket actualiza automáticamente al crear/eliminar productos

- ✅ Formulario en realTimeProducts.handlebars│   ├── 📊 dao/                    # Data Access Objects

- ✅ Conexión HTTP con Socket emits en rutas POST/DELETE

│   │   ├── productManager.js      # Gestión de productos## Estructura del Proyecto

## Tecnologías

- Node.js + Express│   │   └── cartManager.js         # Gestión de carritos

- Socket.IO

- Handlebars│   ├── 🛣️ routes/                 # Rutas modulares```

- Bootstrap 5
│   │   ├── productsRouter.js      # API de productosentrega-1/

│   │   └── cartsRouter.js         # API de carritos├── data/

│   ├── 🔧 middlewares/            # Middlewares personalizados│   ├── products.json

│   │   ├── logger.js              # Logging de requests│   └── carts.json

│   │   ├── auth.js                # Autenticación├── managers/

│   │   └── format.js              # Formateo de datos│   ├── ProductManager.js

│   └── 🎨 views/                  # Plantillas Handlebars│   └── CartManager.js

│       ├── layouts/main.handlebars # Layout principal├── routes/

│       ├── home.handlebars        # Vista estática│   ├── products.js

│       ├── realTimeProducts.handlebars # Vista tiempo real│   └── carts.js

│       ├── dashboard.handlebars   # Panel de control├── app.js

│       └── error.handlebars       # Página de errores├── package.json

├── 🎨 public/                     # Archivos estáticos└── README.md

│   └── js/realtime.js            # Cliente WebSocket```

├── 💾 data/                       # Persistencia JSON

│   ├── products.json             # Datos de productos## API - Productos

│   └── carts.json               # Datos de carritos

└── 🧪 test-entrega2.js           # Pruebas WebSocket| Método | Endpoint             | Descripción         |

```| ------ | -------------------- | ------------------- |

| GET    | `/api/products`      | Listar productos    |

## 🔧 Instalación y Uso| GET    | `/api/products/:pid` | Producto por ID     |

| POST   | `/api/products`      | Crear producto      |

```bash| PUT    | `/api/products/:pid` | Actualizar producto |

# Instalar dependencias| DELETE | `/api/products/:pid` | Eliminar producto   |

npm install

Ejemplo producto:

# Iniciar servidor principal

npm start```json

{

# Desarrollo con nodemon  "id": 1,

npm run dev  "title": "Producto ejemplo",

  "description": "Descripción",

# Probar WebSocket  "code": "ABC123",

npm test  "price": 100,

```  "status": true,

  "stock": 50,

## 🌐 Rutas Disponibles  "category": "Categoría",

  "thumbnails": []

| Ruta | Descripción | Tipo |}

|------|-------------|------|```

| `/` | Vista home con productos | Vista |

| `/realtimeproducts` | Gestión tiempo real | Vista |## API - Carritos

| `/dashboard` | Panel de estadísticas | Vista |

| `/api/products` | CRUD productos | API || Método | Endpoint                       | Descripción      |

| `/api/carts` | CRUD carritos | API || ------ | ------------------------------ | ---------------- |

| POST   | `/api/carts`                   | Crear carrito    |

## ⚡ Tecnologías| GET    | `/api/carts/:cid`              | Ver carrito      |

| POST   | `/api/carts/:cid/product/:pid` | Agregar producto |

- **Node.js** + **Express.js** - Backend

- **Socket.IO** - WebSockets tiempo real  Ejemplo carrito:

- **Handlebars** - Motor de plantillas

- **Bootstrap 5** - Frontend responsive```json

- **JSON** - Persistencia de datos{

  "id": 1,

## 📊 Funcionalidades  "products": [

    {

✅ **WebSocket en tiempo real**        "product": 1,

✅ **Dashboard con estadísticas**        "quantity": 2

✅ **API REST completa**      }

✅ **Interfaz responsive**    ]

✅ **Arquitectura modular**  }

✅ **Middlewares personalizados**  ```



## 🎯 URLs de Acceso## Notas



```- Los IDs se generan automáticamente

🏠 Home:        http://localhost:3000/- Los datos se persisten en archivos JSON

⚡ Tiempo Real: http://localhost:3000/realtimeproducts- Se validan campos requeridos y códigos únicos

📊 Dashboard:   http://localhost:3000/dashboard- Separación en managers y rutas

```- Puerto actualizado a 3000 para evitar conflictos



---## Uso



**Proyecto desarrollado para Coderhouse - Backend Developer**Crear producto:

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Smartphone",
    "description": "Teléfono último modelo",
    "code": "SM001",
    "price": 599.99,
    "stock": 25,
    "category": "Electrónicos"
  }'
`````

Crear carrito:

```bash
curl -X POST http://localhost:3000/api/carts
```

Agregar al carrito:

```bash
curl -X POST http://localhost:3000/api/carts/1/product/1
```
