const Manager = require('../lib/Manager');

test('creates a new manager object', () => {
    const manager = new Manager('John', 1, 'test@email.com', 50);

    expect(manager.name).toBe('John');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual('test@email.com');
    expect(manager.officeNumber).toBe(50);
});

test("returns manager's role", () => {
    const manager = new Manager('John', 1, 'test@email.com', 50);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));

});