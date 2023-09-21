import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';

import BookCover from "./assets/BookCover.jpg";
import BlacknWhite from "./assets/BlacknWhite.jpg";
import GameChanger from "./assets/GameChanger.jpg";
import KiteRunner from "./assets/KiteRunner.jpg";
import ThousandSplendidSuns from "./assets/ThousandSplendidSuns.jpg";
import AtomicHabits from "./assets/AtomicHabits.jpg";

const numColumns = 3;

const myArrayForBooks= [
  {
    id: "1",
    img: BookCover,
    name: "Aankh Samundar",
  },
  {
    id: "2",
    img: BlacknWhite,
    name: "Black n White",
  },
  {
    id: "3",
    img: GameChanger,
    name: "Game Changer",
  },
  {
    id: "4",
    img: KiteRunner,
    name: "The Kite Runner",
  },
  {
    id: "5",
    img: ThousandSplendidSuns,
    name: "A Thousand Splendid Suns",
  },
  {
    id: "6",
    img: AtomicHabits,
    name: "Atomic Habits",
  },
  {
    id: "7",
    img: BookCover,
    name: "Aankh Samundar",
  },
  {
    id: "8",
    img: BlacknWhite,
    name: "Black n White",
  },
  {
    id: "9",
    img: GameChanger,
    name: "Game Changer",
  }

]

export default function App() {
  const [searchText, setSearchText] = useState('');
  
  
  
  const handleSearch = (text) => {
    setSearchText(text);
  };
  
  const filteredData = myArrayForBooks.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueBar}></View>

      <View style={styles.booksHeading}>
           <Text style={styles.headingText}>Books</Text>
      </View>

      <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        onChangeText={handleSearch} // Step 2: Attach the onChangeText event
        value={searchText} // Step 2: Set the value of the input
      />
      </View>

      <FlatList
        data={filteredData}
        numColumns= {numColumns}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "lightgrey",
              height: 300,
              marginBottom: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 110,
                  height: 200,
                  overflow: "hidden",
                  
                }}
                source={item.img}
                alt='Loading...'
              />
              <Text numberOfLines={1} style={{fontWeight:'bold', marginTop: 25, width: '100%', textAlign: 'center'}}>{item.name}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  blueBar:{
    backgroundColor: '#1E90FF',
    width: '100%',
    height: 50,
  },
  booksHeading:{
    backgroundColor: 'white',
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    width: '80%',
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  searchContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }

  
});
