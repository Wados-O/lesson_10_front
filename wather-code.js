const Wether = (codeWether, wetherFunction) => {
    return wetherFunction(codeWether);
}
const weatherDecoder = (code) => {
    switch (code) {
        case 'SQ':
            return 'Шквал';
        case 'PO':
            return 'Пыльный вихрь';
        case 'FC':
            return 'Торнадо';
        case 'BR':
            return 'Дымка (видимость от 1 до 9 км)';
        case 'HZ':
            return 'Мгла (видимость менее 10 км)';
        case 'FU':
            return 'Дым (видимость менее 10 км)';
        case 'DS':
            return 'Пыльная буря (видимость менее 10 км)';
        case 'SS':
            return 'Песчаная буря (видимость менее 10 км)';
        default:
            return 'Неизвестная погода';
    }
};

const code1 = 'FU';
const result = Wether(code1, weatherDecoder);
console.log(result);