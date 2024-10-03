export const CATEGORIAS: any []=  [
{
  "id": 1,
  "nombre": 'papeleria',
  "parent": '0',
  "children": [
      {
        "id": 2,
        "nombre":'oficina',
        "parent": '1',
        "children": [
          {
            "id": 3,
            "parent": 2,
            "nombre":'plumas',
            "children": []
          },
          {
            "id": 4,
            "nombre":"cuadernos",
            "parent": 2,
            "children": []

          },
          {
            "id": 5,
            "nombre":"lapices",
            "parent": 2,
            "children": []
          },
          {
            "id": 6,
            "nombre":"borradores",
            "parent": 2,
            "children": []
          },
          {
            "id": 7,
            "nombre":"correctores",
            "parent": 2,
            "children": []
          },
          {
            "id": 8,
            "nombre":"cartulinas",
            "parent": 2,
            "children": []
          },
          {
            "id": 9,
            "nombre":"tijeras",
            "parent": 2,
            "children": []
          }

          ],




      }
      // ,
      // {
      //   "id": 10,
      //   "nombre":'Merceria',
      //   "parent": '1',
      //   "children": [
      //     {
      //       "id": 11,
      //       "nombre":'Estambre',
      //       "parent": '1',
      //       "children": []
      //     },
      //     {
      //       "id": 9,
      //       "nombre":"tijeras",
      //       "parent": 2,
      //       "children": []
      //     }
      //   ]
      // }
    ]
  }
]
