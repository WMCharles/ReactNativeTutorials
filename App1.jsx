import React, { useState } from 'react';
import { View, ScrollView, Text, Image, Button, Modal, StatusBar, ActivityIndicator } from 'react-native';
import logoImage from './assets/adaptive-icon.png'

export default function App() {
  const [modal, setModal] = useState(false)
  const [isVisibleBar, setIsVisibleBar] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={{ flex: 1, padding: 25, backgroundColor: 'plum' }}>
      {/* <ActivityIndicator/> */}
      <ActivityIndicator size="large" color="midnightblue" animating={isLoading}/>
      <StatusBar backgroundColor={'green'} barStyle='dark-content' hidden={isVisibleBar} />
      <ScrollView>
        <Text>
          The standard Lorem Ipsum passage, used since the 1500s
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dignissimos dolor debitis explicabo corporis sint veniam eum quo cupiditate ab veritatis, libero temporibus? A odio molestiae, fuga quasi ut nostrum!z Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem corporis fugiat doloremque dignissimos ratione eum mollitia asperiores cupiditate ea, nihil esse. Rem, aliquam molestias! Pariatur veniam enim placeat quod!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti in tempora animi necessitatibus inventore cumque architecto. Fugit amet harum tempora, nobis dolorem ipsum recusandae, expedita necessitatibus consequuntur, deserunt dignissimos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error maiores doloribus optio obcaecati culpa beatae animi adipisci laboriosam quo odit, exercitationem rerum nobis reprehenderit natus doloremque ratione harum quasi!
        </Text>
        {/* <Button title='Press' color='green' onPress={() => setModal(true)} /> */}
        <Button title='Show Status Bar' color='green' onPress={() => {setIsVisibleBar(!isVisibleBar), setIsLoading(!isLoading)}} />


        <Modal visible={modal} onRequestClose={() => setModal(false)} animationType='slide' presentationStyle='pageSheet'>
          <View >
            <Image source={{ uri: 'https://picsum.photos/500' }} style={{ height: 300, width: 'auto' }} />

            <Button title='close' color='midnightblue' onPress={() => setModal(false)} />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}