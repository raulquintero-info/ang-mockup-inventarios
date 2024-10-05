export const PEDIDOS: any []=[
  {
    id: 1,
    departamento:
    {"id": "1", "nombre": "Contabilidad", "domicilio": "Av Lazaro Cardena 1190", "ciudad": "Mexicali", "estado": " Baja California", "cp":"21110", responsable: 'Juan Martinez', telefono:"686 592-7878", status: true},
    items: [
      {"id": 1, "nombre": "pluma bic azul punto medio", "precio": 10, "minimo": 0, "maximo":4,  "cantidad": 30 ,reservado: 30, total: 300, "unidad": {"id": 1, "nombre": "pza"}, "almacen": "Principal"},
      {"id": 2, "nombre": "pluma bic verde punto medio", "precio": 10, "minimo": 0, "maximo":4,  "cantidad": 100 , reservado: 70, total: 1000, "unidad": {"id": 1, "nombre": "pza"}, "almacen": "Principal"},
    ],
    pedidosRelacionados:[
      1,2
    ]
  },
  {
    id: 2,
    departamento:
    {"id": "1", "nombre": "Contabilidad", "domicilio": "Av Lazaro Cardena 1190", "ciudad": "Mexicali", "estado": " Baja California", "cp":"21110", responsable: 'Juan Martinez', telefono: '686 493-5677', status: true},
    items:[
      {"id": 12, "nombre": "cuaderno scribe doble raya 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 13, "nombre": "cuaderno scribe rayado 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 14, "nombre": "cuaderno scribe cuadriculado 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}}

    ],
    pedidosRelacionados:[
      1,2
    ]
  },
  {
    id: 3,
    departamento:
    {"id": "1", "nombre": "Finanzas", "domicilio": "Av Lazaro Cardena 1190", "ciudad": "Mexicali", "estado": " Baja California", "cp":"21110", responsable: 'Roberto Jimenez', telefono: '686 493-5677', status: true},
    items:[
      {"id": 12, "nombre": "cuaderno scribe doble raya 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 13, "nombre": "cuaderno scribe rayado 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 14, "nombre": "cuaderno scribe cuadriculado 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}}

    ],
    pediosRelacionados:[

    ]
  },
  {
    id: 4,
    departamento:
    {"id": "1", "nombre": "MAntenimiento", "domicilio": "Av Lazaro Cardena 1190", "ciudad": "Mexicali", "estado": " Baja California", "cp":"21110", responsable: 'Zulema Luke', telefono: '686 493-5677', status: true},
    items:[
      {"id": 12, "nombre": "cuaderno scribe doble raya 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 13, "nombre": "cuaderno scribe rayado 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 14, "nombre": "cuaderno scribe cuadriculado 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 15, "nombre": "cuaderno scribe doble raya 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 16, "nombre": "cuaderno scribe rayado 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 17, "nombre": "cuaderno scribe cuadriculado 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 18, "nombre": "cuaderno scribe doble raya 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 19, "nombre": "cuaderno scribe rayado 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}},
      {"id": 20, "nombre": "cuaderno scribe cuadriculado 100 hojas",  existencia: 100, "precio": 0, "minimo": 1, "maximo":0, "cantidad": 0 , "unidad": {"id": 1, "nombre": "pza"}}

    ],
    pediosRelacionados:[

    ]
  }
]
