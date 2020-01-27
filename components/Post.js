//This is the layout of each announcement that will appear on the announcements screen

import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import ViewMoreText from 'react-native-view-more-text';

const Post = props => {
    const renderViewMore=(onPress)=>{
        return(
          <Text style={styles.view_post} onPress={onPress}>View more</Text>
        )
      }
      const renderViewLess=(onPress)=>{
        return(
          <Text style={styles.view_post} onPress={onPress}>View less</Text>
        )
      }
    return (
        <View style={styles.box_post}>
            <Text h4 style={styles.head_post}>Announcement #1</Text>
            <ViewMoreText
                numberOfLines={4}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}
                textStyle={{textAlign: 'left'}}
                >
                <Text>
                Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu
                </Text>
            </ViewMoreText>
            <View style={styles.row_post}>
                <Text style={styles.author_post}>By Mess Incharge</Text>    
                <Text style={styles.date_post}>27/1/2020</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box_post: {
        padding: 15,         
        borderBottomWidth: 1,
        borderBottomColor: '#d8d8d8',
    },
    subject_post: {
       fontWeight: "300",
    },
    view_post: {
        color:'#477eb0',
    },
    date_post: {
        color:'#988a87',
    },
    author_post: {
        color:'#988a87',
    },
    row_post: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    head_post: {
        color:'#477eb0',
    }
  });

export default Post;