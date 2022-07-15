let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let stock = JSON.parse(localStorage.getItem("productos")) || [
   {
      id:7798123971309,
      nombre:"Partridge",
      categoria:"Las Perdices",
      tipo:"MALBEC",
      costo:450,
      precio:700
   },
   {
      id:7798123970098,
      nombre:"Las Perdices Varietales",
      categoria:"Las Perdices",
      tipo:"MALBEC",
      costo:690,
      precio:1070
   },
   {
      id:7798123970166,
      nombre:"Las Perdices Varietales",
      categoria:"Las Perdices",
      tipo:"SAUVIGNON BLANC",
      costo:690,
      precio:1070
   },
   {
      id:7798152260634,
      nombre:"HD",
      categoria:"Durigutti",
      tipo:"MALBEC",
      costo:1050,
      precio:1640
   },
   {
      id:7798152262065,
      nombre:"HD",
      categoria:"Durigutti",
      tipo:"CABERNET SAUVIGNON",
      costo:1050,
      precio:1640
   },
   {
      id:7798159944322,
      nombre:"Pispi",
      categoria:"Mosquita Muerta",
      tipo:"BLEND de MALBEC",
      costo:1030,
      precio:1600
   },
   {
      id:7794450090492,
      nombre:"DV Catena",
      categoria:"Catena Zapata",
      tipo:"CABERNET-MALBEC",
      costo:1530,
      precio:2380
   }
];
