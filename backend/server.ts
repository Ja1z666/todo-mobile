import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import * as express from 'express';
import * as session from 'express-session';
import 'dotenv/config';
import 'reflect-metadata';
import { UserResolver } from './resolvers/userResolver';

(async () => {
    const app = express();
  
    app.use(session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 7 * 365
        }
    }));
  
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    });
  
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: true });
  
    app.listen(4000, () => {
        console.log('Express server started');
    });
})();