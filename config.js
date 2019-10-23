module.exports = {
  // 管理员账号，管理员默认密码是 ymfe.org，不可配置，请安装完成后自行登录修改
  adminAccount: 'admin@hello.yapi',

  // MongoDB 数据库配置
  db: {
    // MongoDB 所在服务器
    servername: 'yapi-mongo',
    // MongoDB 端口
    port: 27017,
    // YApi 使用的数据库名称
    DATABASE: 'yapi',
  },

  // 邮件通知配置，默认关闭，若需开启请访问下面链接查看如何配置：
  // https://hellosean1025.github.io/yapi/devops/index.html#%e9%85%8d%e7%bd%ae%e9%82%ae%e7%ae%b1
  mail: {
    enable: false
  },

  // LDAP 登录配置，默认关闭，若需开启请访问下面链接查看如何配置：
  // https://hellosean1025.github.io/yapi/devops/index.html#%e9%85%8d%e7%bd%aeldap%e7%99%bb%e5%bd%95
  ldapLogin: {
    enable: false
  },

  // 是否禁止注册
  closeRegister: false,

  // 需安装的插件列表
  plugins: [
    { name: 'import-swagger-customize' },
    { name: 'interface-oauth2-token' },
	{ 
	  name: 'gitlab',
	  options: {
        host: 'http://192.168.10.24:80',
        redirectUri: 'http://192.168.10.24:3000/api/plugin/oauth2/callback',
        appId: '43bc1d90b3e34c16342091cb6965cdbb5b1ee0cf965c5d975c8091a39ff4e91d',
        appSecret: 'c544614ebc04efb174db94a51abf82df16a20624f27513b3ef51c07352fae08e',
        accessToken: 'YFvsB95nn6UPvfEbs1R_',
        loginPath: '/api/v4/user',
        authPath: '/oauth/authorize',
        tokenPath: '/oauth/token',
        emailKey: 'email',
        userKey: 'username',
        emailPostfix: '@yapi.com'
      }
    }
  ]
}
