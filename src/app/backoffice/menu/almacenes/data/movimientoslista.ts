export const MOVIMIENTOSLISTA: any [] =[
  // {id: 1, almacenOrigen:{id: 1, nombre:' Principal'}, almacenDestino:{id: 2, nombre:' Del sol'}, autor:"Principal - Juan Martinez", tipo: 'entrada', items: 5},
  {
    id: 1,
    fecha: "14-10-2024",
    status:'Nueva',
    total: 2500,
    empleado: "Juan Martinez",
    almacenOrigen:
    {"id": "1", "nombre": "Principal", "domicilio": "Av Lazaro Cardena 1190", "ciudad": "Mexicali", "estado": " Baja California", "cp":"21110", responsable: 'Juan Martinez', telefono:"686 592-7878", status: true},
    almacenDestino:
    {"id": "1", "nombre": "Miramontes", "domicilio": "Av Camino Real", "ciudad": "Mexicali", "estado": " Baja California", "cp":"21340", responsable: 'Rodrigo Leal', telefono:"686 592-7878", status: true},
    items: [
      {"id": 1, "nombre": "pluma bic azul punto medio", "precio": 10, "minimo": 0, "maximo":4,  "cantidad": 30 ,reservado: 30, total: 300, "unidad": {"id": 1, "nombre": "pza"}, "almacen": "Principal"},
      {"id": 2, "nombre": "pluma bic verde punto medio", "precio": 10, "minimo": 0, "maximo":4,  "cantidad": 100 , reservado: 70, total: 1000, "unidad": {"id": 1, "nombre": "pza"}, "almacen": "Principal"},
    ],
  }
]
