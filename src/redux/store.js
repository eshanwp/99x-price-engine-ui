import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";

/**
 * Create redux store and implement logger and thunk
 * For mor information : https://github.com/eshanwp/React-Redux
 * @author Eshan
 * @type {Store<CombinedState<unknown> & S & StateExt, AnyAction> & Store<S & StateExt, A> & Ext}
 */
function load() {
    let state;
    // localStorage.clear();
    try {
        state = localStorage.getItem('accio-inventory');

        if (typeof state === 'string') {
            state = JSON.parse(state);
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }

    return state || undefined;
}

const store = createStore(rootReducer, load(), compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

function save() {
    try {
        localStorage.setItem('accio-inventory', JSON.stringify(store.getState()));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
}

store.subscribe(() => save());

export default store;
