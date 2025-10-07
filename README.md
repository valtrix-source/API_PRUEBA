# API_PRUEBA

API de prueba lista para desplegar en [Fly.io](https://fly.io) que expone un único endpoint y responde "Hola Mundo".

## Requisitos

- Node.js 18 o superior.

## Uso local

```bash
npm install # No instala dependencias adicionales, pero mantiene el flujo habitual
npm start
```

Luego visita `http://localhost:3000` para ver la respuesta JSON `{"mensaje":"Hola Mundo"}`.

## Configuración para Fly.io

Fly.io inyecta el puerto de escucha a través de la variable de entorno `PORT`, por lo que no es necesario realizar cambios adicionales. Solo asegúrate de exponer el proceso de Node.js mediante `fly launch` y `fly deploy` siguiendo la documentación oficial.
