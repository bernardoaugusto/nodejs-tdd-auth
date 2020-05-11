const { User } = require('../../src/app/models');


describe('Authentication', () => {

  it('should sum two numbers', async () => {
    const user = await User.create({ name: "Bernardo", email: "bernardo.augusto.bastos@gmail.com", password_hash: '1234' });
    console.log(user);

    expect(user.email).toBe('bernardo.augusto.bastos@gmail.com');
  });

});

