const getNewTrieNode = (value) => ({
  freq: 1,
  child: [],
  value: value || ''
});
const getElemByValue = (list, value) => list.find(elem => elem.value === value);

const insertNode = (root, str) => { 
  let pCrawl = root; 

  // Traversing over the length of given string
  for (let level = 0; level < str.length; level += 1) { 
    // Get index of child node from current character in string 
    let letter = str.charAt(level); 

    // Create a new child if not exist already 
    if (!getElemByValue(pCrawl.child, letter)) {
      pCrawl.child.push(getNewTrieNode(letter));
    } else {
      getElemByValue(pCrawl.child, letter).freq += 1;
    }
      
    // Move to the child 
    pCrawl = getElemByValue(pCrawl.child, letter);
  } 
} 

const findPrefixesUtil = (root, prefix, current = '') => { 
  if (!root) return;

  if (root.freq == 1) { 
    const pref = current ? current : root.value;
    prefix.push(pref); 
  } else {
    for (let i = 0; i < root.child.length; i += 1) { 
      let curr = `${current}${root.child[i].value}`;
      findPrefixesUtil(root.child[i], prefix, curr); 
    } 
  }
} 

// Trie Node object to store single letter from word
const getPrefixes = (list) => {
  let root = getNewTrieNode();
  root.freq = 0; 

  for (let i = 0; i < list.length; i += 1) {
    insertNode(root, list[i]); 
  }

  const prefix = []; 
  findPrefixesUtil(root, prefix); 
  return prefix;
};

export default getPrefixes;
