import { capitalizeFirst } from './capitalize.js'; 


test('properly capitalize first letter of a string', () => {
    expect(capitalizeFirst('anything')).toMatch('Anything');
}); 