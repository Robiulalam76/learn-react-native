import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Pressable, Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)

    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [])

    return (
        <View>
            <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false} >

                <Button onPress={() => navigation.navigate("Book", { name: "Robiul" })} title="Go to Book" />

                <View className="mt-6 px-4" >
                    {
                        items.map(item => (
                            <Pressable onPress={() => navigation.navigate("Book", { id: item?.id })}>
                                <View className="bg-slate-300 mb-2 h-10 px-2 flex justify-center items-start rounded-xl" >
                                    <Text className="text-blue-800" >{item?.title}</Text>
                                </View>
                            </Pressable>

                        ))
                    }
                </View>
            </ScrollView>

        </View>
    );
};

export default Home;