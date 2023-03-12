function checkString(s) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "a") {
        for (let j = i + 1; j < s.length; j++) {
          if (s[j] === "b" && j - i > 3) {
            return "YES";
          }
        }
      } else if (s[i] === "b") {
        for (let j = i + 1; j < s.length; j++) {
          if (s[j] === "a" && j - i > 3) {
            return "YES";
          }
        }
      }
    }
    return "NO";
  }
  
  console.log(checkString("acdebae")); // Output: YES
  console.log(checkString("cdaecba")); // Output: NO
  