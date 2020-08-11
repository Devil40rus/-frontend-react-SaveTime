const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const name = () => {
    return random([
        'Картошка',
        'Кофе',
        'Кетчуп',
        'Молоко',
        'Яблоко',
        'Ананас',
        'Грибы',
        'Рыба',
        'Хлеб',
        'Йогурт',
        'Шоколад',
        'Кока-кола',
        'Свинина',
        'Чай',
        'Соки',
        'Детское питание',
        'Соусы',
        'Снеки',
        'Пицца',
        'Рис'
    ]);
};

function generate(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        const currentProducts = name();

        data.push({
            name: `${currentProducts}`
        });
    }
    console.log(data)
    return data;
}

export default generate;