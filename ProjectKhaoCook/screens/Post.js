import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // หรือ Icon library อื่นๆ ที่คุณใช้

const App = () => {
    const [sweetness, setSweetness] = useState(0);
    const [saltiness, setSaltiness] = useState(0);
    const [sourness, setSourness] = useState(0);
    const [spiciness, setSpiciness] = useState(0);
    const [ingredients, setIngredients] = useState(['']);
    const [steps, setSteps] = useState(['']);
    const [ingredientImages, setIngredientImages] = useState([]);
    const [stepImages, setStepImages] = useState([]);
    const [menuName, setMenuName] = useState('');
    const [description, setDescription] = useState('');

    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleIngredientChange = (text, index) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = text;
        setIngredients(newIngredients);
    };

    const handleAddStep = () => {
        setSteps([...steps, '']);
    };

    const handleStepChange = (text, index) => {
        const newSteps = [...steps];
        newSteps[index] = text;
        setSteps(newSteps);
    };

    const handleAddIngredientImage = () => {
        console.log('เพิ่มรูปภาพส่วนผสม (ยังไม่ได้ Implement ใน Snack)');
    };

    const handleAddStepImage = () => {
        console.log('เพิ่มรูปภาพวิธีการทำ (ยังไม่ได้ Implement ใน Snack)');
    };

    const adjustTaste = (taste, operation) => {
        switch (taste) {
            case 'sweetness':
                setSweetness(Math.max(0, Math.min(5, operation === 'increase' ? sweetness + 1 : sweetness - 1)));
                break;
            case 'saltiness':
                setSaltiness(Math.max(0, Math.min(5, operation === 'increase' ? saltiness + 1 : saltiness - 1)));
                break;
            case 'sourness':
                setSourness(Math.max(0, Math.min(5, operation === 'increase' ? sourness + 1 : sourness - 1)));
                break;
            case 'spiciness':
                setSpiciness(Math.max(0, Math.min(5, operation === 'increase' ? spiciness + 1 : spiciness - 1)));
                break;
            default:
                break;
        }
    };

    const renderTasteBar = (level, color) => {
        const barWidth = (level / 5) * 100;
        return (
            <View style={styles.tasteBarContainer}>
                <View style={[styles.tasteBar, { width: `${barWidth}%`, backgroundColor: color }]} />
                <Text style={styles.tasteLevelText}>{level}</Text>
            </View>
        );
    };

    const renderTasteControl = (label, taste, level, color) => (
        <View style={styles.tasteControl}>
            <Text style={styles.tasteLabel}>{label}</Text>
            <TouchableOpacity style={styles.tasteButton} onPress={() => adjustTaste(taste, 'decrease')}>
                <Text style={styles.tasteButtonText}>-</Text>
            </TouchableOpacity>
            {renderTasteBar(level, color)}
            <TouchableOpacity style={styles.tasteButton} onPress={() => adjustTaste(taste, 'increase')}>
                <Text style={styles.tasteButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* ส่วนหัว */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            {/* ส่วนเนื้อหา */}
            <ScrollView style={styles.content}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>ชื่อเมนู :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="เพิ่มชื่อเมนูที่คุณต้องการแนะนำ"
                        value={menuName}
                        onChangeText={setMenuName}
                        underlineColorAndroid="#d3d3d3" // เส้นใต้สำหรับ Android
                        borderBottomWidth={1} // เส้นใต้สำหรับ iOS
                        borderBottomColor="#d3d3d3" // สีเส้นใต้
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>คำอธิบาย :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="เพิ่มคำอธิบายเมนูของคุณ"
                        value={description}
                        onChangeText={setDescription}
                        underlineColorAndroid="#d3d3d3" // เส้นใต้สำหรับ Android
                        borderBottomWidth={1} // เส้นใต้สำหรับ iOS
                        borderBottomColor="#d3d3d3" // สีเส้นใต้
                    />
                </View>

                <TouchableOpacity style={styles.imagePicker}>
                    <View style={styles.imagePlaceholderContainer}>
                        <Icon name="image" size={40} color="#9e9e9e" />
                        <Text style={styles.imagePickerText}>เพิ่มรูปหน้าปก</Text>
                    </View>
                </TouchableOpacity>

                {/* ส่วนปรับแต่งรสชาติ */}
                <View style={styles.tasteContainer}>
                    <Text style={styles.label}>รสชาติ</Text>
                    {renderTasteControl('ระดับความเผ็ด', 'spiciness', spiciness, '#f44336')}
                    {renderTasteControl('ระดับความเค็ม', 'saltiness', saltiness, '#795548')}
                    {renderTasteControl('ระดับความหวาน', 'sweetness', sweetness, '#00bcd4')}
                    {renderTasteControl('ระดับความเปรี้ยว', 'sourness', sourness, '#4caf50')}
                </View>

                {/* ส่วนผสม */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionLabel}>ส่วนผสม</Text>
                    {ingredients.map((ingredient, index) => (
                        <View key={index} style={styles.listItem}>
                            <TextInput
                                style={styles.listItemInput}
                                placeholder={`ส่วนผสม ${index + 1}`}
                                value={ingredient}
                                onChangeText={(text) => handleIngredientChange(text, index)}
                            />
                            {index === ingredients.length - 1 && (
                                <TouchableOpacity onPress={handleAddIngredient} style={styles.addListItemButton}>
                                    <Icon name="plus" size={20} color="#666" />
                                </TouchableOpacity>
                            )}
                        </View>
                    ))}
                    <TouchableOpacity style={styles.addImageRow}>
                        <TouchableOpacity style={[styles.addImageButton, { backgroundColor: '#f9f9f9' }]}>
                            <View style={styles.smallImagePlaceholder} />
                            <Text style={styles.addImageButtonText}>เพิ่มรูปภาพ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleAddIngredientImage} style={styles.addButton}>
                            <Icon name="plus" size={20} color="#666" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

                {/* วิธีการทำ */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionLabel}>วิธีการทำ</Text>
                    {steps.map((step, index) => (
                        <View key={index} style={styles.listItem}>
                            <TextInput
                                style={styles.listItemInput}
                                placeholder={`ขั้นตอนที่ ${index + 1}`}
                                value={step}
                                onChangeText={(text) => handleStepChange(text, index)}
                                multiline
                            />
                            {index === steps.length - 1 && (
                                <TouchableOpacity onPress={handleAddStep} style={styles.addListItemButton}>
                                    <Icon name="plus" size={20} color="#666" />
                                </TouchableOpacity>
                            )}
                        </View>
                    ))}
                    <TouchableOpacity style={styles.addImageRow}>
                        <TouchableOpacity style={[styles.addImageButton, { backgroundColor: '#f9f9f9' }]}>
                            <View style={styles.smallImagePlaceholder} />
                            <Text style={styles.addImageButtonText}>เพิ่มรูปภาพ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleAddStepImage} style={styles.addButton}>
                            <Icon name="plus" size={20} color="#666" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* ปุ่มโพสต์ด้านล่างขวา */}
            <TouchableOpacity style={[styles.postButton, { bottom: 20 }]}>
                <Text style={styles.postButtonText}>โพสต์ ↑</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    backButton: {
        paddingRight: 10,
    },
    content: {
        flex: 1,
        padding: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    input: {
        fontSize: 16,
        color: '#333',
        paddingVertical: 8,
    },
    imagePicker: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#d3d3d3',
        borderRadius: 8,
        paddingVertical: 40,
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
    },
    imagePlaceholderContainer: {
        alignItems: 'center',
    },
    imagePickerText: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
    },
    tasteContainer: {
        marginBottom: 16,
    },
    tasteControl: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    tasteLabel: {
        fontSize: 14,
        color: '#333',
        marginRight: 10,
        width: 100,
    },
    tasteBarContainer: {
        flex: 1,
        height: 20,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    tasteBar: {
        height: '100%',
        borderRadius: 10,
    },
    tasteLevelText: {
        position: 'absolute',
        right: 5,
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
    },
    tasteButton: {
        backgroundColor: '#e0e0e0',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    tasteButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666',
    },
    sectionContainer: {
        marginBottom: 16,
    },
    sectionLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    listItemInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
        paddingVertical: 8,
        fontSize: 16,
        color: '#333',
    },
    addListItemButton: {
        marginLeft: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addImageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    addImageButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        marginRight: 10,
    },
    smallImagePlaceholder: {
        width: 30,
        height: 30,
        borderRadius: 4,
        backgroundColor: '#d3d3d3',
        marginRight: 8,
    },
    addImageButtonText: {
        fontSize: 16,
        color: '#666',
    },
    addButton: {
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    postButton: {
        backgroundColor: '#ffe0b2',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
        bottom: 20,
    },
    postButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default App;