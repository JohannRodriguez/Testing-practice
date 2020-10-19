const caesarCipher = (str) => {
  const reference = {
    a: 'b', b: 'c', c: 'd',
    d: 'e', e: 'f', f: 'g',
    g: 'h', h: 'i', i: 'j',
    j: 'k', k: 'l', l: 'm',
    m: 'n', n: 'o', o: 'p',
    p: 'q', q: 'r', r: 's',
    s: 't', t: 'u', u: 'v',
    v: 'w', w: 'x', x: 'y',
    y: 'z', z: 'a'
  }
  let ciphered = '';

  str = str.toLowerCase();

  for(let i = 0; i < str.length; i++){
    ciphered += reference[str[i]]
  }

  return ciphered;
};

export default caesarCipher;
