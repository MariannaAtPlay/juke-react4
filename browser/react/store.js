// store contains object representing the state of our application (accessible vai store.getState).

/// also contains the ONLY method capable of changing that state (store.dispatch);

// store responsibilities:
// 1) hold state 2) allow access to state (getState) 3) allow state to be updated (dispatch(action)); 4) registers listeners (subscribe(listener)) 5) unregistering or listeners (subscribe(listener))

import { createStore } from 'redux';
import reducer from './reducers/root-reducer';


export default createStore(reducer, 
+  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

