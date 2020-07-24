import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()
  user.name = 'Marlon'
  expect(user.name).toEqual('Marlon')
})
