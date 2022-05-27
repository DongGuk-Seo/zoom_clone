// https://velog.io/@ongsim123/node.js-express-server 참조 벨로그
const express = require('express') //express를 설치했기 때문에 가져올 수 있다.
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(4000)