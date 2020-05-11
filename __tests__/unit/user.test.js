const bcrypt = require('bcryptjs');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  
  beforeEach( async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({ name: 'Bernardo', email: 'bernardo.augusto.bastos@hotmail.com', password: '1234' });

    const hash = await bcrypt.hash('1234', 8);

    const compareHash = await bcrypt.compare('1234', user.password_hash);
    expect(compareHash).toBe(true);
  });
});