require('dotenv').config()
const express = require('express'),
    massive = require('massive'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    axios = require('axios')
    pc = require('./controller/personal_controller')

const app = express()
app.use(bodyParser.json())

const {
    NODE_PORT,
    SECRET,
    REACT_APP_CLIENT_ID,
    REACT_APP_DOMAIN,
    CLIENT_SECRET,
    CONNECTION_STRING,
    NODE_ENV
} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

app.get('/auth/callback', async (req,res)=>{
    const payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }

    let resWithToken = await axios.post(
        `https://${REACT_APP_DOMAIN}/oauth/token`, 
        payload
    )
    let resWithUserData = await axios.get(
        `https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`
    )
    // console.log('user data', resWithUserData)
    let {
        email,
        name,
        picture,
        sub
    } = resWithUserData.data

    let db = req.app.get('db')
    let foundUser = await db.find_user([sub])
    if (foundUser[0]){
        req.session.user = foundUser[0]
        res.redirect('/#/home')
    }else{
        let createdUser = await db.create_user([name,email,picture,sub])
        req.session.user = createdUser[0]
        res.redirect('/#/home')
    }

})

function envCheck(req,res,next){
    if (NODE_ENV === 'dev'){
        req.app.get('db').get_user_by_id().then(userWithIdOne=>{
            req.session.user = userWithIdOne[0]
            next()
        })
    }else{
        next()
    }
}

app.get('/api/user-data', envCheck, (req,res)=>{
    if(req.session.user){
        res.status(200).send(req.session.user)
    }else{
        res.status(401).send('you are not authorized')
    }
})

app.get('/auth/logout', (req,res)=>{
    req.session.destroy()
    res.redirect('http://localhost:3000/')
})

app.post('/api/transactions', pc.addTransaction)
app.post('/api/sellTransactions',pc.sellTransaction)
app.get('/api/getbitcoin', pc.getTransaction)


app.listen(NODE_PORT, () => {
    console.log(`listening on port ${NODE_PORT}`)
})

