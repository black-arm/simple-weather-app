import { endLoading, httpError, instance, startLoading } from ".";
import { store } from "../../../store";


export function interceptors(){

    instance.interceptors.request.use((config) => {
        store.dispatch(startLoading())
        return config;
    })
    
    instance.interceptors.response.use((config) => {
        
        if(config.data.success){
            store.dispatch(endLoading());
        } else {
            store.dispatch(httpError(config.data.error.info));
        }
    
    
        return config;
    }, (error) => {
    
        store.dispatch(httpError(error.error));
    
        return Promise.reject(error);
    })
}

