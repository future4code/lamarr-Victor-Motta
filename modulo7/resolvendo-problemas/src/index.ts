// Ex 1
function isOneEditAway(s1: string, s2: string): boolean {

    if (Math.abs(s1.length - s2.length) > 1) {
      return false;
    }
      if (s1.length > s2.length) {
      [s1, s2] = [s2, s1];
    }
  
    let edited = false; 
    let i = 0; 
    let j = 0; 
  
    while (i < s1.length && j < s2.length) {
      if (s1[i] !== s2[j]) {
        if (edited) {
          return false;
        }
  
        edited = true;
  
        if (s1.length === s2.length) {
          i++;
          j++;
        } else {
          j++;
        }
      } else {
        i++;
        j++;
      }
    }
    return edited || s1.length !== s2.length;
  }

  console.log(isOneEditAway ("banana","banan"))
// Ex 2
  function compressString(input: string): string {
    let compressed = ""; 
    let count = 1; 
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] === input[i + 1]) {
        count++;
      } else {
        
        compressed += input[i] + count;
        count = 1;
      }
    }
  
    return compressed.length < input.length ? compressed : input;
  }
  console.log(compressString("aabcccccaaa"));