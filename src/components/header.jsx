const Header = () => {
    const displayName = () => {
        return authentifiedUser.firstName + " " + authentifiedUser.lastName
    }
    const isLoggedIn = true
    const authentifiedUser = {
        firstName: 'Colin',
        lastName: 'Morlion',
        age: 19,
        job: 'développeur'
    }


    return (

        <header>
            {isLoggedIn ?
                <h2>Bienvenue, {displayName()} !</h2>
                :
                <h2>Veuillez vous connecter pour continuer.</h2>
            }
        </header>
    )
}

export default Header

