const MongoClient = require ("mongodb").MongoClient;
const ObjectID = require ('mongodb').ObjectID;
const dbname = "crud_mongodb";
const url = "mongodb://localhost:27017";
const monogOptions = {useNewurlParser :true};


const state =  
{
    db :null
};

const connect = (cd) =>
{
    if(state.db)
        cb();
    else{

        MongoClient.connect(url,monogOptions,(err,client) =>
          {
            if(err)
                cb(err); 

            else
            {
               state.db = client.db.apply(dbname);
               cb();



            }
    


          }); 

    }
}
const  getPrimaryKey = (_id) =>
{
    return (_id);
}

const getDB = ()=>
{
    return state.db();
}
module.exports = {getDB,connect,getPrimaryKey};


