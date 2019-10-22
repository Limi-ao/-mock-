
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  visitor: {
    token: 'visitor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  'visitor-token': {
    roles: ['visitor'],
    introduction: '游客',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '游客'
  }
}

export default [
  // user login
  {
    url: '/a1/user/loginpw',
    type: 'post',
    response: config => {
      console.log(config)
      const { username, password } = config.body
      const token = tokens[username]
      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '用户名或密码错误.'
        }
      }
      if ((username === 'admin' && password === 'qMXQouu/oTs=') || username === 'editor' || username === 'visitor') {
        return {
          code: 20000,
          data: token
        }
      } else {
        return {
          code: 60204,
          message: '用户名或密码错误.'
        }
      }
    }
  },

  // get user info
  {
    url: '/a1/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: '登录失败, 无法获得用户详情.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/a1/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  //user yzlogin
  {
    url: '/a1/user/yzlogin',
      type: 'post',
      response: config => {
        console.log(config)
        const {phoneV } = config.body
        if(phoneV==="13216140060"){
          return{
            code:0,
            message:"发送成功"
          }
        }else{
          return{
            code:1000,
            message:"发送失败"
          }
        }
    }
  },

  //user fenye
  {
    url:'/a1/user/fenye',
    type:'post',
    response:config=>{
      console.log(config)
      const {page,size}=config.body
      if(page==1 && size==5){
        return{
          code:0,
          message:"发送成功",
          list:[{id:'1',neirong:'xixixi'}]
        }
      }else{
        return{
          code:1000,
          message:"发送失败"
        }
      }
    }
  }
]
