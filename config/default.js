module.exports = {
  name: 'GoRemoteDev',
  logLevel: 'trace',
  port: 3333,

  database: {
    host: 'localhost',
    port: 5432,
    user: 'goremotedevuser',
    password: 'secret',
    database: 'goremotedev',
  },

  mail: {
    provider: 'mailgun',
    from: 'noreply@goremotedev.com',
  },
};
