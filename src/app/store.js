import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // auth,
    // [jobSeekerApi.reducerPath]: jobSeekerApi.reducer,
    // [companyApi.reducerPath]: companyApi.reducer,
    // [sharedApi.reducerPath]: sharedApi.reducer,
    // [loginApi.reducerPath]: loginApi.reducer,
    // [jobApi.reducerPath]: jobApi.reducer,

  },
    // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(
      // jobSeekerApi.middleware,
      // companyApi.middleware,
      // sharedApi.middleware,
    //   loginApi.middleware,
      // jobApi.middleware
      ),
});