import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { useState } from 'react';

const Category = ({ title, imageSource }) => {
  return (
    <View style={styles.CategoryItem}>
      <View style={styles.musicIconContainer}>
        {imageSource ? (
          <Image source={imageSource} style={styles.CategoryImage} />
        ) : (
          <Text style={styles.musicIcon}>♪</Text>
        )}
      </View>
      <Text style={styles.CategoryText}>{title}</Text>
    </View>
  );
};

const Playlist = ({ title, imageSource }) => {
  return (
    <View style={styles.recentItem}>
      <View style={styles.recentImage}>
        {imageSource ? (
          <Image source={imageSource} style={styles.recentCoverImage} />
        ) : (
          <View style={styles.musicIconOverlay}>
            <Text style={styles.musicIconLarge}>♪</Text>
          </View>
        )}
      </View>
      <Text style={styles.recentTitle} numberOfLines={1}>{title}</Text>
      <View style={styles.recentInfo}>
        <Text style={styles.recentInfoText}>Playlist</Text>
      </View>
    </View>
  );
};

const TopBar = ({ title, isSelected, isapp }) => {
  return (
    <View 
      style={[
        styles.TopBar, 
        isSelected && styles.selectedButton,
        isapp && styles.appButton
      ]}
    >
      {isapp ? (
        <Image source={require('./assets/app.png')} style={{ width: 35, height: 35 }} />
      ) : (
        <Text style={[styles.categoryText, isSelected && styles.selectedText]}>
          {title}
        </Text>
      )}
    </View>
  );
};

const AudioBook = ({ imageSource }) => {
  return (
    <View style={styles.AudioBook}>
      <View style={styles.audiobookImage}>
        {imageSource ? (
          <Image source={imageSource} style={styles.audiobookCoverImage} />
        ):(
          <Text style={styles.audiobookIcon}>📚</Text>
        )}
      </View>
    </View>
  );
};

export default function App() {
  const [categories] = useState([
    { id: 'app', title: 'App', isapp: true},
    { id: 'all', title: 'All', isSelected: true },
    { id: 'music', title: 'Music'},
    { id: 'podcasts', title: 'Podcasts'},
    { id: 'audiobooks', title: 'Audiobooks'},
  ]);

  const [musicCategories] = useState([
    { id: 1, title: 'Hot Hits Canada', imageSource: require('./assets/hits.jpg') },
    { id: 2, title: 'Pop Favourites', imageSource: require('./assets/pop.jpg') },
    { id: 3, title: 'Hip-Hop Central', imageSource: require('./assets/hiphop.jpg') },
    { id: 4, title: '80s Hard Rock', imageSource: require('./assets/80s.png') },
    { id: 5, title: 'All About Country', imageSource: require('./assets/canada.jpg') },
    { id: 6, title: 'Upbeat mix', imageSource: require('./assets/upbeat.png') },
    { id: 7, title: 'Daily Wellness', imageSource: require('./assets/wellness.png') },
    { id: 8, title: 'Release Radar', imageSource: require('./assets/release.jpg') },
  ]);

  const [Playlists] = useState([
    { id: 1, title: 'Pop mix', imageSource: require('./assets/pop.jpg') },
    { id: 2, title: 'Hot Hits', imageSource: require('./assets/hits.jpg') },
    { id: 3, title: 'Upbeat Mix', imageSource: require('./assets/upbeat.png') },
    { id: 4, title: 'Daily Wellness', imageSource: require('./assets/wellness.png') },
    { id: 5, title: 'Hip-Hop Central', imageSource: require('./assets/hiphop.jpg') },
    { id: 6, title: '80s Hard Rock', imageSource: require('./assets/80s.png') },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        style={styles.TopBarContainer}
        contentContainerStyle={styles.categoryContent}
      >
        {categories.map((cat) => (
          <TopBar 
            key={cat.id} 
            title={cat.title} 
            isSelected={cat.isSelected} 
            isapp={cat.isapp}
          />
        ))}
      </ScrollView>
      
      <ScrollView style={styles.mainContent} showsVerticalScrollIndicator={false}>
        <View style={styles.musicCategoriesContainer}>
          {musicCategories.map((category) => (
            <View key={category.id} style={styles.CategoryWrapper}>
              <Category title={category.title} imageSource={category.imageSource} />
            </View>
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recents</Text>
          <View style={styles.recentsGrid}>
            {Playlists.map((playlist) => (
              <Playlist key={playlist.id} title={playlist.title} imageSource={playlist.imageSource} />
            ))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Audiobooks for you</Text>
          <View style={styles.audiobooksContainer}>
            <AudioBook imageSource={require('./assets/audiobook1.jpg')} />
            <AudioBook imageSource={require('./assets/audiobook2.jpg')} />
          </View>
        </View>
        
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
  },
  TopBarContainer: {
    maxHeight: 50,
    marginBottom: 10,
  },
  categoryContent: {
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 8,
  },
  TopBar: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#32CD32',
  },
  appButton: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 0,
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  musicCategoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  CategoryWrapper: {
    width: '48%',
    marginBottom: 10,
  },
  CategoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    paddingRight: 52
  },
  musicIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#3A86FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    overflow: 'hidden',
  },
  musicIcon: {
    color: '#fff',
    fontSize: 24,
  },
  musicIconLarge: {
    color: '#fff',
    fontSize: 40,
  },
  CategoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  recentsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recentItem: {
    width: '32%',
    marginBottom: 20,
  },
  recentImage: {
    width: '100%',
    height: 110,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#3A86FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  musicIconOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  recentInfo: {
    marginTop: 4,
  },
  recentInfoText: {
    color: '#999',
    fontSize: 14,
  },
  audiobooksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AudioBook: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audiobookImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audiobookIcon: {
    fontSize: 60,
  },
  bottomSpacer: {
    height: 40,
  },
  CategoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  audiobookCoverImage: {
    width: '100%',
    height: '100%',
  },
  recentCoverImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
}); 