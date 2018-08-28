module.exports={

    addTransaction: (req,res)=>{
        let db = req.app.get('db')
        let {price} = req.body;
        console.log(price)

        db.create_transaction([price])
        .then(resp=>{
            res.status(200).send('thank you for the purchase')
        })
    },
    sellTransaction: (req,res)=>{
        let db = req.app.get('db')
        let {price} = req.body;
        console.log(price)

        db.create_transaction([-price])
        .then(resp=>{
            res.status(200).send('thank you for the purchase')
        })
    },
    getTransaction: (req,res)=>{
        let db=req.app.get('db')

        db.get_transaction()
        .then(resp=>{
            res.status(200).send(resp)
        })
    }



}