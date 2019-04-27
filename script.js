// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
window.onload = function() {
    var arr1 = [],arr2 = [],arr3 = [];
    var boxs = document.querySelectorAll('.choice-grid div');
    var checkbox = document.querySelectorAll('.choice-grid .checkbox');
    var father = document.getElementById('father');
    var childOne = document.getElementById('children-one');
    var childTwo = document.getElementById('children-two');
    var childThree = document.getElementById('children-three');
    father.style.display = 'none';

    for(var i = 0;i<boxs.length;i++) {
        boxs[i].addEventListener('click',func);
    }

    function func() {
        var id = this.dataset.questionId;
        var current = this;
        if(id == 'one') {
            arr1 = [this.dataset.choiceId];
        } else if(id == 'two'){
            arr2 = [this.dataset.choiceId];
        } else {
            arr3 = [this.dataset.choiceId]; 
        }
        checkPic(id,current);
        getResult();
    }

    function getResult() {
        if(arr1.length!=0 && arr2.length!=0 && arr3.length!=0) {
            father.style.display = 'block';
            var map = RESULTS_MAP;
            var arr = arr1.concat(arr2,arr3);
            var nary = arr.sort();
            for(var j=0;j<arr.length;j++) {
                if(nary[j] == arr[j+1]) {
                    var value = nary[j];
                    break;
                } else {
                    var value = arr1[0];
                }
            }
            for(var key in map) {
                if(key == value) {
                    childOne.innerHTML = map[key].title;
                    childTwo.innerHTML = map[key].contents;
                }
            }
            for(var i = 0;i<boxs.length;i++) {
                boxs[i].removeEventListener('click',func);
            }
        } 
    }

    function checkPic(id,current) {
        for(var i = 0;i<boxs.length;i++) {
            if(boxs[i].dataset.questionId == id) {
                boxs[i].className = "unactive";
                boxs[i].querySelector('.checkbox').src = 'images/unchecked.png';
            }
        }
        current.className = 'active';
        current.querySelector('.checkbox').src = 'images/checked.png';
    }

    childThree.onclick = function() {
        for(var i = 0;i<boxs.length;i++) {
            boxs[i].className = '';
            boxs[i].querySelector('.checkbox').src = 'images/unchecked.png';
        }
        father.style.display = 'none';
        arr1 = [],arr2 = [],arr3 = [];
        for(var i = 0;i<boxs.length;i++) {
            boxs[i].addEventListener('click',func);
        }
    }
}
