const ListArticles = () => {

    const articles = [
        {
            id: 1,
            title: 'Comprendre React Hooks',
            author: 'Aline Dupont',
            date: '2025-10-12',
            summary: 'Une introduction concise aux Hooks de React : useState, useEffect et bonnes pratiques.',
            content: `Les Hooks permettent d'utiliser l'état et d'autres fonctionnalités de React sans écrire de classes.
useState gère l'état local des composants, useEffect gère les effets de bord (fetch, subscriptions, etc.).
Cet article présente des exemples concrets et des pièges courants à éviter.`
        },
        {
            id: 2,
            title: 'Créer une API REST avec Node.js',
            author: 'Marc Leroy',
            date: '2025-09-30',
            summary: 'Guide pas à pas pour construire une API REST performante avec Express et MongoDB.',
            content: `Vous apprendrez à structurer un projet Node/Express, définir des routes, valider les données,
gérer les erreurs et connecter une base MongoDB. Exemples de code et bonnes pratiques incluses.`
        },
        {
            id: 3,
            title: 'CSS moderne : variables et Grid',
            author: 'Sophie Martin',
            date: '2025-08-05',
            summary: 'Exemples pratiques de CSS Grid et variables CSS pour des layouts réactifs.',
            content: `CSS Grid facilite la création de mises en page adaptatives. Les variables CSS permettent de centraliser les valeurs
de couleurs et d'espacement. Cet article propose des patterns réutilisables et des exemples visuels.`
        },
    ]
    return (
        <section>
            <h1>Articles</h1>
            <p>Derniers articles publiés :</p>
            {articles.map((article) => {
                return (
                    <article>
                        <h2>{article.title}</h2>
                    </article>
                )
            })}
        </section>
    )
}

export default ListArticles