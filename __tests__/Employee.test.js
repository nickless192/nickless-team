const Employee = require('../lib/Employee');



test("creates employee's object", () => {
    const employee = new Employee('John', 1, 'test@email.com');
    
    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual('test@email.com');
});

test("returns employee's name", () => {
    const employee = new Employee('John', 1, 'test@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));

});

test("returns employee's id", () => {
    const employee = new Employee('John', 1, 'test@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));

});

test("returns employee's email", () => {
    const employee = new Employee('John', 1, 'test@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));

});

test("returns employee's role", () => {
    const employee = new Employee('John', 1, 'test@email.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));

});