const express=require('express');

const router=express.Router();
const mysql=require("mysql2");

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"123456",
    database:"booksreviewdb",
});

router.route("/").get((req,res)=>{
    db.query(`SELECT * FROM booksreviewdb.books`, (error, result) => {
        return res.render("index", {ReviewList: result});
      });

});



router.route("/submitBookReview").post((req,res)=>{
    const {BookTitle,BookAuthor,BookImage,Description}=req.body;
    db.query(`INSERT INTO booksreviewdb.books (Bookname, Description, Bookimage,Bookauthor) VALUES ("${BookTitle}", "${Description}", "${BookImage}", "${BookAuthor}")`,(error,result)=>{
        console.log("the insert "+result);
        console.log("the err "+error);
        if(error==null)
        {
            console.log(result)
            db.query(`SELECT * FROM booksreviewdb.books`, (error, result) => {
                return res.render("index", {ReviewList: result});
              });
        }
        else
        {
            return res.render("index",{message:"dont update"});
        }

    })

})

router.route("/asc").get((req,res)=>{
    db.query(`SELECT * FROM booksreviewdb.books ORDER BY Bookname ASC`, (error, result) => {
        return res.render("index", {ReviewList: result});
      });

});

router.route("/desc").get((req,res)=>{
    db.query(`SELECT * FROM booksreviewdb.books ORDER BY Bookname DESC`, (error, result) => {
        return res.render("index", {ReviewList: result});
      });

});

router.route("/description/:id").get((req,res)=>{
   db.query("SELECT * FROM booksreviewdb.books where id="+req.params.id,(error,result)=>{
    return res.render("description",{Data:result})

   })
})

router.route("/delete").post((req,res)=>{
    db.query("DELETE FROM booksreviewdb.books WHERE id="+req.body.id,(error,result)=>{
        db.query("SELECT * FROM booksreviewdb.books",(error,result)=>{
            return res.render("index",{ReviewList:result})
        })
    })
})






 

module.exports=router;