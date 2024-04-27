import { customAlphabet } from 'nanoid';

const custom = customAlphabet('ZXCVBNMASDFGHJKLQWERTYUIOP1234567890');

export default function generateId() {
  return custom(11);
}
