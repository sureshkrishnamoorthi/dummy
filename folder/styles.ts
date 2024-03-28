/**
 * \file styles.ts
 * \brief This file handled the UI style elements.
 *
 * Confidential: APSI Proprietary
 * Copyright (C) APSI Sports and Gaming Technology,
 * Inc., Unpublished Work, 2023 - All Rights Reserved
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited
*/

import { StyleSheet, Dimensions, Platform, useWindowDimensions }
    from 'react-native';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const UPPER_HEADER_HEIGHT = Platform.OS === 'ios' ? 145 : 85;
const UPPER_HEADER_PADDING_TOP = 5;

console.log("dimentsions", height, width)

export const styles = StyleSheet.create({

    /******************* Header *******************/
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: UPPER_HEADER_HEIGHT,
        width: '100%',
        backgroundColor: '#168AB9',
    },
    upperHeader: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        height: UPPER_HEADER_HEIGHT + UPPER_HEADER_PADDING_TOP,
        paddingTop: UPPER_HEADER_PADDING_TOP,
    },
    appHeading: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    headerBottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    headerInput: {
        height: 35,
        padding: 5,
        paddingLeft: 10,
        borderRadius: 50,
        fontSize: 16,
        color: '#fff',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    searchInputText: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        color: 'white',
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 80,
    },
    buttonSearch: {
        position: 'absolute',
        alignSelf: 'flex-end',
        width: '25%',
        backgroundColor: '#239B56',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        paddingRight: 5,
        height: 35,
    },
    buttonText: {
        color: 'white',
    },
    iconButton: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    menuIcon: {
        fontSize: 20,
        fontWeight: '800',
        color: '#fff',
        marginRight: -12,
        transform: [{ rotate: '90deg' }],
    },

    videoPlayer: {
        width: 350,
        height: 800
    },


    /******************* Modal *******************/
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        minHeight: 280,
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 25,
        backgroundColor: '#fff',
    },
    modalRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 10,
    },
    modalHeader: {
        borderBottomColor: '#E5E8E8',
        borderBottomWidth: 1,
        marginBottom: 25,
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        paddingLeft: 5,
    },
    statusText: {
        fontSize: 12,
    },
    modalRowSwitch: {
        alignItems: 'center',
    },
    inputSwitch: {
        marginLeft: 13,
    },
    label: {
        width: '30%',
        color: "#168AB9",
        fontWeight: '500',
    },
    input: {
        color: 'black',
        height: 30,
        width: "75%",
        padding: 5,
        paddingLeft: 15,
        borderRadius: 50,
        fontSize: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#168AB9'
    },
    buttonContainer: {
        width: '100%',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonWrapper: {
        width: '50%',
    },
    button: {
        width: '100%',
        height: 35,
        borderRadius: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontWeight: '500',
    },
    startButton: {
        backgroundColor: '#168AB9',
    },
    stopButton: {
        backgroundColor: '#E85050',
    },


    /******************* Main Page *******************/

    scrollViewContent: {
        flex: 1,
        height: height - 100,
        marginTop: 20,
    },
    listRow: {
        flexDirection: 'row',
        marginHorizontal: 18,
        marginVertical: 8,
        backgroundColor: '#DCF1F7',
        justifyContent: 'space-between',
        borderRadius: 8,
    },
    columnLeft: {
        width: "75%",
        paddingVertical: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: 'flex-start',
    },
    title: {
        color: '#082647',
        fontWeight: '500',
        paddingLeft: 20,
    },
    columnRight: {
        width: "25%",
    },
    itemButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        paddingRight: 5,
        height: "100%",
        opacity: 0.8,
    },
    buttonDownload: {
        backgroundColor: '#239B56',
    },
    buttonDelete: {
        backgroundColor: '#E85050',
    },

    /******************* Spinner Modal *******************/
    spinnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    spinnerWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transprant',
    },
})