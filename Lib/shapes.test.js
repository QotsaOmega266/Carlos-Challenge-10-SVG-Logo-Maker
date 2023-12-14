
import { createLogo } from './Shapes';


test('Create logo with valid parameters', () => {
    const width = 100;
    const height = 100;
    const color = 'red';

    const logo = createLogo(width, height, color);

    expect(logo).toBeDefined();
    expect(logo.width).toBe(width);
    expect(logo.height).toBe(height);
    expect(logo.color).toBe(color);
});


test('Create logo with invalid parameters', () => {
    const width = -10;
    const height = 0;
    const color = 'blue';


    const logo = createLogo(width, height, color);

    expect(logo).toBeNull();
});
