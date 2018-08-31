require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET)

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
    },
    getMens: (req,res)=>{
        let db = req.app.get('db')

        db.get_mens()
        .then(resp=>{
            res.status(200).send(resp)
        })
    },
    getWomens: (req,res)=>{
        let db=req.app.get('db')

        db.get_womens()
        .then(resp=>{
            res.status(200).send(resp)
        })
    },
    getKids: (req,res)=>{
        let db=req.app.get('db')

        db.get_kids()
        .then(resp=>{
            res.status(200).send(resp)
        })
    },
    getAccessories: (req,res)=>{
        let db=req.app.get('db')

        db.get_accessories()
        .then(resp=>{
            res.status(200).send(resp)
        })
    },
    getHats: (req,res)=>{
        let db=req.app.get('db')
        console.log(req.session)
        db.get_hats()
        .then(resp=>{
            res.status(200).send(resp)
        })
    },
    addtocart: (req,res)=>{
        let db=req.app.get('db')
        let {id:user_id} = req.session.user
        let {id} = req.body
        console.log(req.body)

        db.add_to_cart([user_id, id])
        .then(resp=>{
            res.status(200).send('added to cart')
        })
    },
    getcart: (req,res)=>{
        let db = req.app.get('db')

        db.get_cart()
        .then(resp=>{
            res.status(200).send(resp)
        })
    },
    handlePayment: (req,res)=>{
        const{amount, token:{id}}=req.body
        stripe.charges.create(
            {
                amount: amount,
                currency: 'usd',
                source: id,
                description: 'test charge from aaron'
            },
            (err,charge)=>{
                if(err){
                    console.log(err)
                    return res.status(500).send(err)
                }else{
                    console.log(charge)
                    return res.status(200).send(charge)
                }
            }
        )
    }

}