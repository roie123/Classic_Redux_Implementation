import { Middleware } from 'redux';
import { RootState } from './store';





export const myMiddleware: Middleware<
    {}, // Most middleware do not modify the dispatch return value
    RootState
    > = storeApi => next => action => {
    const state = storeApi.getState() // correctly typed as RootState
    return next(action);
}


