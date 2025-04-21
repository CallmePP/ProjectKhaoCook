import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import CustomTabBar from './CustomTabBar';
const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [history, setHistory] = useState(['ข้าวต้ม', 'ปลาทอด']);

  const images = [
    { uri: 'https://www.singhbin.com/wp-content/uploads/2023/08/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg' },
    { uri: 'https://lakcookingschool.com/web-upload/fck/editor-pic/images/%E0%B8%A2%E0%B8%B3/S__39591994.jpg' },
    { uri: 'https://aroi-mark.com/wp-content/uploads/2020/06/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AB%E0%B8%99%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B92-1024x1024.jpg' },
    { uri: 'https://eknoodle.com/wp-content/uploads/2022/12/44-1024x749.jpg' }
  ];

  const categories = [
    { id: '1', name: 'เมนูข้าว', image: { uri: 'https://www.singhbin.com/wp-content/uploads/2023/08/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg' } },
    { id: '2', name: 'ก๋วยเตี๋ยว', image: { uri: 'https://eknoodle.com/wp-content/uploads/2022/12/44-1024x749.jpg' } },
    { id: '3', name: 'เมนูทานเล่น', image: { uri: 'https://s359.kapook.com/pagebuilder/f6558105-e6e7-419b-a04d-edb108647bb1.jpg' } },
    { id: '4', name: 'ของหวาน', image: { uri: 'https://static.wixstatic.com/media/018989_d93cf2c3b9094a66aa06e7aad5b35c3e~mv2.png' } },
    { id: '5', name: 'อาหารคลีน', image: { uri: 'https://img.wongnai.com/p/1920x0/2017/11/16/bcb81b277172496598bd18a25617a0a7.jpg' } },
    { id: '6', name: 'เมนูน้ำ', image: { uri: 'https://cdn-hhahh.nitrocdn.com/xJoTomMYpDqGcsZczeiXuVFPaoqbQAtE/assets/images/optimized/rev-fd1ceb8/www.joozejuice.com/wp-content/uploads/2023/06/25.Strawberry_Protein_MilkshakeArticleHeader_769x497_DSK-1024x662.jpg' } },
    { id: '7', name: 'เมนูยำ', image: { uri: 'https://lakcookingschool.com/web-upload/fck/editor-pic/images/%E0%B8%A2%E0%B8%B3/S__39591994.jpg' } },
  ];

  const handleHistorySelect = (item) => {
    setSearch(item);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
        <View style={{ padding: 16, paddingBottom: 80 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#d36c00', alignSelf: 'center' }}>
            Khao<Text style={{ color: 'gold' }}>Cook</Text>
          </Text>

          {/* ช่องค้นหา + ไอคอน */}
          <View style={{
            flexDirection: 'row',
            marginTop: 25,
            backgroundColor: '#EEE4DA',
            borderRadius: 12,
            width: 380,
            height: 40,
            justifyContent: 'flex-start',
            alignItems: 'center',
            alignSelf: 'center',
            paddingHorizontal: 10
          }}>
            <Ionicons name="search" size={18} color="#999" style={{ marginRight: 8 }} />
            <TextInput 
              placeholder="ค้นหา"
              value={search}
              onChangeText={setSearch}
              style={{ flex: 1, fontSize: 14 }}
            />
          </View>

          <FlatList 
            data={history}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={{ padding: 8, backgroundColor: '#EDEDED', margin: 15, borderRadius: 12, width: 92, height: 36,
                alignItems: 'center'}}
                onPress={() => handleHistorySelect(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          <FlatList
            data={images}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image source={item} style={{ width: 346, height: 200, borderRadius: 13, marginRight: 10 }} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>หมวดหมู่</Text>
          <FlatList 
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ alignItems: 'center', margin: 4 }}>
                <Image source={item.image} style={{ width: 52, height: 52, borderRadius: 47 }} />
                <Text style={{ marginTop: 5 }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />

          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>เมนูแนะนำวันนี้</Text>
          <View style={{ 
            backgroundColor: '#fff', 
            borderRadius: 15, 
            flexDirection: 'row', 
            alignItems: 'center', 
            padding: 15, 
            marginTop: 10, 
            shadowColor: '#000', 
            shadowOpacity: 0.1, 
            shadowRadius: 5, 
            elevation: 3 
          }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>ยำหมูสามชั้น</Text>
              <Text style={{ color: '#666', marginTop: 5 }}>วันนี้กินหมูสามชั้นยั่วๆ จ้าา</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} 
                  style={{ width: 30, height: 30, borderRadius: 15 }} 
                />
                <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>PP</Text>
                <View style={{ 
                  backgroundColor: '#c7f4c2', 
                  paddingVertical: 3, 
                  paddingHorizontal: 8, 
                  borderRadius: 10, 
                  marginLeft: 8 
                }}>
                  <Text style={{ fontSize: 12, color: '#236723' }}>เชฟฝึกหัด</Text>
                </View>
              </View>
            </View>

            <Image source={{ uri: 'https://i.ytimg.com/vi/V7sgaBvs6Mw/maxresdefault.jpg' }} 
              style={{ width: 120, height: 120, borderRadius: 15 }} 
            />
          </View>
        </View>
      </ScrollView>

      {/* ปุ่มเพิ่มสูตรอาหาร */}
      <TouchableOpacity 
        style={{
          position: 'absolute',
          bottom: 80,
          right: 30,
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#d36c00',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5
        }}
        onPress={() => console.log('เพิ่มสูตรอาหาร')}
      >
        <Text style={{ fontSize: 30, color: 'white' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
