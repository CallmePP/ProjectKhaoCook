import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const App = () => {
  const [search, setSearch] = useState('');

  const recipes = [
    {
      title: 'สเต็กแซลมอน',
      description: 'แซลมอนนุ่มฉ่ำ หอมกลิ่นเครื่องเทศ ทำง่าย อร่อยจนต้องทำซ้ำเลย',
      image: require('../assets/ปลาราดพริก.png'),
      author: 'เชฟแมว',
      authorImage: require('../assets/ปลาราดพริก.png'),
      chefTitle: 'เชฟมือโปร',
    },
    {
      title: 'ไก่ทอดหาดใหญ่',
      description: 'สูตรแบบไม่หมักก็อร่อยได้ ทำง่าย กรอบนอกนุ่มใน',
      image: require('../assets/ปลาราดพริก.png'),
      author: 'น้องมะเขือ',
      authorImage: require('../assets/ปลาราดพริก.png'),
      chefTitle: 'มือใหม่หัดทำ',
    },
    {
      title: 'สปาเก็ตตี้กุ้ง',
      description: 'แซ่บถูกปาก ทำง่ายกินกับใครก็อร่อย และอร่อยเพราะทำเองเลยอร่อยมาก',
      image: require('../assets/ปลาราดพริก.png'),
      author: 'เชฟอันดับหนึ่ง',
      authorImage: require('../assets/ปลาราดพริก.png'),
      chefTitle: 'เชฟอันดับหนึ่ง',
    },
  ];

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#d36c00' }}>
          Khao<Text style={{ color: 'gold' }}>Cook</Text>
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>ห้องเก็บสูตร</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 10, // <-- ขยับขึ้นตรงนี้
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

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>บันทึกไว้ {filteredRecipes.length} สูตร</Text>
        </View>

        {filteredRecipes.map((recipe, index) => (
          <View key={index} style={styles.recipeCard}>
            <View style={styles.recipeText}>
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeDescription}>{recipe.description}</Text>
              <View style={styles.authorContainer}>
                <Image source={recipe.authorImage} style={styles.authorImageStyle} />
                <Text style={styles.authorName}>{recipe.author}</Text>
                {recipe.chefTitle && (
                  <View
                    style={
                      recipe.chefTitle === 'มือใหม่หัดทำ'
                        ? styles.chefNewbieBadgeSmall
                        : styles.chefProBadgeSmall
                    }>
                    <Text style={styles.chefProBadgeTextSmall}>{recipe.chefTitle}</Text>
                  </View>
                )}
              </View>
            </View>
            <Image source={recipe.image} style={styles.recipeImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1F1',
    paddingTop: 19.8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    marginTop: 20,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  recipeCard: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  recipeText: {
    flex: 1,
    padding: 12,
  },
  recipeTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  recipeDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImageStyle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 4,
  },
  authorName: {
    fontSize: 10,
    color: '#999',
  },
  recipeImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 0,
  },
  chefProBadgeSmall: {
    backgroundColor: '#FFC300',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 8,
    marginLeft: 4,
  },
  chefProBadgeTextSmall: {
    color: '#000',
    fontSize: 8,
    fontWeight: 'bold',
  },
  chefNewbieBadgeSmall: {
    backgroundColor: '#C5E496',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 8,
    marginLeft: 4,
  },
  chefNewbieBadgeTextSmall: {
    color: '#000',
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default App;
