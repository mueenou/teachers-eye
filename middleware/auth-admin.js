export default async function({$auth, next, store, $router}) {
    let user = $auth.user.data
    console.log('toto', user.status)

    if(user && user.status) {
    } else {
        store.dispatch('handleSnackbar', {displaySb: true, message: 'Vous devez être admin pour accéder à cette page.', color: 'red'})
        next('/')

    }
}