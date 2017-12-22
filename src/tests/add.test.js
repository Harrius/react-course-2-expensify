const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;


//1st arg is name. 2nd arg is code to run test case (always arrow function)

test('should add two numbers', () => {
    const result = add(3, 4);


    expect(result).toBe(7);
})

test ("should print name", () => {
    const greeting = generateGreeting("John");
    
    expect(greeting).toBe("Hello John!")
})