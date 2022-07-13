const Intern = require('../lib/Intern');

test('creates a new intern object', () => {
    const intern = new Intern('John', 1, 'test@email.com', 'Ryerson U');

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual('test@email.com');
    expect(intern.school).toBe('Ryerson U');
});

test('returns school name', () => {
    const intern = new Intern('John', 1, 'test@email.com', 'Ryerson U');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("returns intern's role", () => {
    const intern = new Intern('John', 1, 'test@email.com', 'Ryerson U');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));

});