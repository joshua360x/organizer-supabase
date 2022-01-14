// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderWorkshop } from '../render-utils.js';
const test = QUnit.test;

test('time to test a function', async(expect) => {
    //Arrange
    // Set up your arguments and expectations
    // const div = document.createElement('div')
    const workshop = {
        name: 'How to Eat Fish with Bones',
        participants: [{
            name: 'bob',
            id: 1
        }]
    };
    // const workshops = await getWorkshops();
    const expected = '<div><p>How to Eat Fish with Bones</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = await renderWorkshop(workshop);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
