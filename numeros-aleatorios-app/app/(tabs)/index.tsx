import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

export default function App() {
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [randomNumber, setRandomNumber] = useState<number | null>(null);

    const generateRandomNumber = () => {
        const minValue = parseInt(min, 10);
        const maxValue = parseInt(max, 10);

        if (!isNaN(minValue) && !isNaN(maxValue) && minValue < maxValue) {
            const number = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            setRandomNumber(number);
        } else {
            Alert.alert('Erro', 'Insira valores válidos! (O valor mínimo deve ser menor que o máximo.)');
            setRandomNumber(null);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>✨ Gerador Aleatório ✨</Text>
            </View>

            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwiFzQI_8y1iHdjMiAwwLhsBlwVpqAK9FQ9w&s' }}
                style={styles.image}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Número Mínimo"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                    value={min}
                    onChangeText={setMin}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Número Máximo"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                    value={max}
                    onChangeText={setMax}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generateRandomNumber}>
                <Text style={styles.buttonText}>Gerar Número</Text>
            </TouchableOpacity>

            {randomNumber !== null && (
                <View style={styles.resultBox}>
                    <Text style={styles.resultText}>Número Gerado:</Text>
                    <Text style={styles.resultNumber}>{randomNumber}</Text>
                    <Text style={styles.luckText}>🍀 Que a sorte esteja ao seu favor! 🍀</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14141F',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#FF79C6',
    },
    title: {
        fontSize: 28,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#282A36',
        borderRadius: 12,
        paddingHorizontal: 15,
        marginBottom: 12,
        fontSize: 18,
        color: '#FFF',
        borderWidth: 1,
        borderColor: '#FF79C6',
    },
    button: {
        backgroundColor: '#FF79C6',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 12,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    resultBox: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#282A36',
        borderRadius: 15,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 18,
        color: '#FFF',
    },
    resultNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FF79C6',
    },
    luckText: {
        marginTop: 10,
        fontSize: 16,
        color: '#50fa7b',
        fontStyle: 'italic',
    },
});
