import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons'

export default function PasswordItem({data, removePassword}) {

  const [showPassword, setShowPassword] = useState(true);
 
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
        {showPassword ? <Text style={styles.text}> {data} </Text>
                      : <Text style={styles.textOcult}> *********************</Text>}
        {showPassword ? <Ionicons onPress={togglePassword} style={styles.text} size={20} name="eye-outline"/>
                      : <Ionicons onPress={togglePassword} style={styles.text} size={20} name="eye-off-outline"/>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#fff'
    },
    textOcult: {
      color: '#fff',
      backgroundColor: '#fff',
      borderRadius: 8,
    }
})
