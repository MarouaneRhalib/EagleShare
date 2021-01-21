export default {
    id: '1',
    users: [{
        id: 'u1',
        name: 'Vadim',
        imageUri: 'https://scontent.fcmn2-2.fna.fbcdn.net/v/t1.0-9/65478717_2420670801495900_5113219554423603200_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEvETrbXKQPGFwU_W8Lo6seGEwcQ1i28kkYTBxDWLbySSOGHC9mD7BPOq0ZJUvFfmO3IAQiKggIxCkOMMD4XHD5&_nc_ohc=0B8HIpues5MAX_nepmW&_nc_ht=scontent.fcmn2-2.fna&oh=9675ddff04ce9d176945292ac5eb2c1e&oe=5FF8EEAD',
    }, {
        id: 'u2',
        name: 'Lukas',
        imageUri: 'https://scontent.fcmn2-2.fna.fbcdn.net/v/t1.0-9/65478717_2420670801495900_5113219554423603200_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEvETrbXKQPGFwU_W8Lo6seGEwcQ1i28kkYTBxDWLbySSOGHC9mD7BPOq0ZJUvFfmO3IAQiKggIxCkOMMD4XHD5&_nc_ohc=0B8HIpues5MAX_nepmW&_nc_ht=scontent.fcmn2-2.fna&oh=9675ddff04ce9d176945292ac5eb2c1e&oe=5FF8EEAD',
    }],
    messages: [{
        id: 'm1',
        content: 'How are you, Lukas!',
        createdAt: '2020-12-12T12:48:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    }, {
        id: 'm2',
        content: 'I am good, good',
        createdAt: '2020-10-03T14:49:00.000Z',
        user: {
            id: 'u2',
            name: 'Lukas',
        },
    }, {
        id: 'm3',
        content: 'What about you?',
        createdAt: '2020-10-03T14:49:40.000Z',
        user: {
            id: 'u2',
            name: 'Lukas',
        },
    }, {
        id: 'm4',
        content: 'Good as well, preparing for the stream now.',
        createdAt: '2020-10-03T14:50:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    }, {
        id: 'm5',
        content: 'How is your uni going?',
        createdAt: '2020-10-03T14:51:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    }, {
        id: 'm6',
        content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
        createdAt: '2020-10-03T14:49:00.000Z',
        user: {
            id: 'u2',
            name: 'Lukas',
        },
    }, {
        id: 'm7',
        content: 'Big Data is really interesting. Cannot wait to go through all the material.',
        createdAt: '2020-10-03T14:53:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    }]
}