import pool from "../db/dbConfig.js"
export default class Category{

    constructor(id,Categoryname){
        this.id=id;
        this.Categoryname=Categoryname;
    }

addCategory(){
    return new Promise((resolve,reject)=>{
      pool.getConnection((err,con)=>{
          if(!err){
            let sql = "insert into Categories(Category_name) values(?)";
            con.query(sql,[this.Category],(err,result)=>{
              err ? reject(err) : resolve(result);
              con.release();
            });
          }
          else
            reject(err);
      });
    });
  }

  static viewCategory(){
    return new Promise((resolve,reject)=>{
      pool.getConnection((err,con)=>{
          if(!err){
            let sql ="select * from Categories";
            con.query(sql,(err,result)=>{
              err ? reject(err) : resolve(result);
              con.release();
            });
          }
          else
            reject(err);
      })
    });
  }




}