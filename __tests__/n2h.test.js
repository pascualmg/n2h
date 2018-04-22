const n2h = require('../src/n2h');

test('si le meto 13456745', function () {
    expect(n2h(13456745)).toBe('trece millones cuatrocientos cincuenta y siete mil setecientos cuarenta y cinco');
});
