//���X join()
function join(arr, concatStr) {
  
  //���ΰj�� + splice()�A�b�}�C�_�Ư��ޮ�W���J concatStr
  for(n = 1; n < arr.length; n += 2){
    arr.splice(n,0,concatStr)
  }
  
  //�Y�h���ӤF�A������ toString() �ন�r��^�ǡA�r��̷|�h','
  //�Y�ϥ� replace(/,/gi,'') �N����','�A�� concatStr �p�G�O','�]�|�@�_�Q���N��
  //�u�n���հ��X console.log(arr[0]+arr[1]+arr[2]...) ���ĪG�h����','
  
  //���X�� newString �r��A�ΰj�������h�� arr[0]+arr[1]+arr[2]....
  var newString = ''; 
  for(m = 0; m < arr.length; m++){
    newString = newString + arr[m];
  }
  //���n��X���G�O���T��
  return newString;
}

//���X repeat()
function repeat(str, times) {
  
  //���ӷs�}�C~~
  var newRepeatArr =[];
  
  //�ΰj��� str �A�� times ��
  for( i = 1; i <= times; i++){
    newRepeatArr.push(str);
  }
  //join() �s����A�^��
  return newRepeatArr.join('');
}
console.log(join(["a", 1, "b", 2, "c", 3], ','));
console.log(repeat('a', 5));