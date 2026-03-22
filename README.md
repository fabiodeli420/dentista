# 🦷 Plantilla Dentista — Instrucciones

## Estructura de carpetas

```
dentista/
├── index.html          → Página principal
├── css/
│   └── style.css       → Todos los estilos
├── js/
│   └── main.js         → Lógica e interactividad
└── img/
    ├── hero-bg.jpg     → Foto de fondo del hero (consultorio)
    └── doctor.jpg      → Foto del profesional
```

## Cómo personalizar

### 1. Datos del profesional
Buscá en index.html y reemplazá:
- `[NOMBRE]` → nombre del profesional
- `[APELLIDO]` → apellido
- `[NÚMERO]` → matrícula profesional
- `[TELEFONO]` → teléfono con código de área
- `[NUMERO]` → número de WhatsApp con código de país (ej: 5491112345678)

### 2. Dirección y mapa
- Reemplazá `[CALLE, NÚMERO, PISO/LOCAL]` con la dirección real
- En el iframe del mapa cambiá la URL por la dirección real:
  `https://maps.google.com/maps?q=TU+DIRECCION+REAL&output=embed`

### 3. Fotos
- Poné una foto del consultorio en `img/hero-bg.jpg`
- Poné una foto del profesional en `img/doctor.jpg`

### 4. Horarios y obras sociales
- Modificá los horarios en la sección del hero-card
- Modificá las obras sociales en la sección nosotros y en el formulario

### 5. WhatsApp
- En js/main.js buscá `const waNumber = '[NUMERO]'`
- Reemplazalo por el número real (ej: `'5491158919571'`)
