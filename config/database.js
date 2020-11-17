module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        // 数据库所在的主机地址  若strapi与数据库同属一个服务器可使用localhost
        host: env('DATABASE_HOST', 'localhost'),
        // 数据库默认端口号
        port: env.int('DATABASE_PORT', 3306),
        // 数据库名称
        database: env('DATABASE_NAME', 'strapi'),
        // 拥有该数据库访问权限的账户
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
      },
      options: {
        charset: 'utf-8'
      },
    },
  },
});