const periodTranslator = require('../src/periodTranslator.js');
test('hago bien el 31', function () {
    expect(periodTranslator('31',0)).toBe('treinta y uno');
});
test('hago bien el 1001', function () {
    expect(periodTranslator('1001',0)).toBe('mil uno');
});

test('hago bien el 1000', function () {
    expect(periodTranslator('1000',0)).toBe('mil');
});
test('25001', function () {
    expect(periodTranslator('25001',0)).toBe('veinticinco mil uno');
});

test('Si el primer dígito es un 1 en un número de más de una terna, entonces no tengo que decir "uno mil"', function () {
    expect(periodTranslator('1001',0)).not.toBe('uno mil uno');
});

describe('traduzco bien numeros muy grandes', function () {
    test('hago bien un nonillón', function () {
        expect(periodTranslator('1', 9)).toBe('un nonillón ');
    });
});

describe('si me pasan un periodo demasiado grande lloro como un crio', function () {
    test('periodo demasiado grande', function () {
        function blockTooLarge(){};
        expect(function (){periodTranslator('19949949949949949949', 9)}).toThrow('bloque demasiado largo');
    });
});