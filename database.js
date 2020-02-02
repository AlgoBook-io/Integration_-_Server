const sequelize= require('sequelize');

const db= new sequelize(
    'userdb',
    'mayukh',
    'admin',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

const Users= db.define('users',{
    username:{
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: sequelize.STRING,
        allowNull:false,
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    }
});

db.sync()
.then(()=>{console.log('Database has been synchronized')})
.catch((err)=>{throw err;})

module.exports= {
    db,
    Users
};