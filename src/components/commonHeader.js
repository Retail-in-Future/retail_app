import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class CommonHeader extends Component {
    static defaultProps = {
        title: '木有title'
    };

    render() {
        const { title } = this.props;

        return (
            <Header outerContainerStyles={styles.headerOuter}
                    centerComponent={{ text: title }}
            />
        )
    }
}

const styles = StyleSheet.create({
    headerOuter: {
        zIndex: 1,
        position: 'relative'
    }
});
