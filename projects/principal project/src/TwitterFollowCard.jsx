export function TwitterFollowCard ({formatUsername,userName, name, isfollowing}){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>    
                <img className='tw-followcard-avatar' src={`https://unavatar.io/${userName}`}alt="Avatar"/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUsername(userName)}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}