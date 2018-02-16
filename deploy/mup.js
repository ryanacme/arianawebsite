module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '159.203.87.32',
      username: 'root',
      // pem: './path/to/pem'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'arianawebsite',
    path: '/home/ec2-user/environment/meteorapps/arianawebsite',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://ryan.adkasel.com/',
      
      // MONGO_URL: 'mongodb://ryanbraving:79110015@ds046867.mlab.com:46867/arianawebsite',     //Mlab 
      MONGO_URL: 'mongodb://ryanbraving:79110015@arianawebsite-shard-00-00-ipnmq.mongodb.net:27017,arianawebsite-shard-00-01-ipnmq.mongodb.net:27017,arianawebsite-shard-00-02-ipnmq.mongodb.net:27017/arianawebsiteDB?ssl=true&replicaSet=ArianaWebsite-shard-0&authSource=admin',         //MongoDB Atlas
    },

    // ssl: { // (optional)
    //   // Enables let's encrypt (optional)
    //   autogenerate: {
    //     email: 'email.address@domain.com',
    //     // comma separated list of domains
    //     domains: 'website.com,www.website.com'
    //   }
    // },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      // image: 'abernix/meteord:node-8.4.0-base',
      // image: 'abernix/meteord:base', // only Mlab @Meteor 1.3.5 
      image: 'kadirahq/meteord',    // MongoDB Atlas and Mlab @Meteor 1.3.5
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true,
    // deployCheckWaitTime: 60,
  },

  // mongo: {
  //   version: '3.4.1',
  //   servers: {
  //     one: {}
  //   }
  // }
};
