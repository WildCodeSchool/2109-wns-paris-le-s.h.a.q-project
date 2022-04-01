import { MiddlewareFn } from 'type-graphql';

const logger: MiddlewareFn = async ({ root, args, context, info }, next) => {
  // if (!context.authenticatedUserEmail) {
  //   throw new Error('Il vous faut être identifié(e)');
  // }
  console.log('root : ', root);
  console.log('args : ', args);
  console.log('context : ', context);
  console.log('info : ', info);

  return next();
};

export default logger;
