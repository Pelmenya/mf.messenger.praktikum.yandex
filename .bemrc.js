module.exports = {
  root: true,

  levels: [ { path: `${__dirname}/static/blocks` } ],

  modules: {
    'bem-tools': {
      plugins: {
        create: {
          levels: [
            {
              path: `${__dirname}/static/blocks`,
              default: true,
              techs: [ 'css' ],
            },
          ],
        },
      },
    },
  },
};
