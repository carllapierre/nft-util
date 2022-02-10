import { setTheme as set} from '../redux/reducers/themeReducer'
import store from '../redux/store';
import { theme as themeConfigs } from '../configs/theme';

export const setTheme= (theme) => {
    store.dispatch(set(theme))
    localStorage.setItem("theme", theme);
}

export const getTheme= (theme) => {
    let compiledTheme = {...themeConfigs.defaultTheme}
    if(theme && theme != 'default'){
        compiledTheme = {...compiledTheme, ...themeConfigs[theme]}
    }
    return compiledTheme
}