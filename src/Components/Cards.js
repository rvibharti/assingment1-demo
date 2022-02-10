import React, { useEffect, useState } from 'react'
import CardList from './CardList';
import Loader from './Loader'

function Cards() {
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const getUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        setUser(await response.json());

    }

    useEffect(() => {
        getUser();
        setIsLoading(false);
    }, [])

    const data = user.map((currEle) => {
        return (
            <CardList currEle={currEle} />
        )
    })

    return (
        <>
            <div>
                {
                    !isLoading ? data : <Loader />
                }
            </div>
        </>
    )
}

export default Cards;