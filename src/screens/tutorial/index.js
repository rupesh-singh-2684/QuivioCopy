import React, { Component } from 'react';
import {
    Dimensions,
    Text,
    View,
    ImageBackground,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import splash_logo from "/Users/admin/Desktop/QuivioUI/src/assets/images/image.png"
import splash_logo_water from "/Users/admin/Desktop/QuivioUI/src/assets/images/image.png"
import splash_logo_white from "/Users/admin/Desktop/QuivioUI/src/assets/images/image.png"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../assets/images';

const { width } = Dimensions.get('window');

const data = [
    {
        title: ' Booking App. in Real-Time',
        description:
            'Real-time appointment booking is a feature that the best car wash apps will have.',
        image: splash_logo_water,
    },
    {
        title: 'Detailed Cleaning Service',
        description:
            'The top car wash apps will also offer a thorough cleaning service. By doing this, you can be sure that your car has received the best cleaning possible and that all of the dirt and grime has, making it look brand new.',
        image: splash_logo,
    },
    {
        title: '24/7 Service',
        description:
            'Car wash services should provide special packages to their devoted customers with various payment frequency options, including monthly, quarterly, annual, or biannual.',
        image: splash_logo_white,
    },
];

export class TutorialScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }
    _storeData = async () => {
        try {
            await AsyncStorage.setItem('isTutorial', 'true');
        } catch (error) {
            Error
            console.log('error');
        }
    };

    componentDidMount() {
        this._storeData();
    }

    goToNext = () => {
        this.setState(prevState => ({
            currentIndex: this.state.currentIndex + 1,
        }));
        if (this.state.currentIndex < data.length - 1) {
            this.flatListRef.scrollToIndex({ index: this.state.currentIndex + 1 });
            console.log('working', this.state.currentIndex);
        } else {
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'LoginPage' }]
            })
            //   const {navigation} = this.props;
            //   navigation.navigate('SignInScreen');
        }
    };

    // goToPrev = () => {
    //     this.setState(prevState => ({
    //         currentIndex: this.state.currentIndex - 1,
    //       }));
    //     if (this.state.currentIndex > 0) {
    //         this.flatListRef.scrollToIndex({ index: this.state.currentIndex - 1 });
    //     }
    // };

    renderItems = ({ item }) => {
        return (
            <View style={styles.slide}>
                
                <ImageBackground source={item.image} style={styles.image}>
                    <View style={styles.textContainer}>
                    <Image source={Images.Quivo}
                        style={styles.LogoImg}/>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        
                    </View>
                </ImageBackground>
            </View>
        );
    };
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref={ref =>
                        this.flatListRef = ref
                    }
                    data={data}
                    renderItem={this.renderItems}
                    keyExtractor={item => item.title}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onMomentumScrollEnd={event => {
                        const index = Math.floor(event.nativeEvent.contentOffset.x / width);
                        this.setState({ currentIndex: index });
                    }}
                />
                <View style={styles.paginationContainer}>
                    {/* <TouchableOpacity
                        style={styles.button}
                        onPress={this.goToPrev}
                        disabled={this.state.currentIndex === 0}>
                        <Text style={styles.buttonText}>Prev</Text>
                    </TouchableOpacity> */}

                    <View style={styles.pagination}>
                        {
                            data.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.paginationDot,
                                        this.state.currentIndex === index && styles.activeDot,
                                    ]}
                                />
                            ))
                        }
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.goToNext}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default TutorialScreen;