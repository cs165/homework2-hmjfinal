const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  //对node的处理
  if(node && node.nodeType === 3){
    editNodeText(node);
  }
  var i = 0, childNodes = node.childNodes,item;
  for(; i < childNodes.length ; i++){
      item = childNodes[i];
      if(item.nodeType === 3){
          transformTextNodes(item);
      }
  }
}
var arr = []
function editNodeText(node) {
  var text = node.textContent;
  var textArr = text.split(' ');
  console.log(textArr)
  for(var i=0;i<textArr.length;i++) {
    var text = textArr[i].trim();
    if(text.length>0) {
      for(var key in MATCH_LIST) {
        if(text == key) {
          textArr.splice(i,1,MATCH_LIST[text])
        }
      }
      }
  }
  document.body.textContent = textArr.join(' ');
}


transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('extension updated');
