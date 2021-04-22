import React, { useState, useEffect } from "react";

import {Dimensions} from "react-native";

export const useScreenDimensions = () => {
    const [screenData, setScreenData] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenData(result.screen);
        };

        Dimensions.addEventListener('change', onChange);

        return () => Dimensions.removeEventListener('change', onChange);
    });

    return {
        ...screenData,
        isLandscape: screenData.width > screenData.height,
    };
};

export const AppTheme = {
    dark: false,
    colors: {
        primary: '#4A3939',
        background: 'rgb(242, 242, 242)',
        card: '#799C94',
        text: '#4A3939',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const AppBarTheme = {
    dark: false,
    colors: {
        primary: '#799C94',
        background: 'rgb(242, 242, 242)',
        card: '#799C94',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const BtnTheme = {
    colors: {
        primary: '#EEBA79',
        text: 'rgb(242, 242, 242)',
    },
};

export const getBookImage = (obj) => {
    switch (obj) {
        case 'Image_01.png':
            return require('../assets/books/Image_01.png');
        case 'Image_02.png':
            return require('../assets/books/Image_02.png');
        case 'Image_03.png':
            return require('../assets/books/Image_03.png');
        case 'Image_05.png':
            return require('../assets/books/Image_05.png');
        case 'Image_06.png':
            return require('../assets/books/Image_06.png');
        case 'Image_07.png':
            return require('../assets/books/Image_07.png');
        case 'Image_08.png':
            return require('../assets/books/Image_08.png');
        case 'Image_10.png':
            return require('../assets/books/Image_10.png');
        default:
            return require('../assets/404.png');
    }
};

export const getFullBookInfo = (id) => {
    switch (id) {
        case '9780321856715':
            return require('../assets/booksInfo/9780321856715.json');
        case '9780321862969':
            return require('../assets/booksInfo/9780321862969.json');
        case '9781118841471':
            return require('../assets/booksInfo/9781118841471.json');
        case '9781430236054':
            return require('../assets/booksInfo/9781430236054.json');
        case '9781430237105':
            return require('../assets/booksInfo/9781430237105.json');
        case '9781430238072':
            return require('../assets/booksInfo/9781430238072.json');
        case '9781430245124':
            return require('../assets/booksInfo/9781430245124.json');
        case '9781430260226':
            return require('../assets/booksInfo/9781430260226.json');
        case '9781449308360':
            return require('../assets/booksInfo/9781449308360.json');
        case '9781449342753':
            return require('../assets/booksInfo/9781449342753.json');
        default:
            return require('../assets/booksInfo/TestingItemInfo.json');
    }
};

export const data = [0, 1, 0, 1, 0, 1, 0, 1, 0];
export const labels = [ '-2п', '', "", "", "", "-п", "", "", "", "", "", 0, "", "", "", "", "", 'п', "", "", "", "", '2п' ];

