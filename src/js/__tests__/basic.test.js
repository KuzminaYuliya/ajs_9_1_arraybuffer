import getBuffer from '../app';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('should get data from ArrayBuffer and translate it to string', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  const result = converter.toString();
  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
