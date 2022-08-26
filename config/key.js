if (process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');        // 만약에 외부 서버에서 정보 가지고 올 수 있으면, 그렇게 가져오고
} else { 
    module.exports = require('./dev')         // 아니면 dev에서 가져오라는 소리. 
} 
