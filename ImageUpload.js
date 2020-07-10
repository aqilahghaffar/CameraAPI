import React, { useLayoutEffect, useEffect, useState} from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import {Surface, IconButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

const ImageUpload = ( { navigation} ) => {
    const [images, setImages] = useState ([]);

    useLayoutEffect(() => {

        const handleUpload = () => {
            ImagePicker.showImagePicker({maxWidth: 500, maxHeight: 500}, (response) => {
                if(response.didCancel) {
                    return;
                }
            });
        };

        navigation.setOptions({
            headerRight: () => <IconButton icon="plus" onPress={handleUpload} />,
        });

    }, [navigation]);

    return (
    <View>
    <Text>Cover Image</Text>
    <Surface>
    <Image source={{ uri: ''}} style={styles.img} />
    </Surface>

    <FlatList 
    data={images} 
    renderItem={({item}) => (
    <Surface>
    <Image source ={{uri:item.url }} /> 
    </Surface> 
    )}
    />
     </View>
    );
   
};



const styles = StyleSheet.create({
    coverImg: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',

    },
});

export default ImageUpload;