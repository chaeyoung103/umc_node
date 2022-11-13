const express = require('express')
const mysql = require('mysql');

const app = express();
const server = app.listen(3000,function(){
    console.log("Express server start port 3000 !!");
})

app.get('/user',function(req, res){


    console.log('hello world');

    //데이터베이스 연결
    const connection = mysql.createConnection({

        host : 'hola-db.cvzfyfl9izgk.ap-northeast-2.rds.amazonaws.com',
        port : 3306,
        user : 'thdcodud103',
        password : 'jenny103',
        database:'holaDB'
    });
    connection.connect();
    const getUserQuery = `SELECT * FROM User;`
    const getUserResult = connection.query(getUserQuery, function(err, rows, fields){
        if(err){
            return res.send("회원정보가 조회되지 않습니다.")
        }else{
            console.log(rows)
            return res.send(rows);
        }

    });
})

app.get('/user/:name',function(req, res){
    const name = req.params.name;

    console.log('hello world');

    //데이터베이스 연결
    const connection = mysql.createConnection({

        host : 'hola-db.cvzfyfl9izgk.ap-northeast-2.rds.amazonaws.com',
        port : 3306,
        user : 'thdcodud103',
        password : 'jenny103',
        database:'holaDB'
    });
    connection.connect();
    const getUserQuery = `SELECT * FROM User WHERE name = '${name}';`
    const getUserResult = connection.query(getUserQuery, function(err, rows, fields){
        if(err){
            return res.send("회원정보가 조회되지 않습니다.")
        }else{
            console.log(rows)
            return res.send(rows);
        }

    });
})

app.post('/signup', function(req, res){
    console.log('hello world');
    const connection = mysql.createConnection({

        host : 'hola-db.cvzfyfl9izgk.ap-northeast-2.rds.amazonaws.com',
        port : 3306,
        user : 'thdcodud103',
        password : 'jenny103',
        database:'holaDB'
    });
    connection.connect();
    const postUserInfoQuery = `INSERT INTO User (userIdx, email, password, name, nickName, phoneNumber, alarmAgreement, marketingAlarmAgreement, createdAt, updatedAt, status) VALUES ('6','sdng@naver.com', 'pass1212' , '채영', '홀올라', '01044432220' , 'Y', 'Y' , '2022-06-06 17:11:36' , '2022-06-06 17:11:36', 'A');`
    const postUserInfoResult = connection.query(postUserInfoQuery, function(err, rows, fields){
        if(err){
            res.send(err)
            res.send("회원가입이 되지 않습니다.")
        }else{
            console.log(rows)
            res.send("회원가입이 성공했습니다.")
        }
    })
});
