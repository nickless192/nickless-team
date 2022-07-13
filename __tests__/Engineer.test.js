const Engineer = require('../lib/Engineer');

test('creates a new manager object', () => {
    const engineer = new Engineer('John', 1, 'test@email.com', 'testaccount');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual('test@email.com');
    expect(engineer.github).toBe('testaccount');
});

test('returns link to github account', () => {
    const engineer = new Engineer('John', 1, 'test@email.com', 'testaccount');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("returns engineer's role", () => {
    const engineer = new Engineer('John', 1, 'test@email.com', 'testaccount');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));

});