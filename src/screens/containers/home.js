import React, { useEffect } from 'react';
import Loading from '../../sections/components/loading';

const Home = ({ navigation }) => {
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const timer = setTimeout(() => {
                navigation.navigate('Pokemons')
            }, 3000);
            return () => clearTimeout(timer);
        });

        return unsubscribe;
    }, [navigation])

    return (
        <>
            <Loading />
        </>
    );
}

export default Home;
