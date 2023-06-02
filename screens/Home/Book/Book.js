import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const Book = ({ navigation, route }) => {
    const [item, setItem] = useState(null)
    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [])
    return (
        <View>
            <Text>Hello book</Text>
            <View className="relative" >
                <View className="w-44 h-44 bg-slate-400"></View>
                <Text className="absolute top-0 z-50 text-white" >action</Text>
            </View>
            <Text>{item?.body}</Text>
        </View>
    );
};

export default Book;