// usando objeto express        1:20
const express = require('express');
// app express
const app= express();
app.use(express.json());
// puerto
const port = 3000;
// con esto iniciamos esta app


// Esto es un END POINT
// routers
// method HTTP: GET POST PUT DELETE
app.get('/v1/explorers',(req,res)=>{
    console.log(`Get Explorer V1 API ${new Date()}`);
    const explorer1= {id:1,name:"Explorer1"};
    const explorer2={id:2,name:"Explorer2"};
    const explorers=[explorer1,explorer2];
    // ESTATUS SABER EL ESTADO DE LA SOLICITUD
    res.status(200).json(explorers);
})
// C:\Users\Hector>curl localhost:3000/v1/explorers
// [{"id":1,"name":"Explorer1"},{"id":2,"name":"Explorer2"}]

// METHOD GET
app.get('/v1/explorers/:id',(req,res)=>{
    console.log(`GET BY ID Explorers V1 API ${new Date()}`);
    const explorer1= {id:1, name: "Explorer1"};

    // HTTP CODE STATUS: 200
    res.status(200).json(explorer1);
});
// Method POST
app.post('/v1/explorers',(req,res)=>{
    console.log(`Post Explorer V1 API ${new Date()}`);
    // Agregar la logica para persistir
    console.log(req.body) //parametros del req
    res.status(201).json({message: "Creado Exitosamente"});
})
// get es para solicitar información y post es para crear

// PUT  : Actualizar
app.put('/v1/explorers/:id',(req,res)=>{
    console.log(`PUT Explorers V1 API ${new Date()}`);
    console.log(req.body);
    console.log(req.params.id);

    // Agregar la logica para actualizar
    res.status(200).json({ messaje: "Actualización Exitosa" });
});
// DELETE: eliminar
app.delete('/v1/explorers/:id',(req,res)=>{
    console.log(`DELETE Explorers V1 API ${new Date()}`);
    // logica de eliminación
    res.status(200).json({message:'Eliminación Exitosa'});
})


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})

