import * as React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Block, Card, theme } from 'galio-framework';
import articles from '../common/data/articles';

const { width } = Dimensions.get('screen');

class Home extends React.Component {

  articles


  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          {
            articles.map((r, key)=>(
              <Card image={r.image} title={r.title} style={styles.card} key={key} borderless avatar="http://i.pravatar.cc/100?id=skater" location="Los Angeles, CA" caption="139 minutes ago" imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }} imageStyle={styles.cardImageRadius}/>
            ))
          }
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    marginVertical: theme.SIZES.BASE,
  },
  card:{
    marginBottom: 10
  },
  cardImageRadius:{
    borderRadius: theme.SIZES.BASE
  }
});

export default Home;