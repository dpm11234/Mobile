
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProductService } from '../../services';
import { environment } from '../../environment';
import { Container, Header, Item, Input, List, Text, ListItem, Left, Thumbnail, Body } from 'native-base'
import { FlatList, StatusBar } from 'react-native'
class Find extends Component {
    constructor(props) {
        super(props)
        this.state = { SanPhams: [], isLoading: true };
    }
    componentDidMount() {
        ProductService.getTop5()
            .then(({ data }) => {
                if (data["success"]) {
                    this.setState({
                        SanPhams: data['data'],
                        isLoading: false,
                    }, () => {
                        // console.log(this.state);
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    _renderItem = ({ item, index }) => {
        return (


            <ListItem avatar>
                <Left>
                    <Thumbnail source={{ uri: 'https://via.placeholder.com/150 ' }} />
                </Left>
                <Body>
                    <Text>ten san pham</Text>
                    <Text>day là giá </Text>
                </Body>
            </ListItem>

        )
    }
    render() {
        return (

            <Container style={{ width: '100%', height: 60 }}>
                <Header searchBarrounded style={{ backgroundColor: 'darkorange' }}>
                    <Item style={{ alignSelf: "center", width: "90%", height: "80%", borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.5)' }}>
                        <Icon style={{ fontSize: 34, marginLeft: 10 }} name="ios-search"></Icon>
                        <Input style={{ fontSize: 18, marginLeft: 10 }} placeholder="search"></Input>
                    </Item >
                </Header >
                <List>
                    <FlatList>
                        data={this.state.SanPhams}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()};
                    </FlatList>


                </List>
            </Container >

        )
    }
};
export default Find;

