export const fakeAuth = {
    isAuthenticated: false,
    login(callBack: () => void) {
        fakeAuth.isAuthenticated = true;
        callBack();
    },
    logout(callBack: () => void) {
        fakeAuth.isAuthenticated = false
        callBack()
    }
}