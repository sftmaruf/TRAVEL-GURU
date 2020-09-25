export const pushLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const extractLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));

}

export const signOutLocalClean = () => {
    localStorage.clear();
}