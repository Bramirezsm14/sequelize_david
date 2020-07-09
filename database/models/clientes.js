module.exports= function (sequelize,datatype){

    let cliente = sequelize.define('cliente',{
        nombre:datatype.STRING,
        apellido:datatype.STRING,
        direccion:datatype.STRING,
        fechaNacimiento:datatype.DATE,
        telefono:datatype.INTEGER,
        email:datatype.STRING,
        password:datatype.STRING,

    },{
        timestamps:false,
        tableName:'clientes'
    }); 
 cliente.associate= function(models){
     
 } 
 return cliente;

}